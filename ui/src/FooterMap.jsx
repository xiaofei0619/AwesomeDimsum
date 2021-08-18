import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';

// function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 47.620506, lng: -122.349274 }}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

const WrappedMap = withScriptjs(withGoogleMap((props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 47.620506, lng: -122.349274 }}
  >
    <Marker position={{ lat: 47.620506, lng: -122.349274 }} />
  </GoogleMap>
))));

export default function FooterMap() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${window.ENV.GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '500px', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}
