import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import RequestedServiceItem from '../components/RequestedServiceItem';
import { color } from 'react-native-elements/dist/helpers';

const RequestedServices = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedServiceType, setSelectedServiceType] = useState('');

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
            <View elevation={5} style={styles.header}>
                <View style={styles.headerContent}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} onPress={() => navigation.goBack()} />
                    <Text style={[styles.headerTitle, { color: theme.text }]}>Requested Services</Text>
                </View>
                <View style={styles.headerContent}>
                    <Ionicons name="chatbubble-ellipses" size={24} color={theme.button} />
                    <Ionicons name="notifications" size={24} color={theme.button} />
                </View>
            </View>
            <View style={[styles.searchBar, { backgroundColor: theme.cardBackground }]}>
                <Ionicons name="search" size={20} color={theme.primary} />
                <TextInput
                    style={[styles.searchInput, { color: theme.primary }]}
                    placeholder="Search"
                    placeholderTextColor={theme.primary}
                    value={search}
                    onChangeText={setSearch}
                />
            </View>
            <View style={styles.ddCont}>
                <View style={styles.dropdownContainer}>
                    <Picker
                        selectedValue={selectedDate}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setSelectedDate(itemValue)}
                    >
                        <Picker.Item label="Date" value="" style={{ color: theme.primary }} />

                    </Picker>
                </View>
                <View style={styles.dropdownContainer}>
                    <Picker
                        selectedValue={selectedLocation}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}
                    >
                        <Picker.Item label="Location" value="" style={{ color: theme.primary }} />

                    </Picker>
                </View>
                <View style={styles.dropdownContainer}>
                    <Picker
                        selectedValue={selectedServiceType}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setSelectedServiceType(itemValue)}
                    >
                        <Picker.Item label="Service Type" value="" style={{ color: theme.primary }} />

                    </Picker>
                </View>
            </View>

            <View style={styles.filters}>
                <FlatList
                    data={['All', 'Business', 'Marketing', 'Finance', 'Consulting', 'Children care']}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => setFilter(item)} style={[styles.filterButton, filter === item && styles.filterButtonActive]}>
                            <Text style={[styles.filterButtonText, { color: filter === item ? theme.text : theme.primary }]}>{item}</Text>
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

        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerContent: {
        flexDirection: 'row',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#2EC8FE',
        padding: 10,
        marginTop: 12
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
        borderWidth: 1,
        borderColor: '#2EC8FE',
        marginHorizontal: 5,

    },
    filterButtonActive: {
        backgroundColor: '#2EC8FE',
    },
    filterButtonText: {
        fontSize: 14,
    },
    serviceList: {
        paddingBottom: 10,
    },
    ddCont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
    },
    picker: {
        width: '70%',
        color: '#2EC8FE'
    },
});

export default RequestedServices;
