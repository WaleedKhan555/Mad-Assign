// CVDisplayScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CVDisplayScreen = ({ route }) => {
  const { username } = route.params;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch all stored data
    const fetchUserData = async () => {
      const storedData = await AsyncStorage.getItem(username);
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <View>
      <Text>{`CV Display Screen - ${username}'s CV`}</Text>
      {userData && (
        <View>
          <Text>{`Full Name: ${userData.fullName}`}</Text>
          <Text>{`Registration Number: ${userData.registrationNumber}`}</Text>
        </View>
      )}
    </View>
  );
};

export default CVDisplayScreen;
