import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconTeste from '../components/IconTeste';
import IconTeste2 from '../components/IconTeste2';
const Tab = createBottomTabNavigator();

const Navbar = ({ }) => {
  

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Ver trabalhos"
        component={IconTeste}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTeste fill={focused ? 'rgba(150, 150, 150, 1)' : 'black'} width={40} height={40} />
          ),
          headerShown: false,
        }}
        
      />
      <Tab.Screen
        name="Criar trabalho"
        component={IconTeste}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTeste2 fill={focused ? '#6d757e' : 'black'} width={32} height={32} />
          ),
          headerShown: false,
        }}
      />

      
    </Tab.Navigator>
  );
};

export default Navbar;