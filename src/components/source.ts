import * as React from 'react';
import {useContext, useEffect, useMemo, useState, useRef} from 'react';
import {cloneElement} from 'react';
import {MapContext} from './map';
import assert from '../utils/assert';
import {deepEqual} from '../utils/deep-equal';

import type {
  MapInstance,
  GeoJSONSourceImplementation,
  ImageSourceImplemtation,
  AnySource,
  AnySourceImplementation
} from '../types';

export type SourceProps = AnySource & {
  id?: string;
  children?: any;
};

let sourceCounter = 0;

function createSource(map: MapInstance, id: string, props: SourceProps) {
  // @ts-ignore
  if (map.style && map.style._loaded) {
    const options = {...props};
    delete options.id;
    delete options.children;
    // @ts-ignore
    map.addSource(id, options);
    return map.getSource(id);
  }
  return null;
}

/* eslint-disable complexity */
function updateSource(source: AnySourceImplementation, props: SourceProps, prevProps: SourceProps) {
  assert(props.id === prevProps.id, 'source id changed');
  assert(props.type === prevProps.type, 'source type changed');

  let changedKey = '';
  let changedKeyCount = 0;

  for (const key in props) {
    if (key !== 'children' && key !== 'id' && !deepEqual(prevProps[key], props[key])) {
      changedKey = key;
      changedKeyCount++;
    }
  }

  if (!changedKeyCount) {
    return;
  }

  const type = props.type;

  if (type === 'geojson') {
    (source as GeoJSONSourceImplementation).setData(props.data);
  } else if (type === 'image') {
    (source as ImageSourceImplemtation).updateImage({
      url: props.url,
      coordinates: props.coordinates
    });
  } else {
    switch (changedKey) {
      case 'coordinates':
        // @ts-ignore
        source.setCoordinates?.(props.coordinates);
        break;
      case 'url':
        // @ts-ignore
        source.setUrl?.(props.url);
        break;
      case 'tiles':
        // @ts-ignore
        source.setTiles?.(props.tiles);
        break;
      default:
        // eslint-disable-next-line
        console.warn(`Unable to update <Source> prop: ${changedKey}`);
    }
  }
}
/* eslint-enable complexity */

export function Source(props: SourceProps) {
  const map = useContext(MapContext).map.getMap();
  const propsRef = useRef(props);
  const [, setStyleLoaded] = useState(0);

  const id = useMemo(() => props.id || `jsx-source-${sourceCounter++}`, []);

  useEffect(() => {
    if (map) {
      /* global setTimeout */
      const forceUpdate = () => setTimeout(() => setStyleLoaded(version => version + 1), 0);
      map.on('styledata', forceUpdate);
      forceUpdate();

      return () => {
        map.off('styledata', forceUpdate);
        // @ts-ignore
        if (map.style && map.style._loaded && map.getSource(id)) {
          // Parent effects are destroyed before child ones, see
          // https://github.com/facebook/react/issues/16728
          // Source can only be removed after all child layers are removed
          const allLayers = map.getStyle()?.layers;
          if (allLayers) {
            for (const layer of allLayers) {
              // @ts-ignore (2339) source does not exist on all layer types
              if (layer.source === id) {
                map.removeLayer(layer.id);
              }
            }
          }
          map.removeSource(id);
        }
      };
    }
    return undefined;
  }, [map]);

  // @ts-ignore
  let source = map && map.style && map.getSource(id);
  if (source) {
    updateSource(source, props, propsRef.current);
  } else {
    source = createSource(map, id, props);
  }
  propsRef.current = props;

  return (
    (source &&
      React.Children.map(
        props.children,
        child =>
          child &&
          cloneElement(child, {
            source: id
          })
      )) ||
    null
  );
}