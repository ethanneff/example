(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[27],{228:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(173),a=n(0),u=n.n(a),o=n(8),l=n(7),i=n(172),s=n(40),f=n(4),m=n(23),b=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],j=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],r=0;r<e;r++){n[r]=[];for(var c=0;c<e;c++)n[r][c]=Math.random()>t?0:1}return n},O=n(190),y=Object(a.memo)((function(e){var t=Object(s.a)();return u.a.createElement(O.a,{onPress:e.onItemPress(e.x,e.y),key:"".concat(e.x,"-").concat(e.y),style:{height:e.size,width:e.size,backgroundColor:e.row?t.primary:t.surface,borderWidth:1,borderColor:t.light}})}));t.default=Object(a.memo)((function(){var e=Object(s.a)(),t=Object(a.useState)({run:!1,delay:16,count:20}),n=Object(c.a)(t,2),O=n[0],d=n[1],p=Object(a.useState)(j(O.count,.5)),E=Object(c.a)(p,2),h=E[0],k=E[1],C=Object(a.useRef)(O.run),x=Object(a.useRef)(O.delay),g=Object(a.useRef)(null),v=Object(f.f)(m.h)/O.count,w=Object(s.d)(),P=o.a.create({container:{backgroundColor:e.background}}),S=Object(a.useCallback)((function(){return k(j(O.count))}),[O.count]),D=Object(a.useCallback)((function(e,t){return function(){k((function(n){return n.map((function(n,r){return n.map((function(n,c){return function(e,t,n,r,c){return r===t&&n===c?e?0:1:e}(n,e,t,r,c)}))}))}))}}),[]),V=Object(a.useCallback)((function(){return k(j(O.count,.5))}),[O.count]),z=Object(a.useCallback)((function(){C.current&&(k((function(e){return e.map((function(t,n){return t.map((function(t,r){return function(e,t,n){var r=0,a=e[t][n],u=e.length;return b.forEach((function(a){var o=Object(c.a)(a,2),l=o[0],i=o[1],s=t+l,f=n+i;s>=0&&s<u&&f>=0&&f<u&&(r+=e[s][f])})),r<2||r>3?0:0===a&&3===r?1:a}(e,n,r)}))}))})),g.current=setTimeout(z,x.current))}),[]),R=Object(a.useCallback)((function(){d((function(e){return Object(r.a)({},e,{run:!e.run})})),C.current=!C.current,z()}),[z]),I=Object(a.useCallback)((function(e){d((function(t){return Object(r.a)({},t,{count:e})})),k(j(e,.5))}),[]),J=Object(a.useCallback)((function(e){d((function(t){return Object(r.a)({},t,{delay:e})})),x.current=e}),[]);return Object(a.useEffect)((function(){return function(){g.current&&clearTimeout(g.current)}}),[g]),u.a.createElement(i.l,{onLeftPress:w.to("debug"),title:"Game of life"},u.a.createElement(l.a,{style:{flexDirection:"row"}},u.a.createElement(i.n,{title:"count: ".concat(O.count),h4:!0,style:{alignSelf:"center"}}),u.a.createElement(i.m,{style:{flex:1},value:10,maximumValue:100,minimumValue:1,step:1,onSlidingComplete:I})),u.a.createElement(l.a,{style:{flexDirection:"row"}},u.a.createElement(i.n,{title:"delay: ".concat(Math.floor(O.delay)),h4:!0,style:{alignSelf:"center"}}),u.a.createElement(i.m,{style:{flex:1},value:10,maximumValue:100,minimumValue:1,step:1,onSlidingComplete:J})),u.a.createElement(l.a,{style:P.container},u.a.createElement(l.a,{style:{flexDirection:"row",justifyContent:"center"}},u.a.createElement(i.b,{title:O.run?"stop":"start",onPress:R}),u.a.createElement(i.b,{title:"random",onPress:V}),u.a.createElement(i.b,{title:"clear",onPress:S})),u.a.createElement(l.a,null,h.map((function(e,t){return u.a.createElement(l.a,{key:"".concat(t),style:{flexDirection:"row",justifyContent:"center"}},e.map((function(e,n){return u.a.createElement(y,{key:"".concat(t,"-").concat(n),row:e,x:t,y:n,size:v,onItemPress:D})})))})))))}))}}]);
//# sourceMappingURL=27.5737b9a5.chunk.js.map