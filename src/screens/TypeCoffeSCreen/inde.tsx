import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Dropdown } from '../../components/Dropdown';
import { Container, TextFieldWrapper, Title } from "./styles";

export function TypeCoffeScreen({ navigation }: { navigation: any }) {
  const [selectedSector, setSelectedSector] = useState(null);

  const dropDownItems = [
    "café tipo 1",
    "café tipo 2",
    "café tipo 3",
    "café tipo 4",
    "café tipo 5",
    "café tipo 6",
    "café tipo 7",
    "café tipo 8",
    "café tipo 9",
    "café tipo 10",
    "café tipo 11",
  ]



  return (
    <Container>
      <Title>Selecione o tipo de café</Title>
      <TextFieldWrapper>
      <Dropdown
        placeholder="Tipo de café"
        setData={setSelectedSector}
        items={dropDownItems}
      />
      </TextFieldWrapper>
    </Container>
  );
};
