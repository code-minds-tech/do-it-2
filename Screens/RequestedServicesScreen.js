import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import RequestedServiceItem from '../components/RequestedServiceItem';

const RequestedServices = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    const services = [
        { id: '1', name: 'Adam Thomas', category: 'Business, Marketing', description: 'Business consulting is a professional service...', type: 'Hybrid', date: 'Jan 21 2024', location: 'Alexandria, Egypt' },
        { id: '2', name: 'Alex Thompson', category: 'Business, Marketing', description: 'Business consulting is a professional service...', type: 'Remote', date: 'Jan 21 2024', location: 'Cairo, Egypt' },
        { id: '3', name: 'Evelyn Rose', category: 'Finance', description: 'Business consulting is a professional service...', type: 'On Site', date: 'Jan 21 2024', location: 'Giza, Egypt' },
        { id: '4', name: 'Clara Beatriz', category: 'Consulting', description: 'Business consulting is a professional service...', type: 'Hybrid', date: 'Jan 21 2024', location: 'Mansoura, Egypt' },
        { id: '5', name: 'Liam Daniel', category: 'Children care', description: 'Business consulting is a professional service...', type: 'Remote', date: 'Jan 21 2024', location: 'Alexandria, Egypt' },
    ];

    const filteredServices = filter === 'All' ? services : services.filter(service => service.category.includes(filter));

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color={theme.text} onPress={() => navigation.goBack()} />
                <Text style={[styles.headerTitle, { color: theme.text }]}>Requested Services</Text>
            </View>
            <View style={[styles.searchBar, { backgroundColor: theme.cardBackground }]}>
                <Ionicons name="search" size={20} color={theme.secondaryText} />
                <TextInput
                    style={[styles.searchInput, { color: theme.text }]}
                    placeholder="Search"
                    placeholderTextColor={theme.secondaryText}
                    value={search}
                    onChangeText={setSearch}
                />
            </View>
            <View style={styles.filters}>
                <FlatList
                    data={['All', 'Business', 'Marketing', 'Finance', 'Consulting', 'Children care']}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => setFilter(item)} style={[styles.filterButton, filter === item && styles.filterButtonActive]}>
                            <Text style={[styles.filterButtonText, { color: filter === item ? theme.primary : theme.text }]}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <FlatList
                data={filteredServices}
                renderItem={({ item }) => (
                    <RequestedServiceItem
                        service={item}
                        onPress={() => navigation.navigate('ServiceDetail', { service: item })}
                    />
                )}
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
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    searchInput: {
        marginLeft: 10,
        flex: 1,
    },
    filters: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    filterButton: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 5,
        backgroundColor: '#E0E0E0',
    },
    filterButtonActive: {
        backgroundColor: '#1E90FF',
    },
    filterButtonText: {
        fontSize: 14,
    },
    serviceList: {
        paddingBottom: 10,
    },
});

export default RequestedServices;
