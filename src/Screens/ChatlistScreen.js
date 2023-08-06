import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import bg from '../assets/bg2.jpg';
import Chatlist from '../components/Chatlist';
import VectorIcon from '../utlis/VectorIcon';
import {Colors} from '../theme/Colors';

const ChatlistScreen = () => {
  return (
    <View>
      <ImageBackground
        style={{width: '100%', height: '100%', position: 'relative'}}
        source={bg}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Chatlist />
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.tertiary,
            height: 55,
            width: 55,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 20,
            right: 20,
            elevation: 5,
          }}>
          <VectorIcon
            name="message-bulleted"
            type="MaterialCommunityIcons"
            size={28}
            color={Colors.black}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default ChatlistScreen;
