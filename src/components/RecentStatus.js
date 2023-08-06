import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import status from '../assets/image/2.jpg';
import {Colors} from '../theme/Colors';
import {RecentStatusDetails} from '../data/RecentStatusDetails';
import FullModal from '../utlis/FullModal';
const RecentStatus = () => {
  const [showStatusModal, setShowStatusModal] = useState(true);
  const setTimeUp = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: false}));
  };

  const ViewStatus = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: true}));
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 14,
          color: Colors.textGrey,
          paddingBottom: 10,
          paddingTop: 20,
        }}>
        RecentStatus
      </Text>
      {RecentStatusDetails.map(item => (
        <>
          <TouchableOpacity onPress={() => ViewStatus(item.id)}>
            <View key={item.id} style={{flexDirection: 'row', marginTop: 15}}>
              <View
                style={{
                  height: 57,
                  width: 57,
                  backgroundColor: Colors.black,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={item.profile}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: Colors.white,
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
                <Text
                  style={{fontSize: 14, color: Colors.textGrey, marginTop: 3}}>
                  {item.time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <FullModal
            setShowStatusModal={value =>
              setShowStatusModal(prev => ({...prev, [item.id]: value}))
            }
            item={item}
            showStatusModal={showStatusModal[item.id]}
            setTimeUp={() => setTimeUp(item.id)}
          />
        </>
      ))}
    </View>
  );
};

export default RecentStatus;
