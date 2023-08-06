import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {Colors} from '../theme/Colors';
import TopTabBar from '../navigation/TopTabBar';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <TopTabBar />
    </>
  );
};

export default HomeScreen;
