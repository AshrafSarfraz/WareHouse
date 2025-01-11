import {ImageBackground, Text, TextInput, View} from 'react-native';
import styles from './style';
import Scrollable from '../../component/commen/Scrollable';
import Label from '../../component/commen/Label';
import Input from '../../component/commen/Input';
import {useState} from 'react';
import {COLOR, commonStyles} from '../../themes/StyleGuides';
import DropDown from '../../component/core/DropDown';
import {ProficiencyList} from '../../data/DummayData';
import ImagePicker from '../../component/core/ImagePicker';
import Button from '../../component/commen/Button';
import SCREEN from '../../data/ScrName';
import { Images } from '../../assest';

const CurriculumsPage = (props: any) => {
  const {navigation} = props;
  const [loginForm, setLoginForm] = useState<any>({});
  const [openQualification, setOpenQualification] = useState(false);
  const [Qualification, setQualification] = useState(null);
  const handleFormChange = (key: any, value: any) => {
    setLoginForm({...loginForm, [key]: value});
  };

  return (
    <ImageBackground  source={Images.BackGrouond4} style={styles.container}>
      <Scrollable hasInput>
        <Label style={styles.HeaderLabel}>Curriculums Page</Label>

        <View style={styles.inputContainer}>
          <Input
            placeholder={'Skill Name'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('Name', true)}
            onBlur={() => handleFormChange('Name', false)}
            onChange={(x: any) => handleFormChange('Name', x)}
          />
          <DropDown
            isOpen={openQualification}
            placeText={{fontWeight: '400', fontSize: 14}}
            toggleDropdown={() =>
              setOpenQualification(openQualification ? false : true)
            }
            options={ProficiencyList}
            onSelect={(e: any) => setQualification(e)}
            selectedOption={Qualification}
            placeHolder={'Proficiency Level'}
          />

          <Input
            placeholder={'Years of Experience'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            keyboardType="number-pad"
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('Number', true)}
            onBlur={() => handleFormChange('Number', false)}
            onChange={(x: any) => handleFormChange('Number', x)}
          />

          <ImagePicker />
          <View style={styles.Discription}>
            <TextInput
              style={styles.DiscriptionText}
              placeholderTextColor={COLOR.white}
              placeholder="Description"
            />
          </View>
          <View style={styles.Discription}>
            <TextInput
              style={styles.DiscriptionText}
              placeholderTextColor={COLOR.white}
              placeholder="Related Projects"
            />
          </View>
          <View style={styles.Discription}>
            <TextInput
              style={styles.DiscriptionText}
              placeholderTextColor={COLOR.white}
              placeholder="Tag Description"
            />
          </View>

          <Button
            style={{borderColor: COLOR.white, borderWidth: 1, marginTop: '10%'}}
            title="Submit"
            onPress={() => navigation.navigate(SCREEN.LocationDetails)}
          />
        </View>
      </Scrollable>
    </ImageBackground>
  );
};

export default CurriculumsPage;
