import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';
import bg from '../assets/bg2.jpg';
const Chatscreen = () => {
  return (
    <>
      <ChatHeader />
      <ImageBackground source={bg} style={{flex: 1, paddingHorizontal: 12}}>
        <ChatBody />
        <ChatFooter />
      </ImageBackground>
    </>
  );
};

export default Chatscreen;
