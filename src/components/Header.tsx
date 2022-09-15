import React from 'react'
import { Text, StyleSheet } from 'react-native';

export default function Header() {
    return ( 
    <Text style={styles.headerFooterStyle}>
      APP fotos
    </Text>
    );
  }
  const styles = StyleSheet.create({
    headerFooterStyle: { 
      fontSize: 20, 
      fontWeight: 'bold', 
      paddingTop: 30,
      paddingBottom:30,
      backgroundColor:'#F67D7D', 
      textAlign: 'center', 
      color: '#FFFFFF', 
    }
  });