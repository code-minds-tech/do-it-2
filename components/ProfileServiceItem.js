import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const ProfileServiceItem = ({ service, onPress }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <TouchableOpacity onPress={onPress} style={[styles.serviceCard, { backgroundColor: theme.cardBackground }]}>
            <View style={styles.serviceHeader}>
                <Text style={[styles.serviceName, { color: theme.text }]}>{service.title}</Text>
                <TouchableOpacity >
                    <Ionicons name="heart-outline" size={24} color={theme.primary} />
                </TouchableOpacity>
            </View>
            <Text style={[styles.serviceDescription, { color: theme.secondaryText }]}>{service.description}</Text>
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
});

export default ProfileServiceItem;
