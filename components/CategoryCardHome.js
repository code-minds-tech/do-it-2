import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const CategoryCard = ({ title }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.categoryCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={[styles.iconCard, { backgroundColor: theme.iconCard }]}>
                <Ionicons name="briefcase-outline" size={60} color={theme.text} />
            </View>
            <Text style={[styles.categoryTitle, { color: theme.text }]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryCard: {
        alignItems: 'center',
        marginHorizontal: 5,
        padding: 5,
        borderRadius: 10,
    },
    iconCard: {
        alignItems: 'center',
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 10,
    },
    categoryTitle: {
        marginTop: 10,
        marginBottom: 2,
        fontSize: 16,
    },
});

export default CategoryCard;
