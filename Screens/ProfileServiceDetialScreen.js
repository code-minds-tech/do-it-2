import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const ProfileServiceDetailsScreen = ({ route, navigation }) => {
    const theme = React.useContext(ThemeContext);
    const { service, onDelete, onSave } = route.params;

    const handleDelete = () => {
        Alert.alert(
            "Delete Service",
            "Are you sure you want to delete this service?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => {
                        onDelete(service.id);
                        navigation.goBack();
                    },
                    style: "destructive"
                }
            ],
            { cancelable: true }
        );
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Service Details</Text>
                <View style={styles.headerActions}>
                    <TouchableOpacity onPress={handleDelete}>
                        <Ionicons name="trash-outline" size={24} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('EditService', { service, onSave })}>
                        <Ionicons name="pencil-outline" size={24} color={theme.primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.cardTitle, { color: theme.text }]}>{service.title}</Text>
                <Text style={[styles.cardDescription, { color: theme.secondaryText }]}>{service.description}</Text>
                <View style={styles.cardInfo}>
                    <Text style={[styles.cardInfoText, { color: theme.text }]}>Type: {service.type}</Text>
                    <Text style={[styles.cardInfoText, { color: theme.text }]}>Location: {service.location}</Text>
                    <Text style={[styles.cardInfoText, { color: theme.text }]}>Price Rate: {service.priceRate}</Text>
                </View>
                <View style={styles.galleryContainer}>
                    {service.gallery.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={styles.galleryImage} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 16,
        marginBottom: 10,
    },
    cardInfo: {
        marginBottom: 10,
    },
    cardInfoText: {
        fontSize: 14,
        marginBottom: 5,
    },
    galleryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    galleryImage: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 10,
    },
});

export default ProfileServiceDetailsScreen;
