import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  Title: {
    fontSize: 20,
    fontFamily: FONT.OpenSans_Bold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '6%',
  },
  SaleBox: {
    width: '90%',
    height: 100,
    backgroundColor: COLOR.primary,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...commonStyles.center,
    alignSelf:"center",
    marginTop:"2%"
  },
  SaleText:{fontSize:45,color:COLOR.white,fontFamily:FONT.OpenSans_Bold}

});

export default styles;
