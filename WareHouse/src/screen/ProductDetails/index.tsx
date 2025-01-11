import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import Headers from '../../component/commen/Headers';
import {ICons} from '../../assest';
import {COLOR} from '../../themes/StyleGuides';

const ProductDetails = ({route,navigation}) => {
  const {data} = route.params;
  console.log(data);
  const formatDate = (timestamp: any) => {
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ICons.left_arrow} style={styles.Drwer_Bar} />
        </TouchableOpacity>
        <Text style={styles.title}>Details</Text>
        <View />
      </View>
      <Image source={{uri: 'file://' + data?.image}} style={styles.imagesStyle} />
      <Text style={styles.titleItem}>{data?.title}</Text>
      <Text style={styles.discriptionItem}>{data?.discription}</Text>
      <View style={styles.LableContainer}>
        <Text style={styles.LableStyle}>Type</Text>
        <Text style={styles.discriptionItem}>{data?.type}</Text>
      </View>
      <View style={styles.LableContainer}>
        <Text style={styles.LableStyle}>Total</Text>
        <Text style={styles.discriptionItem}>{data?.total}</Text>
      </View>
      <View style={styles.LableContainer}>
        <Text style={styles.LableStyle}>ExDate</Text>
        <Text style={styles.discriptionItem}>{formatDate(data?.expDate)}</Text>
      </View>
      <View style={styles.PriceContainer}>
        <Text style={styles.LableStyle}>Price</Text>

        <Text
          style={{
            ...styles.LableStyle,
            color: COLOR.primary,
            alignSelf: 'flex-end',

            textDecorationLine: 'underline',
          }}>
          {data?.salePrice}PKR
        </Text>
      </View>
    </View>
  );
};
export default ProductDetails;
