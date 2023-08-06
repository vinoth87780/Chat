import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import bg from '../assets/bg2.jpg';
import MyStatus from '../components/MyStatus';
import RecentStatus from '../components/RecentStatus';
import ViewedStatus from '../components/ViewedStatus';
const StatusScreen = () => {
  return (
    <View style={{}}>
      <ImageBackground source={bg} style={{height: '100%'}}>
        <ScrollView style={{margin: 15}} showsVerticalScrollIndicator={false}>
          <MyStatus />
          <RecentStatus />
          <ViewedStatus />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StatusScreen;
