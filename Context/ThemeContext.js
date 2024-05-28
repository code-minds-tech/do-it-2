import React, { createContext } from 'react';
import theme from '../Themes/Theme';

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;