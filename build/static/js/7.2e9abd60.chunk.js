(this.webpackJsonpreact_staging=this.webpackJsonpreact_staging||[]).push([[7],{51:function(t,e,n){},52:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var s=n(1),r=n(10),a=n(11),c=n(13),i=n(12),o=n(0),u=n.p+"static/media/teacher_avatar.d9220460.png",d=(n(51),function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props.name;return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"detail-message",children:[Object(s.jsx)("img",{src:u,alt:""}),Object(s.jsx)("div",{className:"teachename",children:Object(s.jsx)("i",{children:t})}),Object(s.jsxs)("div",{className:"subjects-node",children:[this.props.adm?Object(s.jsx)("div",{className:"admi",children:Object(s.jsx)("i",{children:"\u7ba1\u7406\u5458"})}):[],void 0===this.props.subject?[]:Object(s.jsx)("div",{className:"subjects",children:Object(s.jsx)("i",{children:this.props.subject})})]}),Object(s.jsxs)("div",{className:"personal-profile",children:[t,"\u4e2a\u4eba\u7b80\u4ecb"]})]})})}}]),n}(o.PureComponent))},53:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var s=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var s=63&n[t];e+=s<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s<63?"_":"-"}return e}},92:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var s=n(4),r=n(1),a=n(10),c=n(11),i=n(13),o=n(12),u=n(0),d=n(53),l=n(50),j=n.n(l),h=n(52),b=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={students:[],hasError:""},t}return Object(c.a)(n,[{key:"componentDidCatch",value:function(){console.log("\u6b64\u5904\u7edf\u8ba1\u9519\u8bef\uff0c\u53cd\u9988\u7ed9\u670d\u52a1\u5668\uff0c\u7528\u4e8e\u901a\u77e5\u7f16\u7801\u4eba\u5458\u8fdb\u884cbug\u7684\u89e3\u51b3")}},{key:"componentDidMount",value:function(){var t=this;this.token=j.a.subscribe("pubStudents",(function(e,n){t.setState({students:n})}))}},{key:"componentWillUnmount",value:function(){j.a.unsubscribe(this.token)}},{key:"render",value:function(){var t=this,e=this.state.students;return Object(r.jsx)("div",{className:"class-detail-message",children:e.map((function(e){return t.state.hasError?Object(r.jsx)("h2",{children:"\u5f53\u524d\u7f51\u7edc\u4e0d\u7a33\u5b9a\uff0c\u7a0d\u540e\u518d\u8bd5"}):Object(r.jsx)(h.a,Object(s.a)({},e),Object(d.a)())}))})}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:t}}}]),n}(u.PureComponent)}}]);
//# sourceMappingURL=7.2e9abd60.chunk.js.map