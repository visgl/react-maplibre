/* global document */
import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {Map, Marker} from '@vis.gl/react-maplibre';

import 'maplibre-gl/dist/maplibre-gl.css';

function Root() {
  const [viewState, setViewState] = React.useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14
  });

  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{width: 800, height: 600}}
      mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
  );
}

const root = createRoot(document.body.appendChild(document.createElement('div')));
root.render(<Root />);
