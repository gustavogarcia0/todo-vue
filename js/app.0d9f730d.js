(function(t){function e(e){for(var s,o,i=e[0],u=e[1],c=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/todo-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1f7a":function(t,e,n){"use strict";n("52b9")},"489c":function(t,e,n){"use strict";n("7c30")},"4a55":function(t,e,n){"use strict";n("ffeb")},"52b9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.showPop?e("PopUp",{attrs:{title:t.AlertContent},on:{close:t.hidePopUp}}):t._e(),e("h1",[t._v("Tarefas")]),e("ProgressBar",{attrs:{progress:t.progress}}),e("InputNewTask",{on:{taskAdded:t.addTask}}),e("TaskGridVue",{attrs:{tasks:t.tasks},on:{taskDeleted:t.deleteTask}})],1)},a=[],o=(n("7f7f"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-task"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-element",attrs:{type:"text",name:"inputText",placeholder:"Nova tarefa"},domProps:{value:t.name},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.emitTaskToApp.apply(null,arguments)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),e("button",{staticClass:"form-element",on:{click:t.emitTaskToApp}},[t._v("+")])])}),i=[],u={data:function(){return{name:""}},methods:{emitTaskToApp:function(){""!==this.name&&(this.$emit("taskAdded",{name:this.name}),this.name="")}}},c=u,l=(n("489c"),n("2877")),p=Object(l["a"])(c,o,i,!1,null,"4c3033d4",null),f=p.exports,d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pop-up",on:{click:function(e){return t.closePop()}}},[e("h1",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.body))])])},h=[],k={props:{title:{type:String},body:{type:String}},methods:{closePop:function(){this.$emit("close",!1)}}},m=k,v=(n("4a55"),Object(l["a"])(m,d,h,!1,null,"41295528",null)),g=v.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-progress"},[e("span",{staticClass:"progress-value"},[t._v(t._s(t.progress)+"%")]),e("div",{staticClass:"progress-bar",style:{width:t.progress+"%"}})])},b=[],_=(n("c5f6"),{props:{progress:{type:Number,default:0}}}),P=_,w=(n("1f7a"),Object(l["a"])(P,y,b,!1,null,"116025fe",null)),T=w.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-grid"},[t.tasks.length?t._l(t.tasks,(function(n,s){return e("TaskItem",{key:n.name,staticClass:"task",attrs:{task:n},on:{taskDeleted:function(e){return t.$emit("taskDeleted",s)}}})})):e("p",{staticClass:"no-task"},[t._v("Sem tarefas")])],2)},C=[],j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-card",class:t.stateClass,on:{click:t.changePending}},[e("span",{staticClass:"close",on:{click:function(e){return t.$emit("taskDeleted",t.task)}}},[t._v("x")]),e("p",[t._v(t._s(t.task.name))])])},x=[],S={props:{task:{type:Object,required:!0}},computed:{stateClass:function(){return{pending:this.task.pending,done:!this.task.pending}}},methods:{changePending:function(){this.task.pending=!this.task.pending}}},A=S,N=(n("66f4"),Object(l["a"])(A,j,x,!1,null,"2f84dd48",null)),I=N.exports,U={components:{TaskItem:I},props:{tasks:{type:Array,required:!0}}},M=U,$=(n("8e18"),Object(l["a"])(M,O,C,!1,null,"4851b7f9",null)),D=$.exports,J={components:{TaskGridVue:D,InputNewTask:f,PopUp:g,ProgressBar:T},data:function(){return{showPop:!1,AlertContent:"",tasks:[]}},computed:{progress:function(){var t=this.tasks.length,e=this.tasks.filter((function(t){return!t.pending})).length;return Math.round(e/t*100)||0}},watch:{tasks:{handler:function(){localStorage.setItem("tasks",JSON.stringify(this.tasks))},deep:!0}},created:function(){var t=localStorage.getItem("tasks"),e=JSON.parse(t);this.tasks=Array.isArray(e)?e:[]},methods:{hidePopUp:function(){this.showPop=!1},timerPopUp:function(){var t=this;setTimeout((function(){t.showPop=!1}),1e3)},addTask:function(t){var e=function(e){return e.name===t.name},n=0==this.tasks.filter(e).length;n?this.tasks.push({name:t.name,pending:t.pending||!0}):(this.showPop=!0,this.timerPopUp(),this.AlertContent="Tareja duplicada")},deleteTask:function(t){this.tasks.splice(t,1)}}},q=J,B=(n("95c0"),Object(l["a"])(q,r,a,!1,null,null,null)),G=B.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(G)}}).$mount("#app")},"66f4":function(t,e,n){"use strict";n("afdd")},"69fa":function(t,e,n){},"7c30":function(t,e,n){},8777:function(t,e,n){},"8e18":function(t,e,n){"use strict";n("8777")},"95c0":function(t,e,n){"use strict";n("69fa")},afdd:function(t,e,n){},ffeb:function(t,e,n){}});
//# sourceMappingURL=app.0d9f730d.js.map