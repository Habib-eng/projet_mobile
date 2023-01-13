import { View } from "react-native-animatable";
import * as Animatable from "react-native-animatable";
import { Card, Text } from "react-native-paper";
import { ScrollView, StyleSheet } from "react-native";
import { useEffect,useState } from "react";

const table = [
  "Marcher à pied chaque jour",
  "Prendre vitamine C le matin",
  "Boire de l'eau",
  "Prednre des repas equilibrés",
  "Faire du sport",
];
export const SuggestedActivities = () => {
    const [activities, setActivities] = useState(null);
    useEffect(() => {
        setActivities(table);
    },[])
  return (
    <ScrollView>
      { activities?.map((activity) => (
      <Animatable.View style={styles.cardStyle} animation="zoomIn" duration={1000} easing="ease-in-out">
        <Card elevation={10} >
          <Card.Content>
            <Text>{activity}</Text>
          </Card.Content>
        </Card>
      </Animatable.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    cardStyle:{
        margin: 10
    }
})