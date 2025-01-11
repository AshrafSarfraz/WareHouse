import {ImageBackground, Text, View} from 'react-native';
import styles from './style';
import Scrollable from '../../component/commen/Scrollable';
import Label from '../../component/commen/Label';
import Input from '../../component/commen/Input';
import {useState} from 'react';
import {COLOR, commonStyles} from '../../themes/StyleGuides';
import Button from '../../component/commen/Button';
import SCREEN from '../../data/ScrName';
import CountryPickerComponent from '../../component/core/CountryPickers';
import { Images } from '../../assest';

const LocationDetails = (props: any) => {
  const {navigation} = props;
  const [loginForm, setLoginForm] = useState<any>({});
  const handleFormChange = (key: any, value: any) => {
    setLoginForm({...loginForm, [key]: value});
  };

  return (
    <ImageBackground source={Images.BackGrouond4} style={styles.container}>
      <Scrollable hasInput>
        <Label style={styles.HeaderLabel}>Location Form</Label>

        <View style={styles.inputContainer}>
          <Input
            placeholder={'Village of Birth'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('Village', true)}
            onBlur={() => handleFormChange('Village', false)}
            onChange={(x: any) => handleFormChange('Village', x)}
          />
          <Input
            placeholder={'Current Residence'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('CurrentResidence', true)}
            onBlur={() => handleFormChange('CurrentResidence', false)}
            onChange={(x: any) => handleFormChange('CurrentResidence', x)}
          />
          <Input
            placeholder={'City'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('City', true)}
            onBlur={() => handleFormChange('City', false)}
            onChange={(x: any) => handleFormChange('City', x)}
          />
          <Input
            placeholder={'State/Province'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('State/Province', true)}
            onBlur={() => handleFormChange('State/Province', false)}
            onChange={(x: any) => handleFormChange('State/Province', x)}
          />
          <Input
            placeholder={'State/Province'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('State/Province', true)}
            onBlur={() => handleFormChange('State/Province', false)}
            onChange={(x: any) => handleFormChange('State/Province', x)}
          />

          <CountryPickerComponent />
          
          <Input
            placeholder={'Postal Code'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            keyboardType="number-pad"
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('PostalCode', true)}
            onBlur={() => handleFormChange('PostalCode', false)}
            onChange={(x: any) => handleFormChange('PostalCode', x)}
          />

          <Input
            placeholder={'Current Location'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('CurrentLocation', true)}
            onBlur={() => handleFormChange('CurrentLocation', false)}
            onChange={(x: any) => handleFormChange('CurrentLocation', x)}
          />
          <Button
            style={{borderColor: COLOR.white, borderWidth: 1, marginTop: '10%'}}
            title="Submit"
            onPress={() => navigation.navigate(SCREEN.AcademicForm)}
          />
        </View>
      </Scrollable>
    </ImageBackground>
  );
};

export default LocationDetails;
