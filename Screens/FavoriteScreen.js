import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import RequestedServiceItem from '../components/RequestedServiceItem';
import { useFavorites } from '../Context/FavoriteContext';
import { Picker } from '@react-native-picker/picker';

const FavoriteServicesScreen = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);
    const { favorites } = useFavorites();
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('Location');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedServiceType, setSelectedServiceType] = useState('');


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

export default FavoriteServicesScreen;
