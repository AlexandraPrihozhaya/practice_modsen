import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    
    const [searchAddress, setSearchAddress] = useState('');
    const [ radius, setRadius ] = useState('');

    return (
       <AppContext.Provider value={{ searchAddress, setSearchAddress, radius, setRadius }}>
            {children}
       </AppContext.Provider>
    );
};