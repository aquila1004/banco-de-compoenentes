import styled from "styled-components/native";

export const BackButtonView = styled.View`
  position: absolute;
  justify-content: center; 
  top: 30px;
  right: 20px;
`;

export const Touchable = styled.TouchableOpacity`
  z-index: 1;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
