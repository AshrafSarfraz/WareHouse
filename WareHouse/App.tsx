import {StatusBar, View} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import FlashMessage from 'react-native-flash-message';
import {COLOR} from './src/themes/StyleGuides';
import 'react-native-reanimated';
const GovApp = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLOR.primary} />
      <StackNavigation />
      <FlashMessage position="top" />
    </View>
  );
};
export default GovApp;
