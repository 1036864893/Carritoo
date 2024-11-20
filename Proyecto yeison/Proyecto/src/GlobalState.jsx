
import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,         
        cart: [],           
    });

    
    const addToCart = (item) => {
        setState((prevState) => ({
            ...prevState,
            cart: [...prevState.cart, item],
        }));
    };

    const setUser = (user) => {
        setState((prevState) => ({
            ...prevState,
            user,
        }));
    };

    return (
        <GlobalStateContext.Provider value={{ state, addToCart, setUser }}>
            {children}
        </GlobalStateContext.Provider>
    );
};


export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState debe usarse dentro de un GlobalStateProvider');
    }
    return context;
};
