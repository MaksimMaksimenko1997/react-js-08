(this["webpackJsonphw-8"]=this["webpackJsonphw-8"]||[]).push([[0],{19:function(e,t,n){e.exports={form:"Signup_form__3jMlg",heading:"Signup_heading__1jrMx",label:"Signup_label__394Au",input:"Signup_input__1vmqH",button:"Signup_button__1h4Rw"}},22:function(e,t,n){e.exports={form:"Login_form__13oEP",heading:"Login_heading__2IV0l",label:"Login_label__A10lP",input:"Login_input__38znr",button:"Login_button__2ClU3"}},23:function(e,t,n){e.exports={form:"InputForm_form__3tgp4",label:"InputForm_label__3SejE",input:"InputForm_input__phXEg",btn:"InputForm_btn__10JKv"}},25:function(e,t,n){e.exports={container:"Navigation_container__3zXGk",link:"Navigation_link__2bEe2",link_active:"Navigation_link_active__3LN6w"}},26:function(e,t,n){e.exports={container:"LoginMenu_container__3p4C0",link:"LoginMenu_link__Jp_bD",link_active:"LoginMenu_link_active__3NIja"}},28:function(e,t,n){e.exports={list:"Phonebook_list__2cp5C",item:"Phonebook_item__1JURl",close:"Phonebook_close__h91Qt"}},30:function(e,t,n){e.exports={container:"UserMenu_container__3kIgz",avatar:"UserMenu_avatar__6yqn5",name:"UserMenu_name__1rv0B",button:"UserMenu_button__2PMxV"}},35:function(e,t,n){e.exports={wrapper:"Filter_wrapper__LAuQo",label:"Filter_label__36yww",input:"Filter_input__nuRzI"}},40:function(e,t,n){e.exports={section:"Container_section__2VBJa",heading:"Container_heading__3XNZS"}},54:function(e,t,n){e.exports={appbar:"Appbar_appbar__1i1pQ"}},55:function(e,t,n){e.exports={heading:"HomeView_heading__3wt1C"}},56:function(e,t,n){e.exports=n(87)},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a,r,c,o,u,i,s=n(0),l=n.n(s),m=n(31),b=n.n(m),p=n(13),f=n(4),h=n(52),g=n(33),d=n(2),j=n(21),O=n(53),_=n.n(O),E=n(1),v=n(6),C=Object(d.b)("contacts/fetchContactsRequest"),k=Object(d.b)("contacts/fetchContactsSuccess"),N=Object(d.b)("contacts/fetchContactsError"),y=Object(d.b)("contacts/addContactRequest"),S=Object(d.b)("contacts/addContactSuccess"),w=Object(d.b)("contacts/addContactError"),x=Object(d.b)("contacts/deleteContactRequest"),U=Object(d.b)("contacts/deleteContactSuccess"),L=Object(d.b)("contacts/deleteContactError"),A=Object(d.b)("contacts/changeFilter"),R=Object(d.c)([],(a={},Object(E.a)(a,k,(function(e,t){return t.payload})),Object(E.a)(a,S,(function(e,t){var n=t.payload;return[].concat(Object(g.a)(e),[n])})),Object(E.a)(a,U,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),q=Object(d.c)(!1,(r={},Object(E.a)(r,C,(function(){return!0})),Object(E.a)(r,k,(function(){return!1})),Object(E.a)(r,N,(function(){return!1})),Object(E.a)(r,y,(function(){return!0})),Object(E.a)(r,S,(function(){return!1})),Object(E.a)(r,w,(function(){return!1})),Object(E.a)(r,x,(function(){return!0})),Object(E.a)(r,U,(function(){return!1})),Object(E.a)(r,L,(function(){return!1})),r)),F=Object(d.c)("",Object(E.a)({},A,(function(e,t){return t.payload}))),P=Object(d.c)(null,{}),M=Object(v.c)({contacts:R,filter:F,loading:q,error:P}),T={registerRequest:Object(d.b)("auth/registerRequest"),registerSuccess:Object(d.b)("auth/registerSuccess"),registerError:Object(d.b)("auth/registerError"),loginRequest:Object(d.b)("auth/loginRequest"),loginSuccess:Object(d.b)("auth/loginSuccess"),loginError:Object(d.b)("auth/loginError"),logoutRequest:Object(d.b)("auth/logoutRequest"),logoutSuccess:Object(d.b)("auth/logoutSuccess"),logoutError:Object(d.b)("auth/logoutError"),getCurrentUserRequest:Object(d.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(d.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(d.b)("auth/getCurrentUserError")},I={name:null,email:null},D=Object(d.c)(I,(c={},Object(E.a)(c,T.registerSuccess,(function(e,t){return t.payload.user})),Object(E.a)(c,T.loginSuccess,(function(e,t){return t.payload.user})),Object(E.a)(c,T.logoutSuccess,(function(){return I})),Object(E.a)(c,T.getCurrentUserSuccess,(function(e,t){return t.payload})),c)),z=Object(d.c)(null,(o={},Object(E.a)(o,T.registerSuccess,(function(e,t){return t.payload.token})),Object(E.a)(o,T.loginSuccess,(function(e,t){return t.payload.token})),Object(E.a)(o,T.logoutSuccess,(function(){return null})),o)),J=Object(d.c)(null,(u={},Object(E.a)(u,T.registerError,(function(e,t){return t.payload})),Object(E.a)(u,T.loginError,(function(e,t){return t.payload})),Object(E.a)(u,T.logoutError,(function(e,t){return t.payload})),Object(E.a)(u,T.getCurrentUserError,(function(e,t){return t.payload})),u)),B=Object(d.c)(!1,(i={},Object(E.a)(i,T.registerSuccess,(function(){return!0})),Object(E.a)(i,T.loginSuccess,(function(){return!0})),Object(E.a)(i,T.getCurrentUserSuccess,(function(){return!0})),Object(E.a)(i,T.registerError,(function(){return!1})),Object(E.a)(i,T.loginError,(function(){return!1})),Object(E.a)(i,T.getCurrentUserError,(function(){return!1})),Object(E.a)(i,T.logoutSuccess,(function(){return!1})),i)),V=Object(v.c)({user:D,token:z,isAuthenticated:B,error:J}),G=Object(g.a)(Object(d.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),H={key:"auth",storage:_.a,whitelist:["token"]},Q=Object(d.a)({reducer:{auth:Object(j.g)(H,V),contacts:M},middleware:G,devTools:!1}),X={store:Q,persistor:Object(j.h)(Q)},K=n(15),W=n(16),Z=n(18),Y=n(17),$=n(5),ee=n(25),te=n.n(ee),ne=function(){return l.a.createElement("div",{className:te.a.container},l.a.createElement(p.b,{className:te.a.link,activeClassName:te.a.link_active,exact:!0,to:"/"},"Home"),l.a.createElement(p.b,{className:te.a.link,activeClassName:te.a.link_active,to:"/phonebook"},"Phonebook"))},ae=n(26),re=n.n(ae),ce=function(){return l.a.createElement("div",{className:re.a.container},l.a.createElement(p.b,{className:re.a.link,activeClassName:re.a.link_active,to:"/signup"},"Signup"),l.a.createElement(p.b,{className:re.a.link,activeClassName:re.a.link_active,to:"/login"},"Login"))},oe=function(e){return e.auth.isAuthenticated},ue=function(e){return e.auth.user.name},ie=n(20),se=n.n(ie),le=n(29),me=n(11),be=n.n(me);be.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var pe=function(e){be.a.defaults.headers.common.Authorization="Bearer ".concat(e)},fe=function(){be.a.defaults.headers.common.Authorization=""},he={register:function(e){return function(){var t=Object(le.a)(se.a.mark((function t(n){var a;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(T.registerRequest()),t.prev=1,t.next=4,be.a.post("/users/signup",e);case 4:a=t.sent,pe(a.data.token),n(T.registerSuccess(a.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(T.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},login:function(e){return function(){var t=Object(le.a)(se.a.mark((function t(n){var a;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(T.loginRequest()),t.prev=1,t.next=4,be.a.post("/users/login",e);case 4:a=t.sent,pe(a.data.token),n(T.loginSuccess(a.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(T.loginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(le.a)(se.a.mark((function e(t){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T.logoutRequest()),e.prev=1,e.next=4,be.a.post("users/logout");case 4:fe(),t(T.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(T.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(le.a)(se.a.mark((function e(t,n){var a,r,c;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(),r=a.auth.token){e.next=3;break}return e.abrupt("return");case 3:return pe(r),t(T.getCurrentUserRequest()),e.prev=5,e.next=8,be.a.get("users/current");case 8:c=e.sent,t(T.getCurrentUserSuccess(c.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(T.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},ge=n(30),de=n.n(ge),je=Object(f.b)((function(e){return{userName:ue(e)}}),(function(e){return{onLogout:function(){return e(he.logout())}}}))((function(e){var t=e.userName,n=e.onLogout;return l.a.createElement("div",{className:de.a.container},l.a.createElement("span",{className:de.a.avatar},t.slice(0,1)),l.a.createElement("span",{className:de.a.name},t),l.a.createElement("button",{className:de.a.button,type:"button",onClick:n},"Log Out"))})),Oe=n(54),_e=n.n(Oe),Ee=Object(f.b)((function(e){return{isAuthenticated:oe(e)}}))((function(e){var t=e.isAuthenticated;return l.a.createElement("div",{className:_e.a.appbar},l.a.createElement(ne,null),t?l.a.createElement(je,null):l.a.createElement(ce,null))})),ve=n(22),Ce=n.n(ve),ke=function(e){Object(Z.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(K.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.onChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(E.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state)},e}return Object(W.a)(n,[{key:"render",value:function(){return l.a.createElement("form",{className:Ce.a.form,onSubmit:this.handleSubmit},l.a.createElement("h2",{className:Ce.a.heading},"Log in"),l.a.createElement("label",{className:Ce.a.label},"Email",l.a.createElement("input",{className:Ce.a.input,type:"email",name:"email",autoComplete:"off",placeholder:"Enter your e-mail",onChange:this.onChange})),l.a.createElement("label",{className:Ce.a.label},"Password",l.a.createElement("input",{className:Ce.a.input,type:"password",name:"password",autoComplete:"off",placeholder:"Enter your password",onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:Ce.a.button},"Sign in"))}}]),n}(s.Component),Ne=Object(f.b)(null,(function(e){return{onSubmit:function(t){return e(he.login(t))}}}))(ke),ye=n(55),Se=n.n(ye),we=function(){return l.a.createElement("h1",{className:Se.a.heading},"Welcome to Phonebook.app!")},xe=n(19),Ue=n.n(xe),Le=function(e){Object(Z.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(K.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:""},e.onChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(E.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state)},e}return Object(W.a)(n,[{key:"render",value:function(){return l.a.createElement("form",{className:Ue.a.form,onSubmit:this.handleSubmit},l.a.createElement("h2",{className:Ue.a.heading},"Sign up"),l.a.createElement("label",{className:Ue.a.label},"Name",l.a.createElement("input",{className:Ue.a.input,type:"text",name:"name",autoComplete:"off",placeholder:"Enter your name",onChange:this.onChange})),l.a.createElement("label",{className:Ue.a.label},"Email",l.a.createElement("input",{className:Ue.a.input,type:"email",name:"email",autoComplete:"off",placeholder:"Enter your e-mail",onChange:this.onChange})),l.a.createElement("label",{className:Ue.a.label},"Password",l.a.createElement("input",{className:Ue.a.input,type:"password",name:"password",autoComplete:"off",placeholder:"Enter your password",onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:Ue.a.button},"Register"))}}]),n}(s.Component),Ae=Object(f.b)(null,(function(e){return{onSubmit:function(t){return e(he.register(t))}}}))(Le),Re=n(14),qe=function(e){return e.contacts.loading},Fe=function(e){return e.contacts.contacts},Pe=function(e){return e.contacts.filter},Me=Object(Re.a)([Fe,Pe],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}));be.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var Te=n(23),Ie=n.n(Te),De=function(e){Object(Z.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(K.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(E.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state.name,a=e.props,r=a.contacts,c=a.onSubmit;if(r.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," Already exists")),void e.reset();c(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(W.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return l.a.createElement("form",{className:Ie.a.form,onSubmit:this.handleSubmit},l.a.createElement("label",{className:Ie.a.label,htmlFor:"name"},"Name"),l.a.createElement("input",{id:"name",type:"text",onChange:this.handleChange,className:Ie.a.input,name:"name",value:t,placeholder:"Name",autoComplete:"off",autoFocus:!0}),l.a.createElement("label",{className:Ie.a.label,htmlFor:"number"},"Number"),l.a.createElement("input",{id:"number",type:"text",onChange:this.handleChange,className:Ie.a.input,name:"number",value:n,placeholder:"Phone number",autoComplete:"off"}),l.a.createElement("button",{type:"submit",className:Ie.a.btn},"Add contact"))}}]),n}(s.Component),ze=Object(f.b)((function(e){return{contacts:Fe(e)}}),(function(e){return{onSubmit:function(t){var n=t.name,a=t.number;return e(function(e){var t=e.name,n=e.number;return function(e){var a={name:t,number:n};e(y()),be.a.post("/contacts",a).then((function(t){var n=t.data;return e(S(n))})).catch((function(t){return e(w(t.message))}))}}({name:n,number:a}))}}}))(De),Je=n(35),Be=n.n(Je),Ve=function(e){var t=e.filter,n=e.onChange;return l.a.createElement("div",{className:Be.a.wrapper},l.a.createElement("label",{className:Be.a.label},"Find by Name",l.a.createElement("input",{className:Be.a.input,type:"text",value:t,onChange:n})))};Ve.defaultProps={filter:""};var Ge=Object(f.b)((function(e){return{filter:Pe(e)}}),(function(e){return{onChange:function(t){return e(A(t.target.value))}}}))(Ve),He=n(28),Qe=n.n(He),Xe=Object(f.b)(null,(function(e){return{onDelete:function(t){return e((n=t,function(e){e(x()),be.a.delete("/contacts/".concat(n)).then((function(){return e(U(n))})).catch((function(t){return e(L(t.message))}))}));var n}}}))((function(e){var t=e.name,n=e.number,a=e.id,r=e.onDelete;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,t," : ",n),l.a.createElement("button",{type:"button",className:Qe.a.close,onClick:function(){return r(a)}},"+"))})),Ke=Object(f.b)((function(e){return{contacts:Me(e)}}))((function(e){var t=e.contacts;return l.a.createElement(l.a.Fragment,null,t&&l.a.createElement("ul",{className:Qe.a.list},t.map((function(e){return l.a.createElement("li",{className:Qe.a.item,key:e.id},l.a.createElement(Xe,e))}))))})),We=n(40),Ze=n.n(We),Ye=function(e){var t=e.title,n=e.children;return l.a.createElement("section",{className:Ze.a.section},l.a.createElement("h2",{className:Ze.a.heading},t),n)};Ye.defaultProps={title:""};var $e=Ye,et=function(e){Object(Z.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(W.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement($e,{title:"Phonebook"},l.a.createElement(ze,null)),l.a.createElement($e,{title:"Contacts"},l.a.createElement(Ge,null),this.props.isLoadingContacts&&l.a.createElement("h2",null," Loading contacts..."),l.a.createElement(Ke,null)))}}]),n}(s.Component),tt=Object(f.b)((function(e){return{isLoadingContacts:qe(e)}}),(function(e){return{fetchContacts:function(){return e((function(e){e(C()),be.a.get("/contacts").then((function(t){var n=t.data;return e(k(n))})).catch((function(t){return e(N(t.message))}))}))}}}))(et),nt=n(34),at=Object(f.b)((function(e){return{isAuthenticated:oe(e)}}))((function(e){var t=e.component,n=e.isAuthenticated,a=e.redirectTo,r=Object(nt.a)(e,["component","isAuthenticated","redirectTo"]);return l.a.createElement($.b,Object.assign({},r,{render:function(e){return n&&r.restricted?l.a.createElement($.a,{to:a}):l.a.createElement(t,e)}}))})),rt=Object(f.b)((function(e){return{isAuthenticated:oe(e)}}))((function(e){var t=e.component,n=e.isAuthenticated,a=e.redirectTo,r=Object(nt.a)(e,["component","isAuthenticated","redirectTo"]);return l.a.createElement($.b,Object.assign({},r,{render:function(e){return n?l.a.createElement(t,e):l.a.createElement($.a,{to:a})}}))})),ct=function(e){Object(Z.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(W.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ee,null),l.a.createElement($.d,null,l.a.createElement(at,{exact:!0,path:"/",component:we}),l.a.createElement(at,{path:"/signup",restricted:!0,redirectTo:"/phonebook",component:Ae}),l.a.createElement(at,{path:"/login",restricted:!0,redirectTo:"/phonebook",component:Ne}),l.a.createElement(rt,{path:"/phonebook",redirectTo:"/login",component:tt})))}}]),n}(s.Component),ot={onGetCurrentUser:he.getCurrentUser},ut=Object(f.b)(null,ot)(ct);n(86);b.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f.a,{store:X.store},l.a.createElement(h.a,{loading:null,persistor:X.persistor},l.a.createElement(p.a,null,l.a.createElement(ut,null))))),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.4357d9a5.chunk.js.map