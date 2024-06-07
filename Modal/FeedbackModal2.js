import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../Themes/Theme';

const FeedbackModal2 = ({ visible, onClose, onSubmit, providerName }) => {
    const [feedback, setFeedback] = useState('');

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Ionicons name="arrow-back" size={24} color={theme.primary} />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>How was your experience with</Text>
                    <Text style={styles.providerName}>{providerName}</Text>
                    <Text style={styles.feedbackLabel}>Write Your Feedback</Text>
                    <TextInput
                        style={styles.feedbackInput}
                        value={feedback}
                        onChangeText={setFeedback}
                        multiline
                    />
                    <TouchableOpacity style={[styles.submitButton, { backgroundColor: theme.primary }]} onPress={() => onSubmit(feedback)}>
                        <Text style={[styles.submitButtonText]}>Submit</Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    closeButton: {
        alignSelf: 'flex-start',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    providerName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    feedbackLabel: {
        fontSize: 14,
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    feedbackInput: {
        width: '100%',
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        textAlignVertical: 'top',
    },
    submitButton: {
        borderRadius: 20,
        paddingVertical: 10,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default FeedbackModal2;