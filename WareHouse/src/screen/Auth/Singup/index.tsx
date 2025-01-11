import React, {useState} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import Pressable from '../../../component/commen/Pressable';
import Label from '../../../component/commen/Label';
import Input from '../../../component/commen/Input';
import Button from '../../../component/commen/Button';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {ICons, Images} from '../../../assest';
import {styles} from './style';
import SCREEN from '../../../data/ScrName';
import {isEmailValid, isStrongPassword} from '../../../utils/Helper';
import {showErrorToast, showSuccessToast} from '../../../utils/Toast';
import {authStore} from '../../../store';

export default function Singup(props: any) {
  const {navigation} = props;
  const [registerForm, setRegisterForm] = useState<any>({});
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [passHide, setPassHide] = useState(false);
  const [confirmHide, setConfirmHide] = useState(false);

  // console.log('Answer==>', registerForm);
  const handleFormChange = (key: any, value: any) => {
    setRegisterForm({...registerForm, [key]: value});
  };

  const haldalAuth = async () => {
    if (
      registerForm?.Name ||
      registerForm?.email ||
      registerForm?.password ||
      registerForm?.confirm
    ) {
      const isNameValid = !!registerForm?.Name;
      const isEmailValidFlag = isEmailValid(registerForm?.email);
      const isPasswordValid = isStrongPassword(registerForm?.password);
      const isPasswordConfirmed =
        registerForm?.password == registerForm?.confirm;

      setNameError(!isNameValid);
      setEmailError(!isEmailValidFlag);
      setPassError(!isPasswordValid);
      setConfirmError(!isPasswordConfirmed);

      if (
        isNameValid &&
        isEmailValidFlag &&
        isPasswordValid &&
        isPasswordConfirmed
      ) {
        try {
          const {Name, email, password} = registerForm;

          authStore(email, password, Name);
          showSuccessToast('Registration successful');

          navigation.navigate(SCREEN.Login);
        } catch (error) {
          showErrorToast('Registration failed. Please try again.');
          console.log('Firebase Registration Error:', error);
        }
      }
    } else {
      showErrorToast('Please fill all fields');
      setNameError(true);
      setEmailError(true);
      setPassError(true);
      setConfirmError(true);
    }
  };

  return (
    <ImageBackground  source={Images.signBack} style={styles.backgroundImage}>
      <View style={{...commonStyles.BlurContainer}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Label style={styles.HeaderLabel}>Sign up</Label>

          <View style={styles.inputContainer}>
            <Input
              placeholder={'Enter Name'}
              style={{
                borderColor: registerForm.nameFocus ? COLOR.primary : COLOR.white,
              }}
              placeholderColor={
                registerForm.nameFocus ? COLOR.primary : COLOR.white
              }
              textStyle={{color:COLOR.white}}

              keyboardType="email-address"
              onFocus={() => handleFormChange('nameFocus', true)}
              onBlur={() => handleFormChange('nameFocus', false)}
              onChange={(x: any) => {
                handleFormChange('Name', x);
                x && setNameError(false);
              }}
            />
            {nameError && (
              <Label style={styles.Error}>Enter the Fill Name</Label>
            )}
            <Input
              placeholder={'Enter email'}
              style={{
                borderColor: registerForm.emailFocus
                  ? COLOR.primary
                  : COLOR.white,
              }}
              textStyle={{color:COLOR.white}}

              placeholderColor={
                registerForm.emailFocus ? COLOR.primary : COLOR.white
              }
              keyboardType="email-address"
              onFocus={() => handleFormChange('emailFocus', true)}
              onBlur={() => handleFormChange('emailFocus', false)}
              value={registerForm.email}
              onChange={(x: any) => {
                handleFormChange('email', x),
                  isEmailValid(x) && setEmailError(false);
              }}
            />
            {emailError && <Label style={styles.Error}>Enter the Email</Label>}

            <Input
              secureText={passHide ? false : true}
              onRightPress={() => setPassHide(passHide ? false : true)}
              addRight={
                <Image
                  source={passHide ? ICons.show_eye : ICons.close_eye}
                  style={styles.hideEye}
                />
              }
              placeholder={'Enter Password'}
              style={{
                borderColor: registerForm.passwordFocus
                  ? COLOR.primary
                  : COLOR.white,
              }}
              placeholderColor={
                registerForm.passwordFocus ? COLOR.primary : COLOR.white
              }
              textStyle={{color:COLOR.white}}

              onFocus={() => handleFormChange('passwordFocus', true)}
              onBlur={() => handleFormChange('passwordFocus', false)}
              value={registerForm.password}
              onChange={(x: any) => {
                handleFormChange('password', x),
                  isStrongPassword(x) && setPassError(false);
              }}
            />
            {passError && (
              <Label style={styles.Error}>Enter the Password</Label>
            )}

            <Input
              secureText={confirmHide ? false : true}
              onRightPress={() => setConfirmHide(confirmHide ? false : true)}
              addRight={
                <Image
                  source={confirmHide ? ICons.show_eye : ICons.close_eye}
                  style={styles.hideEye}
                />
              }
              placeholder={'Confirm Password'}
              style={{
                borderColor: registerForm.confirmFocus
                  ? COLOR.primary
                  : COLOR.white,
              }}
              textStyle={{color:COLOR.white}}

              placeholderColor={
                registerForm.confirmFocus ? COLOR.primary : COLOR.white
              }
              onFocus={() => handleFormChange('confirmFocus', true)}
              onBlur={() => handleFormChange('confirmFocus', false)}
              value={registerForm.confirm}
              onChange={(x: any) => {
                handleFormChange('confirm', x),
                  x == registerForm?.password && setConfirmError(false);
              }}
            />
            {confirmError && (
              <Label style={styles.Error}>Enter the Confirm Password</Label>
            )}
          </View>

          <Button
            title="Register"
            style={styles.loginButton}
            onPress={() => haldalAuth()}
          />

          <View style={styles.bottomContainer}>
            <Label style={styles.accountLabel}>Already have an account?</Label>
            <Pressable onPress={() => navigation.navigate(SCREEN.Login)}>
              <Label style={styles.registerLabel}> Login</Label>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
