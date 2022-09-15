import React, { useState } from "react"
import { Button, Image, Text, View } from "react-native"
import { launchCamera, CameraOptions, ImagePickerResponse } from 'react-native-image-picker'

export const CameraOpen = () => {
  const [image, setImage] = useState('')
  const takePicture = () => {
    const options:CameraOptions = {
      mediaType: 'photo',
      includeBase64: true,
      cameraType: 'back',
    }

    launchCamera(options, (response:ImagePickerResponse) => {
      if(response.errorCode){
        console.error(response.errorMessage);
      }else if(response.didCancel){
        console.info('user cancel picker');
      }else if(response.assets && response.assets[0]){
        const path = response.assets[0].uri;
        if(path)
          setImage(path);
      }else{
        console.info('No image selected');
      }
    })

  }
  return (
    <View style = {{ flex: 1, justifyContent: 'center' }}>
      { image.length>0 ? <Image style = {{
        alignSelf: 'center',
        height: 200,
        width: 200,
      }}
      source = {{ uri: image }}></Image>:''}
      <Button title="Abrir camara" onPress={ takePicture }></Button>
    </View>
  )
}
