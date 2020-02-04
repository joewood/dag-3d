(this["webpackJsonpdag-3d"]=this["webpackJsonpdag-3d"]||[]).push([[0],{136:function(e,t,a){e.exports=a(320)},140:function(e,t,a){},141:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),i=a.n(o),l=(a(140),a(141),a(4)),c=a(75),h=a(11),m=a(135),s=Object(n.forwardRef)((function(e,t){var a=e.width,o=e.height,i=e.text,l=e.backgroundColor,c=e.color,s=e.depth,d=Object(m.a)(e,["width","height","text","backgroundColor","color","depth"]),u=a||1,g=o||.3,f=i||"<null>",p=Object(n.useMemo)((function(){var e=document.createElement("canvas"),t=e.getContext("2d");if(!t)return null;var a=20*u,n=20*g;e.style.position="absolute",e.style.top="calc(50% - ".concat(n/2,"px)"),e.style.width=a+"px",e.style.height=n+"px",e.width=20*a,e.height=20*n,t.scale(20,20),t.fillStyle=l||"grey",t.fillRect(0,0,a,n);var r=n/1.5;t.font="bold ".concat(r,"px Arial, sans-serif"),t.fillStyle=c||"white",t.textAlign="center",t.textBaseline="middle";var o=a/2,i=n/2;return t.fillText(f,o,i),e}),[a,o,c,l,i]);Object(h.d)().viewport;return r.a.createElement("mesh",Object.assign({ref:t},d),r.a.createElement("boxBufferGeometry",{args:[u,g,s||.06],attach:"geometry"}),r.a.createElement("meshStandardMaterial",{attachArray:"material",color:"grey"}),r.a.createElement("meshStandardMaterial",{attachArray:"material",color:"grey"}),r.a.createElement("meshStandardMaterial",{attachArray:"material",color:"grey"}),r.a.createElement("meshStandardMaterial",{attachArray:"material",color:"grey"}),r.a.createElement("meshStandardMaterial",{attachArray:"material"},r.a.createElement("canvasTexture",{attach:"map",image:p})),r.a.createElement("meshStandardMaterial",{attachArray:"material"},r.a.createElement("canvasTexture",{attach:"map",image:p})))})),d=a(1),u=a(134);function g(e){var t=function(e){var t=Object(h.d)().camera,a=Object(n.useState)({pos:{x:0,y:0,z:4},vel:{x:0,y:0,z:0}}),r=Object(l.a)(a,2),o=r[0],i=r[1],c=Object(n.useState)([0,0,-1]),m=Object(l.a)(c,2),s=m[0],u=m[1],g=Object(n.useCallback)((function(t){var a=t.clock.getElapsedTime()/2,n=Math.floor(a)%e.length,r=(n+1)%e.length;Math.floor(a);i((function(t){return{vel:{x:.95*(.002*(e[n].x-t.pos.x)+t.vel.x),y:.95*(.002*(e[n].y-t.pos.y)+t.vel.y),z:0},pos:{x:t.pos.x+t.vel.x,y:t.pos.y+t.vel.y,z:t.pos.z+t.vel.z}}})),u((function(t){return[.002*(e[r].x-t[0])+t[0],.002*(e[r].y-t[1])+t[1],t[2]]}))}),[e]);return Object(h.c)(g),t.position.set(o.pos.x,o.pos.y,o.pos.z),t.lookAt(new d.Vector3(o.pos.x+3*o.vel.x,o.pos.y+3*o.vel.y,s[2])),[o.pos.x,o.pos.y,o.pos.z]}(e.points);return r.a.createElement("camera",{attach:"camera",position:t})}Object(h.b)({OrbitControls:u.a});var f=function(e){var t=e.graph,a=Object(h.d)(),o=a.viewport,i=(a.size,function(e){return(e-t.width[0])*o.width/(t.width[1]-t.width[0])-o.width/2}),c=function(e){return(e-t.height[0])*o.height/(t.height[1]-t.height[0])-o.height/2},m=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),r=a[0],o=a[1],i=Object(n.useCallback)((function(t){var a=t.clock.getElapsedTime()/2,n=Math.floor(a)%e.length;o(n)}),[e]);return Object(h.c)(i),r}(t.nodes),u=Object(n.useMemo)((function(){return t.nodes.map((function(e){return new d.Vector3(i(e.x),c(e.y),-.1)}))}),[t]);return console.log({selectedNode:m}),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{points:u}),t.nodes.map((function(e,a){return r.a.createElement(s,{key:e.name+m,text:e.name,color:a===m?"black":"white",width:(l=e.width,l*o.width/(t.width[1]-t.width[0])),height:(n=e.height,n*o.height/(t.height[1]-t.height[0])),depth:.2,position:[i(e.x),c(e.y),-.1]});var n,l})),t.edges.map((function(e){var t=new d.CatmullRomCurve3(e.points.map((function(e){return new d.Vector3(i(e.x),c(e.y),-.1)})),!1,"catmullrom");return r.a.createElement("mesh",null,r.a.createElement("tubeGeometry",{attach:"geometry",args:[t,30,.03,8,!1]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"grey"}))})))};function p(){var e=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"LR";return Object(n.useMemo)((function(){var n=new c.graphlib.Graph({directed:!0});n.setGraph({rankdir:a,edgesep:2,marginx:20,marginy:20}),n.setDefaultEdgeLabel((function(){return{}}));var r=!0,o=!1,i=void 0;try{for(var l,h=e[Symbol.iterator]();!(r=(l=h.next()).done);r=!0){var m=l.value;n.setNode(m.name,{label:m.name,width:m.width,height:m.height})}}catch(x){o=!0,i=x}finally{try{r||null==h.return||h.return()}finally{if(o)throw i}}var s=!0,d=!1,u=void 0;try{for(var g,f=t[Symbol.iterator]();!(s=(g=f.next()).done);s=!0){var p=g.value;n.setEdge(p.from,p.to,{minlen:1})}}catch(x){d=!0,u=x}finally{try{s||null==f.return||f.return()}finally{if(d)throw u}}Object(c.layout)(n);var y=n.nodes().map((function(e){return{name:e,width:n.node(e).width,height:n.node(e).height,x:n.node(e).x,y:n.node(e).y}})),v=y.reduce((function(e,t){return[Math.min(t.x,e[0]),Math.max(t.x+t.width,e[1])]}),[0,0]),w=y.reduce((function(e,t){return[Math.min(t.y,e[0]),Math.max(t.y+t.height,e[1])]}),[0,0]);return{nodes:y,width:v,height:w,edges:n.edges().map((function(e){return{points:n.edge(e).points}}))}}),[e,t])}([{name:"Config",width:50,height:6},{name:"Ref Data Svc",width:50,height:6},{name:"EOD Prices",width:50,height:6},{name:"MD Sys",width:50,height:6},{name:"Client",width:50,height:6},{name:"Client Int",width:50,height:6},{name:"VWAP Engine",width:50,height:6},{name:"OMS",width:50,height:6},{name:"Exch Links",width:50,height:6},{name:"Trading Sys",width:50,height:6}],[{from:"Config",to:"VWAP Engine"},{from:"Client",to:"Client Int"},{from:"Client Int",to:"OMS"},{from:"Ref Data Svc",to:"VWAP Engine"},{from:"MD Sys",to:"VWAP Engine"},{from:"EOD Prices",to:"VWAP Engine"},{from:"VWAP Engine",to:"OMS"},{from:"OMS",to:"Exch Links"},{from:"Exch Links",to:"Trading Sys"},{from:"Trading Sys",to:"Client Int"}],"RL");return r.a.createElement(h.a,{pixelRatio:window.devicePixelRatio},r.a.createElement("ambientLight",null),r.a.createElement("spotLight",{position:[10,-30,10],color:new d.Color("#4040ff"),rotation:[.2,-.2,0]}),r.a.createElement("spotLight",{position:[-10,-30,10],color:new d.Color("#90ff90"),rotation:[.2,.2,0]}),r.a.createElement(f,{graph:e}))}var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"DAG Component"),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[136,1,2]]]);
//# sourceMappingURL=main.1442d0ab.chunk.js.map