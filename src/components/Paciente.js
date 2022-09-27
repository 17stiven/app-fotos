import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {formatearFecha} from '../helpers'

const Paciente=({
    item,
    setModalVisible,
    setPaciente,
    pacienteEditar,
    pacienteEliminar,
    setModalPaciente
})=>{
const {paciente,fecha, id}=item
return (
  <Pressable onLongPress={() => {
    setModalPaciente(true)
    setPaciente(item)
  }}>
    <View style={styles.contenedorBotones}>
      <Text style={styles.texto}>Paciente:</Text>
      <Text style={styles.btnTexto}>{Paciente}</Text>
      <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

      <View style={styles.btnEditar}>
        <Pressable onLongPress={() => {
          setModalVisible(true)
          pacienteEditar(id)
        }}>

        </Pressable  >

        <Pressable onLongPress={() => {pacienteEliminar(id)}}>
<Text style={{}}></Text> 
        </Pressable>
      </View>
    </View>
  </Pressable>
);
}



const styles = StyleSheet.create({
  contenedor: {
      backgroundColor: '#FFF',
      padding: 20,
      borderBottomColor: '#94a3B8',
      borderBottomWidth: 1
  },
  label: {
      color: '#374151',
      textTransform: 'uppercase',
      fontWeight: '700',
      marginBottom: 10
  },
  texto: {
      color: '#6D28D9',
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 10
  },
  fecha: {
      color: '#374151'
  },
  contenedorBotones: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20
  },
  btn: {
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderRadius: 5
  },
  btnEditar: {
      backgroundColor: '#F59E0B'
  },
  btnEliminar: {
      backgroundColor: '#EF4444'
  },
  btnTexto: {
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: 12,
      color: '#FFF'
  }

})