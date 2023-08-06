import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ChatlistScreen from '../Screens/ChatlistScreen';
import StatusScreen from '../Screens/StatusScreen';
import CommunityScreen from '../Screens/CommunityScreen';
import CalllistScreen from '../Screens/CalllistScreen';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';
import {TabBarData} from '../data/TabBarData';

const Tab = createMaterialTopTabNavigator();
const TopTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={() => ({
        tabBarActiveTintColor: Colors.tertiary,
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarIndicatorStyle: {backgroundColor: Colors.tertiary},
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })}>
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <VectorIcon
              type="FontAwesome6"
              name="users"
              color={color}
              size={20}
            />
          ),
        }}
      />
      {TabBarData.map(tab => (
        <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabBar;
