import { Image } from "react-native";
import { DeleteButtonView, Touchable } from "./style";

interface DeleteButtonProps {
  onPress: () => void;
}

export function DeleteButton({ onPress }: DeleteButtonProps) {
  return (
    <DeleteButtonView>
      <Touchable onPress={onPress}>
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../../assets/delete-icon.png")}
        />
      </Touchable>
    </DeleteButtonView>
  );
}