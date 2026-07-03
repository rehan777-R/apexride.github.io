// ==========================================
// AI-POWERED NATURAL LANGUAGE PRODUCT SEARCH
// ==========================================
// Sends the user's free-text query to our own /api/ai-search serverless
// endpoint, which calls the LLM using a server-side key. No API key is
// ever needed in the browser — works for any visitor automatically.

function showStatus(message, isError = false) {
    const el = document.getElementById('aiSearchStatus');
    el.classList.remove('hidden');
    el.className = `mb-6 text-sm ${isError ? 'text-red-600' : 'text-indigo-700'} font-medium`;
    el.innerText = message;
}

const VALID_CATEGORIES = ["All", "Engine", "Exhaust", "Lighting", "Body", "Brakes", "Suspension"];

async function interpretQuery(query) {
    const response = await fetch("/api/ai-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data?.error || `Server error (${response.status})`);
    }
    return data;
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

    const btn = document.getElementById('aiSearchBtn');
    const originalLabel = btn.innerText;
    btn.disabled = true;
    btn.innerText = "Thinking...";
    showStatus("🤖 Interpreting your request...");

    try {
        const filters = await interpretQuery(query);
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
    } finally {
        btn.disabled = false;
        btn.innerText = originalLabel;
    }
}

document.getElementById('aiSearchBtn').addEventListener('click', handleAiSearch);
document.getElementById('aiSearchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAiSearch();
});
