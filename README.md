# ApexRide — Car Modification Parts Store

ApexRide is a full-featured e-commerce style web application built for car enthusiasts who want to browse, filter, and manage automotive tuning and modification parts. The project started as a university web development assignment and has since been extended with a working AI search feature, a full product catalog, and a polished, responsive interface.

**Live Demo:** [apexride-github-io.vercel.app](https://apexride-github-io.vercel.app)
**Repository:** [View on GitHub](https://github.com/rehan777-R/apexride.github.io)

---

## Overview

The application lets users browse a catalog of 35+ car modification products across six categories, search and filter them using traditional controls or natural language, and manage the catalog with full create, read, update, and delete functionality. A dark/light theme toggle persists across every page, and the whole site is fully responsive across desktop, tablet, and mobile.

---

## Features

### Product Catalog and Management
- Full CRUD operations: add, edit, delete, and view products
- 35+ products spread across six categories: Engine, Exhaust, Lighting, Body, Brakes, and Suspension
- Filter by category, maximum price, and minimum rating
- Sort products by price (low to high, high to low) or by rating
- Live search by product name

### AI-Powered Natural Language Search
Instead of manually setting filters, users can type a plain-English request such as:

"cheap engine parts under 200 dollars with good rating"

The request is sent to a Vercel serverless function, which calls the Groq API (Llama 3.3 70B) with a structured prompt that converts the query into a JSON filter object. The frontend then applies these filters automatically. Because the API key lives on the server rather than in the browser, this works for any visitor without requiring them to supply their own key.

### Theming and UI
- Dark and light mode toggle, with the preference saved in the browser and applied consistently across every page
- Custom hero sections with background imagery on the homepage, About, Contact, and Products pages
- Responsive layout built with Tailwind CSS, tested across mobile, tablet, and desktop breakpoints

### Additional Pages
- Home — landing page with a hero banner, key stats, and a category showcase
- About — information about the store
- Contact — a contact form for user inquiries
- Sign In / Sign Up — authentication pages

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, Tailwind CSS, Vanilla JavaScript |
| AI Integration | Groq API (Llama 3.3 70B), called via a Vercel serverless function |
| Storage | Browser LocalStorage (theme preference) |
| Deployment | Vercel |

---

## Project Structure

apexride.github.io/
├── index.html                  # Home page
├── api/
│   └── ai-search.js            # Serverless function that calls the Groq API
├── src/
│   ├── constants/
│   │   └── themeconstants.js   # Global dark/light theme logic
│   ├── pages/
│   │   ├── about/about.html
│   │   ├── contact/contact.html
│   │   ├── products/
│   │   │   ├── products.html
│   │   │   ├── products-logic.js   # CRUD and filtering logic
│   │   │   └── ai-search.js        # Frontend AI search logic
│   │   ├── sign in/signin.html
│   │   └── sign up/signup.html
└── assets/                     # Images and other static assets

---

## JavaScript Concepts Demonstrated

Array methods: map(), filter(), reduce(), sort(), find(), every(), some(), push()

String methods: trim(), toUpperCase(), substring(), concat(), includes(), replace(), split(), join(), charAt(), indexOf()

---

## Getting Started

1. Clone the repository: git clone https://github.com/rehan777-R/apexride.github.io.git
2. Open index.html directly in a browser. No build step or package installation is required for the core site.
3. The AI search feature works immediately on the deployed version, since the API key is configured server-side. To run it locally with your own key, set a GROQ_API_KEY environment variable and deploy the api/ folder as a Vercel serverless function.

---

## Possible Future Improvements

- Persist product data in a real database instead of an in-memory array
- Add real user authentication (e.g., Firebase Auth) to the Sign In and Sign Up pages
- Add a shopping cart and checkout flow
- Write automated tests for the filtering and CRUD logic

---

## Author

Muhammad Rehan Hanif
GitHub: https://github.com/rehan777-R
