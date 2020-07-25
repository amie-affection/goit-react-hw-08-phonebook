(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={pageList:"Header_pageList__1_Z7x",pageListItem:"Header_pageListItem__DadSv",active:"Header_active__2i4mc"}},20:function(e,t,n){e.exports={formInput:"RegisterPage_formInput__2VAAe",btn:"RegisterPage_btn__1hNze"}},23:function(e,t,n){e.exports={formInput:"AuthPage_formInput__3M-Oj",btn:"AuthPage_btn__3yvK7"}},24:function(e,t,n){e.exports={title:"Phonebook_title__3nZOl",btn:"Phonebook_btn__hdN1Z",inputName:"Phonebook_inputName__1rV9h",inputNumber:"Phonebook_inputNumber__D8e-f"}},33:function(e,t,n){e.exports={btnDelete:"OneContact_btnDelete__28qFf",oneContact:"OneContact_oneContact__y3mBZ"}},53:function(e,t,n){e.exports=n(82)},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),u=n(45),i=n(12),l=n(13),s=n(15),m=n(14),p=n(17),h=n(3),f=n(2),b=Object(a.createContext)(),d={light:{fontColor:"black",bodybg:"white"},dark:{fontColor:"white",bodybg:"black"}},g=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).toggleTheme=function(){e.setState((function(e){return"light"===e.theme?{theme:"dark",themeConfig:d.dark}:{theme:"light",themeConfig:d.light}}))},e.state={theme:"light",themeConfig:d.light,toggleTheme:e.toggleTheme},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(b.Provider,{value:this.state},this.props.children)}}]),n}(a.Component);g.Consumer=b.Consumer;var E=g,y=function(e){return function(t){return r.a.createElement(E.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{theme:n.theme,themeConfig:n.themeConfig,toggleTheme:n.toggleTheme}))}))}},C=n(18),O=n(11),v=n.n(O);v.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var _=function(){return v.a.get("/contacts")},j=function(e){return v.a.post("/contacts",e)},S=function(e){return v.a.delete("/contacts/".concat(e))},T=function(){return v.a.get("/users/current")},N=function(e){return v.a.post("/users/login",e)},L=function(e){return console.log(e),v.a.post("/users/signup",e)},A=function(){return v.a.post("/users/logout")},R={set:function(e){v.a.defaults.headers.common.Authorization="Bearer ".concat(e)},unset:function(){v.a.defaults.headers.common.Authorization=""}},k="auth/LOADING_START",I="auth/GET_USER_SUCCESS",x="auth/GET_USER_FAILURE",U="auth/LOGIN_SUCCESS",w="auth/LOGIN_FAILURE",D="auth/REGISTER_SUCCESS",G="auth/REGISTER_FAILURE",F="auth/LOGOUT_SUCCESS",P="auth/LOGOUT_FAILURE",B=function(){return{type:k}},H=function(e){return{type:I,payload:e}},M=function(e){return{type:x,payload:e}},W=function(e){return{type:U,payload:e}},Z=function(e){return{type:w,payload:e}},q=function(e){return{type:D,payload:e}},z=function(e){return{type:G,payload:{error:e}}},J=function(){return{type:F}},V=function(e){return{type:P,payload:{error:e}}},K=function(e){return function(t){console.log(t),t(B()),N(e).then((function(e){var n=e.data;console.log(n),R.set(n.token),t(W(n))})).catch((function(e){return t(Z(e))}))}},Q=function(e){return function(t){t(B()),console.log(e),L(e).then((function(e){var n=e.data;R.set(n.token),t(q(n))})).catch((function(e){return t(z(e))}))}},X=function(){return function(e){e(B()),A().then((function(){R.unset(),e(J())})).catch((function(t){return e(V(t))}))}},Y=function(){return function(e,t){var n=t().authRoot.token;n&&(R.set(n),e(B()),T().then((function(t){var n=t.data;e(H(n))})).catch((function(t){return e(M(t))})))}},$=n(23),ee=n.n($),te=Object(f.b)(null,(function(e){return{makeToggle:function(){return e({type:"auth/IS_SHOW"})}}}))((function(){var e=Object(f.c)(),t=Object(a.useState)(""),n=Object(C.a)(t,2),o=n[0],c=n[1],u=Object(a.useState)(""),i=Object(C.a)(u,2),l=i[0],s=i[1];return r.a.createElement("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault(),e(K({email:o,password:l}))}},r.a.createElement("input",{type:"email",value:o,onChange:function(e){var t=e.target;return c(t.value)},placeholder:"Enter your e-mail...",className:ee.a.formInput}),r.a.createElement("input",{type:"password",value:l,onChange:function(e){var t=e.target;return s(t.value)},placeholder:"Enter your password",className:ee.a.formInput}),r.a.createElement("button",{type:"submit",className:ee.a.btn},"Log In"))})),ne=n(20),ae=n.n(ne),re=function(){var e=Object(f.c)(),t=Object(a.useState)(""),n=Object(C.a)(t,2),o=n[0],c=n[1],u=Object(a.useState)(""),i=Object(C.a)(u,2),l=i[0],s=i[1],m=Object(a.useState)(""),p=Object(C.a)(m,2),h=p[0],b=p[1];return r.a.createElement("form",{className:ae.a.form,onSubmit:function(t){t.preventDefault(),e(Q({name:o,email:l,password:h}))}},r.a.createElement("input",{type:"text",value:o,onChange:function(e){var t=e.target;return c(t.value)},placeholder:"Enter your name...",className:ae.a.formInput}),r.a.createElement("input",{type:"email",value:l,onChange:function(e){var t=e.target;return s(t.value)},placeholder:"Enter your e-mail...",className:ae.a.formInput}),r.a.createElement("input",{type:"password",value:h,onChange:function(e){var t=e.target;return b(t.value)},placeholder:"Enter your password",className:ae.a.formInput}),r.a.createElement("button",{type:"submit",className:ae.a.btn},"Register"))},oe=n(16),ce=n.n(oe),ue=Object(f.b)((function(e){return{isAuth:e.authRoot.isAuth}}))((function(e){var t=e.isAuth;return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:ce.a.pageList},!t&&r.a.createElement("li",{className:ce.a.pageListItem},r.a.createElement(p.b,{to:"/registration",activeClassName:ce.a.active},"Registration")),!t&&r.a.createElement("li",{className:ce.a.pageListItem},r.a.createElement(p.b,{exact:!0,to:"/",activeClassName:ce.a.active},"Log In")),t&&r.a.createElement("li",{className:ce.a.pageListItem},r.a.createElement(p.b,{to:"/phonebook",activeClassName:ce.a.active},"Phonebook")))))})),ie=n(28),le=n(24),se=n.n(le),me="contacts/GET_CONTACT-START",pe="contacts/GET_CONTACT_SUCCESS",he="contacts/GET_CONTACT_FAILURE",fe="contacts/ADD_CONTACT_START",be="contacts/ADD_CONTACT_SUCCESS",de="contacts/ADD_CONTACT_FAILURE",ge="contacts/DELETE_CONTACT_START",Ee="contacts/DELETE_CONTACT_SUCCESS",ye="contacts/DELETE_CONTACT_FAILURE",Ce="contacts/FILTER_CONTACT",Oe=function(){return{type:me}},ve=function(e){return{type:pe,payload:{contactList:e}}},_e=function(e){return{type:he,payload:{error:e}}},je=function(){return{type:fe}},Se=function(e){return{type:be,payload:{contact:e}}},Te=function(e){return{type:de,payload:{error:e}}},Ne=function(){return{type:ge}},Le=function(e){return{type:Ee,payload:{id:e}}},Ae=function(e){return{type:ye,payload:{error:e}}},Re=function(e){return{type:Ce,payload:{name:e}}},ke=function(){return function(e){e(Oe()),_().then((function(t){var n=t.data;return e(ve(n))})).catch((function(t){return e(_e(t))}))}},Ie=function(e,t){return function(n){n(je()),j({name:e,number:t}).then((function(e){var t=e.data;return n(Se(t))})).catch((function(e){return n(Te(e))}))}},xe=function(e){return function(t){t(Ne()),S(e).then((function(){return t(Le(e))})).catch((function(e){return t(Ae(e))}))}},Ue=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contactName:"",number:"",filter:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(ie.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.contactName,r=n.number,o=e.props.addContact;e.setState({contactName:"",number:""}),o(a,r)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contactName,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,style:{marginLeft:"30px"}},r.a.createElement("h2",{className:se.a.title},"Phonebook"),r.a.createElement("input",{className:se.a.inputName,type:"text",name:"contactName",value:t,onChange:this.handleChange,placeholder:"Enter name...",required:!0}),r.a.createElement("input",{className:se.a.inputNumber,type:"tel",name:"number",value:n,onChange:this.handleChange,placeholder:"Number...",required:!0}),r.a.createElement("button",{type:"submit",className:se.a.btn},"Add contact"))}}]),n}(a.Component),we=Object(f.b)(null,(function(e){return{addContact:function(t,n){return e(Ie(t,n))}}}))(Ue),De=n(33),Ge=n.n(De),Fe=Object(f.b)(null,(function(e,t){var n=t.id;return{deleteContact:function(){return e(xe(n))}}}))((function(e){var t=e.contact,n=t.name,a=t.number,o=e.deleteContact;return r.a.createElement("li",{className:Ge.a.oneContact},r.a.createElement("span",null,n,": "),r.a.createElement("span",null,a),r.a.createElement("button",{type:"button",className:Ge.a.btnDelete,onClick:o},"Delete"))})),Pe=n(47),Be=function(e){return e.contactRoot.filterReducer},He=Object(Pe.a)([function(e){return e.contactRoot.contactReducer},Be],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),Me=Object(f.b)((function(e){return{filter:Be(e)}}),(function(e){return{onChange:function(t){return e(Re(t.target.value))}}}))((function(e){var t=e.filter,n=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{style:{marginLeft:"30px",letterSpacing:"1px"}},"Find contacts by name:"),r.a.createElement("input",{style:{marginLeft:"30px",height:"25px",marginBottom:"10px"},type:"text",name:"filter",value:t,onChange:n}))})),We=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getAllContacts)()}},{key:"render",value:function(){var e=this.props,t=e.contactList,n=e.filter,a=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{marginLeft:"30px",color:"blue"}},"Contacts"),r.a.createElement(Me,{filter:n,onChange:a}),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(Fe,{id:e.id,contact:e,key:e.id})}))))}}]),n}(a.Component),Ze=Object(f.b)((function(e){return{contactList:He(e)}}),(function(e){return{getAllContacts:function(){return e(ke())}}}))(We),qe=function(){var e=Object(f.c)();return r.a.createElement("button",{type:"button",onClick:function(){e(X())},style:{marginLeft:"30px",marginBottom:"15px",backgroundColor:"red",color:"white",fontWeight:"bold",border:"none",letterSpacing:"0.5px",height:"35px",width:"100px"}},"Logout")},ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(we,null),r.a.createElement(Ze,null),r.a.createElement(qe,null))},Je=n(52),Ve=function(e){var t=e.component,n=Object(Je.a)(e,["component"]),a=Object(f.d)((function(e){return e.authRoot.token}));return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(h.a,{to:"/"})}}))},Ke=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser()}},{key:"render",value:function(){var e=this.props.themeConfig,t=e.fontColor,n=e.bodybg;return r.a.createElement(p.a,null,r.a.createElement("div",{style:{color:t,background:n}},r.a.createElement("button",{type:"submit",style:{marginLeft:"20px",marginTop:"20px",borderColor:"white",height:"35px",width:"150px",backgroundColor:"black",color:"white",fontWeight:"bold",letterSpacing:"1px"},onClick:this.props.toggleTheme},"Change theme")),r.a.createElement(ue,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:te}),r.a.createElement(Ve,{path:"/phonebook",component:ze}),r.a.createElement(h.b,{path:"/registration",component:re})))}}]),n}(a.Component),Qe=Object(f.b)(null,(function(e){return{getUser:function(){return e(Y())}}}))(y(Ke)),Xe=n(5),Ye=n(48),$e=n(49),et=n(34),tt=n(50),nt=n.n(tt),at=n(51),rt=Object(Xe.combineReducers)({contactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return t.payload.contactList;case be:return[].concat(Object(at.a)(e),[t.payload.contact]);case Ee:return e.filter((function(e){return e.id!==t.payload.id}));default:return e}},filterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return t.payload.name;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case me:case fe:case ge:return!0;case pe:case he:case be:case de:case Ee:case ye:return!1;default:return e}},contactError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case he:case de:case ye:return a.error;case me:case fe:case ge:return null;default:return e}}}),ot=n(4),ct={name:"",isAuth:!1,token:"",isLoading:!1,error:""},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/LOADING_START":return Object(ot.a)(Object(ot.a)({},e),{},{isLoading:!0});case"auth/LOADING_END":return Object(ot.a)(Object(ot.a)({},e),{},{isLoading:!1});case"auth/GET_USER_SUCCESS":return Object(ot.a)(Object(ot.a)({},e),{},{name:t.payload.name,isAuth:!0});case"auth/GET_USER_FAILURE":return console.log(t.payload),Object(ot.a)(Object(ot.a)({},e),{},{error:t.payload.error});case"auth/LOGIN_SUCCESS":return Object(ot.a)(Object(ot.a)({},e),{},{name:t.payload.user.name,token:t.payload.token,isAuth:!0});case"auth/LOGIN_FAILURE":return Object(ot.a)(Object(ot.a)({},e),{},{error:t.payload.error});case"auth/REGISTER_SUCCESS":return Object(ot.a)(Object(ot.a)({},e),{},{name:t.payload.user.name,token:t.payload.token,isAuth:!0});case"auth/REGISTER_FAILURE":return Object(ot.a)(Object(ot.a)({},e),{},{error:t.payload.error});case F:return ct;default:return e}},it=Object(Xe.combineReducers)({contactRoot:rt,authRoot:ut}),lt={key:"auth",storage:nt.a,whitelist:["authRoot"]},st=[Ye.a],mt=Object(et.a)(lt,it),pt=Object(Xe.createStore)(mt,Object($e.composeWithDevTools)(Xe.applyMiddleware.apply(void 0,st))),ht=Object(et.b)(pt);c.a.render(r.a.createElement(f.a,{store:pt},r.a.createElement(u.a,{loading:null,persistor:ht},r.a.createElement(E,null,r.a.createElement(Qe,null)))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.769a3325.chunk.js.map