import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (service) => {
        setFavorites((prevFavorites) =>
            prevFavorites.some((fav) => fav.id === service.id)
                ? prevFavorites.filter((fav) => fav.id !== service.id)
                : [...prevFavorites, service]
        );
    };

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoriteContext);
