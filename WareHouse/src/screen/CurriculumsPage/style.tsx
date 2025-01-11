import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT, height} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  HeaderLabel: {
    color: COLOR.white,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: FONT.OpenSans_Bold,
    marginVertical: '5%',
  },
  inputContainer: {
    marginTop: '13%',
    marginBottom: '15%',
  },
  Discription: {
    borderWidth: 0.6,
    borderColor: COLOR.white,
    width: '90%',
    height: 120,
    alignSelf: 'center',
    marginTop: '7%',
    paddingHorizontal: '3%',
  },
  DiscriptionText: {
    flex: 1,
    fontFamily: FONT.OpenSans_Regular,
    fontSize: 15,
    color: COLOR.white,
    textAlignVertical: 'top',
  },
});

export default styles;
