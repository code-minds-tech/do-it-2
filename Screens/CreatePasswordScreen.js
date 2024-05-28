// Screens/CreatePasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const CreatePasswordScreen = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleContinue = () => {
        if (password === confirmPassword) {
            // Save password and navigate to main app
            navigation.navigate('MainApp');
        } else {
            alert("Passwords don't match!");
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Ionicons name="logo-doit" size={80} color={theme.primary} />
            <Text style={[styles.title, { color: theme.text }]}>Create Your Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Create Password"
                    placeholderTextColor={theme.secondaryText}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Confirm Password"
                    placeholderTextColor={theme.secondaryText}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>
            <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 10,
        fontSize: 16,
    },
    button: {
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CreatePasswordScreen;
