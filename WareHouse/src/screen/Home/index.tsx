import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import Headers from '../../component/commen/Headers';
import {COLOR} from '../../themes/StyleGuides';
import DashBoard from '../../component/core/DashBoard';
import ItemList from '../../component/core/ItemList';
import {ICons} from '../../assest';
import AddItemModal from '../../component/core/AddItemModal';
import firestore from '@react-native-firebase/firestore';
import AddCategorieModal from '../../component/core/AddCategorieModal';
import SCREEN from '../../data/ScrName';

export default function Home(props: any) {
  const {navigation, userId} = props;
  const [selectors, setSelector] = useState(false);
  const [selectedCategories, setselectedCategories] = useState('');
  const [addModal, setAddModal] = useState(false);
  const [categoriesModal, setCategoriesModal] = useState(false);
  const [items, setItems] = useState([]);
  const [allitems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<any[]>([]);
  console.log(items);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await firestore()
          .collection('CategorieList')
          .doc(userId)
          .onSnapshot(docSnapshot => {
            const CategoriesList = docSnapshot.data()?.items || [];
            console.log('categoryList', CategoriesList);
            setCategories(CategoriesList);
          });
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const itemUnsubscribe = firestore()
      .collection('ItemList')
      .doc(userId)
      .onSnapshot(docSnapshot => {
        if (docSnapshot.exists) {
          const itemList = docSnapshot.data()?.items || [];
          setAllItems(itemList);
          const filteredItems = selectedCategories
            ? itemList.filter((item: any) => item.type === selectedCategories)
            : itemList;
          setItems(filteredItems);
          console.log('itemList', itemList);
        }
      });

    return () => {
      itemUnsubscribe();
    };
  }, [userId, selectedCategories]);

  const handalfilter = () => {
    setselectedCategories(''); // Reset to show all items
  };

  const handleDelete = async (itemIndex: number) => {
    const updatedItems = items.filter((_, index) => index !== itemIndex);
    await firestore()
      .collection('ItemList')
      .doc(userId)
      .update({items: updatedItems});
    setItems(updatedItems);
  };

  const handalAddItem = () => {
    if (categories.length === 0) {
      Alert.alert(
        'No Categories Available',
        'Please add categories before adding items.',
        [{text: 'OK'}],
      );
    } else {
      setAddModal(true);
    }
  };

  return (
    <View style={styles.container}>
      <Headers
        title="Ware House"
        firstOnpress={() => navigation.openDrawer()}
        secondOnpress={() =>
          navigation.navigate(SCREEN.CreateBill, {
            allitems: allitems,
            userIds: userId,
          })
        }
      />

      <View style={styles.selectorContainer}>
        <TouchableOpacity
          style={{
            ...styles.selector,
            backgroundColor: selectors ? COLOR.white2 : COLOR.primary,
          }}
          onPress={() => setSelector(false)}>
          <Text
            style={{
              ...styles.selectorText,
              color: selectors ? COLOR.darkGray : COLOR.white,
            }}>
            Item List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.selector,
            backgroundColor: selectors ? COLOR.primary : COLOR.white2,
          }}
          onPress={() => setSelector(true)}>
          <Text
            style={{
              ...styles.selectorText,
              color: selectors ? COLOR.white : COLOR.darkGray,
            }}>
            DashBoard
          </Text>
        </TouchableOpacity>
      </View>
      {selectors ? (
        <DashBoard userId={userId} />
      ) : (
        <ItemList
          onpressAllCategories={() => handalfilter()}
          onpressAddCategories={() => setCategoriesModal(true)}
          selectedCategories={(e: any) => setselectedCategories(e)}
          data={items}
          navigation={navigation}
          CategorieItemsList={categories}
          deleteItem={(e: any) => handleDelete(e)}
        />
      )}
      <TouchableOpacity style={styles.AddItem} onPress={() => handalAddItem()}>
        <Image source={ICons.plus} style={styles.AddItemIcon} />
      </TouchableOpacity>

      <AddItemModal
        isOf={() => setAddModal(false)}
        isOpen={addModal}
        CategorieItemsList={categories}
        userId={userId}
      />
      <AddCategorieModal
        isOpen={categoriesModal}
        isOf={() => setCategoriesModal(false)}
        userId={userId}
      />
    </View>
  );
}
