import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function CustomSplashScreen({ onLoad }) {
  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.preventAutoHideAsync();
      // Simula la duración del GIF
      setTimeout(async () => {
        await SplashScreen.hideAsync();
        onLoad();
      }, 3000); // Cambia este valor según la duración de tu GIF
    };
    hideSplash();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash2.gif')}
        style={styles.gif}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Cambia el color de fondo según sea necesario
  },
  gif: {
    width: 300, // Ajusta el tamaño según sea necesario
    height: 300,
  },
});