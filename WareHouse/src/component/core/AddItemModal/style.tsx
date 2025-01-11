import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.center,
    backgroundColor: COLOR.lightBlack,
    flex: 1,
  },
  Modal: {
    width: '90%',
    paddingVertical: '5%',
    backgroundColor: COLOR.white,
    borderRadius: 10,
    height: '80%',
  },
  closeIcon: {width: 18, height: 18, resizeMode: 'contain'},
  CloseBtn: {alignSelf: 'flex-end', marginRight: '5%'},
  title: {
    fontSize: 20,
    fontFamily: FONT.OpenSans_Bold,
    color: COLOR.black,
    alignSelf: 'center',
    marginBottom: '6%',
  },
  InputDiscription: {
    width: '89%',
    height: 80,
    alignSelf: 'center',
    paddingHorizontal: '2.5%',
    borderWidth: 0.6,
    // borderColor: COLOR.primary,
    borderRadius: 3,
    marginBottom: '8%',
    marginTop: '5%',
  },
  InputText: {
    flex: 1,
    fontFamily: FONT.OpenSans_Regular,
    fontSize: 15,
    color: COLOR.black,
    textAlignVertical: 'top',
  },
  IdBtn: {
    height: 30,
    borderRadius: 7,
    backgroundColor: COLOR.primary,
    ...commonStyles.center,
    paddingHorizontal:'3%'
  },
  iDText: {fontSize: 13, fontFamily: FONT.OpenSans_Bold, color: COLOR.white},
});

export default styles;
