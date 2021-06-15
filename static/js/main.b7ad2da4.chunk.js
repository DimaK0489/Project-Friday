(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),s=n(26),o=n.n(s),i=(n(76),n(8)),d=n(39),u=n.n(d),l=n(6),j=n(15),b=n.n(j),O=n(3),p=n(4),_=n(58),f=n.n(_).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),h=function(e){return f.post("/auth/login",e)},m=function(e){return f.post("auth/register",e)},x=function(e){return f.post("auth/forgot",e)},v=function(){return f.delete("auth/me",{})},g=function(){return f.post("auth/me")},E=function(e){return f.post("auth/set-new-password",e)},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return f.get("cards/pack?page=".concat(e,"&pageCount=").concat(t,"&sortPacks=0updated"))},N=function(e){return f.post("cards/pack",e)},k=function(e){return f.delete("cards/pack?id=".concat(e))},R=function(e){return f.put("cards/pack",e)},w=function(e){return f.get("cards/card?cardsPack_id=".concat(e,"&pageCount=20"))},T=function(e){return f.post("cards/card",e)},S=function(e){return f.delete("cards/card?id=".concat(e))},y=function(e){return f.put("cards/card",e)},P={status:"succeeded"},A=function(e){return{type:"APP/SET-STATUS",status:e}},I={isLoggedIn:!1,dataLogin:{_id:"",email:"",name:"",avatar:null,publicCardPacksCount:0,created:"",updated:"",isAdmin:!1,verified:!1,rememberMe:!1,error:""},responseError:"",token:""},L=function(e){return{type:"LOGIN/SET-LOGIN-DATA",value:e}},B=function(e){return{type:"LOGIN/SET-DATA",data:e}},G=function(e){return{type:"LOGIN/SET-RESPONSE-ERROR",responseError:e}},D=function(e){return{type:"LOGIN/SET-RESPONSE-TOKEN",token:e}},K=n(1),U=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),o=s[0],d=s[1],u=Object(a.useState)(!1),j=Object(l.a)(u,2),p=j[0],_=j[1],f=Object(a.useState)("password"),m=Object(l.a)(f,2),x=m[0],v=m[1],g=Object(O.b)(),E=Object(O.c)((function(e){return e.login.isLoggedIn})),C=Object(O.c)((function(e){return e.login.responseError}));if(E)return Object(K.jsx)(i.a,{to:Me.profile});return Object(K.jsx)("div",{className:b.a.main,children:Object(K.jsxs)("div",{className:b.a.mainBlock,children:[Object(K.jsx)("div",{className:b.a.title,children:"It-incubator"}),Object(K.jsx)("div",{className:b.a.subTitle,children:"Sign In"}),Object(K.jsxs)("div",{className:b.a.form,children:[Object(K.jsx)("div",{className:b.a.formInput,children:Object(K.jsx)("input",{type:"email",placeholder:"Enter your email",onChange:function(e){c(e.currentTarget.value),g(G(""))}})}),Object(K.jsxs)("div",{className:b.a.formInput,children:[Object(K.jsx)("input",{type:x,placeholder:"Enter your password",onChange:function(e){d(e.currentTarget.value),g(G(""))}}),Object(K.jsx)("span",{className:b.a.photoEye,onClick:function(){"password"===x?v("text"):"text"===x&&v("password")}}),Object(K.jsx)("span",{className:b.a.formError,children:C})]}),Object(K.jsxs)("div",{className:b.a.forgotPassword,children:[Object(K.jsx)("input",{type:"checkbox",checked:p,onChange:function(e){_(e.currentTarget.checked)}}),"RememberMe"]}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{className:b.a.loginButton,onClick:function(){var e;g((e={email:n,password:o,rememberMe:p},function(t){t(A("loading")),h(e).then((function(e){t(L(!0)),t(B(e.data)),t(D(e.data.token)),t(A("succeeded"))})).catch((function(e){t(D(e.response.data.error)),t(A("succeeded"))}))}))},children:"Login"})})]}),Object(K.jsx)("div",{className:b.a.askAboutAccount,children:Object(K.jsx)("span",{children:"Don\u2019t have an account?"})}),Object(K.jsx)("div",{className:b.a.singUp,children:Object(K.jsx)("span",{children:"Sign Up"})})]})})},H=n(14),F=n.n(H);!function(e){e.SET_REGISTRATION_DATA="SET_REGISTRATION_DATA",e.SET_RESPONSE_ERROR="SET_RESPONSE_ERROR"}(c||(c={}));var q,M={isRegistration:!1,responseError:""},Y=function(e){return{type:c.SET_RESPONSE_ERROR,responseError:e}},Z=function(e){return function(t){t(A("loading")),m(e).then((function(e){var n;t((n=!0,{type:c.SET_REGISTRATION_DATA,isRegistration:n})),t(A("succeeded"))})).catch((function(e){t(Y(e.response.data.error)),t(A("succeeded"))}))}},z=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.registration.isRegistration})),n=Object(O.c)((function(e){return e.registration.responseError})),c=Object(O.c)((function(e){return e.login.isLoggedIn})),r=Object(a.useState)(""),s=Object(l.a)(r,2),o=s[0],d=s[1],u=Object(a.useState)(""),j=Object(l.a)(u,2),b=j[0],p=j[1],_=Object(a.useState)(""),f=Object(l.a)(_,2),h=f[0],m=f[1],x=Object(a.useState)(""),v=Object(l.a)(x,2),g=v[0],E=v[1],C=Object(a.useState)("password"),N=Object(l.a)(C,2),k=N[0],R=N[1],w=Object(a.useState)("password"),T=Object(l.a)(w,2),S=T[0],y=T[1],P=function(){/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(o)?b===h?(e(Z({email:o,password:b})),d(""),p(""),m(""),E("")):(p(""),m(""),E("Password does not match")):E("Incorrect password")};return t?Object(K.jsx)(i.a,{to:Me.login}):c?Object(K.jsx)(i.a,{to:Me.profile}):Object(K.jsx)("div",{className:F.a.main,children:Object(K.jsxs)("div",{className:F.a.mainBlock,children:[Object(K.jsx)("div",{className:F.a.title,children:"It-incubator"}),Object(K.jsx)("div",{className:F.a.subTitle,children:"Sign Up"}),Object(K.jsxs)("div",{className:F.a.form,children:[Object(K.jsx)("div",{className:F.a.formInput,children:Object(K.jsx)("input",{type:"email",placeholder:"Enter your email",value:o,onChange:function(e){d(e.currentTarget.value)}})}),Object(K.jsxs)("div",{className:"".concat(F.a.formInput),children:[Object(K.jsx)("input",{type:k,placeholder:"Enter your password",value:b,onChange:function(e){p(e.currentTarget.value)}}),Object(K.jsx)("span",{className:F.a.photoEye,onClick:function(){"password"===k?R("text"):"text"===k&&R("password")}})]}),Object(K.jsxs)("div",{className:"".concat(F.a.formInput," ").concat(F.a.formInputLastChild),children:[Object(K.jsx)("input",{type:S,placeholder:"Confirm your password",value:h,onKeyPress:function(e){13===e.charCode&&P()},onChange:function(e){m(e.currentTarget.value)}}),Object(K.jsx)("span",{className:F.a.photoEye,onClick:function(){"password"===S?y("text"):"text"===S&&y("password")}}),Object(K.jsx)("span",{className:F.a.formError,children:g||(n||"")})]}),Object(K.jsxs)("div",{className:F.a.flexButtons,children:[Object(K.jsx)("div",{children:Object(K.jsx)("button",{className:F.a.cancelButton,onClick:function(t){d(""),p(""),m(""),E(""),e(Y(""))},children:"Cancel"})}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{className:F.a.logisterButton,onClick:P,children:"Register"})})]})]})]})})},J=n(59),V=n.n(J);!function(e){e.IS_AUTH="IS_AUTH"}(q||(q={}));var X,W={isAuth:!1},$=n(60),Q=n.n($),ee=function(){var e=Object(O.b)(),t=Object(a.useCallback)((function(){e((function(e){e(A("loading")),v().then((function(t){e(L(!1)),e(A("succeeded"))})).catch((function(t){e(G(t.response.data.error)),e(A("succeeded"))}))}))}),[e]);return Object(K.jsx)(K.Fragment,{children:Object(K.jsx)("button",{className:Q.a.logoutButton,onClick:t,children:"LOGOUT"})})},te=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.login.dataLogin})),n=Object(O.c)((function(e){return e.login.isLoggedIn}));return Object(a.useEffect)((function(){t.created||e((function(e){e(A("loading")),g().then((function(t){e(B(t.data)),e(L(!0)),e(D(t.data.token)),e(A("succeeded"))})).catch((function(t){e(G(t.response.data.error))}))}))}),[e]),n?Object(K.jsxs)("div",{className:V.a.main,children:[JSON.stringify(t),Object(K.jsx)("button",{children:Object(K.jsx)(ee,{})})]}):Object(K.jsx)(i.a,{to:Me.login})},ne=n(20),ce=n.n(ne);!function(e){e.SET_RECOVERY_FLAG="SET_RECOVERY_DATA",e.SET_RESPONSE_ERROR="SET_RESPONSE_ERROR"}(X||(X={}));var ae,re={isRecovery:!1,responseError:""},se=function(e){return{type:X.SET_RECOVERY_FLAG,isRecovery:e}},oe=function(e){return{type:X.SET_RESPONSE_ERROR,responseError:e}},ie=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.passwordRecovery.isRecovery})),n=Object(O.c)((function(e){return e.passwordRecovery.responseError})),c=Object(a.useState)(""),r=Object(l.a)(c,2),s=r[0],o=r[1],d=Object(a.useState)(!1),u=Object(l.a)(d,2),j=u[0],b=u[1];if(t)return Object(K.jsx)(i.a,{to:"/newPassword"});var p=function(){b(!0)};return j?Object(K.jsx)(i.a,{to:"/login"}):Object(K.jsx)("div",{className:ce.a.main,children:Object(K.jsxs)("div",{className:ce.a.mainBlock,children:[Object(K.jsx)("div",{className:ce.a.title,children:"It-incubator"}),Object(K.jsx)("div",{className:ce.a.subTitle,children:"Forgot your password?"}),Object(K.jsxs)("div",{className:ce.a.form,children:[Object(K.jsxs)("div",{className:ce.a.formInput,children:[Object(K.jsx)("input",{type:"email",placeholder:"Enter your email",onChange:function(t){o(t.currentTarget.value),e(oe(""))},value:s}),Object(K.jsx)("span",{className:ce.a.formError,children:n})]}),Object(K.jsx)("p",{className:ce.a.textAfterInput,children:"Enter your email address and we will send you further instructions"}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{className:ce.a.mainButton,onClick:function(){e(function(e){return function(t){t(A("loading")),x(e).then((function(e){t(se(!0)),t(A("succeeded"))})).catch((function(e){t(oe(e.response.data.error)),t(A("succeeded"))}))}}({email:s,from:"test-front-admin <ai73a@yandex.by>)",message:"<div style=\"background-color: lime; padding: 15px\"> \n                        password recovery link: <a href='https://dimak0489.github.io/Project-Friday/#//newPassword/$token$'>link</a>\n                      </div>"}))},children:"Send Instructions"})})]}),Object(K.jsx)("div",{className:ce.a.askAboutAccount,onClick:p,children:Object(K.jsx)("span",{children:"Did you remember your password?"})}),Object(K.jsx)("div",{className:ce.a.tryLogin,onClick:p,children:Object(K.jsx)("span",{children:"Try logging in"})})]})})},de=n(23),ue=n.n(de),le=function(){var e=Object(O.b)();e(se(!1));var t=Object(i.g)().token,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(K.jsx)("div",{className:ue.a.main,children:Object(K.jsxs)("div",{className:ue.a.mainBlock,children:[Object(K.jsx)("div",{className:ue.a.title,children:"It-incubator"}),Object(K.jsx)("div",{className:ue.a.subTitle,children:"Forgot your password?"}),Object(K.jsxs)("div",{className:ue.a.form,children:[Object(K.jsxs)("div",{className:ue.a.formInput,children:[Object(K.jsx)("input",{type:"password",placeholder:"Enter your new password",value:r,onChange:function(e){s(e.currentTarget.value)}}),Object(K.jsx)("span",{className:ue.a.formError})]}),Object(K.jsx)("p",{className:ue.a.textAfterInput,children:"Create new password and we will send you further instructions to email"}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{onClick:function(){var n;e((n={newPassword:r,token:t},function(e){e(A("loading")),E(n).then((function(t){e(A("succeeded"))})).catch((function(t){e(oe(t.response.data.error)),e(A("succeeded"))}))}))},className:ue.a.mainButton,children:"Create new password"})})]})]})})},je=n(9),be=n(13),Oe=n.n(be),pe=function(){return Object(K.jsxs)("div",{className:Oe.a.navigation,children:[Object(K.jsx)("div",{className:"".concat(Oe.a.item," ").concat(Oe.a.active),children:Object(K.jsx)(je.b,{to:"/registration",activeClassName:Oe.a.activeLink,children:"Registration"})}),Object(K.jsx)("div",{className:Oe.a.item,children:Object(K.jsx)(je.b,{to:"/login",activeClassName:Oe.a.activeLink,children:"Login"})}),Object(K.jsx)("div",{className:Oe.a.item,children:Object(K.jsx)(je.b,{to:"/profile",activeClassName:Oe.a.activeLink,children:"Profile"})}),Object(K.jsx)("div",{className:Oe.a.item,children:Object(K.jsx)(je.b,{to:"/passwordRecovery",activeClassName:Oe.a.activeLink,children:"PasswordRecovery"})}),Object(K.jsx)("div",{className:Oe.a.item,children:Object(K.jsx)(je.b,{to:"/newPassword/",activeClassName:Oe.a.activeLink,children:"NewPassword"})}),Object(K.jsx)("div",{className:Oe.a.item,children:Object(K.jsx)(je.b,{to:"/pack/",activeClassName:Oe.a.activeLink,children:"Pack"})}),Object(K.jsx)("div",{className:Oe.a.item,children:Object(K.jsx)(je.b,{to:"/cards",activeClassName:Oe.a.activeLink,children:"Cards"})})]})},_e=n.p+"static/media/preloader.b0090460.svg",fe=function(){return Object(K.jsx)("img",{src:_e,alt:""})},he=n(40),me=n.n(he),xe=n(61),ve=n.n(xe);!function(e){e.GET_CARDS="GET_CARDS"}(ae||(ae={}));var ge,Ee={cards:[{answer:"",question:"",cardsPack_id:"",grade:"",shots:1,user_id:"",created:"",updated:"",_id:""}],cardsTotalCount:0,maxGrade:"",minGrade:"",page:0,pageCount:0,packUserId:""},Ce=function(e){return function(t){t(A("loading")),w(e).then((function(e){var n;t((n=e.data,{type:ae.GET_CARDS,data:n})),t(A("succeeded"))})).catch((function(e){t(A("succeeded"))}))}},Ne=function(e){var t=Object(O.b)();return Object(K.jsxs)("div",{className:ve.a.flexCards,children:[Object(K.jsx)("div",{children:e.name}),Object(K.jsx)("div",{children:e.cardsCount}),Object(K.jsx)("div",{children:e.updated}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{onClick:function(t){e.onClickDeletePack(e.packId)},children:"delete"})}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{onClick:function(t){e.onClickUpdatePack(e.packId)},children:"update"})}),Object(K.jsx)("div",{children:Object(K.jsx)(je.b,{to:"/cards/".concat(e.packId),onClick:function(){t(Ce(e.packId))},children:"cards"})})]})},ke=n(45),Re=n.n(ke);!function(e){e.GET_PACKS_PACK="GET_PACKS_PACK",e.SET_SEARCH_PACK_NAME="SET_SEARCH_PACK_NAME"}(ge||(ge={}));var we={cardPacks:[{_id:"",user_id:"",name:"",cardsCount:0,created:"",updated:""}],cardPacksTotalCount:0,maxCardsCount:0,minCardsCount:0,page:1,pageCount:0},Te=function(e){return function(t){t(A("loading")),C(e,8).then((function(e){var n;t((n=e.data,{type:ge.GET_PACKS_PACK,data:n})),t(A("succeeded"))})).catch((function(e){t(A("succeeded"))}))}},Se=function(){var e=Object(O.b)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(a.useCallback)((function(){var t;e(c?(t=c,{type:ge.SET_SEARCH_PACK_NAME,name:t}):Te(5)),r("")}),[e,c]);return Object(K.jsxs)("div",{children:[Object(K.jsx)("input",{className:Re.a.searchInput,onChange:function(e){r(e.currentTarget.value)},value:c,type:"text",placeholder:"Search name",autoFocus:!0}),Object(K.jsx)("button",{type:"submit",onClick:s,className:Re.a.searchButton,children:"Search"})]})},ye=n(69),Pe=n(122),Ae=function(e){var t=e.value,n=e.onChangeRange,c=(e.min,e.max,e.step);Object(ye.a)(e,["value","onChangeRange","min","max","step"]);return Object(K.jsx)(Pe.a,{value:t,onChange:function(e,t){n&&n(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",step:c})},Ie=n(25),Le=n.n(Ie),Be=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(100),s=Object(l.a)(r,2),o=s[0],i=s[1];return Object(K.jsxs)("div",{children:[Object(K.jsx)(Ae,{value:[n,o],onChangeRange:function(e){Array.isArray(e)&&(c(e[0]),i(e[1]))},step:1}),Object(K.jsxs)("div",{className:Le.a.values,children:[Object(K.jsx)("span",{children:n}),Object(K.jsx)("span",{children:o})]})]})},Ge=n(120),De=n(121),Ke=Object(Ge.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function Ue(e){var t=Ke(),n=Math.ceil(e.cardPacksTotalCount/10);return Object(K.jsx)("div",{className:t.root,children:Object(K.jsx)(De.a,{count:n,color:"secondary",page:e.page,onChange:e.onChange})})}var He=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.packs})),n=Object(O.c)((function(e){return e.packs.cardPacksTotalCount})),c=Object(O.c)((function(e){return e.packs.page})),r=Object(a.useState)(""),s=Object(l.a)(r,2),o=s[0],i=s[1];Object(a.useEffect)((function(){e(Te(c))}),[e]);var d={name:o},u=Object(a.useCallback)((function(t){var n,a;e((n=t,a=c,function(e){e(A("loading")),k(n).then((function(t){e(Te(a)),e(A("succeeded"))})).catch((function(t){e(A("succeeded"))}))}))}),[t]),j=Object(a.useCallback)((function(t){e(function(e,t){return function(n){n(A("loading")),R(e).then((function(e){n(Te(t)),n(A("succeeded"))})).catch((function(e){n(A("succeeded"))}))}}({cardsPack:{_id:t,name:"New Name"}},c))}),[t]),b=t.cardPacks.map((function(e){return Object(K.jsx)(Ne,{packId:e._id,name:e.name,cardsCount:e.cardsCount,updated:e.updated,onClickDeletePack:u,onClickUpdatePack:j})}));return Object(K.jsxs)("div",{className:me.a.main,children:[Object(K.jsxs)("div",{className:me.a.components,children:[Object(K.jsx)(Be,{}),Object(K.jsx)(Se,{})]}),Object(K.jsx)("div",{children:"PacksPage"}),Object(K.jsxs)("div",{className:me.a.flexCardsTitle,children:[Object(K.jsx)("div",{children:"name"}),Object(K.jsx)("div",{children:"cardsCount"}),Object(K.jsx)("div",{children:"updated"}),Object(K.jsx)("div",{children:Object(K.jsx)("input",{type:"text",value:o,onChange:function(e){i(e.currentTarget.value)}})}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{onClick:function(t){e(function(e,t){return function(n){n(A("loading")),N(e).then((function(e){n(Te(t)),n(A("succeeded"))})).catch((function(e){n(A("succeeded"))}))}}({cardsPack:d},c)),i("")},children:"add"})})]}),Object(K.jsx)("div",{children:b}),Object(K.jsx)(Ue,{page:c,cardPacksTotalCount:n,onChange:function(t,n){e(Te(n))}})]})},Fe=function(e){return Object(K.jsxs)("div",{children:[Object(K.jsxs)("span",{children:[e.created,e.question]}),Object(K.jsx)("button",{onClick:function(){e.deleteCard(e.cardId)},children:"delete"}),Object(K.jsx)("button",{onClick:function(){e.updateCard(e.cardId)},children:"update"})]})},qe=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.cards})),n=Object(i.g)().cardsPack_id;Object(a.useEffect)((function(){e(Ce(n))}),[e,n]);var c=function(t){e(function(e,t){return function(n){n(A("loading")),S(e).then((function(e){n(Ce(t)),n(A("succeeded"))})).catch((function(e){n(A("succeeded"))}))}}(t,n))},r=function(t){e(function(e,t){return function(n){n(A("loading")),y(e).then((function(e){n(Ce(t)),n(A("succeeded"))})).catch((function(e){n(A("succeeded"))}))}}({card:{_id:t,question:"new question"}},n))};return Object(K.jsxs)("div",{className:Le.a.main,children:[Object(K.jsxs)("div",{className:Le.a.components,children:[Object(K.jsx)(Be,{}),Object(K.jsx)(Se,{})]}),Object(K.jsxs)("div",{className:Le.a.table,children:["Table Cards",Object(K.jsxs)("div",{className:Le.a.borderTable,children:[Object(K.jsx)("span",{children:"Question"}),Object(K.jsx)("span",{children:"Answer"}),Object(K.jsx)("span",{children:"Grade"}),Object(K.jsx)("span",{children:"Updated"}),Object(K.jsx)("span",{children:"Url"}),Object(K.jsx)("button",{onClick:function(t){e(function(e,t){return function(n){n(A("loading")),T(e).then((function(e){n(Ce(t)),n(A("succeeded"))})).catch((function(e){n(A("succeeded"))}))}}({card:{cardsPack_id:n}},n))},children:"Add"})]})]}),Object(K.jsx)("div",{className:Le.a.bodyTable,children:Object(K.jsx)("div",{className:Le.a.borderTable,children:t.cards.map((function(e){return Object(K.jsx)(Fe,{cardId:e._id,question:e.question,created:e.created,deleteCard:c,updateCard:r})}))})})]})},Me={login:"/login",registration:"/registration",profile:"/profile",Error404:"/404",passwordRecovery:"/passwordRecovery",newPassword:"/newPassword",pack:"/pack",cards:"/cards"},Ye=function(){var e=Object(O.c)((function(e){return e.app.status}));return Object(K.jsxs)("div",{className:u.a.app,children:[Object(K.jsx)("div",{className:u.a.navBar,children:Object(K.jsx)(pe,{})}),"loading"===e&&Object(K.jsxs)("div",{className:u.a.preLoader,children:[" ",Object(K.jsx)(fe,{})]}),Object(K.jsxs)(i.d,{children:[Object(K.jsx)(i.b,{path:Me.login,render:function(){return Object(K.jsx)(U,{})}}),Object(K.jsx)(i.b,{path:Me.registration,render:function(){return Object(K.jsx)(z,{})}}),Object(K.jsx)(i.b,{path:Me.passwordRecovery,render:function(){return Object(K.jsx)(ie,{})}}),Object(K.jsx)(i.b,{path:Me.newPassword,render:function(){return Object(K.jsx)(le,{})}}),Object(K.jsx)(i.b,{path:Me.profile,render:function(){return Object(K.jsx)(te,{})}}),Object(K.jsx)(i.b,{path:Me.pack,render:function(){return Object(K.jsx)(He,{})}}),Object(K.jsx)(i.b,{path:Me.cards,render:function(){return Object(K.jsx)(qe,{})}})]})]})},Ze=n(41),ze=n(68),Je=Object(Ze.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET-LOGIN-DATA":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:t.value});case"LOGIN/SET-DATA":return Object(p.a)(Object(p.a)({},e),{},{dataLogin:t.data});case"LOGIN/SET-RESPONSE-ERROR":return Object(p.a)(Object(p.a)({},e),{},{responseError:t.responseError});case"LOGIN/SET-RESPONSE-TOKEN":return Object(p.a)(Object(p.a)({},e),{},{token:t.token});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_REGISTRATION_DATA:return Object(p.a)(Object(p.a)({},e),{},{isRegistration:t.isRegistration});case c.SET_RESPONSE_ERROR:return Object(p.a)(Object(p.a)({},e),{},{responseError:t.responseError});default:return Object(p.a)({},e)}},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X.SET_RECOVERY_FLAG:return Object(p.a)(Object(p.a)({},e),{},{isRecovery:t.isRecovery});case X.SET_RESPONSE_ERROR:return Object(p.a)(Object(p.a)({},e),{},{responseError:t.responseError});default:return Object(p.a)({},e)}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(p.a)(Object(p.a)({},e),{},{status:t.status});default:return e}},isAuth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.IS_AUTH:return Object(p.a)(Object(p.a)({},e),{},{isAuth:t.isAuth});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.GET_PACKS_PACK:return t.data;case ge.SET_SEARCH_PACK_NAME:return Object(p.a)(Object(p.a)({},e),{},{cardPacks:e.cardPacks.filter((function(e){return e.name===t.name}))});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae.GET_CARDS:return Object(p.a)(Object(p.a)(Object(p.a)({},e),t.data),{},{cards:t.data.cards.map((function(e){return Object(p.a)({},e)}))});default:return e}}}),Ve=Object(Ze.c)(Je,Object(Ze.a)(ze.a));o.a.render(Object(K.jsx)(r.a.StrictMode,{children:Object(K.jsx)(O.a,{store:Ve,children:Object(K.jsx)(je.a,{children:Object(K.jsx)(Ye,{})})})}),document.getElementById("root"))},13:function(e,t,n){e.exports={navigation:"Header_navigation__G3ZBz",item:"Header_item__1yMtP",activeLink:"Header_activeLink__Y6ywc"}},14:function(e,t,n){e.exports={main:"Registartion_main__3_vL6",mainBlock:"Registartion_mainBlock__3ru_Y",title:"Registartion_title__22IXl",subTitle:"Registartion_subTitle__1_-p8",form:"Registartion_form__nuBsx",formInput:"Registartion_formInput__32eaf",photoEye:"Registartion_photoEye__V10oD",formInputLastChild:"Registartion_formInputLastChild__3Ptax",formError:"Registartion_formError__2Gh4d",flexButtons:"Registartion_flexButtons__2ZsxK",cancelButton:"Registartion_cancelButton__3Db0F",logisterButton:"Registartion_logisterButton__DqyiJ"}},15:function(e,t,n){e.exports={main:"Login_main__R58mq",mainBlock:"Login_mainBlock__2tRx_",title:"Login_title__1b00q",subTitle:"Login_subTitle__2tKqF",form:"Login_form__2Ivo1",formInput:"Login_formInput__1sFCW",forgotPassword:"Login_forgotPassword__2nEYB",loginButton:"Login_loginButton__1nXFy",askAboutAccount:"Login_askAboutAccount__xHRcp",singUp:"Login_singUp__XiyS5",formError:"Login_formError__Pxc59"}},20:function(e,t,n){e.exports={main:"PasswordRecovery_main___oq8f",mainBlock:"PasswordRecovery_mainBlock__3WHjD",title:"PasswordRecovery_title__1Acmp",subTitle:"PasswordRecovery_subTitle__1rKY3",form:"PasswordRecovery_form__1nyou",formInput:"PasswordRecovery_formInput__3PDG7",textAfterInput:"PasswordRecovery_textAfterInput__3MO8l",mainButton:"PasswordRecovery_mainButton__2nU89",askAboutAccount:"PasswordRecovery_askAboutAccount__1ca_d",tryLogin:"PasswordRecovery_tryLogin__2mAHK"}},23:function(e,t,n){e.exports={main:"NewPassword_main__2-Z9P",mainBlock:"NewPassword_mainBlock__1BrAL",title:"NewPassword_title__2aCRh",subTitle:"NewPassword_subTitle__zIXsd",form:"NewPassword_form__3jlP4",formInput:"NewPassword_formInput__F1OCV",textAfterInput:"NewPassword_textAfterInput__jmogO",mainButton:"NewPassword_mainButton__1h9og",askAboutAccount:"NewPassword_askAboutAccount__13Wwh",tryLogin:"NewPassword_tryLogin__1Kb4r",formError:"NewPassword_formError__sL_cW"}},25:function(e,t,n){e.exports={main:"Cards_main__svb3d",search:"Cards_search__mKOlD",components:"Cards_components__3_Qty",values:"Cards_values__1_uXH",table:"Cards_table__zzRoJ",borderTable:"Cards_borderTable__1hqeZ",bodyTable:"Cards_bodyTable__3-6hJ",paginator:"Cards_paginator__3lYYd"}},39:function(e,t,n){e.exports={app:"App_app__j2gE3",navBar:"App_navBar__xKh2I",preLoader:"App_preLoader__3vzw2"}},40:function(e,t,n){e.exports={main:"Packs_main__22nBf",flexCards:"Packs_flexCards__2xHmI",flexCardsTitle:"Packs_flexCardsTitle__OLcXu",components:"Packs_components__21FTN"}},45:function(e,t,n){e.exports={searchButton:"Search_searchButton__RmHGi",searchInput:"Search_searchInput__c46k_"}},59:function(e,t,n){e.exports={main:"Profile_main__EznwL"}},60:function(e,t,n){e.exports={logoutButton:"LogOut_logoutButton__3FCq0"}},61:function(e,t,n){e.exports={main:"OnePack_main__swEvi",flexCards:"OnePack_flexCards__1km6Z",flexCardsTitle:"OnePack_flexCardsTitle__3MDgU"}},76:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.b7ad2da4.chunk.js.map