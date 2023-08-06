import {View, Text, Image} from 'react-native';
import React from 'react';
import Profile from '../assets/image/1.jpg';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';

const MyStatus = () => {
  return (
    <View style={{flexDirection: 'row', elevation: 5}}>
      <Image
        source={Profile}
        style={{borderRadius: 50, width: 50, height: 50, position: 'relative'}}
      />
      <View
        style={{
          backgroundColor: Colors.white,
          width: 20,
          height: 20,
          borderRadius: 50,
          position: 'absolute',
          bottom: 0,
          left: 30,
        }}>
        <VectorIcon
          name="pluscircle"
          type="AntDesign"
          size={20}
          color={Colors.primaryColor}
        />
      </View>

      <View style={{marginLeft: 10}}>
        <Text
          style={{
            fontSize: 15,
            color: Colors.primaryColor,
            fontWeight: 'bold',
          }}>
          My Status
        </Text>
        <Text style={{fontSize: 12, color: Colors.textGrey}}>
          Tab to add an status
        </Text>
      </View>
    </View>
  );
};

export default MyStatus;
