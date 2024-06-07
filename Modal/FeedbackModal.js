import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { AirbnbRating } from 'react-native-ratings';
import theme from '../Themes/Theme';

const FeedbackModal = ({ visible, onClose, providerName }) => {
    const [selectedService, setSelectedService] = useState('');
    const [rating, setRating] = useState(0);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
                <View style={[styles.modalContent, {}]}>
                    <View style={styles.closeButtonArea}>
                        <TouchableOpacity onPress={onClose} >
                            <Ionicons name="close" size={24} color={theme.primary} />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>How was your experience with</Text>
                    </View>
                    <Text style={styles.providerName}>{providerName} {/*Please Pass provider name and it should show up!*/}</Text>
                    <Text style={styles.serviceLabel}>Service</Text>
                    <Picker
                        selectedValue={selectedService}
                        onValueChange={(itemValue) => setSelectedService(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select Service" value="" />
                        <Picker.Item label="Service 1" value="service1" />
                        <Picker.Item label="Service 2" value="service2" />
                    </Picker>
                    <AirbnbRating
                        count={5}
                        reviews={["Terrible", "Bad", "OK", "Good", "Great"]}
                        defaultRating={0}
                        size={30}
                        onFinishRating={(rating) => setRating(rating)}
                        showRating={false}
                        starContainerStyle={styles.ratingContainer}
                    />
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
    closeButtonArea: {
        flexDirection: 'row',
        alignSelf: 'baseline',
        justifyContent: 'space-evenly',
        overflow: 'scroll',
    },
    modalTitle: {
        fontSize: 16,
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
    serviceLabel: {
        fontSize: 14,
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    picker: {
        width: '100%',
        marginBottom: 20,
    },
    ratingContainer: {
        marginBottom: 20,
    }
});

export default FeedbackModal;