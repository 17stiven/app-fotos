import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { CameraImage } from '../components/CameraImage'
import { CameraOpen } from '../components/CameraOpen'

export const CameraOptions = () => {
  return (
    <SafeAreaView>
        <Text>CameraOptions</Text>
        <CameraImage></CameraImage>
        <CameraOpen></CameraOpen>
    </SafeAreaView>
   
  )
}
