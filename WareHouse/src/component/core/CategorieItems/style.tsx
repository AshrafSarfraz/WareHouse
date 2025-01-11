import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
  },
  listContainer: {
    width: '90%',
    height: 80,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: COLOR.white2,
    alignSelf: 'center',
    marginBottom: '3%',
    overflow: 'hidden',
    ...commonStyles.horizontalView,
  },
  image: {width: 70, height: 90, resizeMode: 'cover'},
  title: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: FONT.OpenSans_SemiBold,
    color: COLOR.black,
  },
  dateContainet: {...commonStyles.horizontalView},
  Lible: {
    fontSize: 13,
    color: COLOR.black,
    fontFamily: FONT.OpenSans_Bold,
  },
  date: {
    fontSize: 12,
    fontFamily: FONT.OpenSans_SemiBold,
    color: COLOR.primary,
    marginLeft: '2%',
  },
  trash:{width:18,height:18,resizeMode:"center"}
});

export default styles;
