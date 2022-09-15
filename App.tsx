/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { CameraOptions } from './src/screens/CameraOptions';
import { SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, height: '100%' }}>
    <Header></Header>
    <CameraOptions></CameraOptions>
    <Footer></Footer>
</SafeAreaView>
  );
};
export default App;
