(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8Z9I":function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=p(o),l=p(n(2)),s=p(n(10)),c=p(n(12)),u=p(n(13)),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function p(e){return e&&e.__esModule?e:{default:e}}var f=["🔙","⏰"],d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={textLines:[],isDone:!1},n.onTypingDone=function(){n.mounted&&(n.setState({isDone:!0}),n.props.onTypingDone())},n.delayGenerator=function(e,t,r,a){var o=n.props.avgTypingDelay,i=n.props.stdTypingDelay;return n.props.delayGenerator(o,i,{line:e,lineIdx:t,character:r,charIdx:a,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return m.gaussianRnd(e,t)}})},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var r=e,a=n.props.onLineTyped;return m.isBackspaceElement(e)?(e.props.delay>0&&(n.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):m.isDelayElement(e)&&(n.introducedDelay=e.props.ms,r="⏰"),new Promise((function(e,o){n.setState({textLines:n.state.textLines.concat([""])},(function(){m.eachPromise(r,n.typeCharacter,r,t).then((function(){return a(r,t)})).then(e).catch(o)}))}))},n.typeCharacter=function(e,t,r,a){if(!n.mounted)return Promise.resolve();var o=n.props.onCharacterTyped;return new Promise((function(i){var l=n.state.textLines.slice();m.sleep(n.introducedDelay).then((function(){n.introducedDelay=null;var s="🔙"===e;if("⏰"===e)i();else{if(s&&a>0){for(var c=a-1,u=l[c],m=c;m>=0&&(!(u.length>0)||f.includes(u[0]));m--)u=l[c=m];l[c]=u.substr(0,u.length-1)}else l[a]+=e;n.setState({textLines:l},(function(){var l=n.delayGenerator(r,a,e,t);o(e,t),setTimeout(i,l)}))}}))}))},n.mounted=!1,n.linesToType=[],n.introducedDelay=null,e.children&&(n.linesToType=m.extractTextFromElement(e.children)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,t=e.children,n=e.startDelay;t?n>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),n):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){if(t.textLines.length!==this.state.textLines.length)return!0;for(var n=0;n<t.textLines.length;n++){if(this.state.textLines[n]!==t.textLines[n])return!0}return this.state.isDone!==t.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return m.eachPromise(t,this.typeLine).then((function(){return e.onTypingDone()}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cursor,a=this.state.isDone,o=m.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return i.default.createElement("div",{className:"Typist "+t},o,i.default.createElement(s.default,r({isDone:a},n)))}}]),t}(o.Component);d.propTypes={children:l.default.node,className:l.default.string,avgTypingDelay:l.default.number,stdTypingDelay:l.default.number,startDelay:l.default.number,cursor:l.default.object,onCharacterTyped:l.default.func,onLineTyped:l.default.func,onTypingDone:l.default.func,delayGenerator:l.default.func},d.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:m.gaussianRnd},t.default=d,d.Backspace=c.default,d.Delay=u.default},function(e,t){e.exports=n("q1tI")},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(6),i=n(7),l=n(8);e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,s="@@iterator";var c="<<anonymous>>",u={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:f(r.thatReturnsNull),arrayOf:function(e){return f((function(t,n,r,a,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new p("Invalid "+a+" `"+o+"` of type `"+y(l)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<l.length;s++){var c=e(l,s,r,a,o+"["+s+"]",i);if(c instanceof Error)return c}return null}))},element:f((function(t,n,r,a,o){var i=t[n];return e(i)?null:new p("Invalid "+a+" `"+o+"` of type `"+y(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return f((function(t,n,r,a,o){if(!(t[n]instanceof e)){var i=e.name||c;return new p("Invalid "+a+" `"+o+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return c;return e.constructor.name}(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}))},node:f((function(e,t,n,r,a){return h(e[t])?null:new p("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,n,r,a,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],s=y(l);if("object"!==s)return new p("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var c in l)if(l.hasOwnProperty(c)){var u=e(l,c,r,a,o+"."+c,i);if(u instanceof Error)return u}return null}))},oneOf:function(e){if(!Array.isArray(e))return r.thatReturnsNull;return f((function(t,n,r,a,o){for(var i=t[n],l=0;l<e.length;l++)if(m(i,e[l]))return null;return new p("Invalid "+a+" `"+o+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return o(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",b(n),t),r.thatReturnsNull}return f((function(t,n,r,a,o){for(var l=0;l<e.length;l++){if(null==(0,e[l])(t,n,r,a,o,i))return null}return new p("Invalid "+a+" `"+o+"` supplied to `"+r+"`.")}))},shape:function(e){return f((function(t,n,r,a,o){var l=t[n],s=y(l);if("object"!==s)return new p("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if(u){var m=u(l,c,r,a,o+"."+c,i);if(m)return m}}return null}))}};function m(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e){this.message=e,this.stack=""}function f(e){function n(n,r,o,l,s,u,m){(l=l||c,u=u||o,m!==i)&&(t&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[o]?n?null===r[o]?new p("The "+s+" `"+u+"` is marked as required in `"+l+"`, but its value is `null`."):new p("The "+s+" `"+u+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(r,o,l,s,u)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function d(e){return f((function(t,n,r,a,o,i){var l=t[n];return y(l)!==e?new p("Invalid "+a+" `"+o+"` of type `"+v(l)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[s]);if("function"==typeof t)return t}(t);if(!r)return!1;var a,o=r.call(t);if(r!==t.entries){for(;!(a=o.next()).done;)if(!h(a.value))return!1}else for(;!(a=o.next()).done;){var i=a.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,u.checkPropTypes=l,u.PropTypes=u,u}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t){"use strict";var n=function(e){};e.exports=function(e,t,r,a,o,i,l,s){if(n(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,a,o,i,l,s],m=0;(c=new Error(t.replace(/%s/g,(function(){return u[m++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";var r=n(4);e.exports=r},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7);e.exports=function(){function e(e,t,n,r,i,l){l!==o&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=l(a),i=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}n(11);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._isReRenderingCursor=!1,n.state={shouldRender:n.props.show},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout((function(){return t.setState({shouldRender:!1})}),this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.show,n=e.isDone;t&&(n||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},(function(){e.setState({shouldRender:!0},(function(){e._isReRenderingCursor=!1}))}))}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return o.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}(a.Component);s.propTypes={blink:i.default.bool,show:i.default.bool,element:i.default.node,hideWhenDone:i.default.bool,hideWhenDoneDelay:i.default.number,isDone:i.default.bool},s.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},t.default=s},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),a=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("noscript",null)};i.componentName="Backspace",i.propTypes={count:a.default.number,delay:a.default.number},i.defaultProps={count:1,delay:0},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),a=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("noscript",null)};i.componentName="Delay",i.propTypes={ms:a.default.number.isRequired},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=void 0;var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.gaussianRnd=function(e,t){for(var n=0,r=0;r<12;r++)n+=Math.random();return n-=6,Math.round(n*t)+e},t.eachPromise=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return Array.from(e).reduce((function(e,n,a){return e.then((function(){return t.apply(void 0,[n,a].concat(r))}))}),Promise.resolve())},t.exclude=l,t.isBackspaceElement=s,t.isDelayElement=c,t.extractTextFromElement=function(e){var t=e?[e]:[],n=[];for(;t.length>0;){var r=t.pop();if(i.default.isValidElement(r))s(r)||c(r)?n.unshift(r):i.default.Children.forEach(r.props.children,(function(e){t.push(e)}));else if(Array.isArray(r)){var a=!0,o=!1,l=void 0;try{for(var u,m=r[Symbol.iterator]();!(a=(u=m.next()).done);a=!0){var p=u.value;t.push(p)}}catch(f){o=!0,l=f}finally{try{!a&&m.return&&m.return()}finally{if(o)throw l}}}else n.unshift(r)}return n},t.cloneElement=u,t.cloneElementWithSpecifiedText=function(e){var t=e.element,n=e.textLines;if(!t)return;return function e(t,n,a){if(a>=n.length)return[null,a];var o=a,l=function(t){var a=e(t,n,o),i=r(a,2),l=i[0],s=i[1];return o=s,l};if(i.default.isValidElement(t)&&!s(t)&&!c(t)){var m=i.default.Children.map(t.props.children,l)||[];return[u(t,m),o]}if(Array.isArray(t)){return[t.map(l),o]}return[n[o],o+1]}(t,n,0)[0]};var a,o=n(1),i=(a=o)&&a.__esModule?a:{default:a};t.sleep=function(e){return new Promise((function(t){return null!=e?setTimeout(t,e):t()}))};function l(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}function s(e){return e&&e.type&&"Backspace"===e.type.componentName}function c(e){return e&&e.type&&"Delay"===e.type.componentName}function u(e,t){var n=e.type,r=l(e.props,["children"]),a=(new Date).getUTCMilliseconds()+Math.random()+Math.random();return r.key="Typist-element-"+n+"-"+a,i.default.createElement.apply(i.default,[n,r].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t)))}}])},UTyF:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n("vOnD"),o=n("6o60"),i=n("Wbzz"),l=n("8Z9I"),s=n.n(l),c=a.a.div.withConfig({displayName:"TitleGroup__StyledTitleGroup",componentId:"sc-12o7vsp-0"})(["&{min-height:380px;& .Typist{& h1{display:inline-block;font-size:4rem;font-weight:500;vertical-align:top;& strong{font-weight:300;}}& .Cursor{display:inline-block;color:#0833be;font-size:3.6rem;}}@media (max-width:640px){min-height:350px;& .Typist{& h1{font-size:2.6rem;}& .Cursor{font-size:2.3rem;}}}@media (max-width:768px){}@media (max-width:1024px){}}"]),u=function(){return r.createElement(c,{className:"md:flex container mx-auto px-4"},r.createElement("div",{className:"md:w-3/12"},r.createElement(i.Link,{to:"/blog"},r.createElement("img",{className:"inline-block mt-5",style:{width:93,height:21},src:"/logo.png",alt:"logo"}))),r.createElement("div",{className:"mt-10 md:mt-0 md:w-9/12"},r.createElement(s.a,{startDelay:800,avgTypingDelay:100,stdTypingDelay:30,cursor:{}},r.createElement("h1",null,r.createElement("strong",null,"Hello!")),r.createElement("br",null),r.createElement("h1",null,"I'm SeungJae Shin."),r.createElement(s.a.Backspace,{count:18,delay:800}),r.createElement("h1",null,"저는 신승재입니다."))))},m=a.a.div.withConfig({displayName:"About__StyledAbout",componentId:"gh0lsj-0"})([""]),p=function(){return r.createElement(m,{className:"md:flex container mx-auto px-4"},r.createElement("div",{className:"md:w-3/12"},r.createElement("h3",null,"About")),r.createElement("div",{className:"flex flex-wrap md:w-9/12 mt-5 md:mt-0"},r.createElement("h6",{className:"sm:w-1/2 sm:pr-5"},"디자인을 전공하여 보이는 화면에 대한 표현과 이해, 그리고 그것들을 기반으로 Front-End 개발을 시작한 뒤, 소프트웨어 전반에 걸친 개발의 재미에 듬뿍 빠져서 지금은 개발자의 길을 걷고 있습니다."),r.createElement("h6",{className:"sm:w-1/2 mt-5 sm:mt-0 sm:pl-5"},"Javascript, Typescript를 다루며 React, MobX 혹은 Redux, 또한 Node.js를 사용합니다. React-Native로 크로스 플랫폼 앱 구현 경험도 있으며 Back-End에 대한 관심도 많아 최근에는 Go를 학습하고 있습니다."),r.createElement("h6",{className:"sm:w-1/2 mt-5 sm:pr-5"},"Simple is the best 라는 명제하에 단순하고 직관적인 것을 선호하고 또한 지향하며 변화하는 개발 환경과 트렌드 속에서 개발 분야의 경계를 두지 않고 언제나 새로운 것을 배우는 것에 열정적입니다."),r.createElement("h6",{className:"sm:w-1/2 mt-5 sm:pl-5"},"다른 이에게 다가가거나 소통하는 것을 두려워하지 않으며 좋은 제품을 만들기 위해 팀 비전을 공유하며 동료들과 끊임없는 소통을 통해 서로의 역량을 끌어낼 수 있도록 노력합니다.")))},f=a.a.div.withConfig({displayName:"Work__StyledItem",componentId:"lo1ou-0"})(["&{& h5{font-size:1.25rem;}& a{transition:color 0.35s;&:hover{}}}"]),d=function(e){var t=e.className,n=e.title,a=e.date,o=e.description,i=e.link,l=o.split(", ");return r.createElement(f,{className:t},r.createElement("div",null,r.createElement("div",{className:"md:flex"},r.createElement("div",{className:"md:w-4/12"},r.createElement("h5",null,n),r.createElement("h6",{className:"text-gray-600 hover:text-gray-900 text-sm"},r.createElement("a",{href:i,target:"_blank",rel:"noreferrer noopener"},i)),r.createElement("h6",{className:"text-gray-600 text-sm"},a)),r.createElement("div",{className:"md:w-8/12"},null==l?void 0:l.map((function(e){return r.createElement("h6",{key:"description-"+e,className:"text-gray-800"},e)}))))))},h=function(){return r.createElement("div",{className:"container mx-auto mt-32 px-4"},r.createElement("div",null,r.createElement("h3",null,"Experience")),r.createElement("div",{className:"md:flex"},r.createElement("div",{className:"md:w-3/12"},r.createElement("h4",{className:""},"Posicube")),r.createElement("div",{className:"md:w-9/12 mt-5 md:mt-0"},r.createElement(d,{title:"Reception Server",date:"2020/05 ～ 현재",description:"Node.js 기반의 AI 연계서버 개발 및 운영, Chubb와 GS Shop 연동을 위한 Transaction API 개발"}))),r.createElement("div",{className:"md:flex mt-20"},r.createElement("div",{className:"md:w-3/12"},r.createElement("h4",{className:""},"Lalaworks")),r.createElement("div",{className:"md:w-9/12 mt-5 md:mt-0"},r.createElement(d,{title:"Office Call",date:"2020/02 ～ 2020/04",description:"Web 프론트엔드 개발, GatsbyJS 적용으로 Static Page 기반의 서비스, Typescript로 코드 구축, MobX를 사용한 스토어 디자인, PostCSS와 Styled components로 스타일시트 구성"}),r.createElement(d,{className:"mt-10",title:"Team Calendar",date:"2019/10 ～ 2020/01",description:"React-Native로 크로스 플랫폼 App 개발, Typescript로 코드 구축, MST(MobX State Tree)를 사용한 스토어 디자인 개발"}),r.createElement(d,{className:"mt-10",title:"Job&People Lab",link:"http://jobnlab.co.kr/",date:"2019/05 ～ 2019/11",description:"Web 프론트엔드 개발, GatsbyJS 적용으로 Static Page 기반의 서비스, SEO와 웹 접근성 확보, PostCSS와 Styled components로 스타일시트 구성"}),r.createElement(d,{className:"mt-10",title:"CCBBLAB",link:"https://ccbblab.com/",date:"2018/10 ～ 2019/12",description:"Web UI / UX  디자인 및 프론트엔드 개발, CS처리를 위한 어드민 툴을 포함한 웹과 어드민 연동 개발, Next.js기반에 express를 사용한 SSR 구현, PostCSS와 Styled components로 스타일시트 구성"}),r.createElement(d,{className:"mt-10",title:"Jiran",link:"https://jiran.com",date:"2018/08 ～ 2019/10",description:"Web 프론트엔드 개발, CS처리를 위한 어드민 툴을 포함한 웹과 어드민 연동 개발, Next.js기반에 express를 사용한 SSR 구현, MobX를 사용한 스토어 디자인, PostCSS와 Styled components로 스타일시트 구성"}),r.createElement(d,{className:"mt-10",title:"Awair",link:"https://getawair.com/",date:"2015/05 ～ 2016/05",description:"Web 프론트엔드 개발, SEO와 웹 접근성 확보, Sass로 스타일시트 구성"}),r.createElement(d,{className:"mt-10",title:"DirectCloud",link:"https://web.directcloud.net/",date:"2014/12 ～ 2018/06",description:"클라우드 Web의 UI / UX 디자인 및 초기버전의 프론트엔드를 대부분 개발, 프로젝트 초기 Angular를 사용하여 구축 후 React로 전환 적용, MobX를 사용한 스토어 디자인, Sass로 스타일시트 구성, Webpack 빌드로 트랜스파일, 유지보수를 포함해서 비즈니스의 요구에 맞는 새롭고 다양한 기능을 개발"}))))},y=function(){return r.createElement("div",{className:"container mx-auto mt-32 md:flex px-4"},r.createElement("div",{className:"md:w-3/12"},r.createElement("h3",null,"Education")),r.createElement("div",{className:"md:w-9/12 mt-5 md:mt-0"},r.createElement("h6",null,"홍익대학교 커뮤니케이션디자인"),r.createElement("h6",{className:"text-gray-600 text-sm"},"2005 ~ 2012")))},v=function(){return r.createElement("div",{className:"md:flex container mx-auto mt-32 px-4"},r.createElement("div",{className:"md:w-3/12"},r.createElement("h3",null,"Skills")),r.createElement("div",{className:"flex flex-wrap md:w-9/12 mt-5 md:mt-0"},r.createElement("h6",{className:"sm:w-1/2 sm:pr-5"},"JavaScript(ES6+), Typescript, React를 능숙하게 사용하며, Redux와 MobX 구조에 익숙하고 Node.js로 백엔드를 구현합니다."),r.createElement("h6",{className:"sm:w-1/2 mt-5 sm:mt-0 sm:pl-5"},"Svelt, Angular의 기본적인 쓰임이나 Less/Sass, PostCSS등을 비롯한 프론트엔드 관련 기술은 물론 Node.js나 Rust를 결합한 백엔드 기술에도 관심이 많습니다."),r.createElement("h6",{className:"sm:w-1/2 mt-5 sm:pr-5"},"React-Native를 사용하여 iOS 및 Android기반의 크로스플랫폼 앱을 구현합니다."),r.createElement("h6",{className:"sm:w-1/2 mt-5 sm:pl-5"},"ESLint와 Prettier로 Code conventions을 준수하며 Conventional Commits 규격을 따릅니다."),r.createElement("h6",{className:"sm:w-1/2 mt-5 sm:pr-5"},"Jest, Enzyme으로 테스트를 작성하며 Travis CI로 지속적 통합을 추구합니다."),r.createElement("h6",{className:"sm:w-1/2 mt-5 sm:pl-5"},"다양한 웹 브라우저 환경 및 사이즈를 대응합니다."),r.createElement("h6",{className:"sm:w-1/2 mt-5 sm:pr-5"},"협업과 프로젝트 관리를 위해 Slack, Git 활용하며 MS Office 365와 Google Suite 그리고 Atlassian Jira와 Confluence등의 여러 애자일 도구 사용 경험을 가지고 있습니다."),r.createElement("h6",{className:"sm:w-1/2 mt-5 sm:pl-5"},"때때로 디자이너 경험을 살려 Sketch, Figma 및 Adobe 제품군을 사용합니다.")))},b=function(){return r.createElement("div",{className:"container mx-auto mt-32 md:flex px-4"},r.createElement("div",{className:"md:w-3/12"},r.createElement("h3",null,"Contact")),r.createElement("div",{className:"md:w-9/12 mt-5 md:mt-0"},r.createElement("div",null,r.createElement("a",{href:"mailto:lannex.shin@gmail.com"},r.createElement("div",{className:"inline-block"},r.createElement("h6",null,"이메일"),r.createElement("h6",{className:"text-gray-600 text-sm"},"lannex.shin@gmail.com")))),r.createElement("div",{className:"mt-5"},r.createElement(i.Link,{to:"/blog"},r.createElement("div",{className:"inline-block"},r.createElement("h6",null,"블로그"),r.createElement("h6",{className:"text-gray-600 text-sm"},"lannex.github.io"))))))},E=a.a.div.withConfig({displayName:"resume__StyledResume",componentId:"sc-16p7iko-0"})(["&{position:relative;height:100%;& .bg-line{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;& div > div{height:100%;border-left:1px solid hsla(225,15%,94%,1);&:last-child{border-right:1px solid hsla(225,15%,94%,1);}}}& .container{max-width:860px;}& h1,& h2,& h3,& h4,& h5,& h6{white-space:pre-wrap;}& h3{font-size:1.6rem;font-weight:700;}& h6{font-weight:300;line-height:1.8;}}"]);t.default=function(){return r.createElement(E,null,r.createElement(o.a,{title:"Hello! I'm SeungJae Shin.",description:"안녕하세요! 저는 신승재입니다."}),r.createElement("div",{className:"bg-line"},r.createElement("div",{className:"hidden md:flex container h-full mx-auto px-4"},r.createElement("div",{className:"w-3/12"}),r.createElement("div",{className:"w-9/12"}))),r.createElement("div",{className:"relative z-0 h-full py-20 md:py-32"},r.createElement(u,null),r.createElement(p,null),r.createElement(h,null),r.createElement(y,null),r.createElement(v,null),r.createElement(b,null)))}}}]);