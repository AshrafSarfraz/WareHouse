import React, {useEffect} from 'react';
import { ImageBackground, Text, View, } from 'react-native';
import SCREEN from '../../data/ScrName';
import {styles} from './style';
import { commonStyles } from '../../themes/StyleGuides';
import { Images } from '../../assest';

export default function Splash(props: any) {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(SCREEN.Login);
    }, 3000);
  }, []);
  return (
    <ImageBackground source={Images.signBack} style={styles.container}>
      <View style={{...commonStyles.BlurContainer,...commonStyles.center}} >
      <Text style={styles.Title}>Warehouse Management System</Text>
      </View>
    </ImageBackground>
  );
}
