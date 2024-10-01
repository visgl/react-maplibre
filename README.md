<p align="right">
  <a href="https://npmjs.org/package/@vis.gl/react-maplibre">
    <img src="https://img.shields.io/npm/v/@vis.gl/react-maplibre.svg?style=flat-square" alt="version" />
  </a>
  <a href="https://github.com/visgl/react-maplibre/actions?query=workflow%3Atest+branch%3Amaster">
    <img src="https://github.com/visgl/react-map-gl/workflows/test/badge.svg?branch=master" alt="build" />
  <a href="https://npmjs.org/package/@vis.gl/react-maplibre">
    <img src="https://img.shields.io/npm/dm/@vis.gl/react-maplibre.svg?style=flat-square" alt="downloads" />
  </a>
</p>

<h1 align="center">react-maplibre | <a href="https://visgl.github.io/react-maplibre">Docs</a></h1>

`@vis.gl/react-maplibre` is a suite of [React](http://facebook.github.io/react/) components designed to provide a React API for [maplibre-gl](https://maplibre.org/maplibre-gl-js-docs/api/). More information in the online documentation.

See our [Design Philosophy](docs/README.md#design-philosophy).

### Installation

Using this package requires `react >= 16.3` and `maplibre-gl >= 4.0.0`.

```sh
npm install @vis.gl/react-maplibre maplibre-gl
```

### Example

```js
import * as React from 'react';
import Map from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  return <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle="https://demotiles.maplibre.org/style.json"
  />;
}
```

### Contribute

See [contribution guide](/CONTRIBUTING.md).


### Attributions

react-maplibre is part of vis.gl, an [OpenJS Foundation](https://openjsf.org) project.
