import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoMas,aUsers } from "../../interface/MyTodos";
import axios from "axios";


interface state {
    todos:TodoMas[],
    isLoading:boolean,
    users : aUsers
}

const initialState:state = {
    todos:[],
    isLoading:true,
     users: {
        id: 0,
        name: "",
        username: "",
        email: "",
        address:{
            street:"",
            suite:"",
            city:"",
            zipcode:"",
        }
    },
}
export const FetchAllTodos = createAsyncThunk<TodoMas[],undefined,{rejectValue:{message:string}}>(
    "todos/FetchAllTodos",
    async(_,{rejectWithValue})=>{
       try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        if(!data)rejectWithValue({message:"FetchAllTodos"})
        return data
       }catch(e){console.log(e)}
    }
)
export const getAUsers =createAsyncThunk<aUsers,string |  undefined,{rejectValue:{message:string}}>(
    "todos/getAUsers",
    async(id,{rejectWithValue})=>{
       try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(!data)rejectWithValue({message:"Bida w getAUsers"})
        return data
       } catch (error) {
        console.error(error)
       }
    }
)




export const TodoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{},
    extraReducers(builder) {
       builder.addCase(FetchAllTodos.pending,(state)=>{
        state.isLoading = true
       });
       builder.addCase(FetchAllTodos.fulfilled,(state,action)=>{
        state.todos = action.payload
        state.isLoading = false
       });
       builder.addCase(getAUsers.pending,(state)=>{
        state.isLoading = true
       });
builder.addCase(getAUsers.fulfilled,(state,action)=>{
    state.users = action.payload
    state.isLoading = false
})

    },
})




