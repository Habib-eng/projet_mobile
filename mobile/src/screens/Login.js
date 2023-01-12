import * as Animatable from "react-native-animatable";
import { bounceInDown } from "../utils/Animations";
import { Button, Card, Paragraph } from "react-native-paper";
import { useState } from "react";
import { View, TextInput, Text } from "react-native";
// import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    navigation.navigate("user-account");
  };

  return (
    <View style={styles.LoginContainerWarpper}>
      <View style={styles.LoginContainer}>
        <Animatable.View
          duration={1000}
          easing="ease-in-cubic"
          animation="flash"
          style={styles.iconWarpper}
        >
          <Icon name="heart" size={100} color="#900" />
        </Animatable.View>
        <Animatable.View
          style={styles.LoginWarpper}
          easing="ease-in"
          duration={500}
          animation="zoomIn"
        >
          <TextInput
            styles={styles.LoginInput}
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder="username"
          />
        </Animatable.View>
        <Animatable.View
          style={styles.LoginWarpper}
          easing="ease-in"
          delay={500}
          duration={500}
          animation="zoomIn"
        >
          <TextInput
            styles={styles.LoginInput}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="password"
          />
        </Animatable.View>
        <Animatable.View
          duration={1000}
          delay={1000}
          animation="slideInUp"
          easing="ease-in-out"
          style={styles.buttonStyle}
        >
          <Button
            style={{ height: "100%", fontSize: 36 }}
            onPress={handleSubmit}
            mode="elevated"
            color="#E5BEED"
          >
            <Text style={styles.buttonText}>Login</Text>
          </Button>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginContainerWarpper: {
    backgroundColor: "#7C90DB",
    height: "100%",
  },
  buttonText: {
    fontSize: 20,
  },
  LoginContainer: {
    marginTop: 50,
    marginHorizontal: 50,
  },
  LoginInput: {
    fontSize: 50
  },
  LoginWarpper: {
    height: 50,
    backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 25,
    padding: 10,
  },
  buttonStyle: {
    marginTop: 80,
    backgroundColor: "#ECFEE8",
    borderRadius: 25,
    height: 50,
  },
  iconWarpper: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    paddingHorizontal: 100,
    paddingVertical: 50,
  },
});
