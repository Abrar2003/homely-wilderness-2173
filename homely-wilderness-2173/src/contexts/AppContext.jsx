import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({children}){

    const [ productKey, setProductKey ] = useState("");

    return(
        <AppContext.Provider value={{productKey, setProductKey}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;