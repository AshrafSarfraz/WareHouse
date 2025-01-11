import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {...commonStyles.mainContainer, backgroundColor: COLOR.white2},
  HeaderContainer: {
    ...commonStyles.verticleView,
    backgroundColor: COLOR.primary,
    height: 50,
    paddingHorizontal: '5%',
  },
  Drwer_Bar: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
  title: {fontSize: 20, fontFamily: FONT.OpenSans_SemiBold, color: COLOR.white},
  imagesStyle: {
    width: '100%',
    resizeMode: 'cover',
    height: '30%',
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  BillContainer: {flex: 1},

  secondContainer: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: COLOR.white,
    width: '100%',
    // paddingTop: '5%',
    elevation: 8,
  },
  AddBtn: {
    width: 65,
    height: 40,
    backgroundColor: COLOR.primary,
    ...commonStyles.center,
  },
  BtnText: {fontSize: 18, fontFamily: FONT.OpenSans_Bold, color: COLOR.white},
  BilNameText: {
    fontSize: 15,
    fontFamily: FONT.OpenSans_Bold,
    color: COLOR.black,
  },
  billPrice: {
    fontSize: 14,
    fontFamily: FONT.OpenSans_SemiBold,
    color: COLOR.darkGray,
  },
  InvoiceBtn: {
    paddingHorizontal: '3%',
    height: 25,
    borderRadius: 10,
    borderColor: COLOR.primary,
    borderWidth: 1,
    ...commonStyles.center
  },
  InvoiceText:{}
});

export default styles;
