import React from 'react'
import { Text, View } from 'react-native'
import CustomText from './ui/CustomText'

const BottomDetails = () => {

  return (
    <View className='h-1/2 w-full bg-gray-700 rounded-xl '>
      <View className='flex-row justify-between items-right p-4 text-white'> //texto
        <CustomText variant='title2' value='Skill'></CustomText>
      </View>
      {/* Chips de Skills */}
      <View className='flex-row flex-wrap justify-center gap-3 mt-3'>
        <View className='bg-gray-800 px-4 py-2 rounded-2xl'>
          <Text className='text-pink-400 font-bold text-lg'>Pu</Text>
        </View>
        <View className='bg-gray-800 px-4 py-2 rounded-2xl'>
          <Text className='text-orange-400 font-bold text-lg'>tA</Text>
        </View>
        <View className='bg-gray-800 px-4 py-2 rounded-2xl'>
          <Text className='text-blue-400 font-bold text-lg'>Ma</Text>
        </View>
        <View className='bg-gray-800 px-4 py-2 rounded-2xl'>
          <Text className='text-purple-400 font-bold text-lg'>dEx</Text>
        </View>

      </View>
      <View>
        <Text className="text-gray-400 text-sm mt-6 p-4">Profession</Text>
        <Text className="text-white font-semibold text-base p-3">React Native Lover</Text>
      </View>
      <Text className="text-gray-400 text-sm mt-4 p-3">Experience</Text>
      <View className="bg-gray-800 mt-2 px-6 py-3 rounded-2xl">
        <Text className="text-white font-semibold">DBD</Text>
        <Text className="text-gray-400 text-xs">Feb 2023 - Present</Text>
      </View>
    </View>
  )
}

export default BottomDetails