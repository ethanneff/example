(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[25],{230:function(e,t,a){"use strict";a.r(t);var r=a(77),n=a(78),c=a(79),i=a(80),o=a(0),l=a.n(o),s=a(166),h=a(46),d=a(8),u=a(7),p=a(41),g=a(169),m=a(23),f=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={y:new s.a.Value(0)},e.cardHeight=250,e.cardTitle=45,e.cardPadding=10,e.height=h.a.get("window").height,e.styles=d.a.create({card:{borderRadius:10,height:e.cardHeight},container:{flex:1},content:{height:2*e.height},root:{flex:1,margin:16}}),e.cards=[{color:"#a9d0b6",name:"Shot",price:"30 CHF"},{color:"#e9bbd1",name:"Juice",price:"64 CHF"},{color:"#eba65c",name:"Mighty Juice",price:"80 CHF"},{color:"#95c3e4",name:"Sandwich",price:"85 CHF"},{color:"#1c1c1c",name:"Combi",price:"145 CHF"},{color:"#a390bc",name:"Signature",price:"92 CHF"},{color:"#fef2a0",name:"Coffee",price:"47 CHF"}],e.nav=function(t){return function(){return e.props.navigate(t)}},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=this.state.y;return l.a.createElement(g.k,{onLeftPress:this.nav("debug"),title:"Cards"},l.a.createElement(u.a,{style:this.styles.container},l.a.createElement(u.a,{style:d.a.absoluteFill},this.cards.map((function(a,r){var n=[-e.cardHeight,0],c=[e.cardHeight*r,(e.cardHeight-e.cardTitle)*-r];r>0&&(n.push(e.cardPadding*r),c.push((e.cardHeight-e.cardPadding)*-r));var i=t.interpolate({extrapolateRight:"clamp",inputRange:n,outputRange:c});return l.a.createElement(s.a.View,{key:a.name,style:{transform:[{translateY:i}]}},l.a.createElement(u.a,{style:[e.styles.card,{backgroundColor:a.color}]}))}))),l.a.createElement(s.a.ScrollView,{scrollEventThrottle:16,contentContainerStyle:this.styles.content,showsVerticalScrollIndicator:!1,onScroll:s.a.event([{nativeEvent:{contentOffset:{y:t}}}])})))}}]),a}(l.a.PureComponent),b={navigate:m.j};t.default=Object(p.b)(null,b)(f)}}]);
//# sourceMappingURL=25.fbb8ab79.chunk.js.map