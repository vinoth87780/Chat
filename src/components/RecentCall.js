import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import CallListData from '../data/CallListData';
import VectorIcon from '../utlis/VectorIcon';

const RecentCall = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 14,
          color: Colors.textGrey,
          paddingBottom: 10,
          paddingTop: 20,
        }}>
        Recent
      </Text>
      {CallListData.map(item => (
        <>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 54,
                  width: 54,
                  borderWidth: 5,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id}>
                <Image
                  source={item.profile}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,

                    borderColor: Colors.primaryColor,
                  }}
                />
              </View>
              <View style={{marginLeft: 15}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: Colors.white,
                  }}>
                  {item.name}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <VectorIcon
                    type="Feather"
                    name="arrow-up-right"
                    size={20}
                    color={Colors.primaryColor}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: Colors.black,
                      marginTop: 3,
                      opacity: 0.3,
                    }}>
                    {item.time}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{}}>
              <VectorIcon
                type="FontAwesome5"
                name="video"
                size={24}
                color={Colors.primaryColor}
              />
            </View>
          </View>
        </>
      ))}
    </View>
  );
};

export default RecentCall;
