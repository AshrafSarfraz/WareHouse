import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screens from '../../screen';
import SCREEN from '../../data/ScrName';
import DrawerNavigations from '../DrawerNavigations';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREEN.Splash} component={screens.Splash} />
        <Stack.Screen name={SCREEN.Login} component={screens.Login} />
        <Stack.Screen name={SCREEN.Singup} component={screens.Singup} />
        <Stack.Screen
          name={SCREEN.ForgotPasssword}
          component={screens.ForgotPasssword}
        />
        <Stack.Screen
          name={SCREEN.AcademicForm}
          component={screens.AcademicForm}
        />
        <Stack.Screen
          name={SCREEN.CurriculumsPage}
          component={screens.CurriculumsPage}
        />
        <Stack.Screen
          name={SCREEN.LocationDetails}
          component={screens.LocationDetails}
        />
        <Stack.Screen
          name={SCREEN.DrawerNavigations}
          component={DrawerNavigations}
        />
        <Stack.Screen
          name={SCREEN.ProductDetails}
          component={screens.ProductDetails}
        />
         <Stack.Screen
          name={SCREEN.CreateBill}
          component={screens.CreateBill}
        />
          <Stack.Screen
          name={SCREEN.Invoice}
          component={screens.Invoice}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
