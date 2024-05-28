import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import ThemeContext from '../Context/ThemeContext';

const MessageCard = ({ message, onDelete, onPress }) => {
    const theme = React.useContext(ThemeContext);

    const renderRightActions = () => (
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Ionicons name="trash-outline" size={30} color="#fff" />
            <Text style={styles.deleteText}>Delete Chat</Text>
        </TouchableOpacity>
    );

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity onPress={onPress} style={styles.messageItem}>
                <Image source={{ uri: message.avatar }} style={styles.avatar} />
                <View style={styles.messageContent}>
                    <Text style={[styles.name, { color: theme.text }]}>{message.name}</Text>
                    <Text style={[styles.message, { color: theme.secondaryText }]}>{message.message}</Text>
                </View>
                <View style={styles.messageMeta}>
                    <Text style={[styles.time, { color: theme.secondaryText }]}>{message.time}</Text>
                    {!message.read && <View style={styles.unreadDot} />}
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    messageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    messageContent: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
    },
    messageMeta: {
        alignItems: 'flex-end',
    },
    time: {
        fontSize: 12,
    },
    unreadDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#1E90FF',
        marginTop: 5,
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: '100%',
    },
    deleteText: {
        color: '#fff',
        marginTop: 5,
    },
});

export default MessageCard;
