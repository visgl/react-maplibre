"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8595],{8202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(4848),s=n(8453);const r={},o="State Management",i={id:"get-started/state-management",title:"State Management",description:"There are two ways to use a Map:",source:"@site/../docs/get-started/state-management.md",sourceDirName:"get-started",slug:"/get-started/state-management",permalink:"/react-maplibre/docs/get-started/state-management",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/react-maplibre/tree/master/docs/../docs/get-started/state-management.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Get Started",permalink:"/react-maplibre/docs/get-started/"},next:{title:"Adding Custom Data",permalink:"/react-maplibre/docs/get-started/adding-custom-data"}},l={},c=[{value:"Uncontrolled Map",id:"uncontrolled-map",level:2},{value:"Controlled Map",id:"controlled-map",level:2},{value:"Custom Camera Constraints",id:"custom-camera-constraints",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"state-management",children:"State Management"})}),"\n",(0,a.jsxs)(t.p,{children:["There are two ways to use a ",(0,a.jsx)(t.a,{href:"/react-maplibre/docs/api-reference/map",children:"Map"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://reactjs.org/docs/uncontrolled-components.html",children:"Uncontrolled"}),": The application sets the initial view state (Camera options) when the map is mounted, and the component automatically makes changes to the view states afterwards. This mode works very similarly to the mapbox-gl ",(0,a.jsx)(t.code,{children:"Map"})," class."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://reactjs.org/docs/forms.html#controlled-components",children:"Controlled"}),": The application manages the view state, and pass it to the map via props. The map invokes a callback with a new view state during user interaction transition, and the application can decide what to do with it. This mode is the most powerful when an application has other components that need to interact with the map, or implements its own user input and data handling logic."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"uncontrolled-map",children:"Uncontrolled Map"}),"\n",(0,a.jsxs)(t.p,{children:["You may clone a full app configuration for this example ",(0,a.jsx)(t.a,{href:"https://github.com/visgl/react-maplibre/tree/1.0-release/examples/get-started/basic",children:"here"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import * as React from 'react';\nimport {Map} from '@vis.gl/react-maplibre';\n\nfunction App() {\n  return <Map\n    initialViewState={{\n      longitude: -100,\n      latitude: 40,\n      zoom: 3.5\n    }}\n    mapStyle=\"https://demotiles.maplibre.org/style.json\"\n  />;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"controlled-map",children:"Controlled Map"}),"\n",(0,a.jsxs)(t.p,{children:["You may clone a full app configuration for this example ",(0,a.jsx)(t.a,{href:"https://github.com/visgl/react-maplibre/tree/7.0-release/examples/get-started/controlled",children:"here"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import * as React from 'react';\nimport {Map} from '@vis.gl/react-maplibre';\n\nfunction App() {\n  const [viewState, setViewState] = React.useState({\n    longitude: -100,\n    latitude: 40,\n    zoom: 3.5\n  });\n\n  return <Map\n    {...viewState}\n    onMove={evt => setViewState(evt.viewState)}\n    mapStyle=\"https://demotiles.maplibre.org/style.json\"\n  />;\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"A real-world application likely uses more complicated state flows:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Using map with a state store (Redux) ",(0,a.jsx)(t.a,{href:"https://github.com/visgl/react-maplibre/tree/1.0-release/examples/get-started/redux",children:"example"})]}),"\n",(0,a.jsxs)(t.li,{children:["Using map with SSR (Next.js) ",(0,a.jsx)(t.a,{href:"https://github.com/visgl/react-maplibre/tree/1.0-release/examples/get-started/nextjs",children:"example"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"custom-camera-constraints",children:"Custom Camera Constraints"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Map"})," offers props that set basic constraints for the camera, e.g. ",(0,a.jsx)(t.code,{children:"maxBounds"}),", ",(0,a.jsx)(t.code,{children:"minZoom"}),", ",(0,a.jsx)(t.code,{children:"maxPitch"}),". If you need more complicated logic to constrain the camera, you may use it as a controlled component. The following example restricts the map center inside a GeoJSON geofence:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import * as React from 'react';\nimport {Map} from '@vis.gl/react-maplibre';\n\n// npm install @turf/turf\nimport * as turf from '@turf/turf';\n\n// A circle of 5 mile radius of the Empire State Building\nconst GEOFENCE = turf.circle([-74.0122106, 40.7467898], 5, {units: 'miles'});\n\nfunction App() {\n  const [viewState, setViewState] = React.useState({\n    longitude: -100,\n    latitude: 40,\n    zoom: 3.5\n  });\n\n  const onMove = React.useCallback(({viewState}) => {\n    const newCenter = [viewState.longitude, viewState.latitude];\n    // Only update the view state if the center is inside the geofence\n    if (turf.booleanPointInPolygon(newCenter, GEOFENCE)) {\n      setViewState(newCenter);\n    }\n  }, [])\n\n  return <Map\n    {...viewState}\n    onMove={onMove}\n    mapStyle=\"https://demotiles.maplibre.org/style.json\"\n  />;\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);