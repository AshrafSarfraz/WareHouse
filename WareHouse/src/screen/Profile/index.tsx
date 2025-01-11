import React, {useState, useEffect} from 'react';
import {ScrollView, View, BackHandler} from 'react-native';
import Headers from '../../component/commen/Headers';
import ImagePickers from '../../component/core/ImagePickers';
import Input from '../../component/commen/Input';
import Button from '../../component/commen/Button';
import {COLOR} from '../../themes/StyleGuides';
import firestore from '@react-native-firebase/firestore';
import styles from './style';
import {showErrorToast, showSuccessToast} from '../../utils/Toast';

const Profile = (props: any) => {
  const {navigation, userId} = props;
  const [loginForm, setLoginForm] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState('');

  const handleFormChange = (key: any, value: any) => {
    setLoginForm({...loginForm, [key]: value});
  };

  const handleImageChange = (uri: string) => {
    setImageUri(uri);
    setLoginForm({...loginForm, image: uri}); // Update loginForm with new image URI
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        const userDoc = await firestore().collection('Users').doc(userId).get();
        if (userDoc.exists) {
          setLoginForm(userDoc.data());
          console.log('Get Data', userDoc.data());
          setImageUri(userDoc.data()?.image || '');
        }
      } catch (error) {
        console.error('Error fetching profile data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userId]);

  const saveProfileData = async () => {
    setLoading(true);
    try {
      await firestore()
        .collection('Users')
        .doc(userId)
        .set({
          name: loginForm.name || '',
          email: loginForm.email || '',
          companyName: loginForm.companyName || '',
          companyNumber: loginForm.companyNumber || '',
          companyEmail: loginForm.companyEmail || '', // Ensure the key matches input
          companyAddress: loginForm.companyAddress || '',
          image: imageUri || '', // Use updated image URI
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      setLoading(false);
      showSuccessToast('Profile saved successfully!');
    } catch (error) {
      setLoading(false);
      console.error('Error saving profile: ', error);
      showErrorToast('Failed to save profile. Please try again.');
    }
  };
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Headers title="Profile" firstOnpress={() => navigation.openDrawer()} />

      <ScrollView>
        <ImagePickers
          title={loginForm.name || 'Emma'}
          pickImage={(x: any) => handleImageChange(x)} // Handle image selection
          Icon={loginForm.image} // Display updated image URI
        />

        <Input
          placeholder={'Name'}
          style={{
            borderColor: loginForm.NameFocus ? COLOR.primary : COLOR.gray,
          }}
          placeholderColor={loginForm.NameFocus ? COLOR.primary : COLOR.gray}
          onFocus={() => handleFormChange('NameFocus', true)}
          onBlur={() => handleFormChange('NameFocus', false)}
          value={loginForm.name}
          onChange={(x: any) => handleFormChange('name', x)}
        />

        <Input
          placeholder={'Email'}
          style={{
            borderColor: loginForm.emailFocus ? COLOR.primary : COLOR.gray,
          }}
          keyboardType="email-address"
          placeholderColor={loginForm.emailFocus ? COLOR.primary : COLOR.gray}
          onFocus={() => handleFormChange('emailFocus', true)}
          onBlur={() => handleFormChange('emailFocus', false)}
          value={loginForm.email}
          onChange={(x: any) => handleFormChange('email', x)}
        />

        <Input
          placeholder={'Company Name'}
          style={{
            borderColor: loginForm.CompanyNameFocus
              ? COLOR.primary
              : COLOR.gray,
          }}
          placeholderColor={
            loginForm.CompanyNameFocus ? COLOR.primary : COLOR.gray
          }
          onFocus={() => handleFormChange('CompanyNameFocus', true)}
          onBlur={() => handleFormChange('CompanyNameFocus', false)}
          value={loginForm.companyName}
          onChange={(x: any) => handleFormChange('companyName', x)}
        />

        <Input
          placeholder={'Company Number'}
          style={{
            borderColor: loginForm.CompanyNumberFocus
              ? COLOR.primary
              : COLOR.gray,
          }}
          placeholderColor={
            loginForm.CompanyNumberFocus ? COLOR.primary : COLOR.gray
          }
          keyboardType="number-pad"
          onFocus={() => handleFormChange('CompanyNumberFocus', true)}
          onBlur={() => handleFormChange('CompanyNumberFocus', false)}
          value={loginForm.companyNumber}
          onChange={(x: any) => handleFormChange('companyNumber', x)}
        />

        <Input
          placeholder={'Company Email'}
          style={{
            borderColor: loginForm.CompanyEmailFocus
              ? COLOR.primary
              : COLOR.gray,
          }}
          placeholderColor={
            loginForm.CompanyEmailFocus ? COLOR.primary : COLOR.gray
          }
          keyboardType="email-address"
          onFocus={() => handleFormChange('CompanyEmailFocus', true)}
          onBlur={() => handleFormChange('CompanyEmailFocus', false)}
          value={loginForm.companyEmail} // Update to match key
          onChange={(x: any) => handleFormChange('companyEmail', x)}
        />

        <Input
          placeholder={'Company Address'}
          style={{
            borderColor: loginForm.CompanyAddressFocus
              ? COLOR.primary
              : COLOR.gray,
          }}
          placeholderColor={
            loginForm.CompanyAddressFocus ? COLOR.primary : COLOR.gray
          }
          onFocus={() => handleFormChange('CompanyAddressFocus', true)}
          onBlur={() => handleFormChange('CompanyAddressFocus', false)}
          value={loginForm.companyAddress}
          onChange={(x: any) => handleFormChange('companyAddress', x)}
        />

        <Button
          title={loading ? 'Saving...' : 'Save'}
          style={styles.btnStyle}
          onPress={saveProfileData}
          disabled={loading}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;
