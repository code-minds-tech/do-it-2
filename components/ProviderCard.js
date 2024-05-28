import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const ProviderCard = ({ name, profession }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.providerCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.providerPic} />
            <Text style={[styles.providerName, { color: theme.text }]}>{name}</Text>
            <Text style={[styles.providerProfession, { color: theme.secondaryText }]}>{profession}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    providerCard: {
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    providerPic: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    providerName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    providerProfession: {
        fontSize: 12,
    },
});

export default ProviderCard;
