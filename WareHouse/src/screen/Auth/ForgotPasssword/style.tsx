import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT, height} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  backgroundImage: {
  ...commonStyles.mainContainer
  },
  HeaderLabel: {
    color: COLOR.white,
    textAlign: 'center',
    marginTop: height * 0.22,
    fontSize: 20,
    fontFamily: FONT.OpenSans_Bold,
    width: '76%',
    alignSelf: 'center',
  },
  inputContainer: {
    marginTop: '6%',
  },
  loginButton: {
    marginTop: '20%',
  },
  Arrow:{width:25,height:25,resizeMode:"contain",tintColor:COLOR.white},
  backbtn:{margin:"5%"}
});

export default styles;
