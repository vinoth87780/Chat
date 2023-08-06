import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import VectorIcon from '../utlis/VectorIcon';
import profile from '../assets/image/1.jpg';
import {Colors} from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: Colors.primaryColor,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <VectorIcon
            type="Ionicons"
            name="arrow-back"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Image
          style={{height: 40, width: 40, borderRadius: 50, marginHorizontal: 5}}
          source={profile}
        />
        <Text style={{color: Colors.white, marginLeft: 10, fontSize: 17}}>
          Vinoth
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <TouchableOpacity>
          <VectorIcon
            type="Ionicons"
            name="videocam"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <VectorIcon
            type="MaterialIcons"
            name="call"
            size={24}
            color={Colors.white}
            style={{marginHorizontal: 15}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <VectorIcon
            type="Feather"
            name="more-vertical"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatHeader;
