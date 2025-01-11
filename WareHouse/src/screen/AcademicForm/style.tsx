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
});

export default styles;
