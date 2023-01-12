import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main:{
        height: '100%'
    },
    tabScreen: {
        flex: 1,
        color: '#8E9DB3',
        padding: 20,
        backgroundColor: '#001431'
    },
    tabs: {
        height: '60%'
    },
    buttonWarpper: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 80,
        height: '20%'
    },
    lastAppointment: {
        height:'40%',
    },
    symptome: {
        paddingHorizontal: 50,
        paddingVertical: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    mapWarpper: {
        height: '80%',
        padding: 20,
    }
})