import { View } from "react-native";
import { Button, Switch, Text } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";
import { styles } from "../utils/style/screens/appointment";
import { LocaleConfig } from "react-native-calendars";
import Symptom from "../components/atoms/Checkbox";
import { useState } from "react";
import Map from "../components/moleculs/Map";
import MapWidget from "../components/moleculs/Map";
import Stack from "../navigation/Stack";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "fr";
const Appointment = ({navigation}) => {
  const [digestif, setDigestif] = useState(false);
  const [pbRespiratoires, setPbRespiratoires] = useState(false);
  const handleSwitchValue = (value) => {
    const data = !value;
    setDigestif(data);
  };
  const makeReservation = (reservation) => {
    navigation.navigate('Profile')
  }
  return (
    <View style={styles.main}>
      <View style={styles.tabs}>
        <Tabs
          disableSwipe={false}
          style={{ backgroundColor: "#8E9DB3" }}
          mode="scrollable"
        >
          <TabScreen label="Date" icon="calendar">
            <View style={styles.tabScreen}>
              <Calendar />
            </View>
          </TabScreen>
          <TabScreen label="Symptomes" icon="text">
            <View>
              <Symptom
                label="Troublements digestifs"
                handleSwitchValue={handleSwitchValue}
                value={digestif}
              />
              <Symptom
                label="Troublements Respiratoires"
                handleSwitchValue={handleSwitchValue}
                value={pbRespiratoires}
              />
            </View>
          </TabScreen>
        </Tabs>
      </View>
      <View style={styles.lastAppointment}>
        <View style={styles.buttonWarpper}>
          <Button onPress={makeReservation} mode="contained">Reservez en clic !</Button>
        </View>
        <View style={styles.mapWarpper}>
          <MapWidget />
        </View>
      </View>
    </View>
  );
};

export default Appointment;
