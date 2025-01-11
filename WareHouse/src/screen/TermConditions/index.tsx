
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Headers from '../../component/commen/Headers';
import { COLOR } from '../../themes/StyleGuides';
import styles from './style';

const TermsAndConditions = (props:any) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Headers title="Terms and Conditions" firstOnpress={() => navigation.goBack()} />
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.lastUpdated}>Last Updated: 10-25-2024</Text>

        <Text style={styles.sectionTitle}>Welcome to the Warehouse Management System App (the "App").</Text>
        <Text style={styles.paragraph}>
          By downloading, accessing, or using this App, you agree to be bound by these Terms and Conditions ("Terms"). 
          If you do not agree to these Terms, please do not use the App.
        </Text>

        <Text style={styles.sectionTitle}>1. Use of the App</Text>
        <Text style={styles.paragraph}>
          The App is designed to help users manage inventory, track items, and access various warehouse management functionalities. 
          You agree to use the App solely for its intended purpose and to follow all applicable laws and regulations. Unauthorized 
          use of the App, including any attempt to disrupt, damage, or gain unauthorized access to the App or its data, is strictly prohibited.
        </Text>

        <Text style={styles.sectionTitle}>2. User Accounts</Text>
        <Text style={styles.paragraph}>
          Users may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your 
          account and password and for all activities conducted under your account. You agree to provide accurate, current, and complete information 
          and to update your information as necessary.
        </Text>

        <Text style={styles.sectionTitle}>3. Data Collection and Privacy</Text>
        <Text style={styles.paragraph}>
          The App may collect data, including but not limited to location, inventory information, and user interactions, to improve the App's functionality 
          and provide a better user experience. Any data collected will be handled according to our Privacy Policy [include link or document reference]. 
          We do not share or sell your personal data to third parties without your consent unless required by law.
        </Text>

        <Text style={styles.sectionTitle}>4. Messaging Services</Text>
        <Text style={styles.paragraph}>
          The App may include a messaging feature for contacting support through WhatsApp. By using this feature, you consent to the App sending messages 
          on your behalf. We are not responsible for any third-party fees or charges, including data charges from your mobile service provider.
        </Text>

        <Text style={styles.sectionTitle}>5. Intellectual Property</Text>
        <Text style={styles.paragraph}>
          All content, design, and functionality in the App are owned by [Your Company Name] or its licensors and are protected by copyright, 
          trademark, and other laws. You may not reproduce, distribute, or create derivative works based on the App without our explicit written permission.
        </Text>

        <Text style={styles.sectionTitle}>6. Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          The App is provided "as is" without any warranties of any kind, whether express or implied. [Your Company Name] will not be liable for any 
          damages arising from the use or inability to use the App, including any direct, indirect, incidental, or consequential damages.
        </Text>

        <Text style={styles.sectionTitle}>7. Modification and Termination</Text>
        <Text style={styles.paragraph}>
          We reserve the right to modify or terminate the App or any of its features at any time without notice. These Terms may be updated periodically. 
          Continued use of the App after updates constitutes acceptance of the revised Terms.
        </Text>

        <Text style={styles.sectionTitle}>8. Governing Law</Text>
        <Text style={styles.paragraph}>
          These Terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from these Terms or the use of the App shall be resolved in 
          the courts of [Your Jurisdiction].
        </Text>

        <Text style={styles.sectionTitle}>9. Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions about these Terms, please contact us at [Contact Information].
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditions;
