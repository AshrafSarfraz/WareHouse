import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Input from '../../commen/Input';
import {AddModal} from '../../../data/Types';
import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {showErrorToast, showSuccessToast} from '../../../utils/Toast';

const AddCategorieModal = (Props: AddModal) => {
  const {isOpen, isOf, CategorieItemsList, userId} = Props;
  const [input, setinput] = useState('');
  const [loginForm, setLoginForm] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleFormChange = (key: any, value: any) => {
    setLoginForm({...loginForm, [key]: value});
  };

  const handalAllData = async () => {
    const formData = {
      title: loginForm?.title || '',
    };

    try {
      setLoading(true);
      const docRef = firestore().collection('CategorieList').doc(userId);
      const doc = await docRef.get();

      if (doc.exists) {
        const existingItems = doc.data()?.items || [];
        await docRef.update({
          items: [...existingItems, formData],
        });
      } else {
        await docRef.set({
          items: [formData],
        });
      }

      setLoading(false);
      showSuccessToast('Categories saved successfully!');
      isOf();
    } catch (error) {
      setLoading(false);
      console.error('Error saving profile: ', error);
      showErrorToast('Failed to save profile. Please try again.');
    }
  };
  return (
    <Modal transparent visible={isOpen}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.title}>Add Categories</Text>
          <Input
            placeholder={'Enter the Categories'}
            onChange={(x: any) => handleFormChange('title', x)}
          />

          <View style={styles.BtnContainer}>
            <TouchableOpacity style={styles.btnStyle} onPress={isOf}>
              <Text style={styles.btnText}>Cancle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle} onPress={()=>handalAllData()} >
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default AddCategorieModal;
