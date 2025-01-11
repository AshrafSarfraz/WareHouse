import React, { useState } from 'react';
import { View,  StyleSheet } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { COLOR,  } from '../../../themes/StyleGuides';

const CountryPickerComponent = () => {
  const [countryCode, setCountryCode] = useState(''); 
  const [isPickerVisible, setIsPickerVisible] = useState(false); 

  const onSelect = (selectedCountry:any) => {
    setCountryCode(selectedCountry.cca2); 
    setIsPickerVisible(false); 
  };

  return (
    <View style={styles.container}>
  

      <CountryPicker
        countryCode={countryCode}
        withFilter
        withFlag
        withCallingCode
        withCountryNameButton
        onSelect={onSelect}
        visible={isPickerVisible} 
        theme={{onBackgroundTextColor:COLOR.white,backgroundColor:COLOR.black}}
        onClose={() => setIsPickerVisible(false)} 
      />
    </View>
  );
};

export default CountryPickerComponent;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    height: 50,
    alignSelf: 'center',
    paddingHorizontal: '2.5%',
    marginVertical: '2.8%',
    borderBottomWidth: 0.6,
    borderColor: COLOR.white,
    borderRadius: 10,
    justifyContent: 'center',
  },

});
