import { Ionicons } from "@expo/vector-icons";
import { BlueText, TouchableContainer } from "./style";
import { AntDesign } from "@expo/vector-icons";
interface AddNewListItemProps {
  text: string;
  onPress: () => void  | any;
}

export default function AddButton({ text, onPress }: AddNewListItemProps) {
  return (
    <TouchableContainer onPress={onPress}>
      <AntDesign name="plus" size={30} color="#007AFF" />
      <BlueText>{text}</BlueText>
    </TouchableContainer>
  );
}