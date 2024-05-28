import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import { Picker } from '@react-native-picker/picker';
import { useServices } from '../Context/ServiceContext';

const EditServiceScreen = ({ route, navigation }) => {
    const theme = useContext(ThemeContext);
    const { updateService } = useServices();
    const { service } = route.params;

    const [isActive, setIsActive] = useState(true);
    const [category, setCategory] = useState(service.category || '');
    const [serviceType, setServiceType] = useState(service.type || '');
    const [location, setLocation] = useState(service.location || '');
    const [type, setType] = useState(service.serviceType || 'Remote');
    const [description, setDescription] = useState(service.description || '');
    const [priceRate, setPriceRate] = useState(service.priceRate || '');
    const [gallery, setGallery] = useState(service.gallery || []);

    const handleSave = () => {

        const updatedService = {
            ...service,
            isActive,
            category,
            type: serviceType,
            location,
            serviceType: type,
            description,
            priceRate,
            gallery,
        };

        updateService(updatedService);
        navigation.goBack();
    };

    const handleDeleteImage = (index) => {
        const newGallery = [...gallery];
        newGallery.splice(index, 1);
        setGallery(newGallery);
    };

    const handleAddImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setGallery([...gallery, result.uri]);
        }
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Edit Service</Text>
            </View>
            <View style={styles.activateContainer}>
                <TouchableOpacity
                    style={[styles.activateButton, isActive && { backgroundColor: theme.primary }]}
                    onPress={() => setIsActive(true)}
                >
                    <Text style={styles.activateButtonText}>Activate</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deactivateButton, !isActive && { backgroundColor: 'red' }]}
                    onPress={() => setIsActive(false)}
                >
                    <Text style={styles.deactivateButtonText}>Deactivate</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.section, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Category</Text>
                <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                    style={[styles.picker, { color: theme.text }]}
                >
                    <Picker.Item label="Business" value="Business" />
                    <Picker.Item label="Marketing" value="Marketing" />
                </Picker>
            </View>
            <View style={[styles.section, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Service</Text>
                <Picker
                    selectedValue={serviceType}
                    onValueChange={(itemValue) => setServiceType(itemValue)}
                    style={[styles.picker, { color: theme.text }]}
                >
                    <Picker.Item label="Consulting" value="Consulting" />
                    <Picker.Item label="Coaching" value="Coaching" />
                </Picker>
            </View>
            <View style={[styles.section, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Service Location</Text>
                <Picker
                    selectedValue={location}
                    onValueChange={(itemValue) => setLocation(itemValue)}
                    style={[styles.picker, { color: theme.text }]}
                >
                    <Picker.Item label="Alexandria, Egypt" value="Alexandria, Egypt" />
                    <Picker.Item label="Cairo, Egypt" value="Cairo, Egypt" />
                </Picker>
            </View>
            <View style={[styles.section, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Type</Text>
                <View style={styles.radioContainer}>
                    <TouchableOpacity onPress={() => setType('Remote')} style={styles.radioButton}>
                        <Ionicons name={type === 'Remote' ? 'radio-button-on' : 'radio-button-off'} size={24} color={theme.primary} />
                        <Text style={[styles.radioText, { color: theme.text }]}>Remote</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setType('On Site')} style={styles.radioButton}>
                        <Ionicons name={type === 'On Site' ? 'radio-button-on' : 'radio-button-off'} size={24} color={theme.primary} />
                        <Text style={[styles.radioText, { color: theme.text }]}>On Site</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setType('Hybrid')} style={styles.radioButton}>
                        <Ionicons name={type === 'Hybrid' ? 'radio-button-on' : 'radio-button-off'} size={24} color={theme.primary} />
                        <Text style={[styles.radioText, { color: theme.text }]}>Hybrid</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.section, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Description</Text>
                <TextInput
                    style={[styles.textInput, { color: theme.text, borderColor: theme.text }]}
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />
                <Text style={[styles.wordCount, { color: theme.text }]}>{description.length}/2500</Text>
            </View>
            <View style={[styles.section, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Service Gallery</Text>
                <View style={styles.galleryContainer}>
                    {gallery.map((image, index) => (
                        <View key={index} style={styles.galleryItem}>
                            <Image source={{ uri: image }} style={styles.galleryImage} />
                            <TouchableOpacity onPress={() => handleDeleteImage(index)} style={styles.deleteButton}>
                                <Ionicons name="trash-outline" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    ))}
                    <TouchableOpacity onPress={handleAddImage} style={styles.addImageButton}>
                        <Ionicons name="add-outline" size={24} color={theme.primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.section, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Price Rate</Text>
                <TextInput
                    style={[styles.textInput, { color: theme.text, borderColor: theme.text }]}
                    value={priceRate}
                    onChangeText={setPriceRate}
                    multiline
                />
                <Text style={[styles.wordCount, { color: theme.text }]}>{priceRate.length}/1000</Text>
            </View>
            <TouchableOpacity onPress={handleSave} style={[styles.saveButton, { backgroundColor: theme.primary }]}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    activateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    activateButton: {
        flex: 1,
        marginRight: 10,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    deactivateButton: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    activateButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    deactivateButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    section: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioText: {
        marginLeft: 5,
        fontSize: 16,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    wordCount: {
        textAlign: 'right',
        fontSize: 14,
    },
    galleryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    galleryItem: {
        position: 'relative',
        margin: 5,
    },
    galleryImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    deleteButton: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    addImageButton: {
        width: 100,
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    saveButton: {
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        margin: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditServiceScreen;
