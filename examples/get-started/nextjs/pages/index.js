import * as React from 'react';
import Head from 'next/head';
import {Map, Marker} from '@vis.gl/react-maplibre';

import 'maplibre-gl/dist/maplibre-gl.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>react-maplibre Example</title>
      </Head>

      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14
        }}
        style={{width: 800, height: 600}}
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map>
    </div>
  );
}
