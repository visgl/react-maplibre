# What's new

## react-maplibre v1.0

Release target: October 2024

This is the initial release of `@vis.gl/react-maplibre`. The code base was spinned off from [react-map-gl v7.1](https://github.com/visgl/react-map-gl/tree/7.1-release). This version is intended to be a drop-in replacement of `react-map-gl` v7.

Major differences are listed below.

- This package only supports `maplibre-gl >= 4.0.0`.
- Removed code-sharing between `mapbox-gl` and `maplibre-gl` components to only focus on supporting Maplibre GL. It is expected to have slightly smaller bundle size and more precise types.
- Utilizes `maplibre-gl`'s `transformCameraUpdate` API to implement stateless Map component. This removes a significant number of hacks and is expected to improve compatibility and performance.

Other improvements:

- `Map` component adds `sky` prop.
- `Map` component's global settings (`workerCount`, `workerUrl`, `maxParallelImageRequests`) are set correctly.
- Adds `TerrainControl` and `LogoControl` components.

Check out the [migration guide](./upgrade-guide.md#migrating-from-react-map-gl).
