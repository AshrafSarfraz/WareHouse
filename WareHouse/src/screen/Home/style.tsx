import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  selectorContainer: {
    ...commonStyles.verticleView,
    width: '90%',
    height: 60,
    alignSelf: 'center',
    marginTop: '5%',
  },
  selector: {
    width: '49%',
    height: 45,
    backgroundColor: COLOR.primary,
    borderRadius: 10,
    ...commonStyles.center,
    elevation: 5,
  },
  selectorText: {fontSize: 18, fontFamily: FONT.OpenSans_Medium},
  AddItem: {
    width: 60,
    height: 60,
    backgroundColor: COLOR.primary,
    borderRadius: 30,
    ...commonStyles.center,
    position:"absolute",
    bottom:"5%",
    alignSelf:"flex-end",
    right:"8%",
    borderWidth:1,
    borderColor:COLOR.white
  },
  AddItemIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
});
