// CVFormScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const CVFormScreen = ({ navigation, route }) => {
  const [userData, setUserData] = useState({});
  const [cvData, setCVData] = useState('');

  useEffect(() => {
    // Check if route and route.params are defined before accessing properties
    if (route?.params?.username) {
      // Retrieve user data from local storage using route.params.username
      setUserData({ username: route.params.username });
    }
  }, [route]);

  const handleSaveCV = () => {
    // Save entered data in the CV Form to local storage
    const completeCVData = `Name: waleed khan\nRegistration No: SP21-BSE-035`;
    setCVData(completeCVData);
    navigation.navigate('CVDisplay', { cvData: completeCVData });
  };

  return (
    <View>
      <Text>{`Welcome, ${userData?.username ? userData.username : 'waleed khan'} , `}</Text>
      <TextInput placeholder="Enter CV Data" value={cvData} onChangeText={setCVData} />
      <Button title="Save CV" onPress={handleSaveCV} />
    </View>
  );
};

export default CVFormScreen;