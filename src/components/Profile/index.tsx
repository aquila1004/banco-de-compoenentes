import { ProfileIconView, Touchable } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

export function ProfileIcon() {
  const navigation = useNavigation();
  
  return (
    <ProfileIconView>
      <Touchable onPress={() => console.log('')}>
        <Octicons name="person" size={32} color="#3a5ccb" />
      </Touchable>
    </ProfileIconView>
  );
}