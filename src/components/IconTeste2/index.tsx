import * as React from "react";
import  { SvgProps, } from "react-native-svg";
import { Image } from "react-native";
const IconTeste2 = (props: SvgProps) => (
  <Image
    source={require("../../assets/cafe.png")}
    style={{ width: 30, height: 30 }} 
  />
);

export default IconTeste2;
