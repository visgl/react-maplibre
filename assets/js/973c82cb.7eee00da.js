"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2616],{1072:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(4848),o=t(8453);const i={},s="TerrainControl",l={id:"api-reference/terrain-control",title:"TerrainControl",description:"React component that wraps the base library's TerrainControl class.",source:"@site/../docs/api-reference/terrain-control.md",sourceDirName:"api-reference",slug:"/api-reference/terrain-control",permalink:"/react-maplibre/docs/api-reference/terrain-control",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/react-maplibre/tree/master/docs/../docs/api-reference/terrain-control.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Source",permalink:"/react-maplibre/docs/api-reference/source"},next:{title:"useControl",permalink:"/react-maplibre/docs/api-reference/use-control"}},a={},c=[{value:"Properties",id:"properties",level:2},{value:"Reactive Properties",id:"reactive-properties",level:3},{value:"<code>style</code>: CSSProperties",id:"style",level:4},{value:"Other Properties",id:"other-properties",level:3},{value:"<code>position</code>: &#39;top-right&#39; | &#39;top-left&#39; | &#39;bottom-right&#39; | &#39;bottom-left&#39;",id:"position",level:4},{value:"Source",id:"source",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"terraincontrol",children:"TerrainControl"})}),"\n",(0,n.jsxs)(r.p,{children:["React component that wraps the base library's ",(0,n.jsx)(r.a,{href:"https://maplibre.org/maplibre-gl-js/docs/API/classes/TerrainControl/",children:"TerrainControl"})," class."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import * as React from 'react';\r\nimport {Map, MapStyle, TerrainControl} from '@vis.gl/react-maplibre';\r\nimport 'maplibre-gl/dist/maplibre-gl.css';\r\n\r\n// https://maplibre.org/maplibre-gl-js/docs/examples/3d-terrain/\r\nconst MAP_STYLE: MapStyle = {\r\n  version: 8,\r\n  sources: {\r\n    osm: {\r\n      type: 'raster',\r\n      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],\r\n      tileSize: 256,\r\n      attribution: '&copy; OpenStreetMap Contributors',\r\n      maxzoom: 19\r\n    },\r\n    terrainSource: {\r\n      type: 'raster-dem',\r\n      url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',\r\n      tileSize: 256\r\n    }\r\n  },\r\n  layers: [\r\n    {\r\n      id: 'osm',\r\n      type: 'raster',\r\n      source: 'osm'\r\n    }\r\n  ],\r\n  terrain: {\r\n    source: 'terrainSource',\r\n    exaggeration: 1\r\n  },\r\n  sky: {}\r\n};\r\n\r\nfunction App() {\r\n  return <Map\r\n    initialViewState={{\r\n      longitude: -100,\r\n      latitude: 40,\r\n      zoom: 3.5\r\n    }}\r\n    mapStyle={MAP_STYLE}\r\n  >\r\n    <TerrainControl />\r\n  </Map>;\r\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"reactive-properties",children:"Reactive Properties"}),"\n",(0,n.jsxs)(r.h4,{id:"style",children:[(0,n.jsx)(r.code,{children:"style"}),": CSSProperties"]}),"\n",(0,n.jsx)(r.p,{children:"CSS style override that applies to the control's container."}),"\n",(0,n.jsx)(r.h3,{id:"other-properties",children:"Other Properties"}),"\n",(0,n.jsx)(r.p,{children:"The properties in this section are not reactive. They are only used when the component first mounts."}),"\n",(0,n.jsxs)(r.p,{children:["Any ",(0,n.jsx)(r.a,{href:"https://maplibre.org/maplibre-style-spec/terrain/",children:"options"})," supported by the ",(0,n.jsx)(r.code,{children:"TerrainControl"})," class, such as"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"source"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"exageration"})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Plus the following:"}),"\n",(0,n.jsxs)(r.h4,{id:"position",children:[(0,n.jsx)(r.code,{children:"position"}),": 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'"]}),"\n",(0,n.jsxs)(r.p,{children:["Default: ",(0,n.jsx)(r.code,{children:"'top-right'"})]}),"\n",(0,n.jsx)(r.p,{children:"Placement of the control relative to the map."}),"\n",(0,n.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/visgl/react-maplibre/tree/1.0-release/src/components/terrain-control.ts",children:"terrain-control.ts"})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var n=t(6540);const o={},i=n.createContext(o);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);