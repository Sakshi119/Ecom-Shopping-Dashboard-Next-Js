import { createSelector } from "@reduxjs/toolkit";

const selectedProduct = state => state.products.products;
const selectFilters = state => state.products.filters;

export const selectFilteredProducts = createSelector(
    [selectedProduct, selectFilters],
    (products, filters) => {
        let filtered = [...products];

        // 🔎 Search
        if (filters.search) {
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(filters.search.toLowerCase())
            )
        }

        // 🏷 Category
        if (filters.category !== "all") {
            filtered = filtered.filter(
                p => p.category === filters.category
            );
        }

        // 💰 Sort
        if (filters.sort === "price-asc") {
            filtered.sort((a, b) => a.price - b.price);
        }

        if (filters.sort === "price-desc") {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    }
)