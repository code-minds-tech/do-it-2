import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const About = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>About Us</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={[styles.text, { color: theme.text }]}>
                    DO IT is your one-stop shop for getting things done! We connect you with a network of skilled individuals ready to tackle your needs.
                    {'\n\n'}Tired of endless searching? DO IT simplifies the process by putting the power in your hands. Customers can post tasks and receive quotes from qualified Users. Need help assembling furniture? Have a overflowing to-do list? DO IT can connect you with the perfect person for the job.
                    {'\n\n'}Looking to share your skills? DO IT is a great platform to showcase your talents and build your business. Users can create profiles, set their rates, and connect with Customers who need their expertise.
                    {'\n\n'}DO IT is all about community and convenience. Let's get things done!
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    contentContainer: {
        padding: 16,
    },
    text: {
        fontSize: 16,
    },
});

export default About;
