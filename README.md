# Gros Fresh Marketplace

## Overview
Gros Fresh Marketplace is a modern, responsive e-commerce frontend application built with Next.js and TypeScript, designed to provide a seamless shopping experience for fresh produce and other groceries. It features intuitive product browsing, category filtering, and interactive shopping cart and wishlist functionalities, all powered by global state management with Zustand.

## Features
*   **Dynamic Product Catalog**: Browse a wide array of products categorized for easy navigation.
*   **Category Filtering**: Filter products by categories like Vegetables, Fruits, Dairy & Eggs, Meat & Seafood, Snacks & Candy, Drinks, and Pantry Staples.
*   **Wishlist Functionality**: Add and remove items from your personal wishlist with a single click.
*   **Shopping Cart Management**: Add and manage items in your shopping cart for a smooth checkout process.
*   **Responsive Navigation Bar**: A feature-rich navigation bar including search, user profile, wishlist, and cart indicators.
*   **Modern UI Components**: Utilizes Shadcn UI for beautiful, accessible, and customizable components, styled with Tailwind CSS.
*   **Global State Management**: Efficient state handling for product categories, wishlist, and cart using Zustand.

## Usage
To explore Gros Fresh Marketplace, follow these steps:

1.  **Launch the Application**: Once the application is running (see Installation section for setup), open your web browser and navigate to `http://localhost:3000`.
2.  **Browse Products**: The homepage displays a selection of `Featured Products` and `Top Sellers`. You can scroll through these sections to discover various items.
3.  **Filter by Category**:
    *   Above the `Featured Products` section, you'll find category buttons (All, Vegetables, Desserts, Drinks).
    *   Click on any category button (e.g., "Vegetables") to filter the displayed products to only show items belonging to that category.
    *   Click "All" to view all available products again.
4.  **Add to Wishlist**:
    *   Each product card in the `Featured Products` section has a heart icon in the top right corner.
    *   Click the heart icon to add the product to your wishlist. The icon will turn red to indicate it's in your wishlist.
    *   Clicking it again will remove it from your wishlist.
    *   The wishlist count in the Navbar will update dynamically.
5.  **Add to Cart**:
    *   Below each product's details, you'll find an "Add to cart" button.
    *   Click this button to add the product to your shopping cart. The button text will change to "Item added to cart".
    *   Clicking it again will remove it from your cart.
    *   The shopping cart count in the Navbar will update dynamically.
6.  **Explore Product Types**: At the top of the homepage, you'll see a section with different `TypeProduct` components (e.g., Vegetables, Fruits). These provide quick links to hypothetical category pages (though the current implementation links them all to the home page for demonstration).
7.  **Search**: Use the search input in the Navbar to type in product names; this is currently a UI element and does not perform active filtering in the provided code.

## Technologies Used
| Technology         | Description                                     | Link                                                            |
| :----------------- | :---------------------------------------------- | :-------------------------------------------------------------- |
| **Next.js**        | React framework for production                  | [Next.js Website](https://nextjs.org/)                          |
| **TypeScript**     | Strongly typed JavaScript                       | [TypeScript Website](https://www.typescriptlang.org/)           |
| **Tailwind CSS**   | Utility-first CSS framework                     | [Tailwind CSS Website](https://tailwindcss.com/)                |
| **Shadcn UI**      | Reusable UI components for React                | [Shadcn UI Website](https://ui.shadcn.com/)                     |
| **Zustand**        | Fast and scalable state management for React    | [Zustand GitHub](https://github.com/pmndrs/zustand)             |
| **Lucide React**   | Beautiful & community-driven icons for React    | [Lucide React GitHub](https://lucide.dev/guide/packages/lucide-react) |
| **ESLint**         | Pluggable JavaScript linter                     | [ESLint Website](https://eslint.org/)                           |

## Author Info
Developed by Arnold.

*   **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-username)
*   **Twitter**: [Your Twitter Handle](https://twitter.com/your-username)
*   **Portfolio**: [Your Personal Website](https://your-portfolio.com)

---
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-F14E32?style=for-the-badge&logo=zustand&logoColor=white)](https://github.com/pmndrs/zustand)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)

---
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)