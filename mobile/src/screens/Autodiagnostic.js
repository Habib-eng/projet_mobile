import * as Animatable from "react-native-animatable";
import { View } from "react-native";
import { Surface, Text } from "react-native-paper";
import { styles } from "../utils/style/screens/autodiagnostic";

export default function Autodiagnostic() {
  return (
    <Animatable.View style={styles.main} duration={2000} easing='ease-in-circ' animation="zoomIn">
      <Surface elevation={5} style={styles.hero}>
        <Text variant="displayLarge">Welcome To autodiagnostic test</Text>
      </Surface>
    </Animatable.View>
  );
}
