import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../Themes/Theme';

const BlockListScreen = ({ navigation }) => {
    const [blockedUsers, setBlockedUsers] = useState([
        { id: '1', name: 'Alex Thompson', avatar: 'https://via.placeholder.com/50' },
        { id: '2', name: 'Evelyn Rose', avatar: 'https://via.placeholder.com/50' },
        { id: '3', name: 'Clara Beatriz', avatar: 'https://via.placeholder.com/50' },
    ]);

    const unblockUser = (userId) => {
        setBlockedUsers(blockedUsers.filter(user => user.id !== userId));
    };

    const renderUserItem = ({ item }) => (
        <View style={styles.userItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={[styles.userName, { color: theme.text }]}>{item.name}</Text>
            <TouchableOpacity
                style={styles.unblockButton}
                onPress={() => unblockUser(item.id)}
            >
                <Text style={styles.unblockButtonText}>Unblock</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={theme.primary} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Block List</Text>
            </View>
            <FlatList
                data={blockedUsers}
                renderItem={renderUserItem}
                keyExtractor={item => item.id}
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
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginRight: '35%'
    },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    userName: {
        flex: 1,
        fontSize: 16,
    },
    unblockButton: {
        backgroundColor: '#68CDA3',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    unblockButtonText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default BlockListScreen;
