import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const ChatScreen = ({ route, navigation }) => {
    const { name } = route.params;
    const theme = React.useContext(ThemeContext);
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hello!', time: 'Monday 11:00 AM', type: 'received' },
        { id: '2', text: 'How are you?', time: 'Monday 11:01 AM', type: 'received' },
    ]);
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        if (inputText.trim().length > 0) {
            const newMessage = {
                id: (messages.length + 1).toString(),
                text: inputText,
                time: 'Today 12:00 PM',
                type: 'sent',
            };
            setMessages([...messages, newMessage]);
            setInputText('');
        }
    };

    const renderItem = ({ item }) => (
        <View style={[styles.messageItem, item.type === 'sent' ? styles.sent : styles.received]}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card }]}>
                <Ionicons name="arrow-back" size={25} color={theme.text} onPress={() => navigation.goBack()} />
                <Text style={[styles.headerText, { color: theme.text }]}>{name}</Text>
            </View>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.messagesList}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Type a message"
                    placeholderTextColor={theme.secondaryText}
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity onPress={handleSend}>
                    <Ionicons name="send" size={30} color={theme.primary} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    messagesList: {
        flex: 1,
    },
    messageItem: {
        margin: 10,
        padding: 15,
        borderRadius: 10,
    },
    sent: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
    },
    received: {
        alignSelf: 'flex-start',
        backgroundColor: '#ECECEC',
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#EEE',
    },
    input: {
        flex: 1,
        padding: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#EEE',
        marginRight: 10,
    },
});

export default ChatScreen;
