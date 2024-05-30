import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const Header = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View elevation={5} style={[styles.header, { backgroundColor: theme.background }]}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.logo} />
            <View style={styles.headerIcons}>
                <Ionicons name="search-circle" size={28} color={theme.button} />
                <Ionicons name="notifications-outline" size={25} color={theme.button} style={styles.icon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,


    },
    logo: {
        width: 50,
        height: 50,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 15,
    },
});

export default Header;
