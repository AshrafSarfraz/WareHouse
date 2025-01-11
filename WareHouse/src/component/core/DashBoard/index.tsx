import {ScrollView, Text, View} from 'react-native';

import styles from './style';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AddModal} from '../../../data/Types';

const DashBoard = (props: AddModal) => {
  const {userId} = props;
  const [totalSale, setTotalSale] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [monthlySale, setMonthlySale] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const fetchSalesAndIncome = async () => {
    try {
      const userDocRef = firestore().collection('Users').doc(userId);
      const userDoc = await userDocRef.get();
      if (userDoc.exists) {
        setTotalSale(userDoc.data().totalSale || 0);
        setTotalIncome(userDoc.data().totalIncome || 0);

        // Get the current month and year (e.g., "2024-10")
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = String(currentDate.getMonth() + 1).padStart(
          2,
          '0',
        );
        const yearMonth = `${currentYear}-${currentMonth}`;

        // Fetch monthly data
        const monthlyDocRef = userDocRef
          .collection('MonthlyData')
          .doc(yearMonth);
        const monthlyDoc = await monthlyDocRef.get();
console.log("monthlyDoc",monthlyDoc)
        if (monthlyDoc.exists) {
          setMonthlySale(monthlyDoc.data().monthlySale || 0);
          setMonthlyIncome(monthlyDoc.data().monthlyIncome || 0);
        }
      }
    } catch (error) {
      console.error('Error fetching sales and income:', error);
    }
  };

  useEffect(() => {
    fetchSalesAndIncome();
  }, [userId]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Title}>Total Sale</Text>
        <View style={styles.SaleBox}>
          <Text style={styles.SaleText}>
            {totalSale}<Text style={{fontSize: 12}}>PKR</Text>
          </Text>
        </View>
        <Text style={styles.Title}>Total Income</Text>
        <View style={styles.SaleBox}>
          <Text style={styles.SaleText}>
            {totalIncome}<Text style={{fontSize: 12}}>PKR</Text>
          </Text>
        </View>
        <Text style={styles.Title}>Monthly Sale</Text>
        <View style={styles.SaleBox}>
          <Text style={styles.SaleText}>
            {monthlySale}<Text style={{fontSize: 12}}>PKR</Text>
          </Text>
        </View>
        <Text style={styles.Title}>Monthly Incomes</Text>
        <View style={{...styles.SaleBox, marginBottom: '10%'}}>
          <Text style={styles.SaleText}>
            {monthlyIncome}<Text style={{fontSize: 12}}>PKR</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default DashBoard;
