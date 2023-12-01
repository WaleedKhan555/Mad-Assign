// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Validate input fields against data stored in local storage
    const userData = await AsyncStorage.getItem(username);
    if (userData) {
      const { password: storedPassword } = JSON.parse(userData);
      if (password === storedPassword) {
        navigation.navigate('CVForm', { username });
      } else {
        // Handle incorrect password
      }
    } else {
      // Handle non-existing user
    }
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
