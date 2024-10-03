import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {Map} from '@vis.gl/react-maplibre';

import ControlPanel from './control-panel';

export default function App() {
  return (
    <>
      <Map
        initialViewState={{
          latitude: 0,
          longitude: 0,
          zoom: 0
        }}
        maxPitch={85}
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        projection="globe"
      ></Map>
      <ControlPanel />
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
