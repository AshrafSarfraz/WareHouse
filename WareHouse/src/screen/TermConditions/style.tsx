import { StyleSheet } from 'react-native';
import { COLOR } from '../../themes/StyleGuides';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentContainer: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color:COLOR.black
    },
    lastUpdated: {
      fontSize: 14,
      color:COLOR.gray,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginTop: 20,
      color:COLOR.darkGray
    },
    paragraph: {
      fontSize: 16,
      marginTop: 10,
      lineHeight: 24,
      color:COLOR.gray
    },
  });

export default styles;
