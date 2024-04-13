import {createSlice,current} from "@reduxjs/toolkit";


const cartStore = createSlice({
    name : 'cart',
    initialState:{
        items:[]
    },
    reducers : {
        addItem:(state,action) =>{
            // Old redux(vanilla) => Don't Mutate State 
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // Mutate State 
            // we have to mutate state
            state.items.push(action.payload);
        },
        removeItem : (state) =>{
            state.items.pop();
        },
        clearCart : (state) =>{
            //RTK : either mutating the existing state or return  new State
            // state.items.length = 0; 
            
            return {items : []}
        }
    }

})
export const{addItem,removeItem,clearCart} = cartStore.actions;

export default cartStore.reducer; 