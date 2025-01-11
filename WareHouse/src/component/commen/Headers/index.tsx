import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';
import {HeadersProps} from '../../../data/Types';
import {ICons} from '../../../assest';

const Headers = (props: HeadersProps) => {
  const {firstOnpress, title, secondOnpress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={firstOnpress}>
        <Image source={ICons.drawer_bars} style={styles.Drwer_Bar} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={secondOnpress}>
        <Image source={ICons.invoice} style={styles.Drwer_Bar} />
      </TouchableOpacity>
    </View>
  );
};
export default Headers;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.verticleView,
    backgroundColor: COLOR.primary,
    height: 50,
    paddingHorizontal: '5%',
  },
  Drwer_Bar: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
  title: {fontSize: 20, fontFamily: FONT.OpenSans_SemiBold, color: COLOR.white},
});
