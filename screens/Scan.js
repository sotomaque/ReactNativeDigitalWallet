/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const Scan = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding * 6,
          paddingHorizontal: SIZES.padding * 2,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={icons.close}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginLeft: SIZES.padding * 1.5,
              color: COLORS.white,
              ...FONTS.h4,
            }}>
            Scan for Payment
          </Text>
        </View>

        <TouchableOpacity
          style={{
            height: 45,
            width: 45,
            backgroundColor: COLORS.green,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('clicked')}>
          <Image
            source={icons.info}
            style={{height: 25, width: 25, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderPaymentMethods() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 260,
          padding: SIZES.padding * 3,
          borderTopLeftRadius: SIZES.radius,
          borderTopRightRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}>
        <Text style={{...FONTS.h4}}>Another Payment Method</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: SIZES.padding * 2,
          }}>
          {/* Phone Number */}
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => console.log('phone number')}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.lightpurple,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Image
                source={icons.phone}
                style={{height: 25, width: 25, tintColor: COLORS.purple}}
                resizeMode="cover"
              />
            </View>
            <Text style={{marginLeft: SIZES.padding, ...FONTS.body4}}>
              Phone Number
            </Text>
          </TouchableOpacity>
          {/* Barcode Button */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: SIZES.padding * 2,
            }}
            onPress={() => console.log('barcode')}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.lightGreen,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Image
                source={icons.barcode}
                style={{width: 25, height: 25, tintColor: COLORS.primary}}
                resizeMode="cover"
              />
            </View>
            <Text style={{marginLeft: SIZES.padding, ...FONTS.body4}}>
              Barcode
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderScanFocus() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={images.focus}
          resizeMode="stretch"
          style={{width: 200, height: 300, marginTop: '-55%'}}
        />
      </View>
    );
  }

  function onBarCodeRead(result) {
    console.log('result', result?.data);
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.transparent}}>
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={{flex: 1}}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        onBarCodeRead={onBarCodeRead}
        androidCameraPermissionOptions={{
          title: 'Permission to use Camera',
          message: 'Camera is required for QR Code Scanning',
          buttonPosition: 'Okay',
          buttonNegative: 'Cancel',
        }}>
        {renderHeader()}
        {renderScanFocus()}
        {renderPaymentMethods()}
      </RNCamera>
    </View>
  );
};

export default Scan;
