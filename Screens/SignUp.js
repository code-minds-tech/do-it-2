// Screens/Signup.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import AuthContext from '../Context/AuthContext';



const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { signup } = useContext(AuthContext);
    const theme = React.useContext(ThemeContext);

    const handleSignup = () => {
        const success = signup(email, password, fullName, phoneNumber);
        if (success) {
            alert('Account created successfully');
        } else {
            alert('Account with this email already exists');
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Ionicons name="logo-doit" size={80} color={theme.primary} />
            <Text style={[styles.title, { color: theme.text }]}>Create Your Account</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Full Name"
                    placeholderTextColor={theme.secondaryText}
                    value={fullName}
                    onChangeText={setFullName}
                />
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Your email"
                    placeholderTextColor={theme.secondaryText}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Phone Number"
                    placeholderTextColor={theme.secondaryText}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>
            <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleSignup}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <Text style={{ color: theme.secondaryText, marginVertical: 20 }}>Or</Text>
            <TouchableOpacity style={[styles.socialButton, { borderColor: theme.primary }]}>
                <Ionicons name="logo-google" size={24} color={theme.primary} />
                <Text style={[styles.socialButtonText, { color: theme.primary }]}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, { borderColor: theme.primary }]}>
                <Ionicons name="logo-apple" size={24} color={theme.primary} />
                <Text style={[styles.socialButtonText, { color: theme.primary }]}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.signUp, { color: theme.primary }]}>Already Have An Account? Log In</Text>
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
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 25,
        borderWidth: 1,
        width: '100%',
        marginBottom: 10,
    },
    socialButtonText: {
        marginLeft: 10,
        fontSize: 16,
    },
    signUp: {
        fontSize: 14,
        marginVertical: 20,
    },
});

export default SignupScreen;
