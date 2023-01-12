import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import {
  Card,
  Chip,
  Text,
} from "react-native-paper";
import { ModalContainer } from "../containers/Modal";
import Action from "./atoms/VisiteAction";

export default function ConsultationCard() {
  const [visible, setVisible] = useState(true);
  const showModal = () => {
    console.log('hello')
    setVisible(true)
  }

  const hideModal = () => {
    setVisible(false)
  }
  const showOrdonnance = () => {
    showModal()
  };

  const showCertificat = () => {};

  const showResume = () => {};
  return (
    <Card elevation={5}>
      <Card.Title title="visite N° 1" subtitle="16 Mar, 2022" />
      <Card.Content>
        <View style={styles.content}>
          <Chip selectedColor="#859">Subject</Chip>
        </View>
        <View style={styles.textContent}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </Text>
        </View>
      </Card.Content>
      <Card.Actions>
        <View style={styles.actions}>
          <Action action={showModal} icon="camera" color="#403D58" />
          <Action icon="text" color="#ACD2ED" />
          <Action icon="heart" color="#FC7753" />
        </View>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "30%",
    color: "#859632",
  },
  textContent: {
    paddingTop: 20,
  },
  actions: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
  },
});
