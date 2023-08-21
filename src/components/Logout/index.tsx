import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { BackButtonView, Touchable,  } from "./style";

interface BackButtonProps {
  onPress?: () => void;
}

export function Logout({ onPress }: BackButtonProps) {
    const navigation = useNavigation();

    if (onPress)
      return (
        <BackButtonView>
          <Touchable onPress={onPress}>
            <AntDesign name="logout" size={32} color="#ff1b22" />
          </Touchable>
        </BackButtonView>
      );
    else
      return (
        <BackButtonView>
          <Touchable onPress={() => navigation.goBack()}>
            <AntDesign name="logout" size={32} color="#007AFF" />
          </Touchable>
        </BackButtonView>
      );
  }
  
