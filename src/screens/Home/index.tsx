import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {Container } from "./styles";

export function HomeScreen({ navigation }: { navigation: any }) {
  const [selectedSector, setSelectedSector] = useState(null);

  const sectors = [
    { id: 1, name: 'Setor A' },
    { id: 2, name: 'Setor B' },
    { id: 3, name: 'Setor C' },
    { id: 4, name: 'Setor D' },
    { id: 5, name: 'Setor E' },
    { id: 6, name: 'Setor F' },
    { id: 7, name: 'Setor G' },
    { id: 8, name: 'Setor H' },
    { id: 9, name: 'Setor I' },
    { id: 10, name: 'Setor J' },
    { id: 11, name: 'Setor K' },
    { id: 12, name: 'Setor L' },
    { id: 13, name: 'Setor M' },
    { id: 14, name: 'Setor N' },
    { id: 15, name: 'Setor O' },
    
  ];

  const handleSectorPress = (sector) => {
    setSelectedSector(sector);
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectorsContainer}>
        {sectors.map((sector) => (
          <TouchableOpacity
            key={sector.id}
            style={styles.sector}
            onPress={() => handleSectorPress(sector)}
          >
            <Text>{sector.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedSector && (
        <View style={styles.selectedSector}>
          <Text>Setor Selecionado: {selectedSector.name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centraliza os setores horizontalmente
    alignItems: 'center', // Centraliza os setores verticalmente
  },
  sector: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  selectedSector: {
    marginTop: 20,
  },
});