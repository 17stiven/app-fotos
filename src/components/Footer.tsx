import React from 'react'
import { Text, StyleSheet } from 'react-native';

export default function Footer() {
    return (
         <Text style={styles.footerStyle}>
          UAM - Jorge Carrillo - Brayan Cifuentes
          </Text>
    );
  }
  const styles = StyleSheet.create({
    footerStyle: { 
      fontSize: 20, 
      fontWeight: 'bold', 
      width: '100%',height: 70, 
      bottom:0,
      position: 'absolute', 
      backgroundColor: '#F67D7D', 
      color: 'white', 
      textAlign:'center',
  }
  });