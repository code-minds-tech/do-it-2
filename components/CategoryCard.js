import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const CategoryCard = ({ category, onPress, expanded, navigation }) => {
    const theme = React.useContext(ThemeContext);

    const handleSubcategoryPress = (subcategory) => {
        navigation.navigate('TopProviders', { category: subcategory });
    };

    return (
        <View style={[styles.card, { backgroundColor: theme.card }]}>
            <TouchableOpacity onPress={onPress} style={styles.cardHeader}>
                <View style={styles.cardIcon}>
                    <Ionicons name="stats-chart" size={30} color={theme.primary} />
                </View>
                <View style={styles.cardContent}>
                    <Text style={[styles.cardTitle, { color: theme.text }]}>{category.name}</Text>
                    <Text style={[styles.cardSubtitle, { color: theme.secondaryText }]}>{category.services} services</Text>
                </View>
                <Ionicons name={expanded ? 'chevron-up' : 'chevron-down'} size={25} color={theme.primary} />
            </TouchableOpacity>
            {expanded && (
                <View style={styles.subcategories}>
                    {category.subcategories.map((sub, index) => (
                        <TouchableOpacity key={index} onPress={() => handleSubcategoryPress(sub)}>
                            <Text style={[styles.subcategoryText, { color: theme.text }]}>{sub}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#EEE',
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    cardIcon: {
        marginRight: 15,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardSubtitle: {
        fontSize: 14,
    },
    subcategories: {
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#EEE',
    },
    subcategoryText: {
        marginBottom: 10,
    },
});

export default CategoryCard;
