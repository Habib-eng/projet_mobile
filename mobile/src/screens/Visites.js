import { View } from "react-native";
import ConsultationCard from "../components/ConsultationCard";
import { styles } from "../utils/style/screens/visites";
import { ModalContainer } from "../containers/Modal";
import { useState } from "react";
import { Button, Provider } from "react-native-paper";

export default function Visites() {
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.main}>
        <ConsultationCard />
        <ModalContainer displayed={visible} />
    </View>
  );
}
