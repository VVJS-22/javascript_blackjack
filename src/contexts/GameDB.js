import { createContext, useContext } from "react";

const DataContext = createContext(null)

const initialState = {
    wins: 0,
    losses: 0,
    draws: 0,
    isStand: false,
    turnsOver: false,
    logicOver: false
}

export const DataProvider = ({children}) => {
    return (
        <DataContext.Provider value = {initialState}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => {
    return useContext(DataContext)
}