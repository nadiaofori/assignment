import { createContext, useContext } from 'react'
import Signup from '../signup/signup';


const StoreContext = createContext(null);


const StoreProvider = () => {

    return (
        <StoreContext.Provider value = "Art Library">
            <Signup/>
        </StoreContext.Provider>
    )

} 

const useContextStore = () => useContext(StoreContext);
export {
    StoreProvider,
    useContextStore
}