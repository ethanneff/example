(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[18],{211:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(177),r=n(1),i=n.n(r),o=n(176),s=n(62),u=n(39),l=n(5),m=n(23);t.default=Object(r.memo)((function(){var e=Object(u.d)(),t=Object(l.e)(),n=Object(l.f)(s.g),b=Object(r.useState)(!1),d=Object(c.a)(b,2),p=d[0],j=d[1],O=Object(r.useState)({name:n.name,description:n.description||""}),f=Object(c.a)(O,2),h=f[0],k=f[1],g=0===h.name.trim().length,E=function(){return j(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.l,{onLeftPress:e.to("checklists"),title:"Update Checklist",gutter:!0},i.a.createElement(o.o,{title:"name",value:h.name,onChangeText:function(e){return k((function(t){return Object(a.a)({},t,{name:e})}))}}),i.a.createElement(o.o,{title:"description",value:h.description,onChangeText:function(e){return k((function(t){return Object(a.a)({},t,{description:e})}))}}),i.a.createElement(o.b,{title:"update",onPress:function(){var e=h.name,c=h.description,r=Date.now();g||(t(Object(s.o)(Object(a.a)({},n,{name:e,description:c,updatedAt:r}))),t(Object(m.k)("checklists")))}}),i.a.createElement(o.b,{title:"delete",onPress:function(){return j(!0)},danger:!0})),p&&i.a.createElement(o.e,{title:"are you sure?",onConfirmButtonPress:function(){j(!1),t(Object(s.j)(n.id)),t(Object(m.k)("checklists"))},onBackgroundPress:E,onCancelButtonPress:E}))}))}}]);
//# sourceMappingURL=18.9ed79f17.chunk.js.map