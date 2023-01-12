import { Surface, Text } from "react-native-paper";
import { ComponentsStyles } from "../utils/Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";

export default function ScoreCard({ name, score }) {
  return (
    <Animatable.View animation="zoomIn" easing="ease" duration={2000} >
      <Surface style={ComponentsStyles.cardScore} elevation={5}>
        <Icon name={name} size={50} color="#ACD2ED" />
        <Text style={{fontSize: 20}} variant="displayLarge">{score + "%"}</Text>
      </Surface>
    </Animatable.View>
  );
}
