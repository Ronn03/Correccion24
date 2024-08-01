import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,Linking, Button, onPress } from 'react-native';
import ButtonCam from '../components/ButtCam.js';


const Inicio = () => {
   
  return (
  
    <View style={styles.container}>
       
      <Text style={styles.text1}>Bienvenido, Ronny</Text>
      <Image
        style={styles.image}
        source={require('../assets/inicio.gif')}
      />
   
      <StatusBar style="auto" />
      <ButtonCam style={styles.button}
        onPress={() => Linking.openURL('www.linkedin.com/in/ronny-cusin-911651112')}
        imageSource={require('../assets/link.png')} // Ruta a tu imagen
        size={100} // Tamaño de la imagen dentro del botón
      />
   
    </View>
  );
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
  fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: -50,
    marginTop: 100,
    marginBottom: 10,

  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
    marginLeft: 0,
    borderRadius: 30,
    overflow: 'hidden',
    
    
  },
  SvgCont: {
    marginTop: 10,
   
  },
  button: {
    marginTop: 30,
  
  } 
  
});
export default Inicio