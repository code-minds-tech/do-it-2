import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../Themes/Theme';

const ChangePasswordScreen = ({ navigation }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleSave = () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        // Save the new password
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Change Password</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.text }]}>Current Password</Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity
                        onPress={() => setPasswordVisible(!isPasswordVisible)}
                    >
                        <Ionicons
                            name={isPasswordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color={theme.primary}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={[styles.forgotPasswordText, { color: theme.primary }]}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.text }]}>New Password</Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={!isNewPasswordVisible}
                    />
                    <TouchableOpacity
                        onPress={() => setNewPasswordVisible(!isNewPasswordVisible)}
                    >
                        <Ionicons
                            name={isNewPasswordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color={theme.primary}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.helperText, { color: theme.primary }]}>
                    Password must be at least 6 characters & must contain symbols EX: (#, *, $, @)
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.text }]}>Confirm Password</Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={[
                            styles.input,
                            newPassword !== confirmPassword && confirmPassword ? styles.errorInput : {},
                        ]}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!isConfirmPasswordVisible}
                    />
                    <TouchableOpacity
                        onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
                    >
                        <Ionicons
                            name={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color={theme.primary}
                        />
                    </TouchableOpacity>
                </View>
                {newPassword !== confirmPassword && confirmPassword ? (
                    <Text style={styles.errorText}>Password doesn’t match!</Text>
                ) : null}
            </View>
            <TouchableOpacity style={[styles.saveButton, { backgroundColor: theme.primary }]} onPress={handleSave}>
                <Text style={[styles.saveButtonText, { color: theme.buttonText }]}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
    },
    errorInput: {
        borderColor: 'red',
    },
    helperText: {
        marginTop: 5,
        fontSize: 12,
        color: 'gray',
    },
    forgotPasswordText: {
        marginTop: 5,
        fontSize: 14,
        color: '#1E90FF',
    },
    errorText: {
        marginTop: 5,
        fontSize: 12,
        color: 'red',
    },
    saveButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: '85%'
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ChangePasswordScreen;
