"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3656],{4403:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(4848),t=n(8453);const l={},a="Marker",o={id:"api-reference/marker",title:"Marker",description:"React component that wraps the base library's Marker class.",source:"@site/../docs/api-reference/marker.md",sourceDirName:"api-reference",slug:"/api-reference/marker",permalink:"/react-maplibre/docs/api-reference/marker",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/react-maplibre/tree/master/docs/../docs/api-reference/marker.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"MapProvider",permalink:"/react-maplibre/docs/api-reference/map-provider"},next:{title:"NavigationControl",permalink:"/react-maplibre/docs/api-reference/navigation-control"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"Reactive Properties",id:"reactive-properties",level:3},{value:"<code>draggable</code>: boolean",id:"draggable",level:4},{value:"<code>latitude</code>: number",id:"latitude",level:4},{value:"<code>longitude</code>: number",id:"longitude",level:4},{value:"<code>offset</code>: PointLike",id:"offset",level:4},{value:"<code>pitchAlignment</code>: &#39;map&#39; | &#39;viewport&#39; | &#39;auto&#39;",id:"pitchalignment",level:4},{value:"<code>popup</code>: Popup | null",id:"popup",level:4},{value:"<code>rotation</code>: number",id:"rotation",level:4},{value:"<code>rotationAlignment</code>: &#39;map&#39; | &#39;viewport&#39; | &#39;auto&#39;",id:"rotationalignment",level:4},{value:"<code>style</code>: CSSProperties",id:"style",level:4},{value:"Callbacks",id:"callbacks",level:3},{value:"<code>onClick</code>: (evt: MapEvent) =&gt; void",id:"onclick",level:4},{value:"<code>onDragStart</code>: (evt: MarkerDragEvent) =&gt; void",id:"ondragstart",level:4},{value:"<code>onDrag</code>: (evt: MarkerDragEvent) =&gt; void",id:"ondrag",level:4},{value:"<code>onDragEnd</code>: (evt: MarkerDragEvent) =&gt; void",id:"ondragend",level:4},{value:"Other Properties",id:"other-properties",level:3},{value:"Methods",id:"methods",level:2},{value:"Source",id:"source",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"marker",children:"Marker"})}),"\n",(0,i.jsxs)(r.p,{children:["React component that wraps the base library's ",(0,i.jsx)(r.a,{href:"https://maplibre.org/maplibre-gl-js/docs/API/classes/Marker/",children:"Marker"})," class."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import * as React from 'react';\r\nimport {Map, Marker} from '@vis.gl/react-maplibre';\r\nimport 'maplibre-gl/dist/maplibre-gl.css';\r\n\r\nfunction App() {\r\n  return <Map\r\n    initialViewState={{\r\n      longitude: -100,\r\n      latitude: 40,\r\n      zoom: 3.5\r\n    }}\r\n    mapStyle=\"https://demotiles.maplibre.org/style.json\"\r\n  >\r\n    <Marker longitude={-100} latitude={40} anchor=\"bottom\" >\r\n      <img src=\"./pin.png\" />\r\n    </Marker>\r\n  </Map>;\r\n}\n"})}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(r.code,{children:"Marker"})," is mounted with child components, then its content will be rendered to the specified location. If it is mounted with no content, then a default marker will be used."]}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(r.h3,{id:"reactive-properties",children:"Reactive Properties"}),"\n",(0,i.jsxs)(r.h4,{id:"draggable",children:[(0,i.jsx)(r.code,{children:"draggable"}),": boolean"]}),"\n",(0,i.jsxs)(r.p,{children:["Default: ",(0,i.jsx)(r.code,{children:"false"})]}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(r.code,{children:"true"}),", the marker is able to be dragged to a new position on the map."]}),"\n",(0,i.jsxs)(r.h4,{id:"latitude",children:[(0,i.jsx)(r.code,{children:"latitude"}),": number"]}),"\n",(0,i.jsx)(r.p,{children:"Required. The latitude of the anchor location."}),"\n",(0,i.jsxs)(r.h4,{id:"longitude",children:[(0,i.jsx)(r.code,{children:"longitude"}),": number"]}),"\n",(0,i.jsx)(r.p,{children:"Required. The longitude of the anchor location."}),"\n",(0,i.jsxs)(r.h4,{id:"offset",children:[(0,i.jsx)(r.code,{children:"offset"}),": ",(0,i.jsx)(r.a,{href:"/react-maplibre/docs/api-reference/types#pointlike",children:"PointLike"})]}),"\n",(0,i.jsxs)(r.p,{children:["Default: ",(0,i.jsx)(r.code,{children:"null"})]}),"\n",(0,i.jsxs)(r.p,{children:["The offset in pixels as a ",(0,i.jsx)(r.a,{href:"/react-maplibre/docs/api-reference/types#pointlike",children:"PointLike"})," object to apply relative to the element's center. Negatives indicate left and up."]}),"\n",(0,i.jsxs)(r.h4,{id:"pitchalignment",children:[(0,i.jsx)(r.code,{children:"pitchAlignment"}),": 'map' | 'viewport' | 'auto'"]}),"\n",(0,i.jsxs)(r.p,{children:["Default: ",(0,i.jsx)(r.code,{children:"'auto'"})]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"map"})," aligns the ",(0,i.jsx)(r.code,{children:"Marker"})," to the plane of the map."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"viewport"})," aligns the ",(0,i.jsx)(r.code,{children:"Marker"})," to the plane of the viewport."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"auto"})," automatically matches the value of ",(0,i.jsx)(r.code,{children:"rotationAlignment"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.h4,{id:"popup",children:[(0,i.jsx)(r.code,{children:"popup"}),": Popup | null"]}),"\n",(0,i.jsxs)(r.p,{children:["An instance of the ",(0,i.jsx)(r.a,{href:"https://maplibre.org/maplibre-gl-js/docs/API/classes/Popup/",children:"Popup"})," class to attach to this marker. If undefined or null, any popup set on this Marker instance is unset."]}),"\n",(0,i.jsxs)(r.h4,{id:"rotation",children:[(0,i.jsx)(r.code,{children:"rotation"}),": number"]}),"\n",(0,i.jsxs)(r.p,{children:["Default: ",(0,i.jsx)(r.code,{children:"0"})]}),"\n",(0,i.jsxs)(r.p,{children:["The rotation angle of the marker in degrees, relative to its ",(0,i.jsx)(r.code,{children:"rotationAlignment"})," setting. A positive value will rotate the marker clockwise."]}),"\n",(0,i.jsxs)(r.h4,{id:"rotationalignment",children:[(0,i.jsx)(r.code,{children:"rotationAlignment"}),": 'map' | 'viewport' | 'auto'"]}),"\n",(0,i.jsxs)(r.p,{children:["Default: ",(0,i.jsx)(r.code,{children:"'auto'"})]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"map"})," aligns the ",(0,i.jsx)(r.code,{children:"Marker"}),"'s rotation relative to the map, maintaining a bearing as the map rotates."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"viewport"})," aligns the ",(0,i.jsx)(r.code,{children:"Marker"}),"'s rotation relative to the viewport, agnostic to map rotations."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"auto"})," is equivalent to ",(0,i.jsx)(r.code,{children:"viewport"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.h4,{id:"style",children:[(0,i.jsx)(r.code,{children:"style"}),": CSSProperties"]}),"\n",(0,i.jsx)(r.p,{children:"CSS style override that applies to the marker's container."}),"\n",(0,i.jsx)(r.h3,{id:"callbacks",children:"Callbacks"}),"\n",(0,i.jsxs)(r.h4,{id:"onclick",children:[(0,i.jsx)(r.code,{children:"onClick"}),": (evt: ",(0,i.jsx)(r.a,{href:"/react-maplibre/docs/api-reference/types#mapevent",children:"MapEvent"}),") => void"]}),"\n",(0,i.jsx)(r.p,{children:"Called when the marker is clicked on."}),"\n",(0,i.jsxs)(r.h4,{id:"ondragstart",children:[(0,i.jsx)(r.code,{children:"onDragStart"}),": (evt: ",(0,i.jsx)(r.a,{href:"/react-maplibre/docs/api-reference/types#markerdragevent",children:"MarkerDragEvent"}),") => void"]}),"\n",(0,i.jsxs)(r.p,{children:["Called when dragging starts, if ",(0,i.jsx)(r.code,{children:"draggable"})," is ",(0,i.jsx)(r.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(r.h4,{id:"ondrag",children:[(0,i.jsx)(r.code,{children:"onDrag"}),": (evt: ",(0,i.jsx)(r.a,{href:"/react-maplibre/docs/api-reference/types#markerdragevent",children:"MarkerDragEvent"}),") => void"]}),"\n",(0,i.jsxs)(r.p,{children:["Called while dragging, if ",(0,i.jsx)(r.code,{children:"draggable"})," is ",(0,i.jsx)(r.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(r.h4,{id:"ondragend",children:[(0,i.jsx)(r.code,{children:"onDragEnd"}),": (evt: ",(0,i.jsx)(r.a,{href:"/react-maplibre/docs/api-reference/types#markerdragevent",children:"MarkerDragEvent"}),") => void"]}),"\n",(0,i.jsxs)(r.p,{children:["Called when dragging ends, if ",(0,i.jsx)(r.code,{children:"draggable"})," is ",(0,i.jsx)(r.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"other-properties",children:"Other Properties"}),"\n",(0,i.jsx)(r.p,{children:"The properties in this section are not reactive. They are only used when the component first mounts."}),"\n",(0,i.jsxs)(r.p,{children:["Any ",(0,i.jsx)(r.a,{href:"https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MarkerOptions/",children:"options"})," supported by the ",(0,i.jsx)(r.code,{children:"Marker"})," class, such as"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"anchor"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"color"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"scale"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"clickTolerance"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(r.p,{children:["The underlying native ",(0,i.jsx)(r.code,{children:"Marker"})," instance is accessible via a ",(0,i.jsx)(r.a,{href:"https://reactjs.org/docs/refs-and-the-dom.html#creating-refs",children:"React ref"})," hook.\r\nYou may use it to call any imperative methods:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import * as React from 'react';\r\nimport {useRef, useMemo, useCallback} from 'react';\r\nimport {Map, Marker} from '@vis.gl/react-maplibre';\r\nimport maplibregl from 'maplibre-gl';\r\n\r\nfunction App() {\r\n  const markerRef = useRef<maplibregl.Marker>();\r\n\r\n  const popup = useMemo(() => {\r\n    return maplibregl.Popup().setText('Hello world!');\r\n  }, [])\r\n\r\n  const togglePopup = useCallback(() => {\r\n    markerRef.current?.togglePopup();\r\n  }, []);\r\n\r\n  return <>\r\n    <Map>\r\n      <Marker longitude={-122.4} latitude={37.8} color=\"red\" popup={popup} ref={markerRef} />\r\n    </Map>\r\n    <button onClick={togglePopup}>Toggle popup</button>\r\n  </>;\r\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/visgl/react-maplibre/tree/1.0-release/src/components/marker.ts",children:"marker.ts"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var i=n(6540);const t={},l=i.createContext(t);function a(e){const r=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:r},e.children)}}}]);