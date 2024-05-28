import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import Statistics from './components/Statistics';
import RequestedServices from './components/RequestedServices';
import Categories from './components/Categories';
import TopProviders from './components/TopProviders';
import BottomNavigation from './components/BottomNavigation';
import ThemeContext from './ThemeContext';

const Main = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <ScrollView>
                <Header />
                <ProfileSection />
                <Statistics />
                <RequestedServices />
                <Categories />
                <TopProviders />
            </ScrollView>
            <BottomNavigation />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Main;