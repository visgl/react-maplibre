# Upgrade Guide

## Migrating from react-map-gl

`@vis.gl/react-maplibre` v1.0 can be used as a drop-in replacement of `react-map-gl` v7:

```patch
- import {Map, Marker} from 'react-map-gl/maplibre';
+ import {Map, Marker} from '@vis.gl/react-maplibre';
```

The following Mapbox-only props from `react-map-gl`'s Map component are removed:
- `mapboxAccessToken`
- `workerClass`
- `baseApiUrl`
