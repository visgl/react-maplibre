export * from './common';
export * from './lib';
export * from './events';
export * from './style-spec';

// Internal types
import type {LngLat, PaddingOptions} from 'maplibre-gl';

/**
 * maplibre's Transform interface / CameraUpdateTransformFunction argument
 */
export type TransformLike = {
  center: LngLat;
  zoom: number;
  pitch: number;
  bearing: number;
  elevation: number;
  padding: PaddingOptions;
};

import type {
  GeoJSONSource as GeoJSONSourceImplementation,
  ImageSource as ImageSourceImplemtation,
  CanvasSource as CanvasSourceImplemtation,
  VectorTileSource as VectorSourceImplementation,
  RasterTileSource as RasterSourceImplementation,
  RasterDEMTileSource as RasterDemSourceImplementation,
  VideoSource as VideoSourceImplementation,
  Source
} from 'maplibre-gl';

export type {
  GeoJSONSourceImplementation,
  ImageSourceImplemtation,
  CanvasSourceImplemtation,
  VectorSourceImplementation,
  RasterDemSourceImplementation,
  RasterSourceImplementation,
  VideoSourceImplementation
};

export type AnySourceImplementation =
  | GeoJSONSourceImplementation
  | VideoSourceImplementation
  | ImageSourceImplemtation
  | CanvasSourceImplemtation
  | VectorSourceImplementation
  | RasterSourceImplementation
  | RasterDemSourceImplementation
  | Source;
