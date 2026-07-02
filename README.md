# 🚗 ApexRide - Car Modification Parts Store

A dynamic web application for car enthusiasts to browse, manage, and discover automotive tuning and modification parts, now with an AI-powered natural language search assistant.

Live Demo: https://rehan77-r.github.io/apexride.github.io/
Repository: https://github.com/rehan77-R/apexride.github.io

## Features

### Core Functionality
- Full CRUD - Add, edit, delete, and view car modification products
- Advanced Filtering - Search by name, filter by category, price, and rating
- Smart Sorting - Sort by price (low/high) or rating
- Persistent Theme - Dark/Light mode toggle that stays active across all pages using LocalStorage
- Fully Responsive - Clean, mobile-friendly UI built with Tailwind CSS

### AI-Powered Natural Language Search
Type a plain-English request like "cheap engine parts under 200 dollars with good rating" and the app uses the OpenAI API to interpret the query and automatically apply the right filters.

## Tech Stack
- Frontend: HTML5, Tailwind CSS, Vanilla JavaScript
- AI Integration: OpenAI API (GPT-4o-mini) for natural language filter parsing
- Storage: Browser LocalStorage (theme preference, API key)
- Deployment: GitHub Pages

## Array Methods Implemented
1. map() - To render product cards.
2. filter() - For searching and deleting products.
3. reduce() - To calculate average price and ratings in stats.
4. sort() - To sort products by price and rating.
5. find() - To locate a product for editing.
6. every() - To validate data integrity.
7. some() - To check for premium products.
8. push() - To add new products.

## String Methods Implemented
1. trim() 2. toUpperCase() 3. substring() 4. concat() 5. includes()
6. replace() 7. split() 8. join() 9. charAt() 10. indexOf()

## Folder Structure
- /index.html (Home Page)
- /src/pages/ (About, Products, Contact, Auth)
- /src/constants/themeConstants.js (Global Theme Logic)
- /src/pages/products/products-logic.js (CRUD & Filter Logic)
- /src/pages/products/ai-search.js (AI Natural Language Search)

## Getting Started
1. Clone the repo: git clone https://github.com/rehan77-R/apexride.github.io.git
2. Open index.html in your browser, no build step required.
3. To try the AI search feature, you'll need your own OpenAI API key from platform.openai.com/api-keys. It's stored only in your browser's LocalStorage.

## Author
Muhammad Rehan Hanif
GitHub: https://github.com/rehan77-R
