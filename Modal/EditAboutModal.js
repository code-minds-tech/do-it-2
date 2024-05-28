import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const EditAboutModal = ({ visible, onClose, onSave, initialText }) => {
    const theme = React.useContext(ThemeContext);
    const [text, setText] = useState(initialText);

    const handleSave = () => {
        onSave(text);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Ionicons name="close" size={30} color={theme.text} />
                    </TouchableOpacity>
                    <Text style={[styles.modalTitle, { color: theme.text }]}>Edit About</Text>
                    <TextInput
                        style={[styles.textInput, { color: theme.text, borderColor: theme.text }]}
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <Text style={[styles.wordCount, { color: theme.text }]}>{text.length}/2500</Text>
                    <TouchableOpacity onPress={handleSave} style={[styles.saveButton, { backgroundColor: theme.primary }]}>
                        <Text style={styles.saveButtonText}>Save</Text>
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
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%',
        borderRadius: 10,
        padding: 20,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        height: 150,
        textAlignVertical: 'top',
        marginBottom: 10,
    },
    wordCount: {
        textAlign: 'right',
        marginBottom: 20,
    },
    saveButton: {
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditAboutModal;
