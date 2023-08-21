import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { BackButtonView, Touchable } from "./style";

interface BackButtonProps {
  onPress?: () => void;
}

export function BackButton({ onPress }: BackButtonProps) {
  const navigation = useNavigation();

  if (onPress)
    return (
      <BackButtonView>
        <Touchable onPress={onPress}>
          <AntDesign name="arrowleft" size={30} color="#007AFF" />
        </Touchable>
      </BackButtonView>
    );
  else
    return (
      <BackButtonView>
        <Touchable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="#007AFF" />
        </Touchable>
      </BackButtonView>
    );
}
