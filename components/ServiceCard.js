import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const ServiceCard = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.serviceCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.serviceTitle, { color: theme.text }]}>Business Consulting</Text>
            <Text style={[styles.serviceDescription, { color: theme.secondaryText }]}>
                I need an expert business consultant to help me develop my new project and advise me to grow my market audien...
            </Text>
            <TouchableOpacity style={styles.applyButton}>
                <Text style={[styles.applyButtonText, { color: theme.primary }]}>Apply</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    serviceCard: {
        width: 300,
        padding: 15,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    serviceTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    serviceDescription: {
        marginVertical: 10,
    },
    applyButton: {
        alignSelf: 'flex-end',
    },
});

export default ServiceCard;
