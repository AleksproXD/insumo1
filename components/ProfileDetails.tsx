import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import IconButton from './ui/IconButton'
import CustomText from './ui/CustomText'


export class ProfileDetails extends Component {
  render() {
    return (
      <View className='flex-col items-center '>
        <Image source={require('@/assets/images/circo.jpg')} className='max-h-40 max-w-40 rounded-full' ></Image>
        <CustomText variant={'title'} value='Alex'></CustomText>
        <CustomText variant='subtitle' value='Desarrollador'></CustomText>
        <Text className='text-3x1 font-bold text-center'>Circo</Text>
        <Text className='text-2x1 text-center tex-gray-300'>ndeah</Text>
        <IconButton iconName='logo-instagram' color='pink'></IconButton>
        <IconButton iconName='logo-facebook' color='blue'></IconButton>
        <IconButton iconName='logo-whatsapp' color='green'></IconButton>
        <IconButton iconName='logo-linkedin' color='red'></IconButton>


      </View>
    )
  }
}

export default ProfileDetails