import React, { useEffect } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthLoadingScreen({ navigation }) {
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    const isLogged = await AsyncStorage.getItem('isLogged');
    if (isLogged === '1') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });
    } else {
      await logout();
    }
  };

  const logout = async () => {
    try {
      const asyncStorageKeys = await AsyncStorage.getAllKeys();
      if (asyncStorageKeys.length > 0) {
        if (Platform.OS === 'android') {
          await AsyncStorage.clear();
        }
        if (Platform.OS === 'ios') {
          await AsyncStorage.multiRemove(asyncStorageKeys);
        }
      }
    } catch (error) {
      console.log('Error @logout: ', error);
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      checkUserLoggedIn();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    // Avoid the warning by adding a dummy listener for 'onAnimatedValueUpdate'
    const dummyListener = { onAnimatedValueUpdate: () => {} };
    return () => {
      dummyListener.onAnimatedValueUpdate = null;
    };
  }, []);

  return (
    <>
    </>
  );
}
