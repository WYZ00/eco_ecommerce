import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    productData: [],
    userInfo: null,
};

export const ecoSlice = createSlice({
    name:"eco",
    initialState,
    reducers:{
        addToCart: (state,action) =>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );

            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload);
            }
            
        },
        deleteItem:(state,action) =>{
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart:(state) =>{
            state.productData = [];
        },
        incrementQuantity: (state,action) =>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if(item) {
                item.quantity++;
            }
        },
        decreaseQuantity: (state,action) =>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if(item) {
                item.quantity--;
            }
        },
        addUser: (state,action)=>{
            state.userInfo = action.payload;
        },
        removeUser: (state,action)=>{
            state.userInfo = null;
        }
    },
});

export const {
    addToCart,
    deleteItem,
    resetCart,
    incrementQuantity,
    decreaseQuantity,
    addUser,
    removeUser,
} = ecoSlice.actions;
export default ecoSlice.reducer;