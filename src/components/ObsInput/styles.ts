import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  small?: boolean;
  width?: string;
}

export const InputView = styled.View<Props>`
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.small ? wp("60%") : wp("80%"))}px;
  height: 5000px; /* Defina a altura desejada aqui */
  background-color: rgb(255, 255, 255); 
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 10px; 
`;

export const DynamicInputView = styled.View<Props>`
  display: flex;
  flex-direction: row;
  border-bottom-width: 0.8px;
  border-bottom-right-radius: 10px;
  border-bottom-color: #333333;
  background-color: #222222;
  width: ${(props) => wp(props.width!)}px;
  height: 5000px; /* Defina a altura desejada aqui */
`;


export const RequiredField = styled.Text`
  color: red;
  padding-left: 7px;
  align-self: center;
`;