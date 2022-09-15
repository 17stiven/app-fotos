import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { CameraImage } from '../components/CameraImage'
import { CameraOpen } from '../components/CameraOpen'

export const CameraOptions = () => {
  return (
    <SafeAreaView style={{flex:1, alignItems: 'center'}}>
        <Text>Opciones de camara</Text>
        <CameraImage></CameraImage>
        <CameraOpen></CameraOpen>
    </SafeAreaView>
   
  )
}
