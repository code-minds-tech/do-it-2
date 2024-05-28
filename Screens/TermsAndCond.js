import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const TermsAndConditionsScreen = ({ navigation }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Terms and Conditions</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={[styles.text, { color: theme.text }]}>
                    Welcome to DO IT! These Terms and Conditions ("Terms") govern your access to and use of the DO IT mobile application (the "App"). By downloading, installing, or using the App, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access or use the App.
                    {'\n\n'}1. Definitions
                    {'\n'}Customer: An individual or entity seeking services or goods through the App.
                    {'\n'}User: An individual or entity offering services or goods through the App.
                    {'\n'}Content: Any information, data, text, graphics, photos, or other materials uploaded, submitted, or displayed by a User or Customer on the App.
                    {'\n\n'}2. Use of the App
                    {'\n'}You must be at least 18 years old to use the App.
                    {'\n'}You are responsible for creating and maintaining a secure account with the App.
                    {'\n'}You are responsible for all activity that occurs under your account, whether done so by you or any third party using your account.
                    {'\n'}You agree to use the App in a lawful and respectful manner.
                    {'\n'}You agree not to use the App for any purpose that is prohibited by these Terms or applicable laws.
                    {'\n\n'}3. User-Generated Content
                    {'\n'}You are solely responsible for the Content you upload, submit, or display on the App.
                    {'\n'}You represent and warrant that you own all rights to your Content or have the necessary rights and licenses to use, share, and display your Content on the App.
                    {'\n'}You agree not to upload, submit, or display any Content that is illegal, harmful, threatening, abusive, harassing, defamatory, obscene, hateful, or racially or ethnically offensive.
                    {'\n'}You agree not to upload, submit, or display any Content that infringes on the intellectual property rights of any third party.
                    {'\n\n'}4. Disclaimers
                    {'\n'}DO IT does not provide or guarantee the quality of any services or goods offered through the App.
                    {'\n'}DO IT is not responsible for any disputes between Customers and Users.
                    {'\n'}The App is provided "as is" and without warranty of any kind, express or implied. DO IT disclaims all warranties, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    {'\n'}DO IT does not warrant that the App will be uninterrupted, secure, or error-free.
                    {'\n'}DO IT does not warrant that any results obtained from the use of the App will be accurate or reliable.
                    {'\n\n'}5. Limitation of Liability
                    {'\n'}DO IT shall not be liable for any damages arising out of or related to your use of the App.
                    {'\n'}This includes, but is not limited to, direct, indirect, incidental, consequential, punitive, and special damages.
                    {'\n\n'}6. Termination
                    {'\n'}DO IT may terminate your access to the App for any reason, at any time, without notice.
                    {'\n'}You may terminate your use of the App at any time.
                    {'\n\n'}7. Governing Law
                    {'\n'}These Terms shall be governed by and construed in accordance with the laws of the State of [Insert Your State Here].
                    {'\n\n'}8. Entire Agreement
                    {'\n'}These Terms constitute the entire agreement between you and DO IT regarding your use of the App.
                    {'\n\n'}9. Amendments
                    {'\n'}DO IT may amend these Terms at any time by posting the amended terms on the App.
                    {'\n'}Your continued use of the App after the amended terms are posted constitutes your agreement to the amended terms.
                    {'\n\n'}10. Contact Us
                    {'\n'}If you have any questions about these Terms, please contact us at [Insert Your Email Address Here].
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

export default TermsAndConditionsScreen;
