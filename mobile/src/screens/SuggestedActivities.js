import { View } from "react-native-animatable"
import * as Animatable from "react-native-animatable"
import { Card, Text } from "react-native-paper"
export const SuggestedActivities = () => {
    return (
        <View>
            <Animatable.View animation="zoomIn" duration={1000} easing="ease-in-out">
                <Card>
                    <Card.Content>
                        <Text>Hello there is suggested Activites </Text>
                    </Card.Content>
                </Card>
            </Animatable.View>
        </View>
    )
}