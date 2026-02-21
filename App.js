import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image,
  StatusBar
} from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const realizarLogin = () => {
    if (email === "" || senha === "") {
      Alert.alert('Erro', 'Preencha todos os campos');
    } else {
      if (!email.includes('@') || (!email.includes('gmail.com'))) {
        Alert.alert('Insira um Gmail válido')
      } else {
        Alert.alert('Login realizado', `Bem-vindo ${email}`);
      }
    }
  };

  return (
    <ImageBackground source={require('./assets/eae.png')} style={styles.fundo}>
      <StatusBar barStyle="light-content" />
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <View style={styles.card}>

        <TextInput placeholder="Email" placeholderTextColor="#8a8a8a" style={styles.input} onChangeText={setEmail} keyboardType="email-address" />

        <TextInput placeholder="Senha" placeholderTextColor="#8a8a8a" style={styles.input} secureTextEntry onChangeText={setSenha} />

        <TouchableOpacity style={styles.botao} onPress={realizarLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.link}>Precisa de ajuda?</Text>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  card: {
    width: '85%',
    padding: 30,
    borderRadius: 20,
    backgroundColor: 'rgba(20,20,20,0.95)',
    alignItems: 'center',
  },

  titulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  input: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#2e2e2e',
  },

  botao: {
    width: '100%',
    backgroundColor: '#0e5cff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#0e5cff',
    marginTop: 15,
    fontSize: 14,
  }

});