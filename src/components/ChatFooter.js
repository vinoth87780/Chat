import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from '../utlis/VectorIcon';
import {Colors} from '../theme/Colors';

const ChatFooter = () => {
  const [message, setMessage] = useState();
  const [sendEnable, setSendEnable] = useState(false);
  const onChange = value => {
    setMessage(value);
    setSendEnable(true);
  };
  const onSend = () => {
    setMessage('');
    setSendEnable(false);
    Alert.alert('Message send');
  };
  return (
    <View
      style={{
        elevation: 5,
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      <View
        style={{
          width: '82%',
          flexDirection: 'row',

          backgroundColor: Colors.primaryColor,
          justifyContent: 'space-between',
          borderRadius: 20,
          elevation: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <VectorIcon
            type="MaterialIcons"
            name="emoji-emotions"
            size={24}
            color={Colors.secondaryColor}
          />
          <TextInput
            placeholder="Message"
            style={{
              color: Colors.white,
              marginLeft: 4,
              fontSize: 17,
            }}
            onChangeText={value => onChange(value)}
            placeholderTextColor={Colors.white}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <VectorIcon
            type="Entypo"
            name="attachment"
            size={18}
            color={Colors.secondaryColor}
            style={{marginRight: 15}}
          />
          {!sendEnable && (
            <>
              <VectorIcon
                type="FontAwesome"
                name="rupee"
                size={20}
                color={Colors.secondaryColor}
                style={{marginRight: 15}}
              />
              <VectorIcon
                type="FontAwesome"
                name="camera"
                size={18}
                color={Colors.secondaryColor}
                style={{marginRight: 10}}
              />
            </>
          )}
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={onSend}>
          <View
            style={{
              height: 50,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',

              borderRadius: 50,
              backgroundColor: Colors.white,
              elevation: 10,
            }}>
            {sendEnable ? (
              <VectorIcon
                type="Ionicons"
                name="send"
                size={25}
                color={Colors.blue}
                style={{}}
              />
            ) : (
              <VectorIcon
                type="MaterialCommunityIcons"
                name="microphone"
                size={25}
                color={'red'}
                style={{}}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatFooter;
