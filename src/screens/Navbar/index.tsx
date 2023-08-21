import React, { useEffect, useState } from 'react';
import NavTabs from '../NavTabs';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Navbar({ navigation }) {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    setUserRole(await AsyncStorage.getItem('user_role_id'));
  };

  return <NavTabs userRole={userRole} />; // Pass userRole as a prop to NavTabs
}