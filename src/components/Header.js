import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTFAMILY} from '../theme/Theme';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.primaryColor,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: Colors.white,
          fontFamily: FONTFAMILY.Lobster,
        }}>
        Whatsapp
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <VectorIcon
          type="Feather"
          name="camera"
          color={Colors.secondaryColor}
          size={22}
        />
        <VectorIcon
          type="Ionicons"
          name="search"
          color={Colors.secondaryColor}
          size={20}
          style={{marginHorizontal: 22}}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={Colors.secondaryColor}
          size={18}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
