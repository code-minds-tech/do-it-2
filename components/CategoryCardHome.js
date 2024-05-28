import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const CategoryCard = ({ title }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.categoryCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Ionicons name="briefcase-outline" size={30} color={theme.text} />
            <Text style={[styles.categoryTitle, { color: theme.text }]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryCard: {
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    categoryTitle: {
        marginTop: 5,
        fontSize: 14,
    },
});

export default CategoryCard;
