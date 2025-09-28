//importaciones
import { Pressable, StyleSheet , ViewStyle } from 'react-native'
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
    <Pressable onPress={presionar} className="bg-white border-10 border-gray-400 rounded-full p-5 padding 5" style={styles.iconShadow}>

    <Ionicons 
    name={iconName as any}
    size={24} 
    color={color}
    
    />
    </Pressable>
    
  )
}
const styles = StyleSheet.create({
  iconShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderRadius: 20,
    padding: 5,
  } as ViewStyle
})

//export
export default IconButton
//funciones complementarias