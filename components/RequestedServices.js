import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';
import ThemeContext from '../Context/ThemeContext';

const RequestedServices = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.section, { backgroundColor: theme.card }]}>
            <SectionHeader title="Requested Services" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
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

export default RequestedServices;
