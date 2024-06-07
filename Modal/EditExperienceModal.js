import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import theme from '../Themes/Theme';

const EditExperienceModal = ({ visible, onClose, onSave, initialData }) => {
    const [company, setCompany] = useState(initialData?.company || '');
    const [position, setPosition] = useState(initialData?.position || '');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [description, setDescription] = useState(initialData?.description || '');
    const [showFromDatePicker, setShowFromDatePicker] = useState(false);
    const [showToDatePicker, setShowToDatePicker] = useState(false);

    const handleSave = () => {
        const newData = {
            company,
            position,
            from: fromDate,
            to: toDate,
            description
        };
        onSave(newData);
        onClose();
    };

    const handleFromDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || fromDate;
        setShowFromDatePicker(false);
        setFromDate(currentDate);
    };

    const handleToDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || toDate;
        setShowToDatePicker(false);
        setToDate(currentDate);
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Ionicons name="close" size={24} color={theme.primary} />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Edit Experience</Text>

                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={[styles.inputTitle, { color: theme.secondaryText }]}>Company</Text>
                        <TextInput
                            style={[styles.input, { borderColor: theme.secondaryText }]}
                            value={company}
                            onChangeText={setCompany}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={[styles.inputTitle, { color: theme.secondaryText }]}>Position</Text>
                        <TextInput
                            style={[styles.input, { borderColor: theme.secondaryText }]}
                            value={position}
                            onChangeText={setPosition}
                        />
                    </View>
                    <View style={styles.dateContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.inputTitle, { color: theme.secondaryText }]}>From</Text>
                            <TouchableOpacity onPress={() => setShowFromDatePicker(true)}>
                                <TextInput
                                    style={[styles.input, { borderColor: theme.secondaryText }]}
                                    value={fromDate.toLocaleDateString()}
                                    editable={false}
                                />
                            </TouchableOpacity>
                            {showFromDatePicker && (
                                <DateTimePicker
                                    value={fromDate}
                                    mode="date"
                                    display="default"
                                    onChange={handleFromDateChange}
                                />
                            )}
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.inputTitle, { color: theme.secondaryText }]}>To</Text>
                            <TouchableOpacity onPress={() => setShowToDatePicker(true)}>
                                <TextInput
                                    style={[styles.input, { borderColor: theme.secondaryText }]}
                                    value={toDate.toLocaleDateString()}
                                    editable={false}
                                />
                            </TouchableOpacity>
                            {showToDatePicker && (
                                <DateTimePicker
                                    value={toDate}
                                    mode="date"
                                    display="default"
                                    onChange={handleToDateChange}
                                />
                            )}
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={[styles.inputTitle, { color: theme.secondaryText }]}>Description</Text>
                        <TextInput
                            style={[styles.input, styles.descriptionInput, { borderColor: theme.secondaryText }]}
                            value={description}
                            onChangeText={setDescription}
                            multiline
                        />
                        <Text style={[styles.wordCount, { color: theme.primary }]}>{description.length}/2500</Text>
                    </View>
                    <TouchableOpacity style={[styles.saveButton, { backgroundColor: theme.primary }]} onPress={handleSave}>
                        <Text style={[styles.saveButtonText, { color: theme.buttonText }]}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    modalTitle: {
        marginRight: 70,
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },
    inputTitle: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '45%'
    },
    descriptionInput: {
        height: 100,
    },
    wordCount: {
        alignSelf: 'flex-end',
        color: '#777',
        marginBottom: 10,
    },
    saveButton: {
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        width: '100%'
    },
    saveButtonText: {
        fontSize: 16,
    },
});

export default EditExperienceModal;