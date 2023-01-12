import { StyleSheet } from "react-native";

export const zoomOut = {
    0: {
      opacity: 0,
      scale: 0,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

export const fadeRight = {
    0: {
        left:0,
    },
    

}  

export const ComponentsStyles = StyleSheet.create({
  cardScore: {
    backgroundColor: "#4E5283",
    borderRadius: 15,
    height: '100%',
    justifyContent:'center',
    display: 'flex',
    alignItems: 'center'
  },
})