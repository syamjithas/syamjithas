(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(t,e,s){"use strict";s.r(e);var c=s(1),n=s.n(c),a=s(50),o=s.n(a),i=(s(61),s(62),s(16)),l=s(2),r=s(7),m=(s(63),s(64),[[],[{class:"mtk1",text:"  "},{class:"mtk4",text:"const"},{class:"mtk1",text:""},{class:"mtk7",text:"wait"},{class:"mtk1",text:""},{class:"mtk10",text:"="},{class:"mtk1",text:" ("},{class:"mtk3 mtki",text:"time"},{class:"mtk1",text:") "},{class:"mtk4",text:"=>"},{class:"mtk1",text:" {"}],[{class:"mtk1",text:"    "},{class:"mtk4",text:"return"},{class:"mtk1",text:""},{class:"mtk4",text:"new"},{class:"mtk1",text:""},{class:"mtk6",text:"Promise"},{class:"mtk1",text:"("},{class:"mtk7 mtki",text:"resolve"},{class:"mtk1",text:""},{class:"mtk4",text:"=>"},{class:"mtk1",text:" {"}],[{class:"mtk1",text:"      "},{class:"mtk10",text:"setTimeout"},{class:"mtk1",text:"(() "},{class:"mtk4",text:"=>"},{class:"mtk1",text:" {,"}],[{class:"mtk1",text:"        "},{class:"mtk7",text:"resolve"},{class:"mtk1",text:"("},{class:"mtk5",text:"true"},{class:"mtk1",text:");"}],[{class:"mtk1",text:"       }, "},{class:"mtk3 mtki",text:"time"},{class:"mtk1",text:")"}],[{class:"mtk1",text:"     })"}],[{class:"mtk1",text:"   }"}],[],[{class:"mtk1",text:"  "},{class:"mtk4",text:"const"},{class:"mtk1",text:""},{class:"mtk7",text:"helloWorld"},{class:"mtk1",text:""},{class:"mtk10",text:"="},{class:"mtk1",text:""},{class:"mtk4",text:"async"},{class:"mtk1",text:" () "},{class:"mtk4",text:"=>"},{class:"mtk1",text:"  {"}],[{class:"mtk1",text:"    "},{class:"mtk4",text:"await"},{class:"mtk1",text:""},{class:"mtk7",text:"wait"},{class:"mtk1",text:"("},{class:"mtk5",text:"500"},{class:"mtk1",text:");"}],[{class:"mtk1",text:"    "},{class:"mtk10",text:"alert"},{class:"mtk1",text:"("},{class:"mtk8",text:"Hello World !"},{class:"mtk1",text:");"}],[{class:"mtk1",text:"   }"}],[{class:"mtk1",text:"  "},{class:"mtk7",text:"helloWorld"},{class:"mtk1",text:"()"}],[{class:"mtk1",text:"  "}]]),j=s(29),x=s.n(j),u=s(51),b=s(0),d=function(t){var e=Object(c.useState)(""),s=Object(r.a)(e,2),n=s[0],a=s[1],o="";Object(c.useEffect)((function(){l()}),[]);var i=function(t){return new Promise((function(e){setTimeout((function(){e(!0)}),t)}))},l=function(){var e=Object(u.a)(x.a.mark((function e(){var s,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=11;break}s=t.value.text.split("");case 2:if(!(s.length>0)){e.next=11;break}return c=s.shift(),a(o+=c=" "===c?"\xa0":c),e.next=9,i(10);case 9:e.next=2;break;case 11:t.nextString();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=t.value?Object(b.jsxs)("span",{className:t.value.class,children:[n," "]}):Object(b.jsx)("span",{});return Object(b.jsx)(b.Fragment,{children:m})};d.defaultProps={text:"",class:""};var O=d,k=function(t){var e=Object(c.useState)([]),s=Object(r.a)(e,2),n=s[0],a=s[1],o=t.value;Object(c.useEffect)((function(){i()}),[]);var i=function(){o.length>0?a(n.concat([o.shift()])):t.nextLine()},l=function(){i()},m=n.length>0?n.map((function(t,e){return Object(b.jsx)(O,{value:t,nextString:l},e)})):Object(b.jsx)("div",{});return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"linenumber",children:t.index}),m]})},f=function(t){var e=Object(c.useState)([]),s=Object(r.a)(e,2),n=s[0],a=s[1],o=m;Object(c.useEffect)((function(){i()}),[]);var i=function(){o.length>0?a(n.concat([o.shift()])):t.initHelloWorld()},l=function(){i()},j=n.map((function(t,e){return Object(b.jsx)(k,{index:e,value:t,nextLine:l},e)}));return Object(b.jsx)("div",{className:"codeframe",children:j})},h=s.p+"static/media/logo_blue_black.b7807b48.svg",g=(s(67),function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"text-div ".concat(t.landingClass.text),children:"Hello World !"}),Object(b.jsx)("img",{className:"svg-logo ".concat(t.landingClass.logo),src:h})]})}),v=function(){var t=Object(c.useState)({}),e=Object(r.a)(t,2),s=e[0],n=e[1];return Object(b.jsxs)("div",{className:"landing-container",children:[Object(b.jsx)("div",{className:"landing-flexbox",children:Object(b.jsx)(f,{initHelloWorld:function(){n({logo:"fade-in",text:"zoom-in"})}})}),Object(b.jsx)("div",{className:"landing-flexbox text-center",children:Object(b.jsx)(g,{landingClass:s})}),Object(b.jsx)(i.b,{className:"know-more",to:"/batman",children:Object(b.jsx)("div",{className:"gradient-glow"})})]})},p=(s(72),s.p+"static/media/batman.20ecde96.svg"),N=function(){return Object(b.jsx)("div",{className:"final_layers",children:Object(b.jsxs)("div",{className:"batman-container",children:[Object(b.jsx)(i.b,{to:"/ssohostjoin",children:Object(b.jsx)("div",{className:"game"})}),Object(b.jsx)("div",{className:"textarea",children:"It's not who I am underneath but what I do that defines me."}),Object(b.jsx)("div",{className:"smoke1 img one"}),Object(b.jsx)("div",{className:"smoke2 img two"}),Object(b.jsx)("div",{className:"smoke3 img three"}),Object(b.jsx)("div",{className:"smoke1 img three"}),Object(b.jsx)("div",{className:"smoke2 img two"}),Object(b.jsx)("div",{className:"smoke3 img one"}),Object(b.jsx)("div",{className:"smoke1 img two"}),Object(b.jsx)("div",{className:"smoke2 img one"}),Object(b.jsx)("div",{className:"smoke3 img three"}),Object(b.jsx)("img",{src:p,className:"tippy top layer"})]})})},w=s(20),I=(s(73),s(53)),y=s(54),S=s(4),C=s(23),L=s(55),M=s.n(L),P=s(56),_="localhost"==window.location.hostname?"ws://localhost:5000/":"/",F=Object(C.a)("connection"),D=Object(C.a)("peers"),T=Object(C.a)("socket"),E=function(){function t(e){var s=this;Object(I.a)(this,t),Object.defineProperty(this,F,{writable:!0,value:null}),Object.defineProperty(this,D,{writable:!0,value:{}}),Object.defineProperty(this,T,{writable:!0,value:null}),this.ROOM_ID=e||this.generateRoomId(),Object(S.a)(this,F)[F]=new M.a(void 0,{host:"/",port:"3001",path:"mypeer"}),Object(S.a)(this,T)[T]=Object(P.io)(_,{transports:["websocket"]}),window.navigator.mediaDevices.getUserMedia({video:!1,audio:!0}).then((function(t){s.myAudio=t,Object(S.a)(s,F)[F].on("call",(function(e){var c=e.peer;console.log("incoming call",c),e.answer(t),e.on("stream",(function(t){Object(S.a)(s,D)[D][c].audio=t})),e.on("close",(function(){delete Object(S.a)(s,D)[D][c]})),Object(S.a)(s,D)[D][c]={peer:c,call:e}})),Object(S.a)(s,T)[T].on("user-connected",(function(e){console.log("out going call",e);var c=Object(S.a)(s,F)[F].call(e,s.myAudio);c.answer(t),c.on("stream",(function(t){Object(S.a)(s,D)[D][e].audio=t})),c.on("close",(function(){delete Object(S.a)(s,D)[D][e]})),Object(S.a)(s,D)[D][e]={peer:e,call:c}})),Object(S.a)(s,T)[T].on("user-disconnected",(function(t){Object(S.a)(s,D)[D][t]&&delete Object(S.a)(s,D)[D][t]}))})),Object(S.a)(this,F)[F].on("open",(function(t){Object(S.a)(s,T)[T].emit("join-room",s.ROOM_ID,t)}))}return Object(y.a)(t,[{key:"generateRoomId",value:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",s=e.length,c=0;c<10;c++)t+=e.charAt(Math.floor(Math.random()*s));return t}},{key:"muteUnmute",value:function(t){this.myVideoStream.getAudioTracks()[0].enabled=t}},{key:"callMyPeer",value:function(){}}]),t}(),R=s(32),W=function(){var t,e,s=Object(c.useState)({}),n=Object(r.a)(s,2),a=n[0],o=n[1],i=Object(c.useState)(!1),l=Object(r.a)(i,2),m=l[0],j=l[1],x=Object(c.useState)({}),u=Object(r.a)(x,2),d=u[0],O=u[1],k=function(t){j(!0),o(t.profileObj)};return Object(b.jsxs)("div",{className:"google-container",children:[Object(b.jsx)("div",{className:"google-signin",children:m?Object(b.jsx)(R.GoogleLogout,{clientId:"264686452189-clrol0jr3h8979lcrrh6ii7v4s21agmc.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){j(!1),o({})}}):Object(b.jsx)(R.GoogleLogin,{clientId:"264686452189-clrol0jr3h8979lcrrh6ii7v4s21agmc.apps.googleusercontent.com",buttonText:"Login",isSignedIn:!0,onSuccess:k,onFailure:k,cookiePolicy:"single_host_origin"})}),m&&!d.roomId&&Object(b.jsxs)("div",{className:"host-join",children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){t=new E,O(Object(w.a)(Object(w.a)({},d),{},{roomId:t.ROOM_ID}))},children:"Hostgame"})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){e&&(t=new E(e),O(Object(w.a)(Object(w.a)({},d),{},{roomId:t.ROOM_ID})))},children:"Join"})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",value:d.roomId,onChange:function(t){e=t.target.value}})})]}),m&&Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"user-profile",children:[Object(b.jsx)("img",{className:"user-image",src:a.imageUrl}),Object(b.jsx)("div",{className:"user-text",children:a.name}),d.roomId&&Object(b.jsx)("div",{className:"room-number",children:d.roomId})]})}),Object(b.jsx)("div",{})]})};var H=function(){return Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(l.a,{path:"/",exact:!0,component:v}),Object(b.jsx)(l.a,{path:"/batman",component:N}),Object(b.jsx)(l.a,{path:"/ssohostjoin",component:W})]})})},U=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,106)).then((function(e){var s=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,o=e.getTTFB;s(t),c(t),n(t),a(t),o(t)}))};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),U()},61:function(t,e,s){},62:function(t,e,s){},63:function(t,e,s){},64:function(t,e,s){},67:function(t,e,s){},72:function(t,e,s){},73:function(t,e,s){},74:function(t,e){function s(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}s.keys=function(){return[]},s.resolve=s,t.exports=s,s.id=74}},[[105,1,2]]]);
//# sourceMappingURL=main.d48a5ea1.chunk.js.map