"use client"
import { useContext, createContext, useState } from "react";

export const GlobalContext = createContext()


export const GlobalContextProvider = ({ children }) => {
    const [opencreatepost, setopencreatepost] = useState(true)

    const openpostmodal = () => {
        setopencreatepost(true)
    }
    const closepostmodal = () => {
        setopencreatepost(false)
    }

    return (
        <GlobalContext.Provider value={{ opencreatepost, closepostmodal, setopencreatepost, openpostmodal }}>{children}</GlobalContext.Provider>
    )
}

export const Global = () => {
    return useContext(GlobalContext)
}