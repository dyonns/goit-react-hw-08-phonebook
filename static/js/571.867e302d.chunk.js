"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[571],{6571:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,a=t(4942),o=t(1413),i=t(9439),u=t(2791),c="ContactForm_background__N6Cn0",s="ContactForm_shape__7XXgw",l="ContactForm_header__ywviI",f="ContactForm_contForm__eAK5c",d="ContactForm_tag__Zq7gM",m="ContactForm_inp__qTrD2",p="ContactForm_btnContForm__BF8RV",h=t(9434),v=t(2608),y={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},_=new Uint8Array(16);function g(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(_)}for(var x=[],j=0;j<256;++j)x.push((j+256).toString(16).slice(1));function C(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(x[n[e+0]]+x[n[e+1]]+x[n[e+2]]+x[n[e+3]]+"-"+x[n[e+4]]+x[n[e+5]]+"-"+x[n[e+6]]+x[n[e+7]]+"-"+x[n[e+8]]+x[n[e+9]]+"-"+x[n[e+10]]+x[n[e+11]]+x[n[e+12]]+x[n[e+13]]+x[n[e+14]]+x[n[e+15]]).toLowerCase()}var b=function(n,e,t){if(y.randomUUID&&!e&&!n)return y.randomUUID();var r=(n=n||{}).random||(n.rng||g)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){t=t||0;for(var a=0;a<16;++a)e[t+a]=r[a];return e}return C(r)},N="NOT_FOUND";var w=function(n,e){return n===e};function F(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?w:r,o=t.maxSize,i=void 0===o?1:o,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(a),s=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:N},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return N}return{get:r,put:function(e,a){r(e)===N&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function l(){var e=s.get(arguments);if(e===N){if(e=n.apply(null,arguments),u){var t=s.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function k(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function A(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,l=s.memoizeOptions,f=void 0===l?t:l,d=Array.isArray(f)?f:[f],m=k(r),p=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(d)),h=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return o=p.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:p,dependencies:m,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var I=A(F),U=function(n){return n.items.contacts},E=function(n){return n.items.isLoading},L=I([U,function(n){return n.items.filter}],(function(n,e){return n.length>0?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n})),z=t(184),D={name:"",number:"",id:b()},R=function(){var n=(0,h.I0)(),e=(0,u.useState)(D),t=(0,i.Z)(e,2),r=t[0],y=t[1],_=(0,h.v9)(U),g=(0,h.v9)(E),x=function(n){var e=n.target,t=e.name,r=e.value;y((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,a.Z)({},t,r))}))};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)("div",{className:c,children:[(0,z.jsx)("div",{className:s}),(0,z.jsx)("div",{className:s})]}),(0,z.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=r.name;if(_.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})))alert("".concat(t," is already in contacts"));else{var a=(0,o.Z)({},r);n((0,v.el)(a)),y(D)}},className:f,children:[(0,z.jsx)("h1",{className:l,children:"Phonebook"}),(0,z.jsx)("p",{className:d,children:"Enter your name:"}),(0,z.jsx)("input",{className:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r.name,onChange:x}),(0,z.jsx)("p",{className:d,children:"Enter your number:"}),(0,z.jsx)("input",{className:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:r.number,onChange:x}),(0,z.jsx)("br",{}),(0,z.jsx)("button",{type:"submit",className:p,children:g?"Loadding":"Add contact"})]})]})},Z="ContactList_list__csErn",q="ContactList_btnContlist__nWzmo",S="ContactList_info__ndqPX",V="ContactList_headerCont__kIVRV",O=function(){var n=(0,h.v9)(L),e=(0,h.I0)();return(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)("div",{className:Z,children:[(0,z.jsx)("h2",{className:V,children:"Contacts"}),(0,z.jsx)("ul",{children:n.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,z.jsxs)("li",{children:[(0,z.jsxs)("p",{className:S,children:[r,"............",a]}),(0,z.jsx)("button",{type:"submit",onClick:function(){return e((0,v._f)(t))},className:q,children:"Delete"})]},t)}))})]})})},M="Filter_filter__vxThR",P="Filter_filterInput__1Cysk",T=t(6061),X=function(){var n=(0,h.I0)();return(0,z.jsx)("div",{children:(0,z.jsxs)("label",{className:M,children:[(0,z.jsx)("p",{children:"Filter"}),(0,z.jsx)("input",{type:"text",onChange:function(e){return n((0,T.M)(e.target.value))},className:P})]})})},B=t(5243),K=function(){var n=(0,h.I0)(),e=(0,h.v9)(E);return(0,u.useEffect)((function(){n((0,v.K2)())}),[n]),(0,z.jsxs)("div",{className:"s.container",children:[(0,z.jsx)(R,{}),(0,z.jsxs)("div",{children:[e?(0,z.jsx)(B.g4,{}):(0,z.jsx)("h2",{className:"s.title",children:"Contacts"}),(0,z.jsx)(X,{}),(0,z.jsx)(O,{})]})]})}}}]);
//# sourceMappingURL=571.867e302d.chunk.js.map