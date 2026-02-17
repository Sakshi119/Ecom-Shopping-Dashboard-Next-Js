import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//Async Thunk
export const fetchProducts = createAsyncThunk(
    "products/fetchproducts",
    async () => {
        console.log("Fetching products...");
        const res = await fetch("https://fakestoreapi.com/products")
        if (!res.ok) throw new Error("Failed to fetch products")
        return res.json()
    }
)

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id) => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
    }
)


// Slice

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        selectedProduct: null,
        status: "idle",
        error: null,
        filter:{
            category:"all",
            sort: "none",
            search: ""
        }
    },
    reducers: {
        setCategory(state,action){
            state.filter.category = action.payload
        },
        setSort(state,action){
            state.filter.sort = action.payload
        },
        setSearch(state,action){
            state.filter.search = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message;
            })
            .addCase(fetchProductById.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})
export const {setCategory,setSearch,setSort} = productSlice.actions
export default productSlice.reducer