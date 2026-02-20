import { createSelector } from "@reduxjs/toolkit";

const selectProducts = state => state.products.items;
const selectFilter = state => state.products.filter;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilter],
  (products, filter) => {
    let result = [...products];

    // 🔎 Search
    if (filter.search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(filter.search.toLowerCase())
      );
    }

    // 🏷 Category
    if (filter.category !== "all") {
      result = result.filter(
        p => p.category === filter.category
      );
    }

    // 💰 Sort
    if (filter.sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (filter.sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }
);