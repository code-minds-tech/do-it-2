import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import ProviderCard from './ProviderCard';
import ThemeContext from '../Context/ThemeContext';

const TopProviders = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.section, { backgroundColor: theme.card }]}>
            <SectionHeader title="Top Providers" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                <ProviderCard name="Alex Thompson" profession="Design" />
                <ProviderCard name="Evelyn Rose" profession="Music" />
                <ProviderCard name="Clara Beatriz" profession="Yoga" />
                <ProviderCard name="Daniel White" profession="Education" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        marginBottom: 10,
    },
    horizontalScroll: {
        paddingHorizontal: 15,
    },
});

export default TopProviders;
