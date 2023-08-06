import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import Status from '../assets/image/10.jpg';
import profile from '../assets/image/1.jpg';
import {Colors} from '../theme/Colors';
import VectorIcon from './VectorIcon';
import ProgressBar from './ProgressBar';
const FullModal = props => {
  const {showStatusModal, setShowStatusModal, setTimeUp, item} = props;
  const updateModalStatus = () => {
    setShowStatusModal(prev => ({...prev, [item.id]: false}));
  };
  return (
    <Modal animationType="fade" visible={showStatusModal}>
      <View
        style={{
          backgroundColor: Colors.primaryColor,
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <ProgressBar setTimeUp={setTimeUp} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 12,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{marginRight: 5}}
              onPress={() =>
                setShowStatusModal(prev => ({...prev, [item.id]: false}))
              }>
              <VectorIcon
                type="Ionicons"
                name="arrow-back"
                size={24}
                color={Colors.white}
              />
            </TouchableOpacity>
            <Image
              source={profile}
              style={{height: 40, width: 40, borderRadius: 50}}
            />
            <Text
              style={{
                fontSize: 17,
                color: Colors.white,
                paddingLeft: 10,
                marginTop: 10,
              }}>
              Vinoth
            </Text>
          </View>

          <VectorIcon
            type="Entypo"
            name="dots-three-vertical"
            color={Colors.secondaryColor}
            size={18}
          />
        </View>

        <Image source={Status} style={{height: '75%', width: '100%'}} />
        <Text
          style={{
            fontSize: 16,
            color: Colors.white,
            textAlign: 'center',
            marginTop: 10,
          }}>
          About my new travel 😍🥰😘
        </Text>

        <View style={{}}>
          <TouchableOpacity
            onPress={() =>
              setShowStatusModal(prev => ({...prev, [item.id]: false}))
            }>
            <VectorIcon
              style={{alignItems: 'center'}}
              type="Entypo"
              name="chevron-small-up"
              color={Colors.secondaryColor}
              size={24}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              color: Colors.white,
              textAlign: 'center',
              marginBottom: 10,
            }}>
            Replay
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default FullModal;
