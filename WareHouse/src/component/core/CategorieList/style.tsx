import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {width: '90%',alignSelf:"center",marginTop:"3%",flexDirection:"row"},
  ListContainer: {
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: COLOR.primary,
    marginRight: 10,
    height: 30,
    ...commonStyles.center,
    
  },
  ListText: {
    fontSize: 12.5,
    fontWeight: '700',
    fontFamily: FONT.OpenSans_SemiBold,
    color: COLOR.white,
  },
});

export default styles;
