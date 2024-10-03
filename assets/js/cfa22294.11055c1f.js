"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4006],{3763:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(4848),a=n(8453);const i={},c="Upgrade Guide",o={id:"upgrade-guide",title:"Upgrade Guide",description:"Migrating from react-map-gl",source:"@site/../docs/upgrade-guide.md",sourceDirName:".",slug:"/upgrade-guide",permalink:"/react-maplibre/docs/upgrade-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/react-maplibre/tree/master/docs/../docs/upgrade-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"What's new",permalink:"/react-maplibre/docs/whats-new"},next:{title:"Contributing",permalink:"/react-maplibre/docs/contributing"}},s={},d=[{value:"Migrating from react-map-gl",id:"migrating-from-react-map-gl",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"upgrade-guide",children:"Upgrade Guide"})}),"\n",(0,t.jsx)(r.h2,{id:"migrating-from-react-map-gl",children:"Migrating from react-map-gl"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"@vis.gl/react-maplibre"})," v1.0 can be used as a drop-in replacement of ",(0,t.jsx)(r.code,{children:"react-map-gl"})," v7:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-patch",children:"- import {Map, Marker} from 'react-map-gl/maplibre';\n+ import {Map, Marker} from 'react-maplibre-gl';\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The following Mapbox-only props from ",(0,t.jsx)(r.code,{children:"react-map-gl"}),"'s Map component are removed:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"mapboxAccessToken"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"workerClass"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"baseApiUrl"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>o});var t=n(6540);const a={},i=t.createContext(a);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);