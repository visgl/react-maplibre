import * as React from 'react';
import {Map} from '@vis.gl/react-maplibre';

import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapView() {
  const mapStyle = useSelector(s => s.mapStyle);
  const viewState = useSelector(s => s.viewState);
  const dispatch = useDispatch();

  const onMove = useCallback(evt => {
    dispatch({type: 'setViewState', payload: evt.viewState});
  }, []);

  return (
    <Map {...viewState} onMove={onMove} style={{width: 800, height: 600}} mapStyle={mapStyle} />
  );
}
