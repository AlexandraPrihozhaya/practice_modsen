import React, { createContext, useState } from 'react';

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
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