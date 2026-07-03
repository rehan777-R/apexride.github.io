export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Missing query' });
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
- Never invent a maxPrice or minRating that wasn't implied by the query.
Valid categories: ${JSON.stringify(VALID_CATEGORIES)}`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
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
      return res.status(response.status).json({ error: errBody?.error?.message || 'Groq API error' });
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content;
    if (!raw) return res.status(500).json({ error: 'Empty response from model' });

    return res.status(200).json(JSON.parse(raw));
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
