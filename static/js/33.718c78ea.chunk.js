(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[33],{229:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a(3),o=a(173),l=a(0),c=a.n(l),i=a(7),u=a(38),s=a(25),b=a(30),h=a(95),d=a(8),p=a(20);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var O={},v=function(e){var t,a;function r(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this)._handleChange=function(e){var a=t.props.onValueChange;a&&a(e.nativeEvent.target.checked)},t._handleFocusState=function(e){var a="focus"===e.nativeEvent.type?"0px 1px 3px rgba(0,0,0,0.5), 0 0 0 10px rgba(0,0,0,0.1)":"0px 1px 3px rgba(0,0,0,0.5)";t._thumbElement&&t._thumbElement.setNativeProps({style:{boxShadow:a}})},t._setCheckboxRef=function(e){t._checkboxElement=e},t._setThumbRef=function(e){t._thumbElement=e},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.blur=function(){p.a.blur(this._checkboxElement)},n.focus=function(){p.a.focus(this._checkboxElement)},n.render=function(){var e=this.props,t=e.accessibilityLabel,a=e.activeThumbColor,r=void 0===a?"#009688":a,n=e.activeTrackColor,o=void 0===n?"#A3D3CF":n,l=e.disabled,u=void 0!==l&&l,s=(e.onValueChange,e.style),p=void 0===s?O:s,m=e.thumbColor,f=void 0===m?"#FAFAFA":m,g=e.trackColor,v=void 0===g?"#939393":g,C=e.value,j=void 0!==C&&C,E=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["accessibilityLabel","activeThumbColor","activeTrackColor","disabled","onValueChange","style","thumbColor","trackColor","value"]),x=d.a.flatten(p),w=x.height,T=x.width,_=w||20,D=Object(h.a)(_,2),P=T>D?T:D,F=Object(h.a)(_,.5),S=j?null!=v&&"object"===typeof v&&v.true||o:null!=v&&"object"===typeof v&&v.false||v,W=j?r:f,A=_,B=A,L=[k.root,p,u&&k.cursorDefault,{height:_,width:P}],M=[k.track,{backgroundColor:u?"#D5D5D5":S,borderRadius:F}],R=[k.thumb,j&&k.thumbActive,{backgroundColor:u?"#BDBDBD":W,height:A,marginStart:j?Object(h.a)(B,-1):0,width:B}],V=Object(b.a)("input",{accessibilityLabel:t,checked:j,disabled:u,onBlur:this._handleFocusState,onChange:this._handleChange,onFocus:this._handleFocusState,ref:this._setCheckboxRef,style:[k.nativeControl,k.cursorInherit],type:"checkbox"});return c.a.createElement(i.a,y({},E,{style:L}),c.a.createElement(i.a,{style:M}),c.a.createElement(i.a,{ref:this._setThumbRef,style:R}),V)},r}(c.a.Component);v.displayName="Switch";var k=d.a.create({root:{cursor:"pointer",userSelect:"none"},cursorDefault:{cursor:"default"},cursorInherit:{cursor:"inherit"},track:f({},d.a.absoluteFillObject,{height:"70%",margin:"auto",transitionDuration:"0.1s",width:"100%"}),thumb:{alignSelf:"flex-start",borderRadius:"100%",boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",start:"0%",transform:[{translateZ:0}],transitionDuration:"0.1s"},thumbActive:{start:"100%"},nativeControl:f({},d.a.absoluteFillObject,{height:"100%",margin:0,opacity:0,padding:0,width:"100%"})}),C=Object(s.a)(v),j=a(172),E=a(40),x=a(4),w=a(174),T=a.n(w),_=Object(l.memo)((function(e){var t=e.title,a=e.row,r=e.children,n=Object(E.a)();return c.a.createElement(i.a,{style:{flexDirection:a?"row":"column",marginBottom:x.c.padding.p04}},c.a.createElement(j.n,{h3:!0,title:t,style:{color:n.background,backgroundColor:n.secondary,padding:x.c.padding.p02,borderColor:n.secondary,borderWidth:2}}),c.a.createElement(i.a,{style:{backgroundColor:n.background,padding:x.c.padding.p03,borderColor:n.secondary,borderWidth:2,borderTopWidth:0}},r))})),D={launched:!1,launchWeeks:"",usersTalkedTo:"",usersLearnedFrom:"",topGoals:"",primaryMetric:"",biggestObstacle:"",morale:""};t.default=Object(l.memo)((function(){var e=Object(E.a)(),t=Object(E.d)(),a=Object(l.useState)(D),s=Object(o.a)(a,2),b=s[0],h=s[1],d=parseInt(b.launchWeeks,10)>=5?"That's a long way out! Think hard: is there an MVP you could launch earlier?":"Almost there, looking forward to your launch!",p=Object(l.useCallback)((function(e,t){return h((function(a){return Object(n.a)({},a,Object(r.a)({},e,t))}))}),[]),m=Object(l.useCallback)((function(e){return p("launched",e)}),[p]),f=Object(l.useCallback)((function(e){return p("usersTalkedTo",e)}),[p]),g=Object(l.useCallback)((function(e){return p("morale",e)}),[p]),y=Object(l.useCallback)((function(e){return p("biggestObstacle",e)}),[p]),O=Object(l.useCallback)((function(e){return p("usersLearnedFrom",e)}),[p]),v=Object(l.useCallback)((function(e){return p("primaryMetric",e)}),[p]),k=Object(l.useCallback)((function(e){return p("topGoals",e)}),[p]),w=Object(l.useCallback)((function(e){return p("launchWeeks",e)}),[p]),P=Object(l.useCallback)((function(){}),[]);return c.a.createElement(j.l,{onLeftPress:t.to("debug"),title:"Weekly Update"},c.a.createElement(i.a,{style:{paddingBottom:x.c.padding.p04,borderBottomColor:e.secondary,borderBottomWidth:2}},c.a.createElement(j.n,{h4:!0,center:!0,title:T()().format("MMM DD, YYYY")})),c.a.createElement(u.a,{contentContainerStyle:{backgroundColor:e.light,padding:x.c.padding.p04}},c.a.createElement(_,{title:"Launch"},c.a.createElement(i.a,null,c.a.createElement(j.n,{title:"Are you launched?"}),c.a.createElement(C,{value:b.launched,onValueChange:m})),c.a.createElement(i.a,null,c.a.createElement(j.o,{title:"Weeks to launch?",keyboardType:j.h.Number,onChangeText:w,value:b.launchWeeks}),c.a.createElement(j.n,{title:d,hidden:0===d.length}))),c.a.createElement(_,{title:"Users"},c.a.createElement(j.o,{title:"Users/prospective users talked to this week?",onChangeText:f,value:b.usersTalkedTo}),c.a.createElement(j.o,{title:"What have you learned from them?",onChangeText:O,value:b.usersLearnedFrom})),c.a.createElement(_,{title:"Goals"},c.a.createElement(j.o,{title:"What are your top 1-3 goals for the next week?",onChangeText:k,value:b.topGoals}),c.a.createElement(j.o,{title:"What most improved your primary metric?",onChangeText:v,value:b.primaryMetric}),c.a.createElement(j.o,{title:"Biggest obstacle?",onChangeText:y,value:b.biggestObstacle})),c.a.createElement(_,{title:"Morale"},c.a.createElement(j.o,{title:"On a scale of 1-10, what is your morale?",keyboardType:j.h.Number,onChangeText:g,value:b.morale})),c.a.createElement(j.b,{title:"submit",onPress:P,contained:!0})))}))}}]);
//# sourceMappingURL=33.718c78ea.chunk.js.map