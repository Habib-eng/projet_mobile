import { StyleSheet, View, Text, Image } from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { bounceInDown, zoomOut } from "../utils/Animations";

export default function Home () {
    return (
        <View style={styles.container}>
           <Animatable.View
            easing="ease-in"
            duration={3000}
            animation={bounceInDown}
          >
            <Card style={styles.card} type="contained" elevation={5}>
              <Card.Title title="Welcome To Our" />
              <Card.Title title="Medicator App" />
              <Card.Content></Card.Content>
            </Card>
          </Animatable.View>
          <Animatable.Image
            easing="ease-in"
            animation={zoomOut}
            duration={3000}
            style={{ borderRadius: 5, width: 200, height: 200, marginTop: 100 }}
            source={require("../../assets/stetoscope.jpg")}
          /> 
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1D4E89",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      height: 200,
      width: 300,
      backgroundColor: "#FBD1A2",
      padding: 50,
    },
  });