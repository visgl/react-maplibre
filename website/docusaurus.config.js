const {getDocusaurusConfig} = require('@vis.gl/docusaurus-website');
const {resolve} = require('path');

const config = getDocusaurusConfig({
  projectName: 'react-maplibre',
  tagline: 'React components for Maplibre GL JS',
  siteUrl: 'https://visgl.github.io/react-maplibre',
  repoUrl: 'https://github.com/visgl/react-maplibre',

  docsTableOfContents: require('../docs/table-of-contents.json'),

  examplesDir: './src/examples',
  exampleTableOfContents: require('./src/examples/table-of-contents.json'),

  search: 'local',

  webpackConfig: {
    resolve: {
      alias: {
        'website-examples': resolve('../examples')
      }
    }
  },

  customCss: [
    './src/styles.css',
    './src/maplibre-gl.css'
  ]
});

module.exports = config;
