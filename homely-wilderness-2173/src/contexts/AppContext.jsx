import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({children}){

    const [ productKey, setProductKey ] = useState(null);
    const [ pay, setPay ] = useState(false);
    const [ check, setcheck ] = useState(false);

    return(
        <AppContext.Provider value={{productKey, setProductKey, pay, setPay, check, setcheck}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;