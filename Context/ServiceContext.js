import React, { createContext, useState, useContext } from 'react';

// Create the context
const ServiceContext = createContext();

// Create a custom hook to use the ServiceContext
export const useServices = () => useContext(ServiceContext);

// Create a provider component
export const ServiceProvider = ({ children }) => {
    const [services, setServices] = useState([]);

    // Function to add a new service
    const addService = (newService) => {
        setServices((prevServices) => [...prevServices, newService]);
    };

    // Function to update an existing service
    const updateService = (updatedService) => {
        setServices((prevServices) =>
            prevServices.map((service) =>
                service.id === updatedService.id ? updatedService : service
            )
        );
    };

    // Function to delete a service
    const deleteService = (serviceId) => {
        setServices((prevServices) =>
            prevServices.filter((service) => service.id !== serviceId)
        );
    };

    return (
        <ServiceContext.Provider value={{ services, addService, updateService, deleteService }}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceContext;