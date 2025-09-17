import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'


export class ProfileDetails extends Component {
  render() {
    return (
      <View className='flex-col items-center '>
        <Image source={require('@/assets/images/circo.jpg')} className='max-h-40 max-w-40 rounded-full' ></Image>
        <Text className='text-3x1 font-bold text-center'>Circo</Text>
        <Text className='text-2x1 text-center tex-gray-300'>ndeah</Text>
        
      </View>
    )
  }
}

export default ProfileDetails