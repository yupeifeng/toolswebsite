webpackJsonp([4],{920:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,l,u,d,h,c=a(923),f=n(c),v=a(194),p=n(v),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(925),a(195);var w=a(1),y=n(w),b=a(31),m=a(997),P=n(m),k=a(998),_=n(k),C=p.default.Content,M=(s=(0,b.connectStore)(["CanvasStore"],["CanvasStore"]),l=(0,b.actionInjection)("CanvasAction"),s(u=l((h=d=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a.isDrawContainer=!1,a.draw=a.draw.bind(a),a}return o(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas;e.height=300,e.width=300,this.canvas=e,this.canvasWidth=e.width,this.canvasHeight=e.height,this.radius=this.canvasWidth/2,_.default.run(e),this.nowRange=0,this.rangeValue=60,this.wave1=new P.default({canvasWidth:this.canvasWidth,canvasHeight:this.canvasHeight,waveWidth:.055,waveHeight:4,colors:["#F39C6B","#A0563B"],xOffset:0,speed:.04}),this.wave2=new P.default({canvasWidth:this.canvasWidth,canvasHeight:this.canvasHeight,waveWidth:.04,waveHeight:3,colors:["rgba(243, 156, 107, 0.48)","rgba(160, 86, 59, 0.48)"],xOffset:2,speed:.02}),this.draw()}},{key:"draw",value:function(){var e=this.canvas.getContext("2d");e.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.isDrawContainer||this.drawContainer(e),this.drawBackground(e),this.nowRange<=this.rangeValue&&(this.nowRange+=1),this.nowRange>this.rangeValue&&(this.nowRange-=1),this.wave2.update({nowRange:this.nowRange}),this.wave2.draw(e),this.wave1.update({nowRange:this.nowRange}),this.wave1.draw(e),window.requestAnimationFrame(this.draw)}},{key:"drawContainer",value:function(e){var t=this.props.type;"circle"===t?this.drawCircle(e):"star"===t?this.drawStar(e):"roundRect"===t?this.drawRoundRect(e):"heart"===t&&this.drawHeart(e)}},{key:"drawBackground",value:function(e){var t=this.radius,a=t;e.beginPath(),e.arc(t,t,a,0,2*Math.PI);var n=e.createRadialGradient(t,t,t/2,t,t,t);n.addColorStop(0,"rgba(127, 57, 242, 0"),n.addColorStop(1,"rgba(255, 195, 103, 0.11)"),e.fillStyle=n,e.fill()}},{key:"drawCircle",value:function(e){var t=this.canvasWidth/2,a=t-4;e.lineWidth=4,e.beginPath(),e.arc(t,t,a,0,2*Math.PI),e.strokeStyle="rgba(186, 165, 130, 0.3)",e.stroke(),e.clip(),this.isDrawContainer=!0}},{key:"drawStar",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:70,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:140,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:145,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:160;e.beginPath(),e.strokeStyle="rgba(186, 165, 130, 0.3)",e.lineWidth=2;for(var i=0;i<5;i+=1)e.lineTo(Math.cos((18+72*i)/180*Math.PI)*a+n,-Math.sin((18+72*i)/180*Math.PI)*a+r),e.lineTo(Math.cos((54+72*i)/180*Math.PI)*t+n,-Math.sin((54+72*i)/180*Math.PI)*t+r);e.closePath(),e.stroke(),e.clip(),this.isDrawContainer=!0}},{key:"drawRoundRect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250;e.beginPath(),e.rect(t,a,n,r),e.strokeStyle="rgba(186, 165, 130, 0.3)",e.lineWidth=2;var i=r-n,o=n/2;i<0&&(o=r/2),e.beginPath(),e.arc(t+o,a+o,o,Math.PI,3*Math.PI/2),e.lineTo(n-o+t,a),e.arc(n-o+t,o+a,o,3*Math.PI/2,2*Math.PI),e.lineTo(n+t,r+a-o),e.arc(n-o+t,r-o+a,o,0,1*Math.PI/2),e.lineTo(o+t,r+a),e.arc(o+t,r-o+a,o,1*Math.PI/2,Math.PI),e.closePath(),e.stroke(),e.clip(),this.isDrawContainer=!0}},{key:"drawHeart",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:130,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:9,r=[],i=0;i<50;i+=1){var o=i/50*(2*Math.PI),s={x:n*(16*Math.pow(Math.sin(o),3)),y:n*(13*Math.cos(o)-5*Math.cos(2*o)-2*Math.cos(3*o)-Math.cos(4*o))};r.push(s)}e.save(),e.beginPath(),e.translate(t,a),e.rotate(Math.PI);for(var l=0;l<50;l+=1){var u=r[l];e.lineTo(u.x,u.y)}e.strokeStyle="rgba(186, 165, 130, 0.3)",e.lineWidth=2,e.stroke(),e.restore(),e.clip(),this.isDrawContainer=!0}},{key:"drawSin",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=[],r=this.canvasWidth,i=this.canvasHeight;e.beginPath(),e.lineWidth=1;for(var o=0;o<0+r;o+=20/r){var s=4*Math.sin(.05*(0+o)+t);n.push([o,(1-a)*i+s]),e.lineTo(o,(1-a)*i+s)}e.lineTo(r,i),e.lineTo(0,i),e.lineTo(n[0][0],n[0][1]);var l=r/2,u=e.createLinearGradient(l,l,l,i);u.addColorStop(0,"#F39C6B"),u.addColorStop(1,"#A0563B"),e.fillStyle=u,e.fill()}},{key:"render",value:function(){return y.default.createElement(p.default,{style:{padding:"0 24px 24px"}},y.default.createElement(f.default,{style:{margin:"12px 0"}},y.default.createElement(f.default.Item,null,"工具"),y.default.createElement(f.default.Item,null,"水波图")),y.default.createElement(C,{style:{background:"#fff",padding:24,margin:0,minHeight:280}},y.default.createElement("canvas",{ref:"canvas"})))}}]),t}(y.default.Component),d.defaultProps={type:"circle"},u=h))||u)||u);t.default=M},922:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),i=n(r),o=a(12),s=n(o),l=a(17),u=n(l),d=a(13),h=n(d),c=a(14),f=n(c),v=a(1),p=n(v),g=a(2),w=n(g),y=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]]);return a},b=function(e){function t(){return(0,s.default)(this,t),(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,a=e.separator,n=e.children,r=y(e,["prefixCls","separator","children"]),o=void 0;return o="href"in this.props?p.default.createElement("a",(0,i.default)({className:t+"-link"},r),n):p.default.createElement("span",(0,i.default)({className:t+"-link"},r),n),n?p.default.createElement("span",null,o,p.default.createElement("span",{className:t+"-separator"},a)):null}}]),t}(p.default.Component);t.default=b,b.__ANT_BREADCRUMB_ITEM=!0,b.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},b.propTypes={prefixCls:w.default.string,separator:w.default.oneOfType([w.default.string,w.default.element]),href:w.default.string},e.exports=t.default},923:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(924),i=n(r),o=a(922),s=n(o);i.default.Item=s.default,t.default=i.default,e.exports=t.default},924:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":("+a+")","g"),function(e,a){return t[a]||e})}function i(e,t,a,n){var i=a.indexOf(e)===a.length-1,o=r(e,t);return i?p.default.createElement("span",null,o):p.default.createElement("a",{href:"#/"+n.join("/")},o)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(12),s=n(o),l=a(17),u=n(l),d=a(13),h=n(d),c=a(14),f=n(c),v=a(1),p=n(v),g=a(2),w=n(g),y=a(315),b=n(y),m=a(922),P=n(m),k=a(29),_=n(k),C=function(e){function t(){return(0,s.default)(this,t),(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,b.default)(!("linkRender"in e||"nameRender"in e),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){var e=void 0,t=this.props,a=t.separator,n=t.prefixCls,r=t.style,o=t.className,s=t.routes,l=t.params,u=void 0===l?{}:l,d=t.children,h=t.itemRender,c=void 0===h?i:h;if(s&&s.length>0){var f=[];e=s.map(function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(u).forEach(function(e){t=t.replace(":"+e,u[e])}),t&&f.push(t),p.default.createElement(P.default,{separator:a,key:e.breadcrumbName||t},c(e,u,s,f))})}else d&&(e=p.default.Children.map(d,function(e,t){return e?((0,b.default)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children"),(0,v.cloneElement)(e,{separator:a,key:t})):e}));return p.default.createElement("div",{className:(0,_.default)(o,n),style:r},e)}}]),t}(p.default.Component);t.default=C,C.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},C.propTypes={prefixCls:w.default.string,separator:w.default.node,routes:w.default.array,params:w.default.object,linkRender:w.default.func,nameRender:w.default.func},e.exports=t.default},925:function(e,t,a){"use strict";a(70),a(926)},926:function(e,t){},997:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.canvasWidth,r=t.canvasHeight,i=t.waveWidth,o=void 0===i?.055:i,s=t.waveHeight,l=void 0===s?6:s,u=t.xOffset,d=void 0===u?0:u,h=t.speed,c=void 0===h?.04:h,f=t.colors,v=void 0===f?["#DBB77A","#BF8F3B"]:f;n(this,e),this.points=[],this.startX=0,this.canvasWidth=a,this.canvasHeight=r,this.waveWidth=o,this.waveHeight=l,this.xOffset=d,this.speed=c,this.colors=v}return r(e,[{key:"getChartColor",value:function(e){var t=this.canvasWidth/2,a=e.createLinearGradient(t,t,t,this.canvasHeight);return a.addColorStop(0,this.colors[0]),a.addColorStop(1,this.colors[1]),a}},{key:"draw",value:function(e){e.save();var t=this.points;e.beginPath();for(var a=0;a<t.length;a+=1){var n=t[a];e.lineTo(n[0],n[1])}e.lineTo(this.canvasWidth,this.canvasHeight),e.lineTo(this.startX,this.canvasHeight),e.lineTo(t[0][0],t[0][1]),e.fillStyle=this.getChartColor(e),e.fill(),e.restore()}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.nowRange;this.points=[];for(var a=this.startX,n=this.waveHeight,r=this.waveWidth,i=this.canvasWidth,o=this.canvasHeight,s=this.xOffset,l=a;l<a+i;l+=20/i){var u=Math.sin((a+l)*r+s),d=o*(1-t/100);this.points.push([l,d+u*n])}this.xOffset+=this.speed}}]),e}();t.default=i},998:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={run:function(e){var t=e,a=t.getContext("2d"),n=window.devicePixelRatio||1,r=a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||a.backingStorePixelRatio||1,i=n/r;if(n!==r){var o=t.width,s=t.height;t.width=o*i,t.height=s*i,t.style.width=o+"px",t.style.height=s+"px",a.scale(i,i)}}}}});