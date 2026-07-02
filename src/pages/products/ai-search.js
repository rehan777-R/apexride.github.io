// ==========================================
// AI-POWERED NATURAL LANGUAGE PRODUCT SEARCH
// ==========================================
const AI_STORAGE_KEY = 'apexride_openai_key';

function getApiKey() {
    return localStorage.getItem(AI_STORAGE_KEY);
}

function promptForApiKey() {
    const key = prompt(
        "This demo calls the OpenAI API directly from the browser using your own API key.\n" +
        "The key is stored only in this browser's localStorage — it is never sent anywhere except OpenAI.\n\n" +
        "Enter your OpenAI API key:"
    );
    if (key && key.trim()) {
        localStorage.setItem(AI_STORAGE_KEY, key.trim());
        return key.trim();
    }
    return null;
}

function showStatus(message, isError = false) {
    const el = document.getElementById('aiSearchStatus');
    el.classList.remove('hidden');
    el.className = `mb-6 text-sm ${isError ? 'text-red-600' : 'text-indigo-700'} font-medium`;
    el.innerText = message;
}

const VALID_CATEGORIES = ["All", "Engine", "Exhaust", "Lighting", "Body", "Brakes", "Suspension"];

const SYSTEM_PROMPT = `You convert a shopper's natural language request about car modification parts into a strict JSON filter object.

Return ONLY a JSON object with these exact keys, no other text:
{
  "searchTerm": string,
  "category": string,
  "maxPrice": number|null,
  "minRating": number,
  "sortBy": string
}

Rules:
- "cheap" / "budget" implies sorting priceLowHigh if no explicit max price is given.
- "good rating" / "highly rated" implies minRating of 4.
- "best" implies sortBy ratingHighLow.
- If the user mentions a part type (turbo, brakes, exhaust, lights, spoiler, suspension) infer the closest category.
- Never invent a maxPrice or minRating that wasn't implied by the query.`;

async function interpretQuery(query, apiKey) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            temperature: 0,
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: query }
            ],
            response_format: { type: "json_object" }
        })
    });

    if (!response.ok) {
        const errBody = await response.json().catch(() => ({}));
        throw new Error(errBody?.error?.message || `OpenAI API error (${response.status})`);
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content;
    if (!raw) throw new Error("Empty response from model");

    return JSON.parse(raw);
}

function applyAiFilters(filters) {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const maxPriceFilter = document.getElementById('maxPriceFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    const sortFilter = document.getElementById('sortFilter');

    searchInput.value = filters.searchTerm || '';
    categoryFilter.value = VALID_CATEGORIES.includes(filters.category) ? filters.category : 'All';
    maxPriceFilter.value = (filters.maxPrice === null || filters.maxPrice === undefined) ? '' : filters.maxPrice;

    const ratingOptions = [0, 2, 3, 4];
    const closestRating = ratingOptions.reduce((prev, curr) =>
        Math.abs(curr - (filters.minRating || 0)) < Math.abs(prev - (filters.minRating || 0)) ? curr : prev
    );
    ratingFilter.value = String(closestRating);

    const validSorts = ["default", "priceLowHigh", "priceHighLow", "ratingHighLow"];
    sortFilter.value = validSorts.includes(filters.sortBy) ? filters.sortBy : 'default';

    window.applyFilters();
}

async function handleAiSearch() {
    const query = document.getElementById('aiSearchInput').value.trim();
    if (!query) return;

    let apiKey = getApiKey();
    if (!apiKey) {
        apiKey = promptForApiKey();
        if (!apiKey) {
            showStatus("No API key provided — AI search needs an OpenAI key to run.", true);
            return;
        }
    }

    const btn = document.getElementById('aiSearchBtn');
    const originalLabel = btn.innerText;
    btn.disabled = true;
    btn.innerText = "Thinking...";
    showStatus("🤖 Interpreting your request...");

    try {
        const filters = await interpretQuery(query, apiKey);
        applyAiFilters(filters);

        const parts = [];
        if (filters.searchTerm) parts.push(`matching "${filters.searchTerm}"`);
        if (filters.category && filters.category !== 'All') parts.push(`in ${filters.category}`);
        if (filters.maxPrice) parts.push(`under $${filters.maxPrice}`);
        if (filters.minRating) parts.push(`rated ${filters.minRating}+`);
        showStatus(`✅ Showing products ${parts.join(', ') || 'matching your request'}.`);
    } catch (err) {
        console.error(err);
        showStatus(`Couldn't process that request: ${err.message}`, true);
        if (String(err.message).toLowerCase().includes('incorrect api key') || String(err.message).toLowerCase().includes('invalid')) {
            localStorage.removeItem(AI_STORAGE_KEY);
        }
    } finally {
        btn.disabled = false;
        btn.innerText = originalLabel;
    }
}

document.getElementById('aiSearchBtn').addEventListener('click', handleAiSearch);
document.getElementById('aiSearchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAiSearch();
});
