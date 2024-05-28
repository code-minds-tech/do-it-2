import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import MessageCard from '../components/MessageCard';


const initialMessagesData = [
    { id: '1', name: 'Alex Thompson', message: 'Maybe we can meet on Monday!', time: '3h ago', avatar: 'https://via.placeholder.com/50', read: false },
    { id: '2', name: 'Evelyn Rose', message: 'Thank you', time: '10h ago', avatar: 'https://via.placeholder.com/50', read: true },
    { id: '3', name: 'Clara Beatriz', message: 'Let’s discuss that later...', time: '1d ago', avatar: 'https://via.placeholder.com/50', read: true },
    { id: '4', name: 'Liam Daniel', message: 'Sure, tomorrow morning :)', time: '2d ago', avatar: 'https://via.placeholder.com/50', read: true },
    // Add more dummy data as needed
];

const MessagesScreen = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);
    const [messagesData, setMessagesData] = useState(initialMessagesData);

    const handleDeleteMessage = (id) => {
        setMessagesData(messagesData.filter((message) => message.id !== id));
    };

    const renderItem = ({ item }) => (
        <MessageCard
            message={item}
            onDelete={() => handleDeleteMessage(item.id)}
            onPress={() => navigation.navigate('Chat', { name: item.name, avatar: item.avatar })}
        />
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card }]}>
                <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.logo} />
                <View style={styles.headerIcons}>
                    <Ionicons name="search" size={25} color={theme.text} />
                    <Ionicons name="notifications-outline" size={25} color={theme.text} style={styles.icon} />
                </View>
            </View>
            <View style={[styles.searchContainer, { backgroundColor: theme.card }]}>
                <Ionicons name="search" size={20} color={theme.text} style={styles.searchIcon} />
                <TextInput
                    style={[styles.searchInput, { color: theme.text }]}
                    placeholder="Search"
                    placeholderTextColor={theme.secondaryText}
                />
            </View>
            <FlatList
                data={messagesData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
    },
});

export default MessagesScreen;
