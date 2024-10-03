# useControl

The `useControl` hook is used to create React wrappers for custom map controls.

```tsx
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import {Map, useControl} from '@vis.gl/react-maplibre';

function DrawControl(props: DrawControlProps) {
  useControl(() => new MapboxDraw(props), {
    position: props.position
  });

  return null;
}

function App() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      mapStyle="https://demotiles.maplibre.org/style.json"
    >
      <DrawControl
        position="top-left"
        displayControlsDefault={false}
        controls={{
          polygon: true,
          trash: true
        }}
      />
    </Map>
  );
}
```

See a full example [here](/examples/draw-polygon).

## Signature

```js
useControl<T extends IControl>(
  onCreate: ({map: MapRef, mapLib: maplibregl}) => IControl,
  options?: {
    position?: ControlPosition;
  }
): T

useControl<T extends IControl>(
  onCreate: ({map: MapRef, mapLib: maplibregl}) => IControl,
  onRemove: ({map: MapRef, mapLib: maplibregl}) => void,
  options?: {
    position?: ControlPosition;
  }
): T

useControl<T extends IControl>(
  onCreate: ({map: MapRef, mapLib: maplibregl}) => IControl,
  onAdd: ({map: MapRef, mapLib: maplibregl}) => void,
  onRemove: ({map: MapRef, mapLib: maplibregl}) => void,
  options?: {
    position?: ControlPosition;
  }
): T
```

The hook creates an [IControl](https://maplibre.org/maplibre-gl-js/docs/API/interfaces/IControl/) instance, adds it to the map when it's available, and removes it upon unmount.

Parameters:

- `onCreate`: ({map: MapRef, mapLib: maplibregl}) => [IControl](./types.md#icontrol) - called to create an instance of the control.
- `onAdd`: ({map: MapRef, mapLib: maplibregl}) => void - called when the control has been added to the map.
- `onRemove`: ({map: MapRef, mapLib: maplibregl}) => void - called when the control is about to be removed from the map.
- `options`: object
  + `position`: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' - control position relative to the map

Returns:

[IControl](./types.md#icontrol) - the control instance from `onCreate`.


## Source

[use-control.ts](https://github.com/visgl/react-maplibre/tree/1.0-release/src/components/use-control.ts)
