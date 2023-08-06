import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';

const CommunityScreen = () => {
  return (
    <View>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../assets/bg2.jpg')}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{fontSize: 25, color: Colors.white, marginBottom: 10}}>
            Introducing Community
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: Colors.white,
              marginBottom: 10,
              opacity: 0.7,
              textAlign: 'center',
              paddingHorizontal: 30,
              letterSpacing: 0.7,
              lineHeight: 22,
              marginTop: 5,
            }}>
            Easly orginize your related groups and send notifications. Now, your
            Communition, like neighbourhood or schools, can have thief space.
          </Text>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              width: '80%',
              justifyContent: 'center',
              backgroundColor: Colors.primaryColor,
              height: 50,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: Colors.tertiary,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 18,
                color: Colors.white,
                fontWeight: '500',
              }}>
              Start your Community
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CommunityScreen;
