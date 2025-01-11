import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICons} from '../../assest';
import styles from './style';
import {useRoute} from '@react-navigation/native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';
import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import generatePDF from '../../component/other/InvoiceFun/indec';
import {TotalSaleAndIncome} from '../../component/other/TotalSaleAndIncome';

const CreateBill = (props: any) => {
  const {navigation} = props;
  const route = useRoute();
  const {allitems, userIds} = route.params;
  console.log('userId', userIds);
  const [search, setSearch] = useState('');
  const [quantity, setQuantity] = useState('');
  const [selectedItem, setSelectedItem] = useState();
  const [quantityError, setQuantityError] = useState(false);
  const [filteredItems, setFilteredItems] = useState(allitems); // State to store filtered items
  const [billList, setBillList] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [totalIncomeBill, setTotalIncomeBill] = useState(0);

  const handalSearch = (value: any) => {
    setSearch(value);
    const filteredData = allitems.filter(
      item => item.name.toLowerCase().includes(value.toLowerCase()), // Filter based on item name
    );
    setFilteredItems(filteredData);
  };

  const handalQuantity = (value: any) => {
    setQuantity(value);
    const selectedItem = allitems.find(item => item.name === search);
    if (selectedItem) {
      if (parseInt(value) > selectedItem.total) {
        setQuantityError(true);
      } else {
        setQuantityError(false);
      }
    }
  };

  const handalAddItem = () => {
    const List = {
      ItemName: selectedItem?.name,
      ItemPrice: selectedItem?.salePrice,
      itemID: selectedItem?.itemID,
      PurchasePrice: selectedItem?.PurchasePrice,
      ItemQuantity: quantity,
    };

    if (selectedItem && quantity) {
      setBillList(prevList => [...prevList, List]);

      const itemTotalPrice = selectedItem?.salePrice * parseInt(quantity);
      const itemTotalIncome =
        (selectedItem?.salePrice - selectedItem?.PurchasePrice) *
        parseInt(quantity);
      setTotalBill(prevTotal => prevTotal + itemTotalPrice);
      setTotalIncomeBill(prevIncome => prevIncome + itemTotalIncome);
      const total={
        totalIncome:itemTotalIncome,
        totalSale:itemTotalPrice

      }
TotalSaleAndIncome(userIds,total)
    

      setQuantity('');
      setSearch('');
    } else {
      Alert.alert(
        'Select Item',
        'Please select an item and quantity before adding.',
      );
    }
  };
  const updateItemQuantities = async (billList, userId) => {
    try {
      const docRef = firestore().collection('ItemList').doc(userId);
      const doc = await docRef.get();
      if (doc.exists) {
        const existingItems = doc.data()?.items || [];

        console.log("existingItems",billList)
        const updatedItems = existingItems.map((item:any) => {
          const billItem = billList.find(bill => bill.itemID === item.itemID);
          console.log("billItem",billItem)
          if (billItem) {
            if (item.total >= billItem.ItemQuantity) {
              return {
                ...item,
                total: item.total - billItem.ItemQuantity,
              };
            } else {
              throw new Error(`Not enough stock for ${billItem.ItemName}.`);
            }
          }

          return item;
        });

        await docRef.update({items: updatedItems});

        return true;
      } else {
        throw new Error('Item list not found.');
      }
    } catch (error) {
      console.error('Error updating item quantities:', error);
      throw error;
    }
  };
  const handalCreateInvoice = async () => {
    if (billList.length > 0) {
      try {
        const updateResult = await updateItemQuantities(billList, userIds);

        if (updateResult) {
          generatePDF(billList);
          setBillList([]);
        }
      } catch (error) {
        Alert.alert(
          'Error',
          error.message || 'Something went wrong while creating the invoice.',
        );
      }
    } else {
      Alert.alert(
        'Select Item',
        'Please select an item and quantity before creating an invoice.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ICons.left_arrow} style={styles.Drwer_Bar} />
        </TouchableOpacity>
        <Text style={styles.title}>Create Invoice</Text>
        <View />
      </View>

      <View style={styles.BillContainer}>
        <FlatList
          data={billList}
          renderItem={({item}) => (
            <View
              style={{
                ...commonStyles.verticleView,
                borderBottomWidth: 1,
                borderBottomColor: COLOR.gray,
                paddingHorizontal: '5%',
                paddingVertical: '2%',
              }}>
              <Text style={styles.BilNameText}>{item?.ItemName}</Text>
              <View>
                <Text style={styles.billPrice}>{item?.ItemPrice} PKR</Text>
                <Text style={{...styles.billPrice, alignSelf: 'flex-end'}}>
                  {item?.ItemQuantity}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.secondContainer}>
        <View>
          <View
            style={{
              ...commonStyles.verticleView,
              paddingHorizontal: '6%',
              marginTop: '2%',
              marginBottom: '2%',
            }}>
            <Text
              style={{
                ...styles.BilNameText,
                alignSelf: 'center',
              }}>
              Income:{totalIncomeBill}
            </Text>
            <Text
              style={{
                ...styles.BilNameText,
                alignSelf: 'center',
              }}>
              Total:{totalBill}
            </Text>
            <TouchableOpacity
              style={styles.InvoiceBtn}
              onPress={() => handalCreateInvoice()}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONT.OpenSans_Bold,
                  color: COLOR.primary,
                }}>
                Invoice
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              ...commonStyles.verticleView,
              borderColor: COLOR.darkGray,
              borderWidth: 1,
              width: '90%',
              alignSelf: 'center',
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            {/* Search Input */}
            <TextInput
              value={search}
              onChangeText={(e: any) => handalSearch(e)}
              placeholder={'Add Item'}
              placeholderTextColor={COLOR.gray}
              style={{
                width: '50%',
                height: 40,
                paddingHorizontal: 6,
                color: COLOR.black,
              }}
            />
            <TextInput
              placeholderTextColor={COLOR.gray}
              placeholder={'Quantity'}
              keyboardType="number-pad"
              onChangeText={(e: any) => handalQuantity(e)}
              value={quantity}
              style={{
                width: '30%',
                height: 40,
                paddingHorizontal: 6,
                color: COLOR.black,
                borderColor: COLOR.red,
                borderWidth: quantityError ? 1 : 0,
                backgroundColor: quantityError
                  ? 'rgba(255, 0, 0, 0.2)'
                  : COLOR.white2,
              }}
            />
            <TouchableOpacity
              style={styles.AddBtn}
              onPress={() => handalAddItem()}>
              <Text style={styles.BtnText}>Add</Text>
            </TouchableOpacity>
          </View>

          {/* FlatList for displaying items */}
          <FlatList
            style={{marginBottom: '22%'}}
            data={filteredItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  setSearch(item.name), setSelectedItem(item);
                }}
                style={{
                  width: '90%',
                  height: 40,
                  backgroundColor: COLOR.white2,
                  ...commonStyles.verticleView,
                  alignSelf: 'center',
                  marginTop: '3%',
                  borderRadius: 7,
                  paddingHorizontal: '5%',
                  borderColor: COLOR.red,
                  borderWidth: item.total <= 10 ? 1 : 0,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: FONT.OpenSans_Bold,
                    color: COLOR.black,
                  }}>
                  {item.name}
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: FONT.OpenSans_Bold,
                      color: COLOR.primary,
                    }}>
                    {item.salePrice} PKR
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: FONT.OpenSans_Bold,
                      color: COLOR.primary,
                      alignSelf: 'flex-end',
                    }}>
                    {item.total}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateBill;
