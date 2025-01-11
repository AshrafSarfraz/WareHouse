import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {ICons, Images} from '../../../assest';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';
import {NavigationProps} from '../../../data/Types';
import SCREEN from '../../../data/ScrName';

const CategorieItems = (props: NavigationProps) => {
  const {navigation, data,deleteItem} = props;
// console.log("Data===>>",data)
const formatDate = (timestamp: any) => {
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item,index}) => (
          <TouchableOpacity
            style={{...styles.listContainer,borderColor:COLOR.red,borderWidth:item.total<=10?1:0}}
            onPress={() =>
              navigation.navigate(SCREEN.ProductDetails, {data: item})
            }>
            <Image source={ {uri: 'file://' + item.image}} style={styles.image} />
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                paddingHorizontal: '3%',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.dateContainet}>
                  <Text style={styles.Lible}>Total:</Text>
                  <Text style={styles.date}>{item.total}</Text>
                </View>

                <View style={styles.dateContainet}>
                  <Text style={styles.Lible}>ExDate:</Text>
                  <Text style={styles.date}>{formatDate(item.expDate)}</Text>
                </View>
              </View>
              <View style={{justifyContent: 'flex-end',}}>
                <TouchableOpacity style={{position:"absolute",top:5,alignSelf:"center"}} onPress={()=>deleteItem(index)}  >
                <Image source={ICons.trash} style={styles.trash} />
                </TouchableOpacity>
                <Text
                  style={{
                    ...styles.date,
                    fontSize: 15,
                    fontFamily: FONT.OpenSans_Bold,
                  }}>
                  {item.salePrice}PKR
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default CategorieItems;
