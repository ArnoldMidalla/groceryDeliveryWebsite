# Gros: Fresh Produce & Grocery Delivery 🛒

## Overview
Gros is a contemporary e-commerce platform developed with Next.js and TypeScript, designed to offer an intuitive and seamless grocery shopping experience. It features dynamic product listings, category-based filtering, and robust state management for wishlists and shopping carts, powered by Zustand.

## Features
-   **Product Catalog**: Browse a wide array of fresh produce and grocery items across various categories.
-   **Category Filtering**: Easily filter products by categories such as "Vegetables," "Desserts," and "Drinks."
-   **Wishlist Management**: Add or remove products from a personal wishlist for later consideration.
-   **Shopping Cart**: Add items to the shopping cart, with dynamic updates and display of carted products.
-   **Responsive Navigation**: A user-friendly navigation bar that adapts to different screen sizes, including a mobile-specific dropdown menu.
-   **Vendor Pages**: Dedicated pages for individual vendors, accessible via dynamic routes.
-   **Shadcn UI Integration**: Utilizes a collection of reusable components from Shadcn UI for a consistent and modern interface.
-   **Global State Management**: Leverages Zustand for efficient and streamlined state management across the application.

## Getting Started
### Environment Variables
No specific environment variables are required for local development beyond the default Next.js setup.

## Usage
To run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/gros.git
    cd gros
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
4.  **Access the application**:
    Open your browser and navigate to `http://localhost:3000`.

**Interacting with the application:**
*   **Browse Products**: The homepage (`/`) displays various product categories and featured items.
*   **Filter Products**: Use the category buttons ("All", "Vegetables", "Desserts", "Drinks") on the homepage to filter the displayed products.
*   **Add to Wishlist**: Click the heart icon on any product card to add it to your wishlist. View saved items on the `/saved` page.
*   **Add to Cart**: Click the "Add to cart" button on product cards to add them to your shopping cart. View carted items on the `/cart` page.
*   **Navigate**: Use the top navigation bar to access different sections like Home, Profile, Saved, Cart, and Vendors.

## Technologies Used

| Technology       | Version    | Description                                 | Link                                                                        |
| :--------------- | :--------- | :------------------------------------------ | :-------------------------------------------------------------------------- |
| Next.js          | 16.0.3     | React framework for production              | [Next.js Docs](https://nextjs.org/docs)                                     |
| React            | 19.2.0     | JavaScript library for building user interfaces | [React Docs](https://react.dev/)                                            |
| TypeScript       | ^5         | Strongly typed JavaScript                   | [TypeScript Docs](https://www.typescriptlang.org/docs/)                     |
| Zustand          | 5.0.8      | Small, fast, and scalable bearbones state-management | [Zustand Docs](https://docs.pmnd.rs/zustand/getting-started/introduction)   |
| Tailwind CSS     | ^4         | Utility-first CSS framework                 | [Tailwind CSS Docs](https://tailwindcss.com/docs)                           |
| Shadcn UI        | N/A        | Re-usable UI components built with Radix UI | [Shadcn UI Docs](https://ui.shadcn.com/)                                    |
| Lucide React     | 0.554.0    | Beautifully simple and consistent icon toolkit | [Lucide React Docs](https://lucide.dev/)                                    |

## License
This project is currently unlicensed.

## Author
-   **Arnold**
    -   LinkedIn: [https://linkedin.com/in/your-username](https://linkedin.com/in/your-username)
    -   Twitter: [https://twitter.com/your-username](https://twitter.com/your-username)
    -   Portfolio: [https://your-portfolio.com](https://your-portfolio.com)

---

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)](https://github.com/your-username/gros/actions)
[![Next.js](https://img.shields.io/badge/Framework-Next.js-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/State_Management-Zustand-orange?logo=zustand&logoColor=white)](https://docs.pmnd.rs/zustand/getting-started/introduction)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)