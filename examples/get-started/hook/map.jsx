import * as React from 'react';
import {Map} from '@vis.gl/react-maplibre';

import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapView() {
  return (
    <Map
      id="mymap"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 800, height: 600}}
      mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
    />
  );
}
