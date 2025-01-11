import {Text, View} from 'react-native';

import styles from './style';
import CategorieList from '../CategorieList';
import CategorieItems from '../CategorieItems';
import { NavigationProps } from '../../../data/Types';

const ItemList = (props:NavigationProps) => {
  const{navigation,data,CategorieItemsList,deleteItem,selectedCategories,onpressAddCategories,onpressAllCategories}=props
  return (
    <View style={styles.container}>
      <CategorieList data={CategorieItemsList} selectedCategories={(e:any)=>selectedCategories(e)} onpressAddCategories={onpressAddCategories} onpressAllCategories={onpressAllCategories} />
      <View style={{marginTop:"5%"}} >
        <CategorieItems  data={data} navigation={navigation} deleteItem={(e:any)=>deleteItem(e)}   />
      </View>
    </View>
  );
};
export default ItemList;
