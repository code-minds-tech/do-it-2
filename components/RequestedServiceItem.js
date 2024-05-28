import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import { useFavorites } from '../Context/FavoriteContext';

const RequestedServiceItem = ({ service, onPress }) => {
    const theme = React.useContext(ThemeContext);
    const { favorites, toggleFavorite } = useFavorites();

    const isFavorite = favorites.some((fav) => fav.id === service.id);

    return (
        <TouchableOpacity onPress={onPress} style={[styles.serviceCard, { backgroundColor: theme.cardBackground }]}>
            <View style={styles.serviceHeader}>
                <Text style={[styles.serviceName, { color: theme.text }]}>{service.name}</Text>
                <TouchableOpacity onPress={() => toggleFavorite(service)}>
                    <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? theme.primary : theme.secondaryText} />
                </TouchableOpacity>
            </View>
            <Text style={[styles.serviceDescription, { color: theme.text }]}>{service.description}</Text>
            <Text style={[styles.serviceCategory, { color: theme.text }]}>{service.category}</Text>
            <View style={styles.serviceFooter}>
                <Text style={[styles.serviceStatus, { color: theme.text }]}>{service.status}</Text>
                <Text style={[styles.serviceLocation, { color: theme.text }]}>{service.location}</Text>
                <Text style={[styles.servicePrice, { color: theme.text }]}>{service.price}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    serviceCard: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    serviceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    serviceName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    serviceDescription: {
        fontSize: 14,
        marginVertical: 5,
    },
    serviceCategory: {
        fontSize: 12,
        color: 'gray',
    },
    serviceFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    serviceStatus: {
        fontSize: 12,
        color: 'gray',
    },
    serviceLocation: {
        fontSize: 12,
        color: 'gray',
    },
    servicePrice: {
        fontSize: 12,
        color: 'gray',
    },
});

export default RequestedServiceItem;