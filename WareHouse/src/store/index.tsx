// authStore.js
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const authStore = async (email:any, password:any, name:any) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const userId = userCredential.user.uid; // Get the user ID

    // Store user data in Firestore with the user ID as the document name
    await firestore().collection('Users').doc(userId).set({
      name: name,
      email: email,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    return userCredential;
  } catch (error:any) {
    throw new Error(error.message);
  }
};
export const sendPasswordResetEmail = async (email:any) => {
  try {
    await auth().sendPasswordResetEmail(email);
    console.log('Password reset email sent successfully');
    
  } catch (error:any) {
    console.log('Error sending password reset email:', error.message);
    throw new Error(error.message);
  }
};
