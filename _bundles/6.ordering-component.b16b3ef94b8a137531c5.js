(window.webpackJsonpOrderingComponents=window.webpackJsonpOrderingComponents||[]).push([[6],{131:function(n,e,t){"use strict";function i(n,e){var t,i;return"boolean"==typeof(null==e?void 0:e.enabled)?e.enabled:null===(i=null===(t=null==n?void 0:n.__default)||void 0===t?void 0:t.enabled)||void 0===i||i}t.d(e,"a",(function(){return i}))},230:function(n,e,t){"use strict";t.r(e),t.d(e,"schemaFilter",(function(){return o}));var i=t(2),r=t(131);function o(n,e){function t(t){var o=n,a=t.event.event;if(o&&a){var u=o[a];if(!Object(r.a)(o,u))return t.updateEvent("integrations",Object(i.a)(Object(i.a)({},t.event.integrations),{All:!1,"Segment.io":!0})),t;var c=function(n,e){var t,i;if(!n||!Object.keys(n))return{};var r=n.integrations?Object.keys(n.integrations).filter((function(e){return!1===n.integrations[e]})):[],o=[];return(null!==(t=e.remotePlugins)&&void 0!==t?t:[]).forEach((function(n){r.forEach((function(e){(n.name.includes(e)||e.includes(n.name))&&o.push(n.name)}))})),(null!==(i=e.remotePlugins)&&void 0!==i?i:[]).reduce((function(n,e){return e.settings.subscriptions&&o.includes(e.name)&&e.settings.subscriptions.forEach((function(t){return n["".concat(e.name," ").concat(t.partnerAction)]=!1})),n}),{})}(u,e);t.updateEvent("integrations",Object(i.a)(Object(i.a)(Object(i.a)({},t.event.integrations),null==u?void 0:u.integrations),c))}return t}return{name:"Schema Filter",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},type:"before",page:t,alias:t,track:t,identify:t,group:t}}}}]);