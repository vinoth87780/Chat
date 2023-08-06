import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import profile from '../assets/image/1.jpg';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';
import ChatListData from '../data/ChatListData';
import {useNavigation} from '@react-navigation/native';
const Chatlist = () => {
  const navigation = useNavigation();
  const onNavigate = () => {
    navigation.navigate('Chat');
  };
  return (
    <>
      {ChatListData.map(item => (
        <View key={item.id} style={{flex: 1}}>
          <TouchableOpacity
            onPress={onNavigate}
            style={{
              flexDirection: 'row',
              padding: 12,
              justifyContent: 'space-between',
              borderRadius: 20,
              marginVertical: 3,
              marginHorizontal: 5,
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  marginRight: 10,
                }}
                source={item.profile}
              />
              <View>
                <Text style={{color: Colors.white, fontSize: 16}}>
                  {item.name}
                </Text>
                <Text style={{color: Colors.tertiary, fontSize: 14}}>
                  {item.message}
                </Text>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 12, color: Colors.textGrey}}>
                {item.time}
              </Text>
              {item.mute && (
                <VectorIcon
                  style={{marginTop: 5, marginLeft: 20}}
                  type="Entypo"
                  name="sound-mute"
                  color={Colors.tertiary}
                  size={20}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default Chatlist;
