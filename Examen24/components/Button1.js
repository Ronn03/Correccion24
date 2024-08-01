import React from "react";
import {   StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Button1 (){


    return(
        <TouchableOpacity>
    <LinearGradient
        // Button Linear Gradient
        colors={['#ffff']}
      
        style={styles.button}>
        <Text style={styles.text1}>Generar Consejo</Text>
      </LinearGradient>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderColor: '#000',
      borderWidth: 2,
     
    },
    text1: {
        fontSize: 15,
          color: '#000',
          fontWeight: 'bold',
        
         marginTop: 8,
      
        },
    button: {
    marginTop: 80,
     borderRadius: 20,
    width: 180,
    height: 40,
    alignItems: 'center',
    borderColor: '#000',
    borderBottomColor: '#000',
    borderStyle: 'solid',
   
   
    } 
    
  });