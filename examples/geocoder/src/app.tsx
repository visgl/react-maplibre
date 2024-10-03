import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {Map} from '@vis.gl/react-maplibre';

import GeocoderControl from './geocoder-control';
import ControlPanel from './control-panel';

export default function App() {
  return (
    <>
      <Map
        initialViewState={{
          longitude: -79.4512,
          latitude: 43.6568,
          zoom: 13
        }}
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
      >
        <GeocoderControl position="top-left" />
      </Map>
      <ControlPanel />
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
