import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Title = styled.Text`
  margin-top: ${RFValue(20)}px;
  font-size: ${RFValue(22)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark_blue};
  font-family: ${({ theme }) => theme.fonts.regular};
`;