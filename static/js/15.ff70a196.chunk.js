(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[15],{213:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(177),i=n(1),r=n.n(i),s=n(176),o=n(62),l=n(39),u=n(5),m=n(23);t.default=Object(i.memo)((function(){var e=Object(l.d)(),t=Object(u.e)(),n=Object(u.f)(o.h),b=Object(i.useState)({name:n.name,description:n.description||""}),p=Object(a.a)(b,2),d=p[0],j=p[1],O=0===d.name.trim().length;return r.a.createElement(s.l,{onLeftPress:e.to("checklistsList"),title:"Update Checklist Item",gutter:!0},r.a.createElement(s.o,{title:"name",value:d.name,onChangeText:function(e){return j((function(t){return Object(c.a)({},t,{name:e})}))}}),r.a.createElement(s.o,{title:"description",value:d.description,onChangeText:function(e){return j((function(t){return Object(c.a)({},t,{description:e})}))}}),r.a.createElement(s.b,{title:"update",onPress:function(){var e=d.name,a=d.description,i=Date.now();O||(t(Object(o.n)(Object(c.a)({},n,{name:e,description:a,updatedAt:i}))),t(Object(m.k)("checklistsList")))}}),r.a.createElement(s.b,{title:"delete",onPress:function(){t(Object(o.i)(n.id)),t(Object(m.k)("checklistsList"))},danger:!0}))}))}}]);
//# sourceMappingURL=15.ff70a196.chunk.js.map