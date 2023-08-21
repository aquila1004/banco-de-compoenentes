import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const NavTabs = ({ userRole }) => {
  const isPersonal = userRole === '1';

  return (
    <Tab.Navigator>
     
    </Tab.Navigator>
  );
};

export default NavTabs;
