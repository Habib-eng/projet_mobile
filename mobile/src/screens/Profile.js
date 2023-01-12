import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { Text } from "react-native-paper";
import { Grid, Row, Col } from "react-native-paper-grid";
import ScoreCard from "../components/ScoreCard";
import { Drawer } from "../navigation/Stack";
import Autodiagnostic from "./Autodiagnostic";
import * as Battery from "expo-battery"
import { useState } from "react";
import { useEffect } from "react";
import * as Network from "expo-network";

export default function Profile({ navigation }) {
  const redirectToAutoDiagnosticTest = () => {
    navigation.navigate("Autodiagnostic");
  };
  const [batteryLevel, setBatteryLevel] = useState();
  const [ipAddress, setIpAddress] = useState("");
  useEffect(async () => {
    const batteryState = Battery.BatteryState;
    setBatteryLevel(batteryLevel);
    console.log(batteryState);
    const ip = await Network.getNetworkStateAsync();
    console.log(ip);
  },[])
  return (
    <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <Card elevation={10} style={styles.cardStyle}>
            <View style={styles.cardContentWarpper}>
              <Avatar.Image
                siez={24}
                source={require("../../assets/avatar.jpeg")}
              />
              <Text
                style={{
                  padding: 25,
                  fontSize: 15,
                  fontWeight: "700",
                  fontStyle: "italic",
                }}
                variant="displayLarge"
              >
                habib.jlejla@supcom.tn
              </Text>
            </View>
          </Card>
        </View>
        <View style={styles.scoreGrid}>
          <View style={styles.gridContainer}>
            <Grid>
              <Row>
                <Col style={styles.CardScoreWarpper}>
                  <ScoreCard score={56} name="cloud" />
                  <Text>{batteryLevel}</Text>
                </Col>
                <Col style={styles.CardScoreWarpper}>
                  <ScoreCard score={96} name="wifi" />
                </Col>
              </Row>
              <Row>
                <Col style={styles.CardScoreWarpper}>
                  <ScoreCard score={58} name="user" />
                </Col>
                <Col style={styles.CardScoreWarpper}>
                  <ScoreCard score={39} name="car" />
                </Col>
              </Row>
              <Row style={styles.ButtonWarpper}>
                <Button mode="contained" onPress={redirectToAutoDiagnosticTest}>
                  Faire un Autodiagnostic{" "}
                </Button>
              </Row>
            </Grid>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  ButtonWarpper: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
  },
  scoreGrid: {
    height: "70%",
  },
  profile: {
    height: "30%",
    paddingTop: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  profileContainer: {
    height: "100%",
    backgroundColor: "#CCA7A2",
  },
  cardStyle: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#E5BEED",
    width: "80%",
    height: "80%",
    padding: 30,
  },
  cardContentWarpper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  CardScoreWarpper: {
    height: 180,
    padding: 20,
  },
});
