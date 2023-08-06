import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import bg from '../assets/bg2.jpg';
import CallLink from '../components/CallLink';
import RecentCall from '../components/RecentCall';

const CalllistScreen = () => {
  return (
    <ImageBackground source={bg} style={{flex: 1}}>
      <ScrollView style={{padding: 16}} showsVerticalScrollIndicator={false}>
        <CallLink />
        <RecentCall />
      </ScrollView>
    </ImageBackground>
  );
};

export default CalllistScreen;
