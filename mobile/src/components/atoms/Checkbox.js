import { Text, Switch } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const Symptom = ({ label, value, handleSwitchValue }) => {

  return (
    <View style={styles.main}>
      <Text style={styles.text} variant='displaySmall'>{label}</Text>
      <Switch onValueChange={() => handleSwitchValue(value)} value={value} />
    </View>
  );
};

export default Symptom;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 18
  }
});
