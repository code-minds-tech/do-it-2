import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import { useFavorites } from '../Context/FavoriteContext';

const ServiceDetailScreen = ({ route, navigation }) => {
    const theme = React.useContext(ThemeContext);
    const { service } = route.params || {};

    const { favorites, toggleFavorite } = useFavorites();

    if (!service) {
        return (
            <View style={[styles.container, { backgroundColor: theme.background }]}>
                <Text style={[styles.errorText, { color: theme.text }]}>Service details not available</Text>
            </View>

        );

    }

    const isFavorite = favorites.some((fav) => fav.id === service.id);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color={theme.text} onPress={() => navigation.goBack()} />
                <Text style={[styles.headerTitle, { color: theme.text }]}>Requested Service</Text>
                <View style={styles.rightButtons}>
                    <Ionicons name="chatbubble-outline" size={24} color={theme.text} style={styles.rightButtonIcon} />
                    <Ionicons name="notifications-outline" size={24} color={theme.text} style={styles.rightButtonIcon} />
                </View>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(service)} style={styles.favoriteButton}>
                <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={30} color={isFavorite ? theme.primary : theme.secondaryText} />
            </TouchableOpacity>
            <View style={[styles.card, styles.shadow, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.text }]}>{service.name}</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={[styles.subtitle, { color: theme.text }]}>Service</Text>
                        <Text style={[styles.text, { color: theme.secondaryText }]}>{service.category}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={[styles.subtitle, { color: theme.text }]}>Type</Text>
                        <Text style={[styles.text, { color: theme.secondaryText }]}>{service.type}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={[styles.subtitle, { color: theme.text }]}>Placed</Text>
                        <Text style={[styles.text, { color: theme.secondaryText }]}>{service.date}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={[styles.subtitle, { color: theme.text }]}>Location</Text>
                        <Text style={[styles.text, { color: theme.secondaryText }]}>{service.location}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.card, styles.shadow, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.subtitle, { color: theme.text }]}>Description</Text>
                <Text style={[styles.text, { color: theme.secondaryText }]}>{service.description}</Text>
            </View>
            <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]}>
                <Text style={styles.buttonText}>Get in Touch</Text>
                <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    errorText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    rightButtons: {
        flexDirection: 'row',
    },
    rightButtonIcon: {
        marginLeft: 15,
    },
    favoriteButton: {
        alignSelf: 'flex-end',
        margin: 10,
    },
    card: {
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    column: {
        flex: 1,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        marginVertical: 5,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
});

export default ServiceDetailScreen;
