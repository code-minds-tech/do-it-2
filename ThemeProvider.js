import React, { createContext } from 'react';
import { lightTheme } from './Themes/Theme';

export const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({ children, value }) => {
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};