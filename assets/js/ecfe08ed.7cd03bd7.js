"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1987],{1736:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(4848),s=t(8453);const r={},c="Contributing",l={id:"contributing",title:"Contributing",description:"Thanks for taking the time to contribute!",source:"@site/../docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/react-maplibre/docs/contributing",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/react-maplibre/tree/master/docs/../docs/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Upgrade Guide",permalink:"/react-maplibre/docs/upgrade-guide"},next:{title:"Get Started",permalink:"/react-maplibre/docs/get-started/"}},a={},o=[{value:"Setting Up Dev Environment",id:"setting-up-dev-environment",level:2},{value:"Pull Requests",id:"pull-requests",level:2},{value:"PR Checklist",id:"pr-checklist",level:3},{value:"Release",id:"release",level:2},{value:"Community Governance",id:"community-governance",level:2},{value:"Technical Steering Committee",id:"technical-steering-committee",level:3},{value:"Maintainers",id:"maintainers",level:3},{value:"Code of Conduct",id:"code-of-conduct",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"contributing",children:"Contributing"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Thanks for taking the time to contribute!"})}),"\n",(0,i.jsx)(n.p,{children:"PRs and bug reports are welcome, and we are actively looking for new maintainers."}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-dev-environment",children:"Setting Up Dev Environment"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"master"})," branch is the active development branch."]}),"\n",(0,i.jsxs)(n.p,{children:["Building react-maplibre locally from the source requires node.js LTS.\nWe use ",(0,i.jsx)(n.a,{href:"https://yarnpkg.com/en/docs/install",children:"yarn"})," to manage the dependencies."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout master\nyarn bootstrap\nyarn test\n"})}),"\n",(0,i.jsx)(n.p,{children:"Test:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ yarn test\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Test in Node:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ yarn test node\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Test in browser (can use Chrome dev tools for debugging):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ yarn test browser\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,i.jsxs)(n.p,{children:["Any intended change to the code base must open a ",(0,i.jsx)(n.a,{href:"https://help.github.com/articles/creating-a-pull-request/",children:"pull request"})," and be approved."]}),"\n",(0,i.jsxs)(n.p,{children:["Generally speaking, all PRs are open against the ",(0,i.jsx)(n.code,{children:"master"})," branch, unless the feature being affected no longer exists on master."]}),"\n",(0,i.jsx)(n.h3,{id:"pr-checklist",children:"PR Checklist"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Tests"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"yarn test"})," must be successful."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"New code should be covered by unit tests whenever possible."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Documentation"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If public APIs are added/modified, update component documentation in ",(0,i.jsx)(n.code,{children:"docs/api-reference"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Breaking changes and deprecations must be added to ",(0,i.jsx)(n.code,{children:"docs/upgrade-guide.md"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Noteworthy new features should be added to ",(0,i.jsx)(n.code,{children:"docs/whats-new.md"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Description on GitHub"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Link to relevant issue."}),"\n",(0,i.jsx)(n.li,{children:"Label with a milestone (latest release or vNext)."}),"\n",(0,i.jsx)(n.li,{children:"If public APIs are added/modified, describe the intended behavior."}),"\n",(0,i.jsx)(n.li,{children:"If visual/interaction is affected, consider attaching a screenshot/GIF."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"release",children:"Release"}),"\n",(0,i.jsxs)(n.p,{children:["react-maplibre follows the ",(0,i.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"})," guidelines. Steps for publishing releases can be found ",(0,i.jsx)(n.a,{href:"https://www.github.com/visgl/tsc/tree/master/developer-process",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"community-governance",children:"Community Governance"}),"\n",(0,i.jsxs)(n.p,{children:["vis.gl is part of the ",(0,i.jsx)(n.a,{href:"https://openjsf.org/",children:"OpenJS Foundation"}),". See the organization's ",(0,i.jsx)(n.a,{href:"https://github.com/visgl/tsc/blob/master/Technical%20Charter.md",children:"Technical Charter"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"technical-steering-committee",children:"Technical Steering Committee"}),"\n",(0,i.jsx)(n.p,{children:"react-maplibre development is governed by the vis.gl Technical Steering Committee (TSC)."}),"\n",(0,i.jsx)(n.h3,{id:"maintainers",children:"Maintainers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Pessimistress",children:"Xiaoji Chen"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Maintainers of react-maplibre have commit access to this GitHub repository, and take part in the decision making process."}),"\n",(0,i.jsxs)(n.p,{children:["If you are interested in becoming a maintainer, read the ",(0,i.jsx)(n.a,{href:"https://github.com/visgl/tsc/blob/master/governance.md",children:"governance guidelines"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The vis.gl TSC meets monthly and publishes meeting notes via a ",(0,i.jsx)(n.a,{href:"https://lists.uc.foundation/g/visgl",children:"mailing list"}),".\nThis mailing list can also be utilized to reach out to the TSC."]}),"\n",(0,i.jsx)(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,i.jsxs)(n.p,{children:["Please be mindful of and adhere to the Linux Foundation's ",(0,i.jsx)(n.a,{href:"https://lfprojects.org/policies/code-of-conduct/",children:"Code of Conduct"})," when contributing to react-maplibre."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);