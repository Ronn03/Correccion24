import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Cuadros = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.100.4:9004/openapi2', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setResult(`${jsonData.result}`);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ingres el texto a Clasificar
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: 1 Texto"
        value={prompt}
        onChangeText={setPrompt}
      />
      <Button title="Clasificar" onPress={fetchData} />
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
    alignItems: 'center',
  },
  text: {
    marginBottom: 40,
    marginTop: -150,
    fontSize: 30,
    color: 'black',

  },
});
export default Cuadros
