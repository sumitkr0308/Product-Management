# 🧪 Product Management Application

A frontend-only Product Management Application built using React (Vite).  
This project demonstrates core frontend concepts such as component-based architecture, state management, search optimization, and pagination without using any backend or APIs.

---

## 🚀 Live Demo
👉 https://product-management-sumit-kumar.vercel.app/

---

## 📌 Features

### Product Display
- List View (Table)
- Card View (Grid)
- Toggle option to switch between views
- Responsive layout

### Search Functionality
- Search products by product name
- Real-time filtering
- 500ms debounce implemented for performance optimization

### Add Product
- Form fields:
  - Name (required)
  - Price (required, number)
  - Category (required)
  - Stock (number)
  - Description (optional)
- Basic form validation with error messages
- Newly added products appear at the top of the list

### Edit Product
- Edit products from both List and Card views
- Form pre-filled with existing product data
- Updates handled using in-memory state

### Pagination
- Pagination implemented for product listing
- Configurable items per page
- Works with search and view toggle

---

## 🎨 UI & UX
- Clean and modern dashboard-style UI
- Responsive and user-friendly design
- Smooth hover effects and subtle animations

---

## 🛠️ Tech Stack
- React (Vite)
- JavaScript (ES6+)
- HTML5
- CSS3

---

## ⚙️ Technical Highlights
- Functional components
- React Hooks (useState, useEffect)
- Debounce implementation using setTimeout
- Component-based architecture
- No backend or API integration (in-memory data only)

---

## 📂 Project Structure
src/
├─ components/
│ ├─ ProductForm.jsx
│ ├─ ProductTable.jsx
│ ├─ ProductCard.jsx
│ ├─ Pagination.jsx
├─ App.jsx
├─ main.jsx
└─ index.css



---

## ▶️ Run Locally

```bash
npm install
npm run dev


📦 Build
npm run build

👤 Author

Sumit Kumar