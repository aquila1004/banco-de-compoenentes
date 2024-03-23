import * as React from "react";
import Svg, { SvgProps, } from "react-native-svg";
import { Image } from "react-native";

const IconTeste = (props: SvgProps) => (
  <Image
    source={require("../../assets/HomeIcon.png")}
    style={{ width: 30, height:30 }}
  />
);

export default IconTeste;
