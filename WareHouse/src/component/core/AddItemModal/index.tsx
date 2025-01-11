import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';
import {AddModal} from '../../../data/Types';
import {ICons} from '../../../assest';
import Input from '../../commen/Input';
import {useState} from 'react';
import {COLOR, commonStyles, height} from '../../../themes/StyleGuides';
import DropDown from '../DropDown';
import DatePick from '../DatePick';
import Button from '../../commen/Button';
import ImagePickers from '../ImagePickers';
import firestore from '@react-native-firebase/firestore';
import {showErrorToast, showSuccessToast} from '../../../utils/Toast';
const AddItemModal = (Props: AddModal) => {
  const {isOpen, isOf, CategorieItemsList, userId} = Props;
  const [loginForm, setLoginForm] = useState<any>({});
  const [openQualification, setOpenQualification] = useState(false);
  const [Qualification, setQualification] = useState(null);
  const [openAmountList, setopenAmountList] = useState(false);
  const [amountListShow, setamountListShow] = useState(null);
  const [opendate, setOpenDate] = useState(false);
  const [date, setDate] = useState<Date | string>('');
  const [imageUri, setImageUri] = useState('');
  const [loading, setLoading] = useState(false);

  const amountList = [
    {
      title: 'KG',
    },
    {
      title: 'Piece',
    },

    {
      title: 'Liter',
    },
    {
      title: 'Dozen',
    },
    {
      title: 'Box',
    },
  ];
  const handleFormChange = (key: any, value: any) => {
    setLoginForm({...loginForm, [key]: value});
  };
  const handleImageChange = (uri: string) => {
    setImageUri(uri);
    setLoginForm({...loginForm, image: uri});
  };
  const handalAllData = async () => {
    const formData = {
      name: loginForm?.name || '',
      type: loginForm?.type || '',
      PurchasePrice: loginForm?.PurchasePrice || '',
      amountType: loginForm?.amountType || '',
      salePrice: loginForm?.salePrice || '',
      total: loginForm?.total || '',
      itemID: loginForm?.itemID || '',
      expDate: loginForm?.expDate || '',
      discription: loginForm?.discription || '',
      image: imageUri || '',
    };

    try {
      setLoading(true);
      const docRef = firestore().collection('ItemList').doc(userId);
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
      showSuccessToast('Item saved successfully!');
      isOf();
    } catch (error) {
      setLoading(false);
      console.error('Error saving profile: ', error);
      showErrorToast('Failed to save profile. Please try again.');
    }
  };
  const generateUniqueId = () => {
    return `ID-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };
  return (
    <Modal visible={isOpen} transparent>
      <View style={styles.container}>
        <View style={styles.Modal}>
          <TouchableOpacity onPress={isOf} style={styles.CloseBtn}>
            <Image source={ICons.close} style={styles.closeIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Add Item</Text>
          <ScrollView>
            <View>
              <ImagePickers
                pickImage={(x: any) => handleImageChange(x)}
                Icon={loginForm.image}
              />
              <Input
                placeholder={'Name'}
                style={{
                  borderColor: loginForm.NameFocus ? COLOR.primary : COLOR.gray,
                }}
                placeholderColor={
                  loginForm.NameFocus ? COLOR.primary : COLOR.gray
                }
                onFocus={() => handleFormChange('NameFocus', true)}
                onBlur={() => handleFormChange('NameFocus', false)}
                value={loginForm.name}
                onChange={(x: any) => handleFormChange('name', x)}
              />
              <DropDown
                isOpen={openQualification}
                placeText={{fontWeight: '400', fontSize: 14}}
                toggleDropdown={() =>
                  setOpenQualification(openQualification ? false : true)
                }
                options={CategorieItemsList}
                onSelect={(e: any) => {
                  setQualification(e), handleFormChange('type', e);
                }}
                selectedOption={Qualification}
                placeHolder={'Type'}
                container={{
                  borderColor: loginForm.typeFocus ? COLOR.primary : COLOR.gray,
                }}
              />
              <View
                style={{...commonStyles.verticleView, paddingHorizontal: '3%'}}>
                <Input
                  placeholder={'Purchase Price'}
                  style={{
                    borderColor: loginForm.purchasePriceFocus
                      ? COLOR.primary
                      : COLOR.gray,
                    width: '60%',
                  }}
                  keyboardType="number-pad"
                  placeholderColor={
                    loginForm.purchasePriceFocus ? COLOR.primary : COLOR.gray
                  }
                  onFocus={() => handleFormChange('purchasePriceFocus', true)}
                  onBlur={() => handleFormChange('purchasePriceFocus', false)}
                  value={loginForm.PurchasePrice}
                  onChange={(x: any) => handleFormChange('PurchasePrice', x)}
                />

                <DropDown
                  isOpen={openAmountList}
                  placeText={{fontWeight: '400', fontSize: 14}}
                  toggleDropdown={() =>
                    setopenAmountList(openAmountList ? false : true)
                  }
                  options={amountList}
                  onSelect={(e: any) => {
                    setamountListShow(e), handleFormChange('amountType', e);
                  }}
                  selectedOption={amountListShow}
                  placeHolder={'Amount Type'}
                  container={{
                    borderColor: loginForm.typeFocus
                      ? COLOR.primary
                      : COLOR.gray,
                    width: 80,
                    marginRight: '5%',
                  }}
                  DropDownContaianer={{marginRight: 30, height: 60}}
                />
              </View>
              <Input
                placeholder={'Sale Price'}
                style={{
                  borderColor: loginForm.salePriceFocus
                    ? COLOR.primary
                    : COLOR.gray,
                }}
                placeholderColor={
                  loginForm.salePriceFocus ? COLOR.primary : COLOR.gray
                }
                onFocus={() => handleFormChange('salePriceFocus', true)}
                onBlur={() => handleFormChange('salePriceFocus', false)}
                value={loginForm.salePrice}
                onChange={(x: any) => handleFormChange('salePrice', x)}
              />
            </View>
            <DatePick
              open={opendate}
              ShowData={date ? date.toString() : 'Exp Date'}
              isOpen={() => setOpenDate(true)}
              onConfirm={(selectedDate: Date) => {
                setDate(selectedDate);
                handleFormChange('expDate', selectedDate);
                setOpenDate(false);
              }}
              onCancel={() => setOpenDate(false)}
            />
            <View
              style={{...commonStyles.verticleView, paddingHorizontal: '5%'}}>
              <Input
                placeholder={'Item ID'}
                style={{
                  borderColor: loginForm.itemIdFocus
                    ? COLOR.primary
                    : COLOR.gray,
                  width: '70%',
                }}
                placeholderColor={
                  loginForm.itemIdFocus ? COLOR.primary : COLOR.gray
                }
                onFocus={() => handleFormChange('itemIdFocus', true)}
                onBlur={() => handleFormChange('itemIdFocus', false)}
                value={loginForm.itemID}
                onChange={(x: any) => handleFormChange('itemID', x)}
              />
              <TouchableOpacity
                style={styles.IdBtn}
                onPress={() => {
                  const newId = generateUniqueId();
                  handleFormChange('itemID', newId);
                }}>
                <Text style={styles.iDText}>Genrate</Text>
              </TouchableOpacity>
            </View>

            <Input
              placeholder={'Total'}
              style={{
                borderColor: loginForm.totalFocus ? COLOR.primary : COLOR.gray,
              }}
              placeholderColor={
                loginForm.totalFocus ? COLOR.primary : COLOR.gray
              }
              onFocus={() => handleFormChange('totalFocus', true)}
              onBlur={() => handleFormChange('totalFocus', false)}
              value={loginForm.total}
              onChange={(x: any) => handleFormChange('total', x)}
            />
            <View
              style={{
                ...styles.InputDiscription,
                borderColor: loginForm.discriptionFocus
                  ? COLOR.primary
                  : COLOR.gray,
              }}>
              <TextInput
                multiline
                placeholder="Discription"
                placeholderTextColor={
                  loginForm.discriptionFocus ? COLOR.primary : COLOR.gray
                }
                style={styles.InputText}
                onFocus={() => handleFormChange('discriptionFocus', true)}
                onBlur={() => handleFormChange('discriptionFocus', false)}
                value={loginForm.discription}
                onChangeText={(x: any) => handleFormChange('discription', x)}
              />
            </View>

            <Button title="Save" onPress={() => handalAllData()} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default AddItemModal;
