"use client"

import { Provider } from "react-redux"
import { store } from "@/store/store"
import { loginUser } from "@/store/authSlice"

export default function Providers({children}){

    if(typeof window !== "undefined"){
        const savedAuth = localStorage.getItem("auth")
        if(savedAuth){
            store.dispatch({
                type:"auth/loginUser/fulfilled",
                payload: JSON.parse(savedAuth),
            })
        }
    }

    return (
        <Provider store={store}>{children}</Provider>
    )
}