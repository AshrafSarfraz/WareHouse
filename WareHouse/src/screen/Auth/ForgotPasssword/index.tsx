import {Alert, ImageBackground, ScrollView, Text, View} from 'react-native';
import Label from '../../../component/commen/Label';
import Input from '../../../component/commen/Input';
import {useState} from 'react';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import Button from '../../../component/commen/Button';
import SCREEN from '../../../data/ScrName';
import {sendPasswordResetEmail} from '../../../store';
import styles from './style';
import {ICons, Images} from '../../../assest';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const ForgotPasssword = (props: any) => {
  const {navigation} = props;
  const [loginForm, setLoginForm] = useState(false);
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    try {
      await sendPasswordResetEmail(email);
      Alert.alert(
        'Success',
        'A password reset link has been sent to your email address.',
      );
      setTimeout(() => {
        navigation.navigate(SCREEN.Login);
      }, 2000);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };
  return (
    <ImageBackground source={Images.ForgetImage} style={styles.backgroundImage}>
       <View style={{...commonStyles.BlurContainer}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backbtn} onPress={()=>navigation.goBack()}  >
          <Image source={ICons.left_arrow} style={styles.Arrow} />
        </TouchableOpacity>
        <Label style={styles.HeaderLabel}>
          Enter the Email for Recover Account{' '}
        </Label>
        <View style={styles.inputContainer}>
          <Input
            textStyle={{color: COLOR.white}}
            placeholder={'Enter email'}
            style={{
              borderColor: loginForm ? COLOR.primary : COLOR.white,
            }}
            onBlur={() => setLoginForm(false)}
            onFocus={() => setLoginForm(true)}
            placeholderColor={loginForm ? COLOR.primary : COLOR.white}
            keyboardType="email-address"
            onChange={setEmail}
          />
        </View>
        <Button
          title="Reset Password"
          style={styles.loginButton}
          onPress={() => handlePasswordReset()}
        />
      </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default ForgotPasssword;
