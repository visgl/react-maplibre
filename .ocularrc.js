/** @typedef {import('@vis.gl/dev-tools').OcularConfig} OcularConfig */
import {resolve} from 'path';

/** @type {OcularConfig} */
export default {
  lint: {
    paths: ['src', 'test', 'examples']
  },

  typescript: {
    project: 'tsconfig.build.json'
  },

  aliases: {
    '@vis.gl/react-maplibre/test': resolve('./test'),
    '@vis.gl/react-maplibre': resolve('./src')
  },
  coverage: {
    test: 'browser'
  },

  browserTest: {
    server: {wait: 5000}
  },

  entry: {
    test: 'test/node.js',
    'test-browser': 'test/browser.js',
    size: ['test/size/all.js', 'test/size/map.js']
  }
};
