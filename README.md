# 🚗 ApexRide — Car Modification Parts Store

A dynamic web application for car enthusiasts to browse, manage, and discover automotive tuning and modification parts — now with an AI-powered natural language search assistant.

🔗 **Live Demo:** [rehan77-r.github.io/apexride.github.io](https://rehan77-r.github.io/apexride.github.io/)
📂 **Repository:** [github.com/rehan77-R/apexride.github.io](https://github.com/rehan77-R/apexride.github.io)

---

✨ Features

 🛠️ Core Functionality
- **Full CRUD** — Add, edit, delete, and view car modification products
- **Advanced Filtering** — Search by name, filter by category, price, and rating
- **Smart Sorting** — Sort by price (low/high) or rating
- **Persistent Theme** — Dark/Light mode toggle that stays active across all pages using LocalStorage
- **Fully Responsive** — Clean, mobile-friendly UI built with Tailwind CSS

### 🤖 AI-Powered Natural Language Search
Type a plain-English request like *"cheap engine parts under $200 with good rating"* and the app uses the OpenAI API to interpret the query and automatically apply the right filters — a simple demonstration of structured-output / function-calling with an LLM.

---

## 🧰 Tech Stack
- **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript
- **AI Integration:** OpenAI API (GPT-4o-mini) for natural language filter parsing
- **Storage:** Browser LocalStorage (theme preference, API key)
- **Deployment:** GitHub Pages

---

## 📁 Project Structure
├── index.html                     # Home page
├── src/
│   ├── pages/
│   │   ├── about/                 # About page
│   │   ├── contact/                # Contact page
│   │   ├── sign in/ , sign up/     # Auth pages
│   │   └── products/
│   │       ├── products.html       # Products page
│   │       ├── products-logic.js   # CRUD & filter logic
│   │       └── ai-search.js        # AI natural language search
│   └── constants/
│       └── themeConstants.js       # Global theme (dark/light) logic
└── assets/                         # Images & videos

---

## 🧠 JavaScript Concepts Demonstrated

**Array Methods:** `map()` `filter()` `reduce()` `sort()` `find()` `every()` `some()` `push()`

**String Methods:** `trim()` `toUpperCase()` `substring()` `concat()` `includes()` `replace()` `split()` `join()` `charAt()` `indexOf()`

---

## 🚀 Getting Started

1. Clone the repo:
```bash
   git clone https://github.com/rehan77-R/apexride.github.io.git
```
2. Open `index.html` in your browser — no build step required.
3. To try the AI search feature, you'll need your own [OpenAI API key](https://platform.openai.com/api-keys). It's stored only in your browser's LocalStorage and never leaves your machine except to call the OpenAI API.

---

## 👤 Author
**Muhammad Rehan Hanif**
[GitHub](https://github.com/rehan77-R) · [LinkedIn](https://linkedin.com/in/muhammad-rehan7)