import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    // ...commonStyles.mainContainer,
  },

  line: {
    backgroundColor: COLOR.darkGray,
    height: 1,
    width: '90%',
    marginTop: '10%',
    marginBottom: '14%',
    borderRadius: 15,
    alignSelf: 'center',
  },
  close: {width: 16, height: 16, resizeMode: 'cover', tintColor: COLOR.black},
  closeBtn: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: '10%',
    marginBottom: '4%',
  },

  titleStyle: {
    fontSize: 18,
    fontFamily: FONT.OpenSans_SemiBold,
    color: COLOR.jetBlack,
    marginLeft: '5%',
  },
  IconStyle: {width: 20, height: 20, resizeMode: 'center', marginLeft: '5%'},
  btnContainer: {
    ...commonStyles.horizontalView,
    height: 40,
  },
});
