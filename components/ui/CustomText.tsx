import { Text } from 'react-native'
import React from 'react'

interface CustomTextProps{
    value:string;
    variant: "normal"|"subtitle"|"title"|"title2";

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
        return "text-white font-semibold text-xl"
    case "title":
        return "text-black font-bold text-2xl"
    case "title2":
        return "text-white font-bold text-2xl"    
    default:
        return "text-black font-normal"
}
}
