(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={main:"Login_main__R58mq",mainBlock:"Login_mainBlock__2tRx_",title:"Login_title__1b00q",subTitle:"Login_subTitle__2tKqF",form:"Login_form__2Ivo1",formInput:"Login_formInput__1sFCW",forgotPassword:"Login_forgotPassword__2nEYB",loginButton:"Login_loginButton__1nXFy",askAboutAccount:"Login_askAboutAccount__xHRcp",singUp:"Login_singUp__XiyS5",formError:"Login_formError__Pxc59"}},16:function(e,t,n){e.exports={main:"PasswordRecovery_main___oq8f",mainBlock:"PasswordRecovery_mainBlock__3WHjD",title:"PasswordRecovery_title__1Acmp",subTitle:"PasswordRecovery_subTitle__1rKY3",form:"PasswordRecovery_form__1nyou",formInput:"PasswordRecovery_formInput__3PDG7",textAfterInput:"PasswordRecovery_textAfterInput__3MO8l",mainButton:"PasswordRecovery_mainButton__2nU89",askAboutAccount:"PasswordRecovery_askAboutAccount__1ca_d",tryLogin:"PasswordRecovery_tryLogin__2mAHK"}},17:function(e,t,n){e.exports={main:"NewPassword_main__2-Z9P",mainBlock:"NewPassword_mainBlock__1BrAL",title:"NewPassword_title__2aCRh",subTitle:"NewPassword_subTitle__zIXsd",form:"NewPassword_form__3jlP4",formInput:"NewPassword_formInput__F1OCV",textAfterInput:"NewPassword_textAfterInput__jmogO",mainButton:"NewPassword_mainButton__1h9og",askAboutAccount:"NewPassword_askAboutAccount__13Wwh",tryLogin:"NewPassword_tryLogin__1Kb4r",formError:"NewPassword_formError__sL_cW"}},22:function(e,t,n){e.exports={app:"App_app__j2gE3",navBar:"App_navBar__xKh2I",preLoader:"App_preLoader__3vzw2"}},28:function(e,t,n){e.exports={main:"Packs_main__22nBf",flexCards:"Packs_flexCards__2xHmI",flexCardsTitle:"Packs_flexCardsTitle__OLcXu"}},38:function(e,t,n){e.exports={main:"Profile_main__EznwL"}},39:function(e,t,n){e.exports={logoutButton:"LogOut_logoutButton__3FCq0"}},40:function(e,t,n){e.exports={main:"OnePack_main__swEvi",flexCards:"OnePack_flexCards__1km6Z",flexCardsTitle:"OnePack_flexCardsTitle__3MDgU"}},41:function(e,t,n){},47:function(e,t,n){},7:function(e,t,n){e.exports={main:"Registartion_main__3_vL6",mainBlock:"Registartion_mainBlock__3ru_Y",title:"Registartion_title__22IXl",subTitle:"Registartion_subTitle__1_-p8",form:"Registartion_form__nuBsx",formInput:"Registartion_formInput__32eaf",photoEye:"Registartion_photoEye__V10oD",formInputLastChild:"Registartion_formInputLastChild__3Ptax",formError:"Registartion_formError__2Gh4d",flexButtons:"Registartion_flexButtons__2ZsxK",cancelButton:"Registartion_cancelButton__3Db0F",logisterButton:"Registartion_logisterButton__DqyiJ"}},72:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),s=n(20),o=n.n(s),i=(n(47),n(5)),d=n(22),u=n.n(d),l=n(6),j=n(11),b=n.n(j),O=n(3),p=n(2),_=n(37),f=n.n(_).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),m=function(e){return f.post("/auth/login",e)},h=function(e){return f.post("auth/register",e)},x=function(e){return f.post("auth/forgot",e)},v=function(){return f.delete("auth/me",{})},g=function(){return f.post("auth/me")},E=function(e){return f.post("auth/set-new-password",e)},N=function(){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return f.get("cards/pack?page=".concat(e,"&pageCount=").concat(t,"&sortPacks=0updated"))},R=function(e){return f.post("cards/pack",e)},w=function(e){return f.delete("cards/pack?id=".concat(e))},k={status:"loading"},y=function(e){return{type:"APP/SET-STATUS",status:e}},S={isLoggedIn:!1,dataLogin:{_id:"",email:"",name:"",avatar:null,publicCardPacksCount:0,created:"",updated:"",isAdmin:!1,verified:!1,rememberMe:!1,error:""},responseError:"",token:""},T=function(e){return{type:"LOGIN/SET-LOGIN-DATA",value:e}},P=function(e){return{type:"LOGIN/SET-DATA",data:e}},C=function(e){return{type:"LOGIN/SET-RESPONSE-ERROR",responseError:e}},A=function(e){return{type:"LOGIN/SET-RESPONSE-TOKEN",token:e}},I=n(0),L=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),o=s[0],d=s[1],u=Object(a.useState)(!1),j=Object(l.a)(u,2),p=j[0],_=j[1],f=Object(a.useState)("password"),h=Object(l.a)(f,2),x=h[0],v=h[1],g=Object(O.b)(),E=Object(O.c)((function(e){return e.login.isLoggedIn})),N=Object(O.c)((function(e){return e.login.responseError}));if(E)return Object(I.jsx)(i.a,{to:"/profile"});return Object(I.jsx)("div",{className:b.a.main,children:Object(I.jsxs)("div",{className:b.a.mainBlock,children:[Object(I.jsx)("div",{className:b.a.title,children:"It-incubator"}),Object(I.jsx)("div",{className:b.a.subTitle,children:"Sign In"}),Object(I.jsxs)("div",{className:b.a.form,children:[Object(I.jsx)("div",{className:b.a.formInput,children:Object(I.jsx)("input",{type:"email",placeholder:"Enter your email",onChange:function(e){c(e.currentTarget.value),g(C(""))}})}),Object(I.jsxs)("div",{className:b.a.formInput,children:[Object(I.jsx)("input",{type:x,placeholder:"Enter your password",onChange:function(e){d(e.currentTarget.value),g(C(""))}}),Object(I.jsx)("span",{className:b.a.photoEye,onClick:function(){"password"===x?v("text"):"text"===x&&v("password")}}),Object(I.jsx)("span",{className:b.a.formError,children:N})]}),Object(I.jsxs)("div",{className:b.a.forgotPassword,children:[Object(I.jsx)("input",{type:"checkbox",checked:p,onChange:function(e){_(e.currentTarget.checked)}}),"RememberMe"]}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{className:b.a.loginButton,onClick:function(){var e;g((e={email:n,password:o,rememberMe:p},function(t){t(y("loading")),m(e).then((function(e){t(T(!0)),t(P(e.data)),t(A(e.data.token)),t(y("succeeded"))})).catch((function(e){t(A(e.response.data.error)),t(y("succeeded"))}))}))},children:"Login"})})]}),Object(I.jsx)("div",{className:b.a.askAboutAccount,children:Object(I.jsx)("span",{children:"Don\u2019t have an account?"})}),Object(I.jsx)("div",{className:b.a.singUp,children:Object(I.jsx)("span",{children:"Sign Up"})})]})})},B=n(7),G=n.n(B);!function(e){e.SET_REGISTRATION_DATA="SET_REGISTRATION_DATA",e.SET_RESPONSE_ERROR="SET_RESPONSE_ERROR"}(c||(c={}));var D,U={isRegistration:!1,responseError:""},F=function(e){return{type:c.SET_RESPONSE_ERROR,responseError:e}},K=function(e){return function(t){t(y("loading")),h(e).then((function(e){var n;t((n=!0,{type:c.SET_REGISTRATION_DATA,isRegistration:n})),t(y("succeeded"))})).catch((function(e){t(F(e.response.data.error)),t(y("succeeded"))}))}},H=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.registration.isRegistration})),n=Object(O.c)((function(e){return e.registration.responseError})),c=Object(O.c)((function(e){return e.login.isLoggedIn})),r=Object(a.useState)(""),s=Object(l.a)(r,2),o=s[0],d=s[1],u=Object(a.useState)(""),j=Object(l.a)(u,2),b=j[0],p=j[1],_=Object(a.useState)(""),f=Object(l.a)(_,2),m=f[0],h=f[1],x=Object(a.useState)(""),v=Object(l.a)(x,2),g=v[0],E=v[1],N=Object(a.useState)("password"),R=Object(l.a)(N,2),w=R[0],k=R[1],y=Object(a.useState)("password"),S=Object(l.a)(y,2),T=S[0],P=S[1],C=function(){/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(o)?b===m?(e(K({email:o,password:b})),d(""),p(""),h(""),E("")):(p(""),h(""),E("Password does not match")):E("Incorrect password")};return t?Object(I.jsx)(i.a,{to:Ne.login}):c?Object(I.jsx)(i.a,{to:Ne.profile}):Object(I.jsx)("div",{className:G.a.main,children:Object(I.jsxs)("div",{className:G.a.mainBlock,children:[Object(I.jsx)("div",{className:G.a.title,children:"It-incubator"}),Object(I.jsx)("div",{className:G.a.subTitle,children:"Sign Up"}),Object(I.jsxs)("div",{className:G.a.form,children:[Object(I.jsx)("div",{className:G.a.formInput,children:Object(I.jsx)("input",{type:"email",placeholder:"Enter your email",value:o,onChange:function(e){d(e.currentTarget.value)}})}),Object(I.jsxs)("div",{className:"".concat(G.a.formInput),children:[Object(I.jsx)("input",{type:w,placeholder:"Enter your password",value:b,onChange:function(e){p(e.currentTarget.value)}}),Object(I.jsx)("span",{className:G.a.photoEye,onClick:function(){"password"===w?k("text"):"text"===w&&k("password")}})]}),Object(I.jsxs)("div",{className:"".concat(G.a.formInput," ").concat(G.a.formInputLastChild),children:[Object(I.jsx)("input",{type:T,placeholder:"Confirm your password",value:m,onKeyPress:function(e){13===e.charCode&&C()},onChange:function(e){h(e.currentTarget.value)}}),Object(I.jsx)("span",{className:G.a.photoEye,onClick:function(){"password"===T?P("text"):"text"===T&&P("password")}}),Object(I.jsx)("span",{className:G.a.formError,children:g||(n||"")})]}),Object(I.jsxs)("div",{className:G.a.flexButtons,children:[Object(I.jsx)("div",{children:Object(I.jsx)("button",{className:G.a.cancelButton,onClick:function(t){d(""),p(""),h(""),E(""),e(F(""))},children:"Cancel"})}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{className:G.a.logisterButton,onClick:C,children:"Register"})})]})]})]})})},Y=n(38),M=n.n(Y);!function(e){e.IS_AUTH="IS_AUTH"}(D||(D={}));var Z,q={isAuth:!1},V=n(39),X=n.n(V),z=function(){var e=Object(O.b)(),t=Object(a.useCallback)((function(){e((function(e){e(y("loading")),v().then((function(t){e(T(!1)),e(y("succeeded"))})).catch((function(t){e(C(t.response.data.error)),e(y("succeeded"))}))}))}),[e]);return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("button",{className:X.a.logoutButton,onClick:t,children:"LOGOUT"})})},J=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.login.dataLogin})),n=Object(O.c)((function(e){return e.login.isLoggedIn}));return Object(a.useEffect)((function(){t.created||e((function(e){e(y("loading")),g().then((function(t){e(P(t.data)),e(T(!0)),e(A(t.data.token)),e(y("succeeded"))})).catch((function(t){e(C(t.response.data.error))}))}))}),[e]),n?Object(I.jsxs)("div",{className:M.a.main,children:[JSON.stringify(t),Object(I.jsx)("button",{children:Object(I.jsx)(z,{})})]}):Object(I.jsx)(i.a,{to:Ne.login})},W=n(16),$=n.n(W);!function(e){e.SET_RECOVERY_FLAG="SET_RECOVERY_DATA",e.SET_RESPONSE_ERROR="SET_RESPONSE_ERROR"}(Z||(Z={}));var Q,ee={isRecovery:!1,responseError:""},te=function(e){return{type:Z.SET_RECOVERY_FLAG,isRecovery:e}},ne=function(e){return{type:Z.SET_RESPONSE_ERROR,responseError:e}},ce=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.passwordRecovery.isRecovery})),n=Object(O.c)((function(e){return e.passwordRecovery.responseError})),c=Object(a.useState)(""),r=Object(l.a)(c,2),s=r[0],o=r[1],d=Object(a.useState)(!1),u=Object(l.a)(d,2),j=u[0],b=u[1];if(t)return Object(I.jsx)(i.a,{to:"/newPassword"});var p=function(){b(!0)};return j?Object(I.jsx)(i.a,{to:"/login"}):Object(I.jsx)("div",{className:$.a.main,children:Object(I.jsxs)("div",{className:$.a.mainBlock,children:[Object(I.jsx)("div",{className:$.a.title,children:"It-incubator"}),Object(I.jsx)("div",{className:$.a.subTitle,children:"Forgot your password?"}),Object(I.jsxs)("div",{className:$.a.form,children:[Object(I.jsxs)("div",{className:$.a.formInput,children:[Object(I.jsx)("input",{type:"email",placeholder:"Enter your email",onChange:function(t){o(t.currentTarget.value),e(ne(""))},value:s}),Object(I.jsx)("span",{className:$.a.formError,children:n})]}),Object(I.jsx)("p",{className:$.a.textAfterInput,children:"Enter your email address and we will send you further instructions"}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{className:$.a.mainButton,onClick:function(){e(function(e){return function(t){t(y("loading")),x(e).then((function(e){t(te(!0)),t(y("succeeded"))})).catch((function(e){t(ne(e.response.data.error)),t(y("succeeded"))}))}}({email:s,from:"test-front-admin <ai73a@yandex.by>)",message:"<div style=\"background-color: lime; padding: 15px\"> \n                        password recovery link: <a href='https://dimak0489.github.io/Project-Friday/#//newPassword/$token$'>link</a>\n                      </div>"}))},children:"Send Instructions"})})]}),Object(I.jsx)("div",{className:$.a.askAboutAccount,onClick:p,children:Object(I.jsx)("span",{children:"Did you remember your password?"})}),Object(I.jsx)("div",{className:$.a.tryLogin,onClick:p,children:Object(I.jsx)("span",{children:"Try logging in"})})]})})},ae=n(17),re=n.n(ae),se=function(){var e=Object(O.b)();e(te(!1));var t=Object(i.g)().token,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(I.jsx)("div",{className:re.a.main,children:Object(I.jsxs)("div",{className:re.a.mainBlock,children:[Object(I.jsx)("div",{className:re.a.title,children:"It-incubator"}),Object(I.jsx)("div",{className:re.a.subTitle,children:"Forgot your password?"}),Object(I.jsxs)("div",{className:re.a.form,children:[Object(I.jsxs)("div",{className:re.a.formInput,children:[Object(I.jsx)("input",{type:"password",placeholder:"Enter your new password",value:r,onChange:function(e){s(e.currentTarget.value)}}),Object(I.jsx)("span",{className:re.a.formError})]}),Object(I.jsx)("p",{className:re.a.textAfterInput,children:"Create new password and we will send you further instructions to email"}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{onClick:function(){var n;e((n={newPassword:r,token:t},function(e){e(y("loading")),E(n).then((function(t){e(y("succeeded"))})).catch((function(t){e(ne(t.response.data.error)),e(y("succeeded"))}))}))},className:re.a.mainButton,children:"Create new password"})})]})]})})},oe=n(8),ie=n(9),de=n.n(ie),ue=function(){return Object(I.jsxs)("div",{className:de.a.navigation,children:[Object(I.jsx)("div",{className:"".concat(de.a.item," ").concat(de.a.active),children:Object(I.jsx)(oe.b,{to:"/registration",activeClassName:de.a.activeLink,children:"Registration"})}),Object(I.jsx)("div",{className:de.a.item,children:Object(I.jsx)(oe.b,{to:"/login",activeClassName:de.a.activeLink,children:"Login"})}),Object(I.jsx)("div",{className:de.a.item,children:Object(I.jsx)(oe.b,{to:"/profile",activeClassName:de.a.activeLink,children:"Profile"})}),Object(I.jsx)("div",{className:de.a.item,children:Object(I.jsx)(oe.b,{to:"/passwordRecovery",activeClassName:de.a.activeLink,children:"PasswordRecovery"})}),Object(I.jsx)("div",{className:de.a.item,children:Object(I.jsx)(oe.b,{to:"/newPassword/",activeClassName:de.a.activeLink,children:"NewPassword"})}),Object(I.jsx)("div",{className:de.a.item,children:Object(I.jsx)(oe.b,{to:"/pack/",activeClassName:de.a.activeLink,children:"Pack"})})]})},le=n.p+"static/media/preloader.b0090460.svg",je=function(){return Object(I.jsx)("div",{children:Object(I.jsx)("img",{src:le,alt:""})})},be=n(28),Oe=n.n(be),pe=n(40),_e=n.n(pe),fe=function(e){return Object(I.jsxs)("div",{className:_e.a.flexCards,children:[Object(I.jsx)("div",{children:e.name}),Object(I.jsx)("div",{children:e.cardsCount}),Object(I.jsx)("div",{children:e.updated}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{onClick:function(t){e.onClickDeletePack(e.packId)},children:"delete"})}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{children:"update"})}),Object(I.jsx)("div",{children:Object(I.jsx)("a",{href:"#",children:"cards"})})]})};!function(e){e.GET_CARDS_PACK="GET_CARDS_PACK"}(Q||(Q={}));var me={cardPacks:[{_id:"",user_id:"",name:"",cardsCount:0,created:"",updated:""}],cardPacksTotalCount:0,maxCardsCount:0,minCardsCount:0,page:0,pageCount:0},he=function(){return function(e){e(y("loading")),N().then((function(t){var n;e((n=t.data,{type:Q.GET_CARDS_PACK,data:n})),e(y("succeeded"))})).catch((function(t){e(y("succeeded"))}))}},xe=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.cards})),n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){e(he())}),[e]);var o={name:r},i=Object(a.useCallback)((function(t){var n;e((n=t,function(e){e(y("loading")),w(n).then((function(t){e(he()),e(y("succeeded"))})).catch((function(t){e(y("succeeded"))}))}))}),[t]),d=t.cardPacks.map((function(e){return Object(I.jsx)(fe,{packId:e._id,name:e.name,cardsCount:e.cardsCount,updated:e.updated,onClickDeletePack:i})}));return Object(I.jsxs)("div",{className:Oe.a.main,children:[Object(I.jsx)("div",{children:"PacksPage"}),Object(I.jsxs)("div",{className:Oe.a.flexCardsTitle,children:[Object(I.jsx)("div",{children:"name"}),Object(I.jsx)("div",{children:"cardsCount"}),Object(I.jsx)("div",{children:"updated"}),Object(I.jsx)("div",{children:Object(I.jsx)("input",{type:"text",value:r,onChange:function(e){s(e.currentTarget.value)}})}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{onClick:function(t){e(function(e){return function(t){t(y("loading")),R(e).then((function(e){t(he()),t(y("succeeded"))})).catch((function(e){t(y("succeeded"))}))}}({cardsPack:o})),s("")},children:"add"})})]}),Object(I.jsx)("div",{children:d})]})},ve=n(41),ge=n.n(ve),Ee=function(){return Object(I.jsxs)("div",{className:ge.a.wrapper,children:[Object(I.jsx)("div",{children:"404"}),Object(I.jsx)("div",{children:"Page not found!"}),Object(I.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Ne={login:"/login",registration:"/registration",profile:"/profile",Error404:"/404",passwordRecovery:"/passwordRecovery",newPassword:"/newPassword",test:"/test",pack:"/pack"},Re=function(){var e=Object(O.c)((function(e){return e.app.status}));return Object(I.jsxs)("div",{className:u.a.app,children:[Object(I.jsx)("div",{className:u.a.navBar,children:Object(I.jsx)(ue,{})}),"loading"===e&&Object(I.jsxs)("div",{className:u.a.preLoader,children:[" ",Object(I.jsx)(je,{})]}),Object(I.jsxs)(i.d,{children:[Object(I.jsx)(i.b,{path:Ne.login,render:function(){return Object(I.jsx)(L,{})}}),Object(I.jsx)(i.b,{path:Ne.registration,render:function(){return Object(I.jsx)(H,{})}}),Object(I.jsx)(i.b,{path:Ne.passwordRecovery,render:function(){return Object(I.jsx)(ce,{})}}),Object(I.jsx)(i.b,{path:Ne.newPassword,render:function(){return Object(I.jsx)(se,{})}}),Object(I.jsx)(i.b,{path:Ne.profile,render:function(){return Object(I.jsx)(J,{})}}),Object(I.jsx)(i.b,{path:Ne.pack,render:function(){return Object(I.jsx)(xe,{})}}),Object(I.jsx)(i.b,{path:Ne.Error404,render:function(){return Object(I.jsx)(Ee,{})}}),Object(I.jsx)(i.a,{from:"*",to:"/404"})]})]})},we=n(23),ke=n(42),ye=Object(we.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET-LOGIN-DATA":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:t.value});case"LOGIN/SET-DATA":return Object(p.a)(Object(p.a)({},e),{},{dataLogin:t.data});case"LOGIN/SET-RESPONSE-ERROR":return Object(p.a)(Object(p.a)({},e),{},{responseError:t.responseError});case"LOGIN/SET-RESPONSE-TOKEN":return Object(p.a)(Object(p.a)({},e),{},{token:t.token});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_REGISTRATION_DATA:return Object(p.a)(Object(p.a)({},e),{},{isRegistration:t.isRegistration});case c.SET_RESPONSE_ERROR:return Object(p.a)(Object(p.a)({},e),{},{responseError:t.responseError});default:return Object(p.a)({},e)}},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.SET_RECOVERY_FLAG:return Object(p.a)(Object(p.a)({},e),{},{isRecovery:t.isRecovery});case Z.SET_RESPONSE_ERROR:return Object(p.a)(Object(p.a)({},e),{},{responseError:t.responseError});default:return Object(p.a)({},e)}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(p.a)(Object(p.a)({},e),{},{status:t.status});default:return e}},isAuth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.IS_AUTH:return Object(p.a)(Object(p.a)({},e),{},{isAuth:t.isAuth});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.GET_CARDS_PACK:return Object(p.a)(Object(p.a)({},e),{},{cardPacks:t.data.cardPacks.map((function(e){return Object(p.a)({},e)}))});default:return e}}}),Se=Object(we.c)(ye,Object(we.a)(ke.a));o.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(O.a,{store:Se,children:Object(I.jsx)(oe.a,{children:Object(I.jsx)(Re,{})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={navigation:"Header_navigation__G3ZBz",item:"Header_item__1yMtP",activeLink:"Header_activeLink__Y6ywc"}}},[[72,1,2]]]);
//# sourceMappingURL=main.9fa6a424.chunk.js.map