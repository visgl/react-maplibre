# Get Started

You may find complete project setups in [get-started examples](https://github.com/visgl/react-map-gl/tree/7.0-release/examples/get-started).

## Installation

Using `@vis.gl/react-maplibre` requires Node.js LTS and `react >= 16.3`.

```bash
npm install --save @vis.gl/react-maplibre maplibre-gl
```

## Example

```tsx title="app.tsx"
import * as React from 'react';
import Map from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // See notes below

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

The base map library requires its stylesheet be included at all times. The marker, popup and navigation components also need the stylesheet to work properly.

The CSS `import` statement is supported by most bundlers, such as Vite, or Webpack with [css-loader](https://webpack.github.io/docs/stylesheets.html), or Rollup with [postcss](https://www.npmjs.com/package/rollup-plugin-postcss).

If directly importing the CSS is not an option, you may attach the stylesheet to the head of your page as an alternative:

```html title="index.html"
<link href='https://unpkg.com/maplibre-gl@<YOUR_MAPLIBRE_VERSION>/dist/maplibre-gl.css' rel='stylesheet' />
```

Find out your maplibre version by running `yarn list maplibre-gl` or `npm ls maplibre-gl`.
