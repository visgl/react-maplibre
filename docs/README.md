
# Introduction

<p align="center">
  These docs are for
  <a href="https://github.com/visgl/react-maplibre/tree/1.0-release/docs">
    <img src="https://img.shields.io/badge/v1.0-brightgreen.svg?style=flat-square" />
  </a>
</p>

react-maplibre is a suite of [React](http://facebook.github.io/react/) components for [Maplibre GL JS](https://maplibre.org/maplibre-gl-js-docs/api/). MapLibre GL JS is a TypeScript library that uses WebGL to render interactive maps from vector tiles in a browser. The customization of the map comply with the [MapLibre Style Spec](https://maplibre.org/maplibre-style-spec). It is part of the [MapLibre ecosystem](https://github.com/maplibre). 

New to react-maplibre? [Get Started](./get-started/get-started.md)

Want to contribute? See our [Developer Guide](./contributing.md)

## History

`react-maplibre` is spinned off from [react-map-gl](https://github.com/visgl/react-map-gl). `react-map-gl` was first created to be a React wrapper for [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/). When the Maplibre project forked Mapbox, react-map-gl was compatible with both `mapbox-gl` and `maplibre-gl` as basemap options.

As `maplibre-gl` continue to develop, its API, types, and underlying implementation diverged further and further from `mapbox-gl`. This adds increasing complexity to the single code base that supports both.

After splitting `react-maplibre` into a dedicated package, the code is simpler to maintain, and we are able to add more Maplibre-specific functionality.


## Design Philosophy

The stock `maplibre-gl` APIs are [imperative](https://en.wikipedia.org/wiki/Imperative_programming). That is, you instruct the map to do something (for example, [map.flyTo](https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto)), and it will execute the command at its own pace.

This does not scale when we have many components that need to synchronize with each other. We sometimes render two maps side by side, and when the user interacts with one, update both cameras. We draw React UI outside of the map container, that moves with the camera. We also render WebGL graphic overlays on top of the map, most notably with [deck.gl](https://deck.gl). In these use cases, in order for all components to synchronize correctly, they must have their shared states managed by React. We might store the **source of truth** in a parent component state, or Redux store, or hooks, and let it propagate down to the map as well as its peers. 

Ultimately, in the spirit of the [reactive programming paradigm](https://en.wikipedia.org/wiki/Reactive_programming), data always flows **down**. As long as the map manages its own state, as mapbox-gl is designed to do, we risk the components going out of sync.

`react-maplibre` creates a fully reactive wrapper for `maplibre-gl`. The [Map](./api-reference/map.md) component can be fully [controlled](https://reactjs.org/docs/forms.html#controlled-components), that is, the map's camera would never deviate from the props that it's assigned. Read more about this core behavior in [state management](./get-started/state-management.md).

You can read more about the motivation and upstream API for the React use case [here](https://github.com/maplibre/maplibre-gl-js/issues/1545).

## Limitations

Wherever the reactive usage patterns permits `react-maplibre`'s component props and methods are 1:1 mappings to their counterparts with the underlying Maplibre GL JS library.

It is possible to call the native methods directly from the `Map` instance obtained via [getMap](./api-reference/map.md#gemap). However, doing so may result in the map's state to deviate from its props. For example, calling `map.setMaxZoom` directly will cause the map's constraint settings to differ from the value of the `maxZoom` prop. Generally speaking, calling a native method is disencouraged if the same thing can be achieved through the React interface. If a third-party plugin does so, then it may lead to some unexpected behaviors.
