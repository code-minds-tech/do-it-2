import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import { Picker } from '@react-native-picker/picker';
import ProgressBar from '../components/ProgressBar';

const providersData = [
    { id: '1', name: 'Alex Thompson', rating: 4.36, status: 'Remote', location: 'Alexandria, Egypt', description: 'Business consultants are expert guides who help companies achieve their goals.', avatar: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Clara Beatriz', rating: 4.19, status: 'Hybrid', location: 'Cairo, Egypt', description: 'Business consultants are expert guides who help companies achieve their goals.', avatar: 'https://via.placeholder.com/50' },
    { id: '3', name: 'Evelyn Rose', rating: 4, status: 'On Site', location: 'Alexandria, Egypt', description: 'Business consultants are expert guides who help companies achieve their goals.', avatar: 'https://via.placeholder.com/50' },
    { id: '4', name: 'Liam Daniel', rating: 4.2, status: 'Online', location: 'Cairo, Egypt', description: 'Business consultants are expert guides who help companies achieve their goals.', avatar: 'https://via.placeholder.com/50' },
    // Add more dummy data as needed
];

const TopProvidersScreen = ({ route, navigation }) => {
    const theme = React.useContext(ThemeContext);
    const { category } = route.params || {};
    const [searchText, setSearchText] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedServiceType, setSelectedServiceType] = useState('');

    const renderItem = ({ item }) => (
        <View style={[styles.providerItem, { borderColor: theme.secondaryText }]}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.providerContent}>
                <View style={styles.providerMeta}>
                    <Text style={[styles.providerName, { color: theme.text }]}>{item.name}</Text>
                    <View style={styles.rating}>
                        <Ionicons name="star" size={16} color="#FFD700" />
                        <Text style={[styles.ratingText, { color: theme.text }]}>{item.rating}/5</Text>
                    </View>
                    <Text style={[styles.status, { color: item.status === 'Remote' ? '#68CDA3' : item.status === 'Hybrid' ? '#F99C5E' : item.status === 'On Site' ? '#2EC8FE' : 'orange' }]}>{item.status}</Text>
                </View>
                <Text style={[styles.providerDescription, { color: theme.secondaryText }]}>{item.description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', }}>
                    <Ionicons name="location" size={12} color={theme.primary} />
                    <Text style={[styles.location, { color: theme.secondaryText, paddingHorizontal: 5 }]}>{item.location}</Text>

                </View>
                <ProgressBar progress={33} />
            </View>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card }]}>
                <Ionicons name="arrow-back" size={25} color={theme.text} onPress={() => navigation.goBack()} />
                <Text style={[styles.headerText, { color: theme.text }]}>Business, Finance</Text>
                <View style={styles.headerContent}>
                    <Ionicons name="chatbubble-ellipses" size={24} color={theme.button} />
                    <Ionicons name="notifications" size={24} color={theme.button} />
                </View>
            </View>
            <View style={[styles.searchContainer, { backgroundColor: theme.background, borderColor: theme.secondaryText }]}>
                <Ionicons name="search" size={20} color={theme.primary} style={styles.searchIcon} />
                <TextInput
                    style={[styles.searchInput, { color: theme.primary }]}
                    placeholder="Search"
                    placeholderTextColor={theme.primary}
                    value={searchText}
                    onChangeText={setSearchText}
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
            <View style={styles.filtersContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tagContainer}>
                    {['Near by', 'Interaction', 'Hybrid', 'Alexandria Egypt', 'Rating high - low'].map((tag) => (
                        <View key={tag} style={[styles.tag, { backgroundColor: theme.primary }]}>
                            <Text style={[styles.tagText, { color: theme.buttonText }]}>{tag}</Text>
                            <Ionicons name="close" size={16} color={theme.buttonText} />
                        </View>
                    ))}
                </ScrollView>
            </View>
            <FlatList
                data={providersData.filter((provider) => provider.name.toLowerCase().includes(searchText.toLowerCase()))}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        justifyContent: 'space-between'
    },
    headerContent: {
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,

    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
    },
    filtersContainer: {
        marginBottom: 10,
    },
    filterContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    filterButton: {
        marginRight: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#DDD',
    },
    filterText: {
        fontSize: 16,
        color: '#1E90FF',
    },
    tagContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
    tagText: {
        color: '#FFF',
        marginRight: 5,
    },
    providerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 0.15,
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    providerContent: {
        flex: 1,
    },
    providerName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    providerDescription: {
        fontSize: 14,
    },
    providerMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    location: {
        marginTop: 5,
        fontSize: 12,
    },
    price: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
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

export default TopProvidersScreen;
