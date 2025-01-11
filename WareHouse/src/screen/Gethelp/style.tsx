import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  title: {
    fontSize: 19,
    fontFamily: FONT.OpenSans_Bold,
    color: COLOR.black,
    marginTop: '8%',
    marginLeft: '7%',
  },
  btn:{marginTop:'9%'}
});

export default styles;
