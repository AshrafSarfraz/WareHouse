import {ImageBackground, Text, View} from 'react-native';
import styles from './style';
import Scrollable from '../../component/commen/Scrollable';
import Label from '../../component/commen/Label';
import Input from '../../component/commen/Input';
import {useState} from 'react';
import {COLOR, commonStyles} from '../../themes/StyleGuides';
import DatePick from '../../component/core/DatePick';
import DropDown from '../../component/core/DropDown';
import {QualificationList} from '../../data/DummayData';
import ImagePicker from '../../component/core/ImagePicker';
import Button from '../../component/commen/Button';
import SCREEN from '../../data/ScrName';
import { Images } from '../../assest';

const AcademicForm = (props: any) => {
  const {navigation} = props;
  const [loginForm, setLoginForm] = useState<any>({});
  const [opendate, setOpenDate] = useState(false);
  const [date, setDate] = useState<Date | string>('');
  const [openGraduationDateStart, setOpenGraduationDateStart] = useState(false);
  const [GraduationStart, setGraduationStart] = useState<Date | string>('');
  const [openGraduationDateEnd, setOpenGraduationDateEnd] = useState(false);
  const [GraduationEnd, setGraduationEnd] = useState<Date | string>('');
  const [openQualification, setOpenQualification] = useState(false);
  const [Qualification, setQualification] = useState(null);
  const handleFormChange = (key: any, value: any) => {
    setLoginForm({...loginForm, [key]: value});
  };
  return (
    <ImageBackground source={Images.BackGrouond4} style={styles.container}>
      <Scrollable hasInput>
        <Label style={styles.HeaderLabel}>Academic Form</Label>

        <View style={styles.inputContainer}>
          <Input
            placeholder={'Enter Name'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('Name', true)}
            onBlur={() => handleFormChange('Name', false)}
            onChange={(x: any) => handleFormChange('Name', x)}
          />
          <DatePick
            open={opendate}
            ShowData={date ? date.toString() : 'Enter Date'}
            isOpen={() => setOpenDate(true)}
            onConfirm={(selectedDate: Date) => {
              setDate(selectedDate);
              setOpenDate(false);
            }}
            onCancel={() => setOpenDate(false)}
          />
          <Input
            placeholder={'Enter Email'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            keyboardType="email-address"
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('Email', true)}
            onBlur={() => handleFormChange('Email', false)}
            onChange={(x: any) => handleFormChange('Email', x)}
          />
          <Input
            placeholder={'Enter Number'}
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
          <DropDown
            isOpen={openQualification}
            placeText={{fontWeight: '400', fontSize: 14}}
            toggleDropdown={() =>
              setOpenQualification(openQualification ? false : true)
            }
            options={QualificationList}
            onSelect={(e: any) => setQualification(e)}
            selectedOption={Qualification}
            placeHolder={'Highest Qualification'}
          />
          <Input
            placeholder={'CGPA & Grade'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('Institution', true)}
            onBlur={() => handleFormChange('Institution', false)}
            onChange={(x: any) => handleFormChange('Institution', x)}
          />
          <Input
            placeholder={'Institution Name'}
            style={{
              borderColor: loginForm.emailFocus ? COLOR.white : COLOR.white,
            }}
            textStyle={{color: COLOR.white}}
            placeholderColor={loginForm.emailFocus ? COLOR.white : COLOR.white}
            onFocus={() => handleFormChange('Institution', true)}
            onBlur={() => handleFormChange('Institution', false)}
            onChange={(x: any) => handleFormChange('Institution', x)}
          />

          <View style={{...commonStyles.verticleView, paddingHorizontal: '4%'}}>
            <DatePick
              style={{width: 155}}
              open={openGraduationDateStart}
              ShowData={
                GraduationStart ? GraduationStart.toString() : 'Year Start'
              }
              isOpen={() => setOpenGraduationDateStart(true)}
              onConfirm={(selectedDate: Date) => {
                setGraduationStart(selectedDate);
                setOpenGraduationDateStart(false);
              }}
              onCancel={() => setOpenGraduationDateStart(false)}
            />
            <DatePick
              style={{width: 155}}
              open={openGraduationDateEnd}
              ShowData={GraduationEnd ? GraduationEnd.toString() : 'Year End'}
              isOpen={() => setOpenGraduationDateEnd(true)}
              onConfirm={(selectedDate: Date) => {
                setGraduationEnd(selectedDate);
                setOpenGraduationDateEnd(false);
              }}
              onCancel={() => setOpenGraduationDateEnd(false)}
            />
          </View>
          <ImagePicker />

          <Button
            style={{borderColor: COLOR.white, borderWidth: 1,marginTop:"10%"}}
            title="Submit"
            onPress={() => navigation.navigate(SCREEN.CurriculumsPage)}
          />
        </View>
      </Scrollable>
    </ImageBackground>
  );
};

export default AcademicForm;
