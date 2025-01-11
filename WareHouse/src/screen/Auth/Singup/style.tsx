import {StyleSheet} from 'react-native';
import {
  COLOR,
  height,
  TEXT_STYLE,
  commonStyles,
  FONT,
} from '../../../themes/StyleGuides';

export const styles = StyleSheet.create({
  backgroundImage: {
    ...commonStyles.mainContainer,
  },
  HeaderLabel: {
    color: COLOR.white,
    textAlign: 'center',
    marginTop: height * 0.15,
    fontSize: 30,
    fontFamily: FONT.OpenSans_Bold,
  },
  inputContainer: {
    marginTop: '13%',
  },
  loginButton: {
    marginTop: '10%',
  },
  registerButton: {
    alignItems: 'center',
    marginTop: '6%',
  },
  bottomContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'center',
    marginTop: '7%',
    marginBottom: '10%',
  },
  accountLabel: {
    ...TEXT_STYLE.text_medium,
    color: COLOR.primary,
  },
  registerLabel: {
    ...TEXT_STYLE.text_medium,
    color: COLOR.white,
    textDecorationLine: 'underline',
  },
  Error: {color: COLOR.errorRed, marginLeft: '6%'},
  hideEye: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
});
