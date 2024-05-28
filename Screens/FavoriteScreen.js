import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import RequestedServiceItem from '../components/RequestedServiceItem';
import { useFavorites } from '../Context/FavoriteContext';

const FavoriteServicesScreen = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);
    const { favorites } = useFavorites();
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('Location');

    const renderItem = ({ item }) => (
        <RequestedServiceItem
            service={item}
            onPress={() => navigation.navigate('ServiceDetail', { service: item })}
        />
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Favorite Services</Text>
            </View>
            <View style={styles.searchBar}>
                <Ionicons name="search" size={20} color={theme.secondaryText} />
                <TextInput
                    style={[styles.searchInput, { color: theme.text }]}
                    placeholder="Search"
                    placeholderTextColor={theme.secondaryText}
                    value={search}
                    onChangeText={setSearch}
                />
            </View>
            <View style={styles.sortBar}>
                <Text style={[styles.sortText, { color: theme.text }]}>Sort By</Text>
                <TouchableOpacity onPress={() => setSortBy('Location')} style={styles.sortButton}>
                    <Text style={[styles.sortButtonText, { color: theme.text }]}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSortBy('Service Type')} style={styles.sortButton}>
                    <Text style={[styles.sortButtonText, { color: theme.text }]}>Service Type</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={favorites}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.serviceList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    searchInput: {
        marginLeft: 10,
        flex: 1,
    },
    sortBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    sortText: {
        fontSize: 16,
        marginRight: 10,
    },
    sortButton: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: '#E0E0E0',
        marginRight: 10,
    },
    sortButtonText: {
        fontSize: 14,
    },
    serviceList: {
        paddingBottom: 10,
    },
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

export default FavoriteServicesScreen;
