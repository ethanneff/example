(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[41],{298:function(t,a,e){"use strict";e.r(a);var n=e(54),r=e(43),o=e(85),i=e(87),l=e(0),c=e.n(l),h=e(44),u=e(96),d=e(47),m=e(181),s=e(23),p=e(178),v=e(8),f=e(7),g=e(177),y=e(41),M=function(t){var a=t.uri,e=t.height,n=t.width,r=t.color,o=void 0===r?"black":r,i=t.size,l=void 0===i?"small":i,h=Object(y.c)(),u=new p.a.Value(0),d=new p.a.Value(1),m=v.a.create({indicatorOverlay:{justifyContent:"center",position:"absolute"}}),s={width:n,height:e},M=[s,{opacity:u}],w=[s,{opacity:d},m.indicatorOverlay];return c.a.createElement(f.a,{style:s},c.a.createElement(p.a.Image,{onLoad:function(){p.a.parallel([p.a.timing(d,{toValue:0,useNativeDriver:h}),p.a.timing(u,{toValue:1,useNativeDriver:h})]).start()},source:{uri:a},style:M}),c.a.createElement(p.a.View,{style:w},c.a.createElement(g.a,{color:o,size:l})))},w=function(t){Object(i.a)(e,t);var a=Object(o.a)(e);function e(){var t;Object(n.a)(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=a.call.apply(a,[this].concat(o))).data=[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],t.numColumns=3,t.handleInfiniteScrollThreshold=.3,t.columnWidth=h.a.get("window").width/t.numColumns,t.imageUrl="http://lorempixel.com/".concat(t.columnWidth,"/").concat(t.columnWidth),t.keyExtractor=function(t){return t.toString()},t.nav=function(a){return function(){(0,t.props.navigate)(a)}},t.handleFetchMore=function(){t.data.push(Math.random()),t.data.push(Math.random()),t.data.push(Math.random()),t.data.push(Math.random()),t.data.push(Math.random())},t.renderImage=function(){return c.a.createElement(M,{height:t.columnWidth,uri:t.imageUrl,width:t.columnWidth})},t}return Object(r.a)(e,[{key:"render",value:function(){return c.a.createElement(m.j,{onLeftPress:this.nav("playground"),title:"Image Collection"},c.a.createElement(u.a,{data:this.data,keyExtractor:this.keyExtractor,numColumns:this.numColumns,onEndReached:this.handleFetchMore,onEndReachedThreshold:this.handleInfiniteScrollThreshold,renderItem:this.renderImage}))}}]),e}(c.a.PureComponent),E={navigate:s.j};a.default=Object(d.b)(null,E)(w)}}]);
//# sourceMappingURL=41.788a1ac8.chunk.js.map