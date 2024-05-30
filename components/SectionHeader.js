import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const SectionHeader = ({ navigation, title, page }) => {
    const theme = React.useContext(ThemeContext);
    const handleSubcategoryPress = (page) => {
        navigation.navigate(page);
    };
    return (
        <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>{title}</Text>
            <TouchableOpacity>
                <Text onPress={() => handleSubcategoryPress(page)} style={[styles.seeAllText, { color: theme.button }]}>See All</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAllText: {
        color: '#1E90FF',
    },
});

export default SectionHeader;
