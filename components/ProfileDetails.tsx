import React, { Component } from 'react'
import { Image, Linking, View } from 'react-native'
import CustomText from './ui/CustomText'
import IconButton from './ui/IconButton'


export class ProfileDetails extends Component {
  render() {
    return (
      <View className='items-center h-1/2 w-screen bg-gray-500'>
        <Image source={require('@/assets/images/davidcho.jpg')} className='max-h-40 max-w-40 rounded-full my-10' ></Image>
        <CustomText variant={'title'} value='Alex'></CustomText>
        <CustomText variant='subtitle' value='Desarrollador'></CustomText>
        <View className='flex-row justify-center space-x-6 mt-
        8 my-10 '>
          <IconButton iconName='logo-instagram' color='pink' presionar={() => Linking.openURL('https://instagram.com')}></IconButton>
          <IconButton iconName='logo-facebook' color='blue' presionar={() => Linking.openURL('https://facebook.com')}></IconButton>
          <IconButton iconName='logo-whatsapp' color='green' presionar={() => Linking.openURL('https://whatsapp.com')}></IconButton>
          <IconButton iconName='logo-steam' color='blue-gray-700' presionar={() => Linking.openURL('https://steamcommunity.com/profiles/76561199869408656')}></IconButton>  
        </View>
      </View>
        
      
    )
  }
}

export default ProfileDetails