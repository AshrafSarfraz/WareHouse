import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.center,
    flex: 1,
    backgroundColor: COLOR.Blur,
  },
  modal: {
    width: '90%',
    borderRadius: 10,
    paddingVertical: '3%',
    backgroundColor: COLOR.white,
    paddingHorizontal: '2%',
  },
  title: {
    fontSize: 20,
    fontFamily: FONT.OpenSans_SemiBold,
    color: COLOR.black,
    marginLeft: '6%',
    marginTop: '4%',
  },
  BtnContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    marginTop: '5%',
    marginBottom:'3%'
  },
  btnText: {
    fontSize: 18,
    fontFamily: FONT.OpenSans_SemiBold,
    color: COLOR.white,
  },
  btnStyle: {
    width: '45%',
    height: 40,
    backgroundColor: COLOR.primary,
    borderRadius: 10,
    ...commonStyles.center,
  },
});

export default styles;
