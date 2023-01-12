import MapView from "react-native-maps";

const MapWidget = () => {
  return (
    <MapView
      style={{ flex: 1, borderRadius: 50 }}
      region={{
        latitude: 42.882004,
        longitude: 74.582748,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
    />
  );
};

export default MapWidget;
