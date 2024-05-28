import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

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

    const renderItem = ({ item }) => (
        <View style={styles.providerItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.providerContent}>
                <Text style={[styles.providerName, { color: theme.text }]}>{item.name}</Text>
                <Text style={[styles.providerDescription, { color: theme.secondaryText }]}>{item.description}</Text>
                <View style={styles.providerMeta}>
                    <View style={styles.rating}>
                        <Ionicons name="star" size={16} color="#FFD700" />
                        <Text style={[styles.ratingText, { color: theme.text }]}>{item.rating}/5</Text>
                    </View>
                    <Text style={[styles.status, { color: item.status === 'Remote' ? 'green' : item.status === 'Offline' ? 'red' : 'orange' }]}>{item.status}</Text>
                </View>
                <Text style={[styles.location, { color: theme.secondaryText }]}>{item.location}</Text>
                <Text style={[styles.price, { color: theme.primary }]}>120</Text>
            </View>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card }]}>
                <Ionicons name="arrow-back" size={25} color={theme.text} onPress={() => navigation.goBack()} />
                <Text style={[styles.headerText, { color: theme.text }]}>Business, Finance</Text>
            </View>
            <View style={[styles.searchContainer, { backgroundColor: theme.card }]}>
                <Ionicons name="search" size={20} color={theme.text} style={styles.searchIcon} />
                <TextInput
                    style={[styles.searchInput, { color: theme.text }]}
                    placeholder="Search"
                    placeholderTextColor={theme.secondaryText}
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
            <View style={styles.filtersContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
                    {['Sort By', 'Location', 'Service Type'].map((filter) => (
                        <TouchableOpacity key={filter} style={styles.filterButton}>
                            <Text style={styles.filterText}>{filter} ▼</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tagContainer}>
                    {['Near by', 'Interaction', 'Hybrid', 'Alexandria Egypt', 'Rating high - low'].map((tag) => (
                        <View key={tag} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                            <Ionicons name="close" size={16} color="#FFF" />
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
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
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
});

export default TopProvidersScreen;
