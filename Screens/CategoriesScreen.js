import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import CategoryCard from '../components/categoryCard';

const initialCategories = [
    { id: '1', name: 'Business', services: 12, subcategories: ['Management', 'Finance', 'Accounting', 'Sales', 'Human Resources'] },
    { id: '2', name: 'Marketing', services: 10, subcategories: ['Digital', 'Content', 'SEO', 'Social Media'] },
    { id: '3', name: 'Software', services: 8, subcategories: ['Development', 'Testing', 'Deployment'] },
    { id: '4', name: 'Personal', services: 15, subcategories: ['Fitness', 'Cooking', 'Language', 'Art'] },
];

const CategoriesScreen = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);
    const [categories, setCategories] = useState(initialCategories);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filter, setFilter] = useState('All');
    const [searchText, setSearchText] = useState('');

    const handleFilterChange = (category) => {
        setFilter(category);
        if (category === 'All') {
            setCategories(initialCategories);
        } else {
            setCategories(initialCategories.filter((cat) => cat.name === category));
        }
    };

    const handleCategoryPress = (id) => {
        setSelectedCategory(selectedCategory === id ? null : id);
    };

    const renderItem = ({ item }) => (
        <CategoryCard
            category={item}
            onPress={() => handleCategoryPress(item.id)}
            expanded={selectedCategory === item.id}
            navigation={navigation}
        />
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card }]}>
                <Ionicons name="arrow-back" size={25} color={theme.text} onPress={() => navigation.goBack()} />
                <Text style={[styles.headerText, { color: theme.text }]}>Categories</Text>
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
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
                {['All', 'Business', 'Marketing', 'Software', 'Personal'].map((category) => (
                    <TouchableOpacity key={category} onPress={() => handleFilterChange(category)}>
                        <Text style={[styles.filterText, filter === category && styles.selectedFilter]}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <FlatList
                data={categories.filter((cat) => cat.name.toLowerCase().includes(searchText.toLowerCase()))}
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
    filterContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    filterText: {
        fontSize: 16,
        marginRight: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#DDD',
    },
    selectedFilter: {
        backgroundColor: '#1E90FF',
        color: '#FFF',
    },
});

export default CategoriesScreen;
