import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconTeste from '../components/IconTeste';
import IconTeste2 from '../components/IconTeste2';
import { TypeCoffeScreen } from './TypeCoffeSCreen/inde';
import { AddCoffeScreen } from './AddCoffeScreen';
import AddIcon from '../components/AddIcon';
import { HomeScreen } from './Home';
const Tab = createBottomTabNavigator();

const Navbar = ({ }) => {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Armazém"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTeste2 fill={focused ? '#007AFF' : 'black'} width={20} height={20} />
          ),
          headerShown: false,
        }}
        
      />
      <Tab.Screen
        name="Pesquisar por café"
        component={TypeCoffeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTeste2 fill={focused ? '#007AFF' : 'black'} width={32} height={32} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="adicionar café"
        component={AddCoffeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AddIcon fill={focused ? '#007AFF' : 'black'} width={32} height={32} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navbar;