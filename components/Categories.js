import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import CategoryCardHome from './CategoryCardHome';
import ThemeContext from '../Context/ThemeContext';

const Categories = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.section, { backgroundColor: theme.background }]}>
            <SectionHeader title="Categories" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                <CategoryCardHome title="Business" />
                <CategoryCardHome title="Marketing" />
                <CategoryCardHome title="Software" />
                <CategoryCardHome title="Business" />
                <CategoryCardHome title="Marketing" />
                <CategoryCardHome title="Software" />
                <CategoryCardHome title="Business" />
                <CategoryCardHome title="Marketing" />
                <CategoryCardHome title="Software" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        marginBottom: 5,
    },
    horizontalScroll: {
        paddingHorizontal: 15,
    },
});

export default Categories;
