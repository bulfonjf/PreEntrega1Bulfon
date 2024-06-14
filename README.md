# Tools Market

Tools Market is an ecommerce platform for tools made with React, Vite, and TypeScript.

Use Cases:
- List products
- Manage cart (add and remove products and their quantities)
- Make a purchase (generates an order with all products and their quantities)

## Description

### Stock
You cannot add more products to the cart than are available for each product, but the stock of each product will be updated when the user has completed a purchase order.

### Categories
Products are classified by categories, and the 'All' category applies to all products.
Categories are hydrated from the database, making them dynamic.

### Local Storage
The cart uses local storage, so its information is shared across multiple tabs of the same browser.

## Infrastructure

### Render
Visit the [demo](https://tools-market.onrender.com/) deployed on Render.

### Firebase
To persist data, the `Store` product from Firebase is used, which is a non-relational, document-based database.
It contains 3 collections:
- Items
- Orders
- Categories

### Environment Variables
To run the project locally, you need to fill in these environment variables:
```
VITE_FIREBASE_API_KEY = ""
VITE_FIREBASE_AUTH_DOMAIN = ""
VITE_FIREBASE_PROJECT_ID = ""
VITE_FIREBASE_STORAGE_BUCKET = ""
VITE_FIREBASE_MESSAGING_SENDER_ID = ""
VITE_FIREBASE_APP_ID = ""
```

## Run 

```
npm install
npm run build
npm run dev (for localhost)
```

## Third-party Libraries
The following libraries were used:
- Tailwindcss: A utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design, directly in your markup.
- Daisyui: A component library for Tailwindcss to develop faster.
- react-loading: To show a spinner while fetching data from the database.
- react-toastify: To show toast notifications to inform the user about an event (like an item added to the cart).