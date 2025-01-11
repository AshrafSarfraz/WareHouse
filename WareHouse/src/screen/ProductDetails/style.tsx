import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {...commonStyles.mainContainer},
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
  titleItem: {
    fontSize: 30,
    fontFamily: FONT.OpenSans_Bold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '2%',
  },
  discriptionItem: {
    fontSize: 15,
    fontFamily: FONT.OpenSans_Regular,
    color: COLOR.darkGray,
    marginLeft: '5%',
    marginTop: '2%',
  },
  LableStyle: {
    fontSize: 18,
    fontFamily: FONT.OpenSans_Bold,
    color: COLOR.black,
  },
  LableContainer: {
    ...commonStyles.verticleView,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray,
    alignSelf:"center",
    paddingHorizontal:'3%',
    paddingVertical:'2%'
  },
  PriceContainer:{...commonStyles.verticleView,paddingHorizontal:"3%",alignSelf:"center",width:'90%',marginTop:'10%'}
});

export default styles;
