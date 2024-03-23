import * as React from "react";
import  { SvgProps, } from "react-native-svg";
import { Image } from "react-native";
const AddIcon = (props: SvgProps) => (
  <Image
    source={require("../../assets/add.png")}
    style={{ width: 30, height: 30 }} 
  />
);

export default AddIcon;
