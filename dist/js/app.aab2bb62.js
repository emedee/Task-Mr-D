(function(e){function t(t){for(var r,n,i=t[0],l=t[1],c=t[2],m=0,p=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,i=1;i<s.length;i++){var l=s[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=s[0]))}return e}var r={},a={app:0},o=[];function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=r,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"15ec":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("app-form")],1)},o=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[s("table",{staticClass:"table table-striped table-dark"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[e._v(e._s(e.headerOne))]),s("th",{attrs:{scope:"col"}},[e._v(e._s(e.headerTwo))]),s("th",{attrs:{scope:"col"}},[e._v(e._s(e.headerThree))]),s("th",{attrs:{scope:"col"}},[e._v(e._s(e.headerFour))]),s("th",{attrs:{scope:"col"}},[e._v(e._s(e.headerFive))]),s("th",{attrs:{scope:"col"}},[e._v(e._s(e.headerSix))])])]),s("tbody",e._l(e.persons,(function(t,r){return s("tr",[s("th",{attrs:{scope:"row"}},[e._v(e._s(parseInt(r)+1))]),s("td",[e._v(e._s(t.name))]),s("td",[e._v(e._s(t.email))]),s("td",[e._v(e._s(t.role))]),s("td",[e._v(e._s(t.city))]),s("td",[e._v(e._s(t.score))]),s("td",[s("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.deleteContact(r)}}},[e._v("Delete")]),s("button",{staticClass:"btn btn-primary",on:{click:function(s){return e.editContact(t)}}},[e._v("Edit")])])])})),0)])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card shadow p-4"},[s("h2",{staticClass:"mb-4"},[e._v(e._s(e.message))]),s("form",{on:{submit:function(t){return t.preventDefault(),e.addContact(t)}}},[s("div",{staticClass:"form-group"},[s("label",[e._v(e._s(e.message2))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v(e._s(e.message3))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v(e._s(e.message4))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.role,expression:"user.role"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.role},on:{input:function(t){t.target.composing||e.$set(e.user,"role",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v(e._s(e.message5))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.city,expression:"user.city"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.city},on:{input:function(t){t.target.composing||e.$set(e.user,"city",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v(e._s(e.message6))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.score,expression:"user.score"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.score},on:{input:function(t){t.target.composing||e.$set(e.user,"score",t.target.value)}}})]),s("div",{staticClass:"style"},[s("p",[e._v("The total score is "+e._s(e.totalScore)+" ")])]),s("div",{staticClass:"form-group mlto"},[e.status?s("button",{staticClass:"btn btn-primary ml-3",attrs:{type:"submit"}},[e._v(e._s(e.message7))]):s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.updateContact}},[e._v(e._s(e.message8))]),s("button",{staticClass:"btn btn-danger ml-3",attrs:{type:"reset"},on:{click:e.resetField}},[e._v(e._s(e.message9))])])])])])])])},i=[],l=(s("a434"),{data:function(){return{headerOne:"ID",headerTwo:"NAME",headerThree:"EMAIL",headerFour:"ROLE",headerFive:"CITY",headerSix:"SCORE",message:"Please add new users",message2:"Name",message3:"Email",message4:"Role",message5:"City",message6:"Score",message7:"Submit",message8:"Update",message9:"Reset",user:{name:"",role:""},persons:[{name:"wisdom",email:"wisdom425@gmail.com",role:"Back-end Developer",city:"Uyo",score:45},{name:"Ruth",email:"ruth321@gmail.com",role:"Android Developer",city:"Calabar",score:52},{name:"Steve",email:"stevey25@gmail.com",role:"AI Developer",city:"Abuja",score:60},{name:"Martha",email:"martha005@gmail.com",role:"PHP Developer",city:"PortHarcourt",score:55},{name:"Samuel",email:"samuel523@gmail.com",role:"Javascript Developer",city:"Uyo",score:70}],status:!0}},methods:{deleteContact:function(e){this.persons.splice(e,1),this.user=""},editContact:function(e){this.user=e,this.status=!1},addContact:function(){this.persons.push(this.user)},updateContact:function(){alert("Contact has been updated")},resetField:function(){this.status=!0}},computed:{totalScore:function(){for(var e=0,t=0;t<this.persons.length;t++)e+=parseInt(this.persons[t].score);return e}}}),c=l,u=(s("71ee"),s("2877")),m=Object(u["a"])(c,n,i,!1,null,"a40ca7a2",null),p=m.exports,d={components:{"app-form":p}},v=d,f=Object(u["a"])(v,a,o,!1,null,null,null),h=f.exports,g=s("8c4f");r["a"].use(g["a"]);var _=[{path:"/"}],b=new g["a"]({mode:"history",base:"/",routes:_}),y=b;r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(h)}}).$mount("#app")},"71ee":function(e,t,s){"use strict";var r=s("15ec"),a=s.n(r);a.a}});
//# sourceMappingURL=app.aab2bb62.js.map