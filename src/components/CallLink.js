import {View, Text} from 'react-native';
import React from 'react';
import VectorIcon from '../utlis/VectorIcon';
import {Colors} from '../theme/Colors';

const CallLink = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          backgroundColor: Colors.primaryColor,
          height: 50,
          width: 50,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: Colors.white,
        }}>
        <VectorIcon
          type="Fontisto"
          name="link"
          size={20}
          color={Colors.white}
        />
      </View>

      <View style={{marginLeft: 15, elevation: 5}}>
        <Text
          style={{
            fontSize: 15,
            color: Colors.primaryColor,
            fontWeight: 'bold',
          }}>
          Create call link
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: Colors.textGrey,
          }}>
          Share a link for whatsapp call
        </Text>
      </View>
    </View>
  );
};

export default CallLink;
