import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../Themes/Theme';

const VerifyAccountScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleVerify = () => {
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={theme.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                {/*Add The DOit Logo here :3 */}
            </View>
            <Text style={[styles.title, { color: theme.text }]}>Verify Phone Number</Text>
            <Text style={[styles.subtitle, { color: theme.text }]}>Check OTP That Have Been Send To Your Whatsapp Number +201234567890</Text>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        value={digit}
                        onChangeText={(value) => handleOtpChange(index, value)}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                ))}
            </View>
            <TouchableOpacity style={[styles.verifyButton, { backgroundColor: theme.primary }]} onPress={handleVerify}>
                <Text style={[styles.verifyButtonText, { color: theme.text }]}>Verify Account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[styles.resendText, { color: theme.primary }]}>Didn't Receive Code? Resend Code</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logoText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    otpInput: {
        width: '15%',
        height: '120%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 24,
        padding: 5
    },
    verifyButton: {
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 10,
    },
    verifyButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    resendText: {
        textAlign: 'center',
        fontSize: 14,
    },
});

export default VerifyAccountScreen;
