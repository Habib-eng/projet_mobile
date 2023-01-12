import { Drawer } from "../navigation/Stack";
import Profile from "./Profile";
import Visites from "./Visites";
import Autodiagnostic from "./Autodiagnostic";
import Appointment from "./Appointment";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Discussion } from "./Discussion";

import { Button } from "react-native-paper";
import { View } from "react-native-animatable";
import { SuggestedActivities } from "./SuggestedActivities";

export const AccountStack = () => {
  
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="profile"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#8E9DB3",
          paddingTop: 50,
          color: "white",
        },
      }}
    >
      <Drawer.Screen
        options={{
          title: "My Profile",
          drawerLabel: "My profile",
          drawerLabelStyle: { color: "white", fontSize: 18 },
          drawerIcon: () => <Icon name="car" size={25} color="#FFFFFF" />,
          headerStyle: {
            backgroundColor: "#FF85FF",
          },
        }}
        name="profile"
        component={Profile}
      />
      <Drawer.Screen
        options={{
          title: "My Visites",
          drawerLabel: "My visites",
          drawerLabelStyle: { color: "white", fontSize: 18 },
          drawerIcon: () => <Icon name="car" size={25} color="#FFFFFF" />,
        }}
        name="visites"
        component={Visites}
      />
      <Drawer.Screen
        name="Appointment"
        component={Appointment}
        options={{
          title: "My aapointments",
          drawerLabel: "Appointments",
          drawerLabelStyle: { color: "white", fontSize: 18 },
          drawerIcon: () => <Icon name="heart" size={25} color="#FFFFFF" />,
        }}
      />
      <Drawer.Screen
        options={{
          title: "Stress Test",
          drawerLabel: "Stress",
          drawerLabelStyle: { color: "white", fontSize: 18 },
          drawerIcon: () => <Icon name="car" size={25} color="#FFFFFF" />,
        }}
        name="Autodiagnostic"
        component={Autodiagnostic}
      />
      <Drawer.Screen
        options={{
          title: "Suggested",
          drawerLabel: "Activities",
          drawerLabelStyle: { color: "white", fontSize: 18 },
          drawerIcon: () => <Icon name="bus" size={25} color="#FFFFFF" />,
        }}
        name="Activities"
        component={SuggestedActivities}
      />
      <Drawer.Screen
        options={{
          title: "Disccusion",
          drawerLabel: "Discussion",
          drawerLabelStyle: { color: "white", fontSize: 18 },
          drawerIcon: () => <Icon name="bus" size={25} color="#FFFFFF" />,
        }}
        name="Disccusion"
        component={Discussion}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
