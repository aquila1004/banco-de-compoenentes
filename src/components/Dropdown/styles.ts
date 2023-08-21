import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

interface Props {
  small?: boolean;
  width?: string;
}

export const RequiredField = styled.Text`
  color: red;
  padding-left: 7px;
  align-self: center;
`;

export const SearchField = styled.View`
  align-self: center;
`;

export const DropdownContainer = styled.View`
border-radius: 10px;

  
`;
export const DropdownSize = styled.View`
  width: 80%;
`;
export const DropdownDynamicSize = styled.View`

`;
export const DropdownView = styled.View`
  display: flex;
  flex-direction: row;
  height: 50px; 
  

  border-radius: 10px; /* Borda redonda com raio de 10 pixels */
`;
export const DynamicDropdownView = styled.View<Props>`
  display: flex;
  flex-direction: row;
  border-bottom-width: 0.8px;
  border-bottom-right-radius: 10px;
  border-bottom-color: #333333;
  width: ${(props) => wp(props.width!)}px;
`;