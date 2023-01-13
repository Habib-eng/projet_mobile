import * as Animatable from "react-native-animatable";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  Surface,
  Checkbox,
  RadioButton,
  Text,
  Typography,
} from "react-native-paper";
import { styles } from "../utils/style/screens/autodiagnostic";
import { useEffect, useState } from "react";

const table = [
  "Vous mettez-vous facilement en colère ?",
  "Vous sentez-vous souvent sans énergie ?",
  "Avez-vous des difficultés à faire face aux problèmes quotidiens ?",
  "Vos finances sont-elles une source de préoccupation constante ?",
  "Faites-vous plus de choses que vous ne pouvez ?",
];

export default function Autodiagnostic() {
  const [checked, setChecked] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);
  useEffect(() => {
    setQuestionsList(table);
  }, []);
  return (
    <ScrollView>
      {questionsList.map((question) => (
        <Animatable.View
          style={styles.main}
          duration={1000}
          easing="linear"
          animation="zoomIn"
        >
          <Surface elevation={5}>
            <View style={style.questionWarpper}>
              <Text variant="headlineSmall">{question}</Text>
            </View>
            <View style={style.radioWarpper}>
              <RadioButton
                value="oui"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("oui")}
              />
              <Text variant="headlineSmall">Oui</Text>
            </View>
            <View>
              <RadioButton
                value="non"
                status={true}
              />
              <Text variant="headlineSmall">Non</Text>
            </View>
          </Surface>
        </Animatable.View>
      ))}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  questionWarpper: {
    padding: 20,
  },
  radioWarpper: {
    display: "flex",
  },
});
