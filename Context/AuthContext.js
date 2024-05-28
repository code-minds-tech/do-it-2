import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([{ email: '123@test.com', password: '123' }]); // Until we get our API


    const login = (email, password) => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };
    const signUp = (email, password) => {

        const userExists = users.some(user => user.email === email);
        if (!userExists) {
            setUsers([...users, { email, password }]);
            login();
        }
        return false;
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, signUp, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
