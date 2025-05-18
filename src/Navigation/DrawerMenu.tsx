import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  getDrawerStatusFromState,
  useDrawerStatus,
} from "@react-navigation/drawer";
import Images from "@constants/Images";

import McVectorIcon from "@components/McVectorIcon/McVectorIcon";
import McImage from "@components/McImage/McImage";
import McText from "@components/McText/McText";

import  {Avant, Home, EspaceClient, EspaceIard, EspaceVie, Settings, Help, Chat, Login, Register, Forgot, Otp, Invitee } from '@screens';
import { NavigationContext, useTheme } from "@react-navigation/native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { enableScreens } from "react-native-screens";

const Drawer = createDrawerNavigator();
const MENUs = [
  {
    name: 'Home',
    label: 'Accueil',
    iconName:'dashboard',
    groupName: 'Generale',
  },
  {
    name: 'EspaceClient',
    label: 'Espace client',
    iconName:'user',
    groupName: 'Generale',
  },
  {
    name: 'EspaceIard',
    label: 'Espace IARD',
    iconName:'compass',
    groupName: 'Assurances',
  },
  {
    name: 'EspaceVie',
    label: 'Espace Vie',
    iconName: 'medkit',
    groupName: 'Assurances',
  },
  {
    name: 'Settings',
    label: 'Parametres',
    iconName:'cogs',
    groupName: 'Autres',
  },
  {
    name: 'Help',
    label: 'Aide',
    iconName:'question-circle',
    groupName: 'Autres',
  },
  {
    name: 'Chat',
    label: 'Discussions',
    iconName:'comments-o',
    groupName: 'Autres',
  },
];


const CustomDrawerContent = ({ navigation, theme, ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDrawerOpen = useDrawerStatus();
  const { state, descriptors } = props;
  let lastGroupName = '';
  let newGroup = true;


  return (
    <View style={{ flex: 1 }}>
      {/** Header */}
      <View style={{
        width: 210,
        height: 107,
        borderBottomEndRadius: 107 / 2,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: theme.colors.boxBackground,
            marginRight: 10,
          }}>
            <McImage source={Images.avatar1} />
          </View>
          <View>
            <McText semi size={16} color={theme.colors.titre}>Honore OUEDRAOGO</McText>
            <McText medium size={10} color={theme.colors.text3}>Ouagadougou, BF</McText>
          </View>
        </View>
      </View>

      {/** DrawerItems */}
      <DrawerContentScrollView scrollEnabled={false} contentContainerStyle={{}} style={{ marginLeft: -18 }}>
        {MENUs?.map((menu, index) => {

          if (lastGroupName !== menu.groupName) {
            newGroup = true;
            lastGroupName = menu.groupName;
          } else newGroup = false;
          return (
            <>
              {newGroup ? (
                <View style={styles.sectionContainer}>
                  <McText key={menu.groupName} color={theme.colors.titre} style={{ marginLeft: 16 }}>
                    {menu.groupName}
                  </McText>
                  {/* <View style={styles.sectionLine} /> */}
                </View>
              ) : null}
              <DrawerItem
                activeTintColor={theme.colors.background} focused={activeIndex === index} label={({ focused }) => {
                  return (<View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                  }}>
                    <View style={{
                      width: 4,
                      height: 25,
                      marginRight: 20,
                      backgroundColor: focused ? theme.colors.primary : 'transparent'
                    }}>
                      
                    </View>
                    <McVectorIcon type="FontAwesome" name={menu.iconName} color="#7B7F9E" size={20} style={{marginRight: 5}}/>
                    <McText size={16}
                      bold={true}
                      style={focused ? styles.itemFocus : theme.colors.text1}
                      color={theme.colors.text1}>{menu.label}</McText>
                  </View>)
                }} key={index} onPress={()=>{
                  navigation.navigate(menu.name);
                  setActiveIndex(index);
                }}>

              </DrawerItem>
            </>

          )
        })}
      </DrawerContentScrollView>

      {/** Footer */}
      <View style={{ marginBottom: 15, marginLeft: 30 }}>
        <TouchableOpacity style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
        onPress={()=>{
          navigation.closeDrawer();
          navigation.navigate('Avant');
        }}>
          
          <McImage source={Images.logout} style={{ tintColor: theme.colors.text2, marginRight: 8 }} />
          <McText bold size={16} color={theme.colors.text2}>Deconnexion</McText>
        </TouchableOpacity>
        <View style={{ marginTop: 32 }}>
          <McText medium size={10} color={theme.colors.titre}>SANLAM-ALLIANZ | Version 2.0.1</McText>
        </View>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  sectionLine: {
    backgroundColor: '#7B7F9E',
    color:'#7B7F9E',
    flex: 1,
    height: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  itemFocus: {
    fontWeight: 'bold',
  }
});


const DrawerMenu = () => {
  enableScreens();
  const [progress, setProgress] = useState(0);
  const theme = useTheme();

  const updateProgress = (val: number) => {
    setProgress(val);
  };
  const scale = interpolate(progress, [0, 1], [1, 0.75]);

  const borderRadius = interpolate(progress, [0, 1], [1, 30]);

  const animatedStyle = useAnimatedStyle(() => ({
    borderRadius,
    transform: [{ scale }],
  }));


  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.boxBackground
    }}>
      <Drawer.Navigator
        detachInactiveScreens={true}
        screenOptions={{
          drawerHideStatusBarOnOpen: false,
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '60%',
            backgroundColor: 'transparent'
          },
          sceneStyle: {
            backgroundColor: 'transparent'
          }
        }}
        initialRouteName="Home"
        drawerContent={(customProps) => {
          // setTimeout(()=>{
          //console.log(useDrawerStatus());

          // })
          return (
            <CustomDrawerContent navigation={customProps.navigation} usel theme={theme} updateProgress={updateProgress} />
          )
        }}

      >
        <Drawer.Screen name="Home" >
          {(customProps) => <Home {...customProps} animatedStyle={animatedStyle} theme={theme}/>}
        </Drawer.Screen>
        <Drawer.Screen name="EspaceClient" >
          {(customProps) => <EspaceClient {...customProps} animatedStyle={animatedStyle} theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="EspaceIard" >
          {(customProps) => <EspaceIard {...customProps} animatedStyle={animatedStyle} theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="EspaceVie" >
          {(customProps) => <EspaceVie {...customProps} animatedStyle={animatedStyle} theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="Settings" >
          {(customProps) => <Settings {...customProps} animatedStyle={animatedStyle} theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="Help" >
          {(customProps) => <Help {...customProps} animatedStyle={animatedStyle} theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="Chat" >
          {(customProps) => <Chat {...customProps} animatedStyle={animatedStyle} theme={theme} />}
        </Drawer.Screen>

        <Drawer.Screen name="Avant" >
          {(customProps) => <Avant {...customProps} animatedStyle={animatedStyle} theme={theme} />}
        </Drawer.Screen>

        <Drawer.Screen name="Login" >
          {(customProps) => <Login {...customProps}  theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="Register" >
          {(customProps) => <Register {...customProps}  theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="Invitee" >
          {(customProps) => <Invitee {...customProps}  theme={theme} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerMenu;
