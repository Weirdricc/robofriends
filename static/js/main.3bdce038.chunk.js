(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=(n(21),n(3)),i=n(4),l=n(7),u=n(6),h=n(5),d=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robot photos"}),a.a.createElement("div",{style:{fontSize:"10px"}},a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},b=function(e){var t=e.robots;return t.map((function(e,n){return a.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},m=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"search robots",onChange:t}))},p=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid #96CCFF",height:"350px"}},e.children)},f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",{className:"tc f1 light-blue"},"Oops... Something went wrong!"):this.props.children}}]),n}(r.Component),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.loading,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",{className:"tc f1 light-blue",style:{fontFamily:"monospace",fontStyle:"italic"}},"loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h3",{className:"f3 light-blue"},"Robofriends"),a.a.createElement(m,{searchChange:n}),a.a.createElement(p,null,a.a.createElement(f,null,a.a.createElement(b,{robots:c}))))}}]),n}(r.Component),g=Object(h.b)((function(e){return{searchField:e.searchRobotsReducer.searchField,robots:e.fetchRobotsReducer.robots,loading:e.fetchRobotsReducer.loading,error:e.fetchRobotsReducer.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onFetchRobots:function(){return e((function(e){e({type:"FETCH_ROBOTS_REQUEST"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"FETCH_ROBOTS_FAILURE",payload:t})}))}))}}}))(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(27);var v=n(1),O={searchField:""},y={loading:!1,robots:[],error:""},R=Object(v.c)({searchRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},fetchRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_ROBOTS_REQUEST":return Object.assign({},e,{loading:!0});case"FETCH_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,loading:!1});case"FETCH_ROBOTS_FAILURE":return Object.assign({},e,{error:t.payload,loading:!1});default:return e}}}),C=n(14),S=n(15),F=Object(C.createLogger)(),j=Object(v.d)(R,Object(v.a)(S.a,F));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h.a,{store:j},a.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.3bdce038.chunk.js.map