import {View, Text, Image} from 'react-native';
import React from 'react';
import status from '../assets/image/2.jpg';
import {Colors} from '../theme/Colors';
import {RecentStatusDetails} from '../data/RecentStatusDetails';
import {ViewedStatusData} from '../data/ViewedStatusData';
const ViewedStatus = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 14,
          color: Colors.textGrey,
          paddingBottom: 10,
          paddingTop: 20,
        }}>
        Viewed Status
      </Text>
      {ViewedStatusData.map(item => (
        <>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{height: 50, width: 50}} key={item.id}>
              <Image
                source={item.profile}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: Colors.textGrey,
                  backgroundColor: Colors.primaryColor,
                }}
              />
            </View>
            <View style={{marginLeft: 15}}>
              <Text
                style={{fontSize: 15, fontWeight: '500', color: Colors.white}}>
                {item.name}
              </Text>
              <Text
                style={{fontSize: 14, color: Colors.textGrey, marginTop: 3}}>
                {item.time}
              </Text>
            </View>
          </View>
        </>
      ))}
    </View>
  );
};

export default ViewedStatus;
