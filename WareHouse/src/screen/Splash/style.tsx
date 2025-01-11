import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

export const styles = StyleSheet.create({
  container: {
   ...commonStyles.mainContainer
  },
  Title: {fontSize: 30, fontFamily: FONT.OpenSans_Bold, color: COLOR.white,textAlign:"center"},
  BlurContainer:{backgroundColor: ' rgba(0, 0, 0, 0.4)', flex: 1}
});
