import {configureStore} from '@reduxjs/toolkit';

function mapStateReducer(state, action) {
  switch (action.type) {
    case 'setViewState':
      return {...state, viewState: action.payload};

    default:
      return state;
  }
}

const defaultMapState = {
  mapStyle: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
  viewState: {
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14
  }
};

export default configureStore({
  reducer: mapStateReducer,
  preloadedState: defaultMapState
});
