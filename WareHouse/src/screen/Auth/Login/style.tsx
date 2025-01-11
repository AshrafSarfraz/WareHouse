import {StyleSheet} from 'react-native';
import {
  COLOR,
  commonStyles,
  FONT,
  height,
  TEXT_STYLE,
} from '../../../themes/StyleGuides';

export const styles = StyleSheet.create({
  backgroundImage: {
    ...commonStyles.mainContainer,

  },
  HeaderLabel: {
    color: COLOR.white,
    textAlign: 'center',
    marginTop: height * 0.22,
    fontSize: 30,
    fontFamily: FONT.OpenSans_Bold,
  },
  inputContainer: {
    marginTop: '13%',
  },
  loginButton: {
    marginTop: '10%',
  },
  bottomContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'center',
    marginTop: '7%',
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
  forgetButton: {alignSelf: 'flex-end', marginRight: '5.5%'},
  hideEye: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
  Error: {color: COLOR.errorRed, marginLeft: '6%'},
  ButtonContainer: {
    height: 55,
    width: '92%',
    alignSelf: 'center',
    backgroundColor: COLOR.primary,
    ...commonStyles.center,
    borderRadius: 12,
    marginTop:"10%"
},
ButtonText: {
    color: COLOR.black,
    fontSize:16,
    fontFamily:FONT.OpenSans_SemiBold
},
});
