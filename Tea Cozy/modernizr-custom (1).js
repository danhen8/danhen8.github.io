/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-flash-setclasses !*/
!function(e,n,o){function a(e,n){return typeof e===n}function t(){var e,n,o,t,i,s,c;for(var r in u)if(u.hasOwnProperty(r)){if(e=[],n=u[r],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(t=a(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],c=s.split("."),1===c.length?Modernizr[c[0]]=t:(!Modernizr[c[0]]||Modernizr[c[0]]instanceof Boolean||(Modernizr[c[0]]=new Boolean(Modernizr[c[0]])),Modernizr[c[0]][c[1]]=t),l.push((t?"":"no-")+c.join("-"))}}function i(e){var n=p.className,o=Modernizr._config.classPrefix||"";if(h&&(n=n.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(a,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(n+=" "+o+e.join(" "+o),h?p.className.baseVal=n:p.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):h?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function c(){var e=n.body;return e||(e=s(h?"svg":"body"),e.fake=!0),e}function r(e,n){if("object"==typeof e)for(var o in e)d(e,o)&&r(o,e[o]);else{e=e.toLowerCase();var a=e.split("."),t=Modernizr[a[0]];if(2==a.length&&(t=t[a[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==a.length?Modernizr[a[0]]=n:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=n),i([(n&&0!=n?"":"no-")+a.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var l=[],u=[],f={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){u.push({name:e,fn:n,options:o})},addAsyncTest:function(e){u.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var d,p=n.documentElement,h="svg"===p.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;d=a(e,"undefined")||a(e.call,"undefined")?function(e,n){return n in e&&a(e.constructor.prototype[n],"undefined")}:function(n,o){return e.call(n,o)}}(),f._l={},f.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},f._trigger=function(e,n){if(this._l[e]){var o=this._l[e];setTimeout(function(){var e,a;for(e=0;e<o.length;e++)(a=o[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){f.addTest=r}),Modernizr.addAsyncTest(function(){var o,a,t=function(e){p.contains(e)||p.appendChild(e)},i=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},l=function(e,n){var o=!!e;if(o&&(o=new Boolean(o),o.blocked="blocked"===e),r("flash",function(){return o}),n&&y.contains(n)){for(;n.parentNode!==y;)n=n.parentNode;y.removeChild(n)}};try{a="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(u){}if(o=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||a),o||h)l(!1);else{var f,d,v=s("embed"),y=c();if(v.type="application/x-shockwave-flash",y.appendChild(v),!("Pan"in v||a))return t(y),l("blocked",v),void i(y);f=function(){return t(y),p.contains(y)?(p.contains(v)?(d=v.style.cssText,""!==d?l("blocked",v):l(!0,v)):l("blocked"),void i(y)):(y=n.body||y,v=s("embed"),v.type="application/x-shockwave-flash",y.appendChild(v),setTimeout(f,1e3))},setTimeout(f,10)}}),Modernizr.addTest("audio",function(){var e=s("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n}),t(),i(l),delete f.addTest,delete f.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);