import {JSDOM} from 'jsdom';

const {window} = new JSDOM(`<!DOCTYPE html><div id="map"></div>`);
/* global global */
global.window = window;
global.document = window.document;

import './src/utils';
