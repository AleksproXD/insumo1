import { Text } from 'react-native'
import React from 'react'

interface CustomTextProps{
    value:string;
    variant: "normal"|"subtitle"|"title"

}

const CustomText = ({value,variant}:CustomTextProps) => {
  return (
      <Text className={selectVariant(variant)}>{value}</Text>
  )
}

export default CustomText

function selectVariant(variant:string):string{
switch(variant){
    case "normal":
        return "text-black font-normal"
    case "subtitle":
        return "text-gray-500 font-semibold text-xl"
    case "title":
        return "text-black font-bold text-2xl"
    default:
        return "text-black font-normal"
}
}
