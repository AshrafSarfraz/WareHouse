import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {NavigationProps} from '../../../data/Types';
import {useState} from 'react';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';
import {ICons} from '../../../assest';

const CategorieList = (props: NavigationProps) => {
  const {
    navigation,
    data,
    selectedCategories,
    onpressAddCategories,
    onpressAllCategories,
  } = props;
  const [selector, setSelector] = useState(null);
  const handalSelector = (item: string, number: number) => {
    setSelector(number);
    selectedCategories(item);
  };

  const handalAllShowData = () => {
    setSelector(null);
    onpressAllCategories();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: COLOR.primary,
          marginRight: 10,
          height: 30,
          // ...commonStyles.center,
          ...commonStyles.verticleView,
          width: 80,
          overflow: 'hidden',
        }}>
        <TouchableOpacity
          onPress={onpressAddCategories}
          style={{
            backgroundColor: COLOR.primary,
            height: 30,
            width: 40,
            ...commonStyles.center,
          }}>
          <Image
            source={ICons.plus}
            style={{
              width: 10,
              height: 10,
              resizeMode: 'contain',
              tintColor: COLOR.white,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLOR.white2,
            height: 30,
            width: 40,
            ...commonStyles.center,
          }}
          onPress={() => handalAllShowData()}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONT.OpenSans_Bold,
              color: COLOR.darkGray,
            }}>
            All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              ...styles.ListContainer,
              backgroundColor: selector == index ? COLOR.primary : COLOR.white2,
            }}
            onPress={() => handalSelector(item.title, index)}>
            <Text
              style={{
                ...styles.ListText,
                color: selector == index ? COLOR.white : COLOR.darkGray,
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default CategorieList;
