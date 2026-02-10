import {createContext,useReducer } from "react";
import GlobalReducer from "../reducers/GlobalReducer";

// Initial state
const initialState =JSON.parse(localStorage.getItem("transaction")) || {
    transaction: []
};

// create context
// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext =createContext(initialState);

//global provider
export const GloblaProvider =({children})=>{
    const [state,dispatch]=useReducer(GlobalReducer,initialState);

    return(
        <GlobalContext.Provider value={{transaction:state.transaction,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}