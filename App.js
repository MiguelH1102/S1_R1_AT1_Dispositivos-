import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image,
  StatusBar, KeyboardAvoidingView,
  Platform
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
    <KeyboardAvoidingView style={styles.safeArea} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
    <ImageBackground source={require('./assets/eae.png')} style={styles.fundo}>
    <Image source={require('./assets/logo.png')} style={styles.logo} />
      <StatusBar barStyle="light-content" />
      

      <View style={styles.login}>

        <TextInput placeholder="Email" placeholderTextColor="#8a8a8a" style={styles.input} onChangeText={setEmail} keyboardType="email-address" />

        <TextInput placeholder="Senha" placeholderTextColor="#8a8a8a" style={styles.input} secureTextEntry onChangeText={setSenha} />

        <TouchableOpacity style={styles.botao} onPress={realizarLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.link}>Precisa de ajuda?</Text>

      </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },

  login: {
    width: '85%',
    padding: 30,
    borderRadius: 30,
    backgroundColor: 'rgba(20,20,20,0.95)',
    alignItems: 'center',
  },

  input: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 5,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2e2e2e',
  },

  botao: {
    width: '100%',
    backgroundColor: '#0e5cff',
    padding: 5,
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
    marginTop: 10,
    fontSize: 10,
  },
  safeArea:{
    flex: 1,
    backgroundColor: '#ffffff'
  }

});