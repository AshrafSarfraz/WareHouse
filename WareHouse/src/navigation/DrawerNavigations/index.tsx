import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {styles} from './style';
import {COLOR} from '../../themes/StyleGuides';
import {ICons} from '../../assest';
import SCREEN from '../../data/ScrName';
import * as screens from '../../screen';
import ImagePickers from '../../component/core/ImagePickers';
import firestore from '@react-native-firebase/firestore';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const {navigation, userId} = props;
  const [activeScreen, setActiveScreen] = useState('Home');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(userData);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await firestore().collection('Users').doc(userId).get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchUserData();
  }, [userId]);

  const PageData = [
    {title: 'Home', Icons: ICons.home, screenName: SCREEN.Home},
    {title: 'Profile', Icons: ICons.profile, screenName: SCREEN.Profile},
    {title: 'Get help', Icons: ICons.support, screenName: SCREEN.Gethelp},
    {
      title: 'Term & conditions',
      Icons: ICons.terms_and_conditions,
      screenName: SCREEN.TermConditions,
    },
  ];

  const handleNavigation = (screenName: string, title: string) => {
    setActiveScreen(title);
    navigation.navigate(screenName);
  };

  return (
    <View {...props}>
      <View>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => navigation.closeDrawer()}>
          <Image style={styles.close} source={ICons.close} />
        </TouchableOpacity>

        <ImagePickers title={'Emma'} />

        <View style={styles.line} />
      </View>

      <ScrollView>
        <View>
          {PageData.map(item => (
            <TouchableOpacity
              key={item.title}
              style={[
                styles.btnContainer,
                activeScreen === item.title && {backgroundColor: COLOR.primary},
              ]}
              onPress={() => handleNavigation(item.screenName, item.title)}>
              <Image source={item.Icons} style={styles.IconStyle} />
              <Text
                style={[
                  styles.titleStyle,
                  activeScreen === item.title && {color: COLOR.white},
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={{...styles.btnContainer, marginTop: '20%'}}
          onPress={() => navigation.navigate(SCREEN.Login)}>
          <Image
            source={ICons.logout}
            tintColor={COLOR.red}
            style={styles.IconStyle}
          />
          <Text style={{...styles.titleStyle, color: COLOR.red}}>LogOut</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const DrawerNavigations = ({route}) => {
  const {userId} = route.params;
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent {...props} userId={userId} />
      )}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 240,
          height: '95%',
          marginTop: '14%',
          borderTopRightRadius: 30,
          backgroundColor: COLOR.white2,
          elevation: 10,
        },
        overlayColor: 'transparent',
      }}>
      <Drawer.Screen
        name={SCREEN.Home}
        component={(props: any) => <screens.Home {...props} userId={userId} />}
      />
      <Drawer.Screen
        name={SCREEN.Profile}
        component={(props: any) => (
          <screens.Profile {...props} userId={userId} />
        )}
      />
      <Drawer.Screen name={SCREEN.Gethelp} component={screens.Gethelp} />
      <Drawer.Screen
        name={SCREEN.TermConditions}
        component={screens.TermConditions}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigations;
