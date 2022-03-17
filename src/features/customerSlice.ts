import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface addFoodToCustomerPayload{
    food: string;
    id: string;

}
interface CustomerState {
    value: Customer []
}
interface Customer {
    id: string;
    name:string;
    food: string[]
}

const initialState : CustomerState = {
    value: [],
}

export const CustomerSlice = createSlice ({
    name: "customers",
    initialState,
    reducers: {
        addCostumer: (state, action: PayloadAction<Customer>) => {
            state.value.push (action.payload)
        },
        addFoodToCustomer: (state, action:PayloadAction<addFoodToCustomerPayload> )=>{
            state.value.forEach((customer => {
                if(customer.id === action.payload.id){
                    customer.food.push(action.payload.food)
                }
            }))
        }
    }
      
        
    })
    

export const {addCostumer, addFoodToCustomer} = CustomerSlice.actions

export default CustomerSlice.reducer    