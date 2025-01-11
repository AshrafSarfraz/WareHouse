import firestore from '@react-native-firebase/firestore';

// Function to add total sale and income to the existing values in Firestore
export const TotalSaleAndIncome = async (userId: any, data: any) => {
  try {
    const userDocRef = firestore().collection('Users').doc(userId);

    // Check if the user document exists
    const userDoc = await userDocRef.get();

    // Get the current month and year (e.g., "2024-10")
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();  // e.g., 2024
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0'); // e.g., "10"
    const yearMonth = `${currentYear}-${currentMonth}`;  // e.g., "2024-10"

    // Reference to the user's monthly income and sales document (year-month)
    const monthlyDocRef = userDocRef.collection('MonthlyData').doc(yearMonth);

    // Check if the document for the current month exists
    const monthlyDoc = await monthlyDocRef.get();

    // Update user total sale and income
    if (userDoc.exists) {
      // Increment the total sale and total income
      await userDocRef.update({
        totalSale: firestore.FieldValue.increment(data.totalSale),   // Increment totalSale by new amount
        totalIncome: firestore.FieldValue.increment(data.totalIncome), // Increment totalIncome by new amount
      });

      // Update monthly sale and income
      if (monthlyDoc.exists) {
        // If the monthly document exists, increment the existing monthly sale and monthly income
        await monthlyDocRef.update({
          monthlySale: firestore.FieldValue.increment(data.totalSale),   // Increment monthlySale by new amount
          monthlyIncome: firestore.FieldValue.increment(data.totalIncome), // Increment monthlyIncome by new amount
        });
      } else {
        // If the monthly document doesn't exist, create it with the initial values
        await monthlyDocRef.set({
          monthlySale: data.totalSale,
          monthlyIncome: data.totalIncome,
          createdAt: firestore.FieldValue.serverTimestamp(), // Store the timestamp
        });
      }
    } else {
      // If the user document doesn't exist, create it with initial values
      await userDocRef.set({
        totalSale: data.totalSale,
        totalIncome: data.totalIncome,
        totalSales: 0, // Initialize total sales (if needed)
        totalIncome: 0, // Initialize total income (if needed)
      });

      // Create the monthly document for the current month
      await monthlyDocRef.set({
        monthlySale: data.totalSale,
        monthlyIncome: data.totalIncome,
        createdAt: firestore.FieldValue.serverTimestamp(), // Store the timestamp
      });
    }

    console.log('Total sale and income successfully updated.');
  } catch (error) {
    console.error('Error updating total sale and income in Firestore:', error);
  }
};
