import {View, Text, ScrollView} from 'react-native';
import React, {useRef} from 'react';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';
import {MessageData} from './MessageData';

const ChatBody = () => {
  const UserId = '1';
  const scrollViewRef = useRef();
  const UserMessageView = ({message, time}) => {
    return (
      <View
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'row',

          marginVertical: 5,
        }}>
        <View
          style={{
            backgroundColor: Colors.primaryColor,
            paddingVertical: 6,
            paddingHorizontal: 15,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            flexDirection: 'row',
            borderBottomRightRadius: 30,
            elevation: 10,
            alignItems: 'baseline',
          }}>
          <Text style={{color: Colors.white, fontSize: 16}}>{message}</Text>
          <Text style={{color: Colors.textGrey, paddingLeft: 5, fontSize: 10}}>
            {time}
          </Text>
          <VectorIcon
            type="FontAwesome5"
            name="check-double"
            size={14}
            color={Colors.blue}
            style={{marginLeft: 10}}
          />
        </View>
      </View>
    );
  };
  const OtherUserMessageView = ({message, time}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          marginVertical: 5,
        }}>
        <View
          style={{
            backgroundColor: Colors.secondaryColor,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            flexDirection: 'row',
            borderBottomRightRadius: 30,
            elevation: 10,
            alignItems: 'baseline',
          }}>
          <Text style={{color: Colors.black, fontSize: 16}}>{message}</Text>
          <Text style={{color: Colors.textGrey, paddingLeft: 5, fontSize: 10}}>
            {time}
          </Text>
        </View>
      </View>
    );
  };
  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
  };
  return (
    <>
      <ScrollView
        style={{flex: 1}}
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={scrollToBottom}>
        {MessageData.map(item => (
          <>
            {item.id === UserId ? (
              <UserMessageView message={item.message} time={item.time} />
            ) : (
              <OtherUserMessageView message={item.message} time={item.time} />
            )}
          </>
        ))}
      </ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View
          style={{
            width: 40,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <VectorIcon
            name="angle-dobule-down"
            type="Fontisto"
            size={14}
            color={Colors.white}
            onPress={scrollToBottom}
          />
        </View>
      </View>
    </>
  );
};

export default ChatBody;
