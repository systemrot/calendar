(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),s=a.n(r),l=a(9),o=(a(30),a(1)),i=Object(n.createContext)(),m=Object(n.createContext)(),d=Object(n.createContext)(),u=Object(n.createContext)(),y=Object(n.createContext)(),v=(a(31),a(7)),f=a(18),h=a(19),p=a(23),E=a(20),b=a(24),O=function(e){function t(){return Object(f.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"calendar"},this.props.children)}}]),t}(c.a.Component),g=a(3),N=Object(g.a)({componentDidMount:function(e){}})(function(e){var t=Object(n.useContext)(m),a=Object(o.a)(t,1)[0],r=new Date,s=function(){return e.day===r.getDate()&&a[0].month===r.getMonth()&&a[0].year===r.getFullYear()?{background:"rgba(85, 136, 163, 0.5)"}:{}};return e.event?c.a.createElement("div",{className:"Day",style:s()},c.a.createElement("header",{className:"numbeerOfDay"},e.day),c.a.createElement("div",{className:"day-box-item EventInBox"},c.a.createElement("div",{className:"day-box-item event-title"},e.event.name),c.a.createElement("div",{className:"day-box-item eventParticipants"},e.event.namesOfParticipants))):c.a.createElement("div",{className:"Day",style:s()},c.a.createElement("header",{className:"numbeerOfDay"},e.day))}),j=a(10),C=function(e){return"none"===e.style.display?e.style.display="":e.style.display="none"},x={componentDidMount:function(){var e=document.getElementsByClassName("change")[0],t=document.getElementsByClassName("AddEventToll")[0];document.getElementsByClassName("fa-times")[0].addEventListener("click",function(){return C(t)}),t.style.display="none",e.addEventListener("click",function(){return C(t)})}},D=Object(g.a)(x)(function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),l=Object(o.a)(s,2),m=l[0],d=l[1],u=Object(n.useState)(""),y=Object(o.a)(u,2),v=y[0],f=y[1],h=Object(n.useState)(""),p=Object(o.a)(h,2),E=p[0],b=p[1],O=Object(n.useContext)(i),g=Object(o.a)(O,2),N=(g[0],g[1]);return c.a.createElement("div",{className:"AddEventToll"},c.a.createElement("div",{className:"triangle-with-shadow pointer"}),c.a.createElement("button",{className:"fas fa-times"}),c.a.createElement("div",{className:"tools"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N(function(e){if(a&&m&&v&&E){r(""),d(""),f(""),b("");var t={day:m.split(",")[0],month:m.split(",")[1],year:m.split(",")[2]};return[].concat(Object(j.a)(e),[{name:a,date:t,namesOfParticipants:v,description:E,id:Math.floor(999999999*Math.random())}])}return alert("\u041d\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043e\u043d\u0438 \u043d\u0435 \u0432\u0435\u0440\u043d\u044b = )"),e})}},c.a.createElement("input",{className:"Toll-item",type:"text",value:a,placeholder:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435",onChange:function(e){r(e.target.value)}}),c.a.createElement("input",{className:"Toll-item",type:"text",value:m,placeholder:"\u0414\u0435\u043d\u044c, \u043c\u0435\u0441\u044f\u0446, \u0433\u043e\u0434",onChange:function(e){return d(e.target.value)}}),c.a.createElement("input",{className:"Toll-item",type:"text",value:v,placeholder:"\u0418\u043c\u0435\u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432",onChange:function(e){return f(e.target.value)}}),c.a.createElement("textarea",{className:"t-i-text-area",value:E,placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"",id:"",cols:"30",rows:"10",onChange:function(e){return b(e.target.value)}}),c.a.createElement("button",{className:"t-i-button"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))))}),w=(a(32),Object(g.a)({})(function(e){var t=Object(n.useContext)(m),a=Object(o.a)(t,2),r=(a[0],a[1]),s=Object(n.useContext)(i),l=Object(o.a)(s,1)[0],d=Object(n.useContext)(y),u=Object(o.a)(d,2),v=(u[0],u[1]);return c.a.createElement("div",{className:"searchedEvents-item",onClick:function(){r(function(){return[{month:e.date.month-1,year:+e.date.year}]}),v(l)}},c.a.createElement("h4",null,e.name),c.a.createElement("span",null,+e.date.day," ",["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","\u041c\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"][e.date.month-1]))})),T={componentDidMount:function(){var e=document.getElementById("search-tool-container");e.style.display="none";var t=document.getElementsByClassName("search-text")[0],a=document.getElementsByClassName("SearchEvents")[0];a.style.opacity="0",t.addEventListener("focus",function(t){e.style.display="",a.style.opacity="1"}),t.addEventListener("blur",function(t){a.style.opacity="0",window.setTimeout(function(){e.style.display="none"},300)})}},B=Object(g.a)(T)(function(){var e=Object(n.useContext)(y),t=Object(o.a)(e,1)[0],a=Object(n.useContext)(u),r=Object(o.a)(a,1)[0],s=Object(n.useContext)(i),l=Object(o.a)(s,1)[0],m=!1;return c.a.createElement("div",{className:"SearchEvents"},c.a.createElement("div",{className:"triangle-with-shadow searchEvents-t-w-s"}),c.a.createElement("div",{className:"SearchEvents-list"},!l.length&&c.a.createElement("h4",{className:"empty"},"\u041f\u0443\u0441\u0442\u043e"),t.map(function(e){return e.name.toLowerCase().includes(r.toLowerCase())?(m=!0,c.a.createElement(w,{query:r,name:e.name,date:e.date,year:e.year,key:e.id})):""}),!!l.length&&!m&&c.a.createElement("h4",{className:"empty"},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")))}),M=Object(g.a)({componentDidMount:function(){}})(function(){var e=Object(n.useContext)(i),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useContext)(u),l=Object(o.a)(s,2),m=l[0],d=l[1],v=Object(n.useContext)(y),f=Object(o.a)(v,2),h=(f[0],f[1]);return c.a.createElement("div",{className:"HeaderFunc"},c.a.createElement("div",{className:"functions"},c.a.createElement("button",{className:"change change-add"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),c.a.createElement("button",{className:"change change-refresh",onClick:function(){window.confirm("\u042d\u0442\u043e \u0434\u0435\u0439\u0441\u0432\u0442\u0438\u0435 \u0443\u0434\u0430\u043b\u0438\u0442 \u0432\u0441\u0435 \u0437\u0430\u043f\u0438\u0441\u0438! \u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c ?")&&r(function(){return[]})}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"),c.a.createElement("button",{className:"search-icon"}),c.a.createElement("input",{className:"search-text",type:"text",value:m,onChange:function(e){d(e.target.value),h(a.map(function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())?t:void 0})),h(function(e){for(var t=[],a=0;a<e.length;a+=1)void 0!==e[a]&&t.push(e[a]);return t})},onBlur:function(){d("")}})),c.a.createElement(D,null),c.a.createElement("div",{id:"search-tool-container"},c.a.createElement(B,null)))}),P=function(){var e=Object(n.useContext)(m),t=Object(o.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"CureDate"},c.a.createElement("button",{className:"fas fa-caret-left CureDate-item",onClick:function(){r(function(){return 0===a[0].month?[{month:11,year:+a[0].year-1}]:[{month:+a[0].month-1,year:a[0].year}]})}}),c.a.createElement("div",{className:"Cure-month CureDate-item"},c.a.createElement("h3",null,["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"][a[0].month]," ",a[0].year)),c.a.createElement("button",{className:"fas fa-caret-right CureDate-item",onClick:function(){r(function(){return 11===a[0].month?[{month:0,year:+a[0].year+1}]:[{month:+a[0].month+1,year:a[0].year}]})}}),c.a.createElement("button",{className:"today CureDate-item",onClick:function(){var e=new Date;r(function(){return[{month:e.getMonth(),year:e.getFullYear()}]})}},"\u0441\u0435\u0433\u043e\u0434\u043d\u044f"))},k={componentDidMount:function(){var e=document.getElementsByClassName("ChangeEventTool")[0],t=document.getElementsByClassName("AddInCurrentDayEvent")[0];document.getElementsByClassName("eventButtons-t-i-button")[0].addEventListener("click",function(){e.style.display="none",t.style.display=""})}},L=Object(g.a)(k)(function(){return c.a.createElement("div",{className:"AddEventToll ChangeEventTool"},c.a.createElement("div",{className:"triangle-with-shadow pointer"}),c.a.createElement("button",{className:"fas fa-times"}),c.a.createElement("div",{className:"tools"},c.a.createElement("h3",{className:"eventDate"},"32 \u0414\u0435\u043a\u0430\u0431\u0440\u044f"),c.a.createElement("h2",{className:"ChangeEventTool-item eventName"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0415\u0449\u0435 \u0440\u0430\u0437!"),c.a.createElement("div",{className:"eventMatesData"},c.a.createElement("h5",{className:"eventMatesData-mates"},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),c.a.createElement("p",{className:"ChangeEventTool-item eventMates"},"...")),c.a.createElement("p",{className:"ChangeEventTool-item eventDescr"},"..."),c.a.createElement("div",{className:"eventButtons"},c.a.createElement("button",{className:"eventButtons-t-i-button t-i-button"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),c.a.createElement("button",{className:"eventButtons-t-i-button t-i-button"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))}),S=Object(g.a)({componentDidMount:function(){}})(function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),l=Object(o.a)(s,2),u=l[0],y=l[1],v=Object(n.useState)(""),f=Object(o.a)(v,2),h=f[0],p=f[1],E=Object(n.useContext)(i),b=Object(o.a)(E,2),O=(b[0],b[1]),g=Object(n.useContext)(d),N=Object(o.a)(g,1)[0],C=Object(n.useContext)(m),x=Object(o.a)(C,1)[0];return c.a.createElement("div",{className:"AddInCurrentDayEvent AddEventToll"},c.a.createElement("div",{className:"triangle-with-shadow pointer"}),c.a.createElement("button",{className:"fas fa-times"}),c.a.createElement("div",{className:"tools"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),O(function(e){if(a&&x&&u&&h){r(""),y(""),p("");var t={day:N,month:x[0].month+1,year:x[0].year};return[].concat(Object(j.a)(e),[{name:a,date:t,namesOfParticipants:u,description:h,id:Math.floor(999999999*Math.random())}])}return alert("\u041d\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043e\u043d\u0438 \u043d\u0435 \u0432\u0435\u0440\u043d\u044b = )"),e})}},c.a.createElement("input",{className:"Toll-item",type:"text",value:a,placeholder:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435",onChange:function(e){r(e.target.value)}}),c.a.createElement("input",{className:"Toll-item",type:"text",value:u,placeholder:"\u0418\u043c\u0435\u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432",onChange:function(e){return y(e.target.value)}}),c.a.createElement("textarea",{className:"t-i-text-area",value:h,placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"",id:"",cols:"30",rows:"10",onChange:function(e){return p(e.target.value)}}),c.a.createElement("button",{className:"t-i-button"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))))}),H=(a(33),function(e){return"none"===e.style.display?e.style.display="":e.style.display="none"}),I=["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","\u041c\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"],A={componentDidMount:function(e){var t=document.getElementsByClassName("Day"),a=document.getElementsByClassName("days")[0],n=document.getElementsByClassName("ChangeEventTool")[0];n.style="display: none; position: absolute";var c=document.getElementsByClassName("AddInCurrentDayEvent")[0];c.style="display: none; position: absolute",document.getElementsByClassName("fa-times")[1].addEventListener("click",function(){return H(n)}),document.getElementsByClassName("fa-times")[2].addEventListener("click",function(){return H(c)}),document.getElementsByClassName("eventButtons-t-i-button")[1].addEventListener("click",function(){var t=parseInt(document.getElementsByClassName("eventDate")[0].innerHTML);e.events[1](function(a){for(var n=[],c=0;c<a.length;c+=1)void 0===a[c]&&a.splice(c,1);for(var r=0;r<a.length;r+=1)+a[r].date.day===t&&+a[r].date.month-1===e.date[0][0].month&&+a[r].date.year===e.date[0][0].year&&a.splice(r,1),n.push(a[r]);return n})});var r=document.getElementsByClassName("triangle-with-shadow")[2];r.style.webkitTransform="rotate(270deg)",r.style.mozTransform="rotate(270deg)",r.style.msTransform="rotate(270deg)",r.style.oTransform="rotate(270deg)",r.style.transform="rotate(270deg)",r.style.top="95px",r.style.left="-23px";var s=document.getElementsByClassName("triangle-with-shadow")[3];s.style.webkitTransform="rotate(270deg)",s.style.mozTransform="rotate(270deg)",s.style.msTransform="rotate(270deg)",s.style.oTransform="rotate(270deg)",s.style.transform="rotate(270deg)",s.style.top="95px",s.style.left="-23px";var l="";document.getElementById("root").addEventListener("click",function(e){}),a.addEventListener("click",function(a){var r;if("Day"===a.target.className){n.style.left="".concat(a.clientX+70,"px"),n.style.top="".concat(a.clientY-150,"px"),c.style.left="".concat(a.clientX+70,"px"),c.style.top="".concat(a.clientY-150,"px"),e.day[1](a.target.childNodes[0].innerHTML);var s=a.target.childNodes[0].innerHTML;void 0===e.events[0]&&e.events.splice(0,1);try{r=a.target.childNodes[1].childNodes[0].innerHTML}catch(v){}try{for(var o=0;o<e.events[0].length;o+=1)if(+e.events[0][o].date.day===+s&&+e.events[0][o].date.month-1===e.date[0][0].month&&+e.events[0][o].date.year===e.date[0][0].year){var i=document.getElementsByClassName("eventDescr")[0],m=document.getElementsByClassName("eventName")[0],d=document.getElementsByClassName("eventDate")[0];document.getElementsByClassName("eventMates")[0].innerHTML=e.events[0][o].namesOfParticipants,d.innerHTML=e.events[0][o].date.day+" "+I[+e.events[0][o].date.month-1],m.innerHTML=e.events[0][o].name,i.innerHTML=e.events[0][o].description}}catch(f){}n.style.display||(n.style.display="none"),c.style.display||(n.style.display="none"),r?(c.style.display||(c.style.display="none"),n.style.display=""):(n.style.display||(n.style.display="none"),c.style.display="");for(var u=0;u<t.length;u+=1)l===t[u].childNodes[0].innerHTML&&(t[u].style.background="");l=a.target.childNodes[0].innerHTML;var y=a.target.style;""===y.background?y.background="rgba(85, 136, 163, 0.25)":y.background=""}})}},Y=Object(g.a)(A)(function(e){var t=Object(n.useContext)(i),a=Object(o.a)(t,1)[0],r=Object(n.useContext)(m),s=Object(o.a)(r,1)[0];try{if(a.length)for(var l=0;l<a[0].length;l+=1)void 0===a[0][l]&&a[0][l].splice(l,1)}catch(u){}var d=function(e,t){for(var a=[],n=t.month+1,r=t.year,s=1,l=void 0,o=1;o<=new Date(r,n,0).getDate();o++){if(e.length){void 0===e[0]&&e.splice(0,1);for(var i=0;i<e.length;i+=1)try{+e[i].date.day===s&&+e[i].date.month===n&&+e[i].date.year===r&&(l=e[i])}catch(m){}}a.push(c.a.createElement(N,{key:o,event:l,day:s})),l=void 0,s+=1}return a}(a,s[0]);return c.a.createElement("div",{className:"month"},c.a.createElement(M,null),c.a.createElement(P,null),c.a.createElement(L,null),c.a.createElement(S,null),c.a.createElement("section",{className:"days"},d))}),F=function(){var e=Object(n.useContext)(i),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useContext)(m),u=Object(o.a)(s,2),y=u[0],f=u[1],h=Object(n.useContext)(d),p=Object(o.a)(h,2),E=p[0],b=p[1];return c.a.createElement(O,null,c.a.createElement(l.b,null,c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/",exact:!0,component:function(){return c.a.createElement(Y,{events:[a,r],date:[y,f],day:[E,b]})}}))))},z=c.a.createElement(function(e){var t=Object(n.useState)([{month:(new Date).getMonth(),year:(new Date).getFullYear()}]),a=Object(o.a)(t,2),r=a[0],s=a[1];return c.a.createElement(m.Provider,{value:[r,s]},e.children)},null,c.a.createElement(function(e){var t=Object(n.useState)([{selectedDay:""}]),a=Object(o.a)(t,2),r=a[0],s=a[1];return c.a.createElement(d.Provider,{value:[r,s]},e.children)},null,c.a.createElement(function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],s=a[1];return c.a.createElement(u.Provider,{value:[r,s]},e.children)},null,c.a.createElement(function(e){var t=Object(n.useState)([{name:"\u0434\u0440",date:{day:"09",month:"6",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:123},{name:"\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430",date:{day:"09",month:"5",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:124},{name:"\u041e\u0442\u0434\u044b\u0445",date:{day:"11",month:"6",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:125},{name:"\u0420\u0430\u0431\u043e\u0442\u0430",date:{day:"09",month:"7",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:126},{name:"\u041f\u0435\u0440\u0435\u0435\u0437\u0434",date:{day:"2",month:"9",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:127},{name:"\u041f\u0435\u0440\u0435\u043b\u0435\u0442",date:{day:"09",month:"1",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:128},{name:"\u041c\u043e\u0441\u043a\u0432\u0430",date:{day:"3",month:"9",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:129},{name:"\u041c\u043e\u0440\u0435",date:{day:"14",month:"7",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:130},{name:"\u0414\u0430\u0439\u0432\u0438\u043d\u0433",date:{day:"15",month:"6",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:131},{name:"\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u043d\u0430 \u0441\u043b\u043e\u043d\u0430\u0445",date:{day:"17",month:"5",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:132},{name:"\u041f\u043e\u043b\u0435\u0442 \u043d\u0430 \u0432\u043e\u0437\u0434\u0443\u0448\u043d\u043e\u043c \u0448\u0430\u0440\u0435",date:{day:"22",month:"5",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:133},{name:"\u041f\u0440\u044b\u0433\u0430\u044e \u0441 \u043c\u043e\u0441\u0442\u0430 \u0432 \u0432\u043e\u0434\u0443",date:{day:"23",month:"6",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:134},{name:"\u0421\u043d\u0438\u043c\u0430\u044e \u0444\u0438\u043b\u044c\u043c",date:{day:"2",month:"6",year:"2020"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:135},{name:"\u041b\u0435\u0447\u0443 \u0432 \u043a\u043e\u0441\u043c\u043e\u0441",date:{day:"1",month:"1",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:136},{name:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0441\u044c \u0438\u0437 \u043a\u043e\u0441\u043c\u043e\u0441\u0430",date:{day:"1",month:"6",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:137},{name:"\u041f\u043e\u043b\u0435\u0442 \u043d\u0430 \u0441\u043e\u043b\u043d\u0446\u0435",date:{day:"8",month:"12",year:"2019"},namesOfParticipants:"\u041c\u044d\u0434, \u0418\u043b\u044c\u044f",description:"\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e",id:138}]),a=Object(o.a)(t,2),r=a[0],s=a[1];return c.a.createElement(i.Provider,{value:[r,s]},e.children)},null,c.a.createElement(function(e){var t=Object(n.useContext)(i),a=Object(o.a)(t,1)[0],r=Object(n.useState)(a),s=Object(o.a)(r,2),l=s[0],m=s[1];return c.a.createElement(y.Provider,{value:[l,m]},e.children)},null,c.a.createElement(l.a,null,c.a.createElement(F,null)))))));s.a.render(z,document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.fcc1bd49.chunk.js.map