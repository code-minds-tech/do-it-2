import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import theme from '../Themes/Theme';

const CompleteProfileScreen = ({ navigation }) => {
    const [title, setTitle] = useState('Mr');
    const [ageGroup, setAgeGroup] = useState('');
    const [location, setLocation] = useState('');

    const handleSaveInfo = () => {
        // Handle saving profile info logic
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                {<Text style={styles.logo}>DOit</Text>}
                <TouchableOpacity onPress={() => navigation.replace('MainApp')}>
                    <Text style={[styles.skipText, { color: theme.primary }]}>Skip For Now</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.title, { color: theme.text }]}>For Better Experience</Text>
            <Text style={[styles.subtitle, { color: theme.text }]}>Please Complete Your Profile Info</Text>
            <Text style={[styles.inputLabel, { color: theme.text }]}>Title</Text>
            <View style={styles.radioGroup}>
                <TouchableOpacity style={styles.radioOption} onPress={() => setTitle('Mr')}>
                    <Ionicons name={title === 'Mr' ? 'radio-button-on' : 'radio-button-off'} size={24} color={theme.primary} />
                    <Text style={[styles.radioText, { color: theme.text }]}>Mr</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.radioOption} onPress={() => setTitle('Ms')}>
                    <Ionicons name={title === 'Ms' ? 'radio-button-on' : 'radio-button-off'} size={24} color={theme.primary} />
                    <Text style={[styles.radioText, { color: theme.text }]}>Ms</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.radioOption} onPress={() => setTitle('Mrs')}>
                    <Ionicons name={title === 'Mrs' ? 'radio-button-on' : 'radio-button-off'} size={24} color={theme.primary} />
                    <Text style={[styles.radioText, { color: theme.text }]}>Mrs</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.inputLabel, { color: theme.text }]}>Age</Text>
            <View style={[styles.pickerContainer, { borderColor: theme.secondaryText }]}>
                <Picker
                    selectedValue={ageGroup}
                    onValueChange={(itemValue) => setAgeGroup(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item style={{ color: theme.text }} label="Select Your Age Group" value="" />
                    <Picker.Item label="18-24" value="18-24" />
                    <Picker.Item label="25-34" value="25-34" />
                    <Picker.Item label="35-44" value="35-44" />
                    <Picker.Item label="45-54" value="45-54" />
                    <Picker.Item label="55+" value="55+" />
                </Picker>
            </View>
            <Text style={[styles.inputLabel, , { color: theme.text }]}>Country & Region</Text>
            <View style={[styles.pickerContainer, { borderColor: theme.secondaryText }]}>
                <Picker
                    selectedValue={location}
                    onValueChange={(itemValue) => setLocation(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item style={{ color: theme.text }} label="Select Your Location" value="" />
                    <Picker.Item label="United States" value="United States" />
                    <Picker.Item label="Canada" value="Canada" />
                    <Picker.Item label="United Kingdom" value="United Kingdom" />
                    <Picker.Item label="Australia" value="Australia" />
                    <Picker.Item label="Other" value="Other" />
                </Picker>
            </View>
            <TouchableOpacity style={[styles.saveButton, { backgroundColor: theme.primary }]} onPress={handleSaveInfo}>
                <Text style={[styles.saveButtonText, { color: theme.text }]}>Save Info</Text>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    skipText: {
        fontSize: 16,
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
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioText: {
        marginLeft: 5,
        fontSize: 16,
    },
    pickerContainer: {
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    saveButton: {
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CompleteProfileScreen;
