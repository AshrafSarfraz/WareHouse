import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {showErrorToast, showSuccessToast} from '../../../utils/Toast';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import Input from '../../../component/commen/Input';
import Label from '../../../component/commen/Label';
import Button from '../../../component/commen/Button';
import Pressable from '../../../component/commen/Pressable';
import Scrollable from '../../../component/commen/Scrollable';
import {ICons, Images} from '../../../assest';
import SCREEN from '../../../data/ScrName';
import {isEmailValid, isStrongPassword} from '../../../utils/Helper';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

const Login = (props: any) => {
  const {navigation} = props;
  const [loginForm, setLoginForm] = useState<any>({});
  const [passHide, setPassHide] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state

  const handleFormChange = (key: any, value: any) => {
    setLoginForm({...loginForm, [key]: value});
  };

  const handalAuth = async () => {
    if (loginForm.email || loginForm.password) {
      console.log();
      const isEmail = isEmailValid(loginForm?.email);
      const isPasssword = isStrongPassword(loginForm?.password);
      setEmailError(!isEmail);
      setPassError(!isPasssword);
      if (isEmail && isPasssword) {
        setLoading(true);
        try {
          const {email, password} = loginForm;
          const userCredential = await auth().signInWithEmailAndPassword(email, password);
          setLoading(false);
          const userId = userCredential.user.uid; 
          showSuccessToast('Registration successful');

          navigation.replace(SCREEN.DrawerNavigations, { userId });
          handleFormChange("email","")
          handleFormChange("password","")

        } catch (error: any) {
          showErrorToast('Login failed. Please check your credentials.');
          setLoading(false);
          console.log('Firebase Login Error:', error);
        }
      }
    } else {
      setEmailError(true);
      setPassError(true);
      showErrorToast('Enter the Email And Passsword');
    }
  };
  return (
    <ImageBackground style={styles.backgroundImage} source={Images.loginBackGround}   >
      <View style={{...commonStyles.BlurContainer}}>
        <Scrollable hasInput>
          <Label style={styles.HeaderLabel}>LogIn</Label>

          <View style={styles.inputContainer}>
            <Input
                        textStyle={{color:COLOR.white}}
              placeholder={'Enter email'}
              style={{
                borderColor: loginForm.emailFocus ? COLOR.primary : COLOR.white,
              }}
              placeholderColor={
                loginForm.emailFocus ? COLOR.primary : COLOR.white
              }
              keyboardType="email-address"
              onFocus={() => handleFormChange('emailFocus', true)}
              onBlur={() => handleFormChange('emailFocus', false)}
              value={loginForm.email}
              onChange={(x: any) => {
                handleFormChange('email', x),
                  isEmailValid(x) && setEmailError(false);
              }}
            />
            {emailError && <Label style={styles.Error}>Enter the Email</Label>}

            <Input
            textStyle={{color:COLOR.white}}
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
                borderColor: loginForm.passwordFocus
                  ? COLOR.primary
                  : COLOR.white,
              }}
              placeholderColor={
                loginForm.passwordFocus ? COLOR.primary : COLOR.white
              }
              onFocus={() => handleFormChange('passwordFocus', true)}
              onBlur={() => handleFormChange('passwordFocus', false)}
              value={loginForm.password}
              onChange={(x: any) => {
                handleFormChange('password', x),
                  isStrongPassword(x) && setPassError(false);
              }}
            />
            {passError && (
              <Label style={styles.Error}>Enter the Password</Label>
            )}
            <Pressable
              style={styles.forgetButton}
              onPress={() => navigation.navigate(SCREEN.ForgotPasssword)}>
              <Label style={styles.registerLabel}> Forgot Password</Label>
            </Pressable>
          </View>

          <TouchableOpacity
            style={styles.ButtonContainer}
            onPress={() => handalAuth()}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color={COLOR.white} />
            ) : (
              <Text style={styles.ButtonText}>LogIn</Text>
            )}
          </TouchableOpacity>

          <View style={styles.bottomContainer}>
            <Label style={styles.accountLabel}>Don’t have an account?</Label>
            <Pressable onPress={() => navigation.navigate(SCREEN.Singup)}>
              <Label style={styles.registerLabel}> Register</Label>
            </Pressable>
          </View>
        </Scrollable>
      </View>
      <FlashMessage position="top" />
    </ImageBackground>
  );
};

export default Login;
