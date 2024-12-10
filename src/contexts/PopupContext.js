
import React, { createContext, useState } from 'react';

// Create a context
export const PopupContext = createContext();

// Create a provider component
export const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState(null);

    return (
        <PopupContext.Provider value={{ popup, setPopup }}>
            {children}
        </PopupContext.Provider>
    );
};

export const usePopup = () => useContext(PopupContext);
