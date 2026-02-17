import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockLogin } from "@/services/authService";


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await mockLogin(credentials);
            return response;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;

            localStorage.removeItem("auth");
            document.cookie = "auth=; Max-Age=0; path=/"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;

                localStorage.setItem("auth", JSON.stringify(action.payload));
                document.cookie = `auth=true; path=/`;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer