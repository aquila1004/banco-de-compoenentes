import React, { useState } from 'react';
import { Dropdown } from '../../components/Dropdown';
import { Container, TextFieldWrapper, Title, TextArea, TextAreaWrapper } from "./styles";
import { TextField } from '../../components/TextFiel';

export function AddCoffeScreen({ navigation }: { navigation: any }) {
  const [selectedSector, setSelectedSector] = useState(null);
  const [nome, setNome] = useState({ value: "", error: "" });
  const [NumeroLote, setNumeroLote] = useState({ value: "", error: "" });
  const [observacao, setObservacao] = useState({ value: "", error: "" });
  const [numeroSacas, setNumeroSacas] = useState({ value: "", error: "" });

  const dropDownArmazem = [
    "Armazém 1 - Dores do rio preto",
    "Armazém 2 - Dores do rio preto",

  ]

  const dropDownItems = [
    "Duro riado",
    "Bebida dura",
    "Duro riado rio",
    "Riado rio",
    "Rio",
    "Duro riado 1-rio",
    "Conilon",
    "",
  ]

  const dropDownPeneiras = [
    "P-19",
    "P-18",
    "P-17",
    "P-16",
    "P-15",
    "P-14",
    "P-13",
    "P-12",
    "P-11",
    "P-10",
  ]

  const dropDownItemsQuadra = ["1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56",
  ]

  const dropDownEmpilhamento = [
    "5",
    "8",
    "11",
    "14",
    "18",
  ]

  return (
    <Container>
      <Title>Cadastre seu café</Title>
      <TextFieldWrapper>
        <TextField
          placeholder="Nome"
          textContentType="name"
          keyboardType="default"
          autoComplete="name"
          autoCapitalize="none"
          onChange={(text) => setNome({ value: text, error: "" })}
          value={nome.value}
        />
      </TextFieldWrapper>
      <TextFieldWrapper>
        <TextField
          placeholder="Número do lote"
          textContentType="name"
          keyboardType="default"
          autoComplete="name"
          autoCapitalize="none"
          onChange={(text) => setNumeroLote({ value: text, error: "" })}
          value={NumeroLote.value}
        />
      </TextFieldWrapper>
      <TextFieldWrapper>
        <Dropdown
          placeholder="Tipo de café de bebida"
          setData={setSelectedSector}
          items={dropDownItems}
        />
      </TextFieldWrapper>
      <TextFieldWrapper>
        <Dropdown
          placeholder="Peneiras"
          setData={setSelectedSector}
          items={dropDownPeneiras}
        />
        <TextFieldWrapper>
          <Dropdown
            placeholder="Armazém"
            setData={setSelectedSector}
            items={dropDownArmazem}
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <TextField
            placeholder="Número de sacas"
            textContentType="name"
            keyboardType="number-pad"
            autoComplete="name"
            autoCapitalize="none"
            onChange={(text) => setNumeroSacas({ value: text, error: "" })}
            value={numeroSacas.value}
          />
        </TextFieldWrapper>
      </TextFieldWrapper>
      <TextFieldWrapper>
        <Dropdown
          placeholder="Número da quadra"
          setData={setSelectedSector}
          items={dropDownItemsQuadra}
        />
      </TextFieldWrapper>
      <TextFieldWrapper>
        <Dropdown
          placeholder="Modo de empilhamento"
          setData={setSelectedSector}
          items={dropDownEmpilhamento}
        />
      </TextFieldWrapper>
      <TextAreaWrapper>
        <TextArea
          value={observacao.value}
          placeholder="Digite a observação sobre o café"
          onChangeText={(value: string) =>
            setObservacao({ value: value, error: "" })
          }
          maxLength={500}
          multiline={true}
          style={{ textAlignVertical: "top" }}
        />
      </TextAreaWrapper>
    </Container>
  );
};
