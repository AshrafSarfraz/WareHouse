import {Text, View, TouchableOpacity, Linking, Alert} from 'react-native';
import styles from './style';
import Headers from '../../component/commen/Headers';
import Button from '../../component/commen/Button';
import Input from '../../component/commen/Input';
import { useState } from 'react';

const Gethelp = (props: any) => {
  const {navigation} = props;
const[text,setText]=useState("")
  const sendHelpMessage = () => {
    const phoneNumber = '+923156181137'; 
    const message =
      `Hello,Warehouse APP Management i need the help ${text}`;
    const url = `whatsapp://send?text=${encodeURIComponent(
      message,
    )}&phone=${phoneNumber}`;

    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('WhatsApp is not installed on your device.');
        }
      })
      .catch(err => console.error('Failed to open WhatsApp', err));
  };

  return (
    <View style={styles.container}>
      <Headers title="Get Help" firstOnpress={() => navigation.openDrawer()} />

      <Text style={styles.title}>Need Assistance?</Text>
      <Input placeholder={'Enter the Issue'} onChange={(e:any)=>setText(e)}  />
      <Button
        style={styles.btn}
        title="Send Help Message via WhatsApp"
        onPress={sendHelpMessage}
      />
    </View>
  );
};

export default Gethelp;
