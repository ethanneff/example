(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[35],{255:function(t,a,e){"use strict";e.r(a);var n=e(55),r=e(56),o=e(79),i=e(80),c=e(0),l=e.n(c),h=e(49),u=e(120),d=e(46),m=e(171),s=e(24),p=e(168),f=e(8),v=e(7),g=e(167),M=e(42);function y(t){var a=Object(M.c)(),e=new p.a.Value(0),n=new p.a.Value(1),r=f.a.create({indicatorOverlay:{justifyContent:"center",position:"absolute"}}),o=t.uri,i=t.height,c=t.width,h=t.color,u=void 0===h?"black":h,d=t.size,m=void 0===d?"small":d,s={width:c,height:i},y=[s,{opacity:e}],w=[s,{opacity:n},r.indicatorOverlay];return l.a.createElement(v.a,{style:s},l.a.createElement(p.a.Image,{source:{uri:o},style:y,onLoad:function(){p.a.parallel([p.a.timing(n,{toValue:0,useNativeDriver:a}),p.a.timing(e,{toValue:1,useNativeDriver:a})]).start()}}),l.a.createElement(p.a.View,{style:w},l.a.createElement(g.a,{size:m,color:u})))}var w=function(t){Object(i.a)(e,t);var a=Object(o.a)(e);function e(){var t;Object(n.a)(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=a.call.apply(a,[this].concat(o))).data=[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],t.numColumns=3,t.infiniteScrollThreshold=.3,t.columnWidth=h.a.get("window").width/t.numColumns,t.imageUrl="http://lorempixel.com/".concat(t.columnWidth,"/").concat(t.columnWidth),t.nav=function(a){return function(){return t.props.navigate(a)}},t.fetchMore=function(){t.data.push(Math.random()),t.data.push(Math.random()),t.data.push(Math.random()),t.data.push(Math.random()),t.data.push(Math.random())},t.renderImage=function(){return l.a.createElement(y,{uri:t.imageUrl,width:t.columnWidth,height:t.columnWidth})},t}return Object(r.a)(e,[{key:"render",value:function(){return l.a.createElement(m.j,{onLeftPress:this.nav("playground"),title:"Image Collection"},l.a.createElement(u.a,{keyExtractor:function(t){return t.toString()},data:this.data,onEndReached:this.fetchMore,onEndReachedThreshold:this.infiniteScrollThreshold,numColumns:this.numColumns,renderItem:this.renderImage}))}}]),e}(l.a.PureComponent),b={navigate:s.j};a.default=Object(d.b)(null,b)(w)}}]);
//# sourceMappingURL=35.52520804.chunk.js.map