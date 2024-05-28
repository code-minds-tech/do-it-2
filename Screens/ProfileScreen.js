import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';
import EditAboutModal from '../Modal/EditAboutModal';
import ProfileServiceItem from '../components/ProfileServiceItem';

const ProfileScreen = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [aboutText, setAboutText] = useState(
        "I'm a passionate freelance business consultant with 10 years of experience guiding companies towards success. " +
        "I specialize in [List 2-3 core areas of expertise (e.g., strategic planning, operations optimization, marketing strategy)] " +
        "and have a proven track record of helping businesses achieve their goals, from boosting efficiency to increasing sales."
    );
    const [activeTab, setActiveTab] = useState('About');

    const handleSave = (text) => {
        setAboutText(text);
        setEditModalVisible(false);
    };

    const services = [
        {
            id: '1',
            title: 'Business Consulting',
            description: 'Business consultants are expert guides who help companies reach their full potential...',
        },
        {
            id: '2',
            title: 'Marketing Strategy',
            description: 'Marketing consultants are experts in developing strategies to increase brand awareness...',
        },
        // Add more services as needed
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'About':
                return (
                    <View style={[styles.aboutContainer, { backgroundColor: theme.cardBackground }]}>
                        <Text style={[styles.aboutTitle, { color: theme.text }]}>About</Text>
                        <Text style={[styles.aboutText, { color: theme.secondaryText }]}>{aboutText}</Text>
                        <TouchableOpacity style={styles.editButton} onPress={() => setEditModalVisible(true)}>
                            <Ionicons name="pencil-outline" size={24} color={theme.primary} />
                        </TouchableOpacity>
                    </View>
                );
            case 'Services':
                return (
                    <View>
                        <TouchableOpacity style={styles.addServiceButton} onPress={() => navigation.navigate('AddService')}>
                            <Ionicons name="add-outline" size={24} color={theme.primary} />
                            <Text style={[styles.addServiceText, { color: theme.primary }]}>Add New Service</Text>
                        </TouchableOpacity>
                        <FlatList
                            data={services}
                            renderItem={({ item }) => (
                                <ProfileServiceItem
                                    service={item}
                                    onPress={() => navigation.navigate('ProfileServiceDetails', { service: item })}
                                />
                            )}
                            keyExtractor={item => item.id}
                            contentContainerStyle={styles.serviceList}
                        />
                    </View>
                );
            // Add more cases for other tabs (Experience, Education) if needed
            default:
                return null;
        }
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Profile</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Ionicons name="settings-outline" size={24} color={theme.text} />
                </TouchableOpacity>
            </View>
            <View style={styles.profileInfo}>
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
                <Text style={[styles.profileName, { color: theme.text }]}>Anna Maximous</Text>
                <Text style={[styles.profileJobTitle, { color: theme.secondaryText }]}>Business Consultant & job title</Text>
                <Text style={[styles.profileLocation, { color: theme.secondaryText }]}>Alexandria, Egypt</Text>
                <Text style={[styles.profileRating, { color: theme.primary }]}>4.36/5 (36)</Text>
            </View>
            <View style={styles.profileStrengthContainer}>
                <Text style={[styles.profileStrengthText, { color: theme.text }]}>Profile Strength</Text>
                <View style={styles.profileStrengthBar}>
                    <View style={[styles.profileStrengthProgress, { width: '33%' }]} />
                </View>
                <Text style={[styles.profileStrengthPercentage, { color: theme.text }]}>33%</Text>
                <Text style={[styles.profileStrengthDescription, { color: theme.primary }]}>
                    Complete Your Profile Info To Get a Strong Profile
                </Text>
            </View>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('About')}>
                    <Text style={[styles.tabText, activeTab === 'About' && { color: theme.primary }]}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Services')}>
                    <Text style={[styles.tabText, activeTab === 'Services' && { color: theme.primary }]}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Experience')}>
                    <Text style={[styles.tabText, activeTab === 'Experience' && { color: theme.primary }]}>Experience</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Education')}>
                    <Text style={[styles.tabText, activeTab === 'Education' && { color: theme.primary }]}>Education</Text>
                </TouchableOpacity>
            </View>
            {renderTabContent()}
            <EditAboutModal
                visible={isEditModalVisible}
                onClose={() => setEditModalVisible(false)}
                onSave={handleSave}
                initialText={aboutText}
            />
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
    profileInfo: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileJobTitle: {
        fontSize: 16,
        color: 'gray',
    },
    profileLocation: {
        fontSize: 16,
        color: 'gray',
    },
    profileRating: {
        fontSize: 16,
        marginTop: 5,
    },
    profileStrengthContainer: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    profileStrengthText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileStrengthBar: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    profileStrengthProgress: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#4caf50',
    },
    profileStrengthPercentage: {
        fontSize: 16,
        marginBottom: 5,
    },
    profileStrengthDescription: {
        fontSize: 14,
        color: 'blue',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 10,
    },
    tab: {
        paddingVertical: 10,
    },
    tabText: {
        fontSize: 16,
    },
    aboutContainer: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
    aboutTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    aboutText: {
        fontSize: 16,
    },
    editButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    addServiceButton: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    addServiceText: {
        marginLeft: 10,
        fontSize: 16,
    },
    serviceList: {
        paddingHorizontal: 20,
    },
});

export default ProfileScreen;
