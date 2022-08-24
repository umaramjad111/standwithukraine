import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
function MapContainer({ google, locations = [] }) {
  return (
    <Map
      google={google}
      containerStyle={{
        width: "100%",
        height: "100%",
      }}
      style={{
        width: "100%",
        height: "400px",
        marginTop: "30px",
      }}
      // center={locations[0]}
      // initialCenter={locations[0]}
      // zoom={locations.length === 1 ? 18 : 13}
      initialCenter={{
        lat: 31.52037,
        lng: 74.358749,
      }}
      disableDefaultUI={true}
    >
      {/*{locations.map((coords) => (
        <Marker position={coords} />
      ))}*/}
      <Marker />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9wQyY-guqNcBfCylmUV5s45bQQpbMAi8",
})(MapContainer);
