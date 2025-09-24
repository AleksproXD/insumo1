//importaciones
import { Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
//interfaces
interface IconButtonProps{
    presionar?: () => void; //funcion que ejecuta al presionar al boton
    iconName:string; //nombre del icono
    color?:string; //color del icono (?:opcional)
}
//principal
const IconButton = ({iconName,presionar, color}:IconButtonProps) => {
  return (
    <Pressable onPress={presionar}>
    <Ionicons 
    name={iconName as any}
    size={24} 
    color={color}
    />
    </Pressable>
  )
}
//export
export default IconButton
//funciones complementarias