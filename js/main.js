/*Moderizer*/
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(m.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),G(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=D(e[d],"function"),D(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.backgroundsize=function(){return H("backgroundSize")},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==q.svg};for(var I in r)A(r,I)&&(w=I.toLowerCase(),e[w]=r[I](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.hasEvent=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,e.prefixed=function(a,b,c){return b?H(a,b,c):H(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*Background-image*/
(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);

/*Push menu*/
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){var n,i=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return t(i)}function n(e){return this.each(function(){var n=t(this),s=n.data("bs.collapse"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);!s&&a.toggle&&"show"==e&&(a.toggle=!1),s||n.data("bs.collapse",s=new i(this,a)),"string"==typeof e&&s[e]()})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.$trigger=t(this.options.trigger).filter('[href="#'+e.id+'"], [data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.1",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,s=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(s&&s.length&&(e=s.data("bs.collapse"),e&&e.transitioning))){var a=t.Event("show.bs.collapse");if(this.$element.trigger(a),!a.isDefaultPrevented()){s&&s.length&&(n.call(s,"hide"),e||s.data("bs.collapse",null));var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return o.call(this);var l=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var s=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(i.TRANSITION_DURATION):s.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(n,i){var s=t(i);this.addAriaAndCollapsedClass(e(s),s)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var s=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=s,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var s=t(this);s.attr("data-target")||i.preventDefault();var a=e(s),r=a.data("bs.collapse"),o=r?"toggle":t.extend({},s.data(),{trigger:this});n.call(a,o)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one("bsTransitionEnd",function(){n=!0});var s=function(){n||t(i).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);

/*Slider*/

(function(d){d.fn.ionImageSlider=function(E){function A(b,a,B,d){var e=b.width();50<d&&(e=100);if(30<e)a.onLoadImage(b,B);else setTimeout(function(){A(b,a,B,d+1)},100)}var h=d.extend({zoomText:"Zoom",startFrom:0,slideShow:!0,slideShowDelay:7},E),g=this,p=null,u=null,v=null,w=null,q=null,j=null,x=null,f=[],l=0,C=0,k=0,e=h.startFrom,s=0,t=!1,m=!1,n=0,y=null,c='<div class="ion-image-slider-content">',c=c+'<div class="ion-image-slider-scroll"></div>',c=c+'<div class="ion-image-slider-preloader"></div>',
c=c+'<div class="ion-image-slider-shadow-left"></div>',c=c+'<div class="ion-image-slider-shadow-right"></div>',c=c+"</div>",c=c+'<div class="ion-image-slider-bullets"></div>',z='<div class="ion-image-slider-arr-prev"></div>',z=z+'<div class="ion-image-slider-arr-next"></div>',r={init:function(){var b=this;g.append(c);p=g.find("a");u=p.children("img");q=g.find("div.ion-image-slider-content");v=g.find("div.ion-image-slider-bullets");k=u.length;C=q.outerWidth();this.loadCounter=0;u.each(function(a){A(d(this),
b,a,0)})},onLoadImage:function(b,a){this.loadCounter++;f[a]={width:b.width(),height:b.height(),caption:b.data("caption")||"",url:b.parent("a").prop("href")};v.append('<span class="ion-image-slider-bullet"></span>');this.loadCounter===k&&this.buildSlider()},buildSlider:function(){g.find("div.ion-image-slider-preloader").remove();q.append(z);p.each(function(a){var b=f[a].width+22,e=f[a].height+22;d(this).width(b).height(e).addClass("ssi-"+a);b='<span class="ion-image-slider-zoom"></span>'+('<span class="ion-image-slider-zoom-text">'+
h.zoomText+"</span>");f[a].caption&&(b+='<span class="ion-image-slider-caption" style="max-width: '+(parseInt(f[a].width)-10)+'px;">'+f[a].caption+"</span>");d(this).append(b)});for(var b=0;b<k;b++)l+=f[b].width+42;q.find("div.ion-image-slider-scroll").html('<div class="ion-image-slider-pad" id="ion-image-slider-pad"></div>');j=d("#ion-image-slider-pad");j.width(3*l);p.appendTo(j);p.clone().appendTo(j);p.clone().appendTo(j);x=j.find("a");w=v.find("span.ion-image-slider-bullet");w.each(function(a){d(this).prop("id",
"ion-image-slider-bullet-"+a).data("num",a)});this.buildEvents();this.moveToPos(!0)},buildEvents:function(){var b=this;g.find("div.ion-image-slider-arr-prev").on("click",function(){t||(e--,b.moveToPos())});g.find("div.ion-image-slider-arr-next").on("click",function(){t||(e++,b.moveToPos())});w.on("click",function(){t||(e=d(this).data("num"),b.moveToPos())});h.slideShow&&this.slideShow();q.on("mouseenter",function(){h.slideShow&&(clearInterval(y),n=0)});q.on("mouseleave",function(){h.slideShow&&!m&&
b.slideShow()});x.on("click",function(a){a.preventDefault();a=parseInt(d(this).prop("class").slice(4));m=!0;D.open(a,f)})},slideShow:function(){var b=this;y=setInterval(function(){n+=10;n>=100*h.slideShowDelay&&(n=0,e++,b.moveToPos())},100)},setActiveBullet:function(){d("#ion-image-slider-bullet-"+e).addClass("active").siblings().removeClass("active")},moveToPos:function(b){b||(t=!0);0>e?e=k-1:e>k-1&&(e=0);this.setActiveBullet();h.slideShow&&(n=0);for(var a=0,d=Math.round(C/2),c=0;c<e;c++)a+=f[c].width+
42;for(var a=Math.round(d-a-(f[e].width+42)/2+10),a=Math.round(a-l),g=c=0;g<s;g++)c+=f[g].width+42;c=Math.round(d-c-(f[s].width+42)/2+10);c=Math.round(c-l);e===k-1&&0===s&&(c=d-(f[0].width+42)/2-2*l+10);0===e&&s===k-1&&(c=d+(f[k-1].width+42)/2-l+10);this.setActive();j.css("left",c+"px");b?j.css("left",a+"px"):j.stop().animate({left:a},300,function(){t=!1});s=e},setActive:function(){x.eq(k+e).addClass("active").siblings().removeClass("active")}},D={init:function(){var b=this;this.body=d(document.body);
var a;a='<div class="ion-image-slider-overlay"></div><div class="ion-image-slider-popup"><div class="ion-image-slider-popup-prev"><div></div></div>';a+='<div class="ion-image-slider-popup-next"><div></div></div>';a+='<div class="ion-image-slider-popup-close">&times;</div>';a+='<div class="ion-image-slider-popup-caption"></div>';a+="</div>";this.body.append(a);this.overlay=d("div.ion-image-slider-overlay");this.popup=d("div.ion-image-slider-popup");this.prev=d("div.ion-image-slider-popup-prev");this.next=
d("div.ion-image-slider-popup-next");this.caption=d("div.ion-image-slider-popup-caption");this.image=null;this.height=this.width=0;this.overlay.on("click",function(){b.close()});this.popup.on("click",function(){b.close()});this.prev.on("click",function(a){a.stopPropagation();e--;r.moveToPos();b.change(-1)});this.next.on("click",function(a){a.stopPropagation();e++;r.moveToPos();b.change(1)});this.body.on("keydown",function(a){27==a.which&&m&&b.close();37==a.which&&m&&(e--,r.moveToPos(),b.change(-1));
39==a.which&&m&&(e++,r.moveToPos(),b.change(1))})},change:function(b){this.close();var a=this.current,a=a+b;0>a?a=this.info.length-1:a>this.info.length-1&&(a=0);this.open(a,this.info)},open:function(b,a){this.current=b;this.info=a;this.info[b].caption?this.caption.css("display","block").text(this.info[b].caption):this.caption.css("display","none");h.slideShow&&(clearInterval(y),n=0);this.overlay.css("display","block");this.loadImage()},loadImage:function(){var b=this;this.body.append('<img src="'+
this.info[this.current].url+'" class="ion-image-slider-big" />');this.image=d("img.ion-image-slider-big");this.image.on("load",function(){b.width=d(this).width();b.height=d(this).height();b.placeImage()})},placeImage:function(){this.popup.addClass("opend");this.popup.prepend(this.image);var b=d(window).innerWidth()-40,a=d(window).innerHeight()-40,c=this.height/this.width;this.width>b&&(this.width=b,this.height=this.width*c);this.height>a&&(this.height=a,this.width=this.height/c);this.popup.width(this.width+
"px");this.popup.height(this.height+"px");this.popup.css("marginTop",-(this.height/2)+"px");this.popup.css("marginLeft",-(this.width/2)+"px");m=!0},close:function(){this.overlay.css("display","none");this.image.remove();this.popup.removeClass("opend");m=!1;h.slideShow&&r.slideShow()}};r.init();D.init()}})(jQuery);

/*Pagination*/


/*My Code*/

$(document).ready(function(){
	$(".submenu-toggle").click(function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
	$(document).on('click', function(){
		if($('.submenu').hasClass('in')){
			$('.submenu').collapse('hide');
			$(".submenu-toggle").removeClass('active');
		}
	});

	if($('body').find('.backimg').length != 0) {
		var imgbg = $('.backimg').css('background-image').replace('url("', '').replace('")', '');
		if($('html').hasClass('no-backgroundsize')) {$('.backimg').backstretch([imgbg], {centeredX: false});}

		var hash = window.location.hash;
		if (hash === '#blog') {	$('.backimg').hide(); $('.content').removeClass('hidden'); $('.blog-link').addClass('active'); }
		if ($(window).width() < 768) {$('.content').removeClass('hidden');}

		$(window).on('hashchange', function(){
			var hash = window.location.hash;
			if (hash === '#blog') {	$('.backimg').hide(); $('.content').removeClass('hidden'); $('.blog-link').addClass('active'); }
		});

		$(window).resize(function(){
			if ($(window).width() < 768) {$('.content').removeClass('hidden');} else {var hash = window.location.hash;if (hash !== '#blog') {$('.content').addClass('hidden');}}
		});
	}

	if($('body').find('.doc-case-container').length != 0) {
		$(window).load(function() {
			$(".doc-container").not(".doccat4").each(function(){
				$(this).css('height', $(this).find('.doc-title-container').innerHeight());
			});
		});
		var anotaciaheight;

		$('.doc-button-more').click(function(){
			if ($(this).hasClass('on')){
				$(".doc-container").not(".doccat4").each(function(){
					$(this).css('height', $(this).find('.doc-title-container').innerHeight() + $(this).find('.doc-text').innerHeight());
				});
				$(this).parent().parent().parent().find(".doc-text").css('height', 0);
				$(this).parent().parent().parent().css('height', $(this).parent().parent().parent().innerHeight() - anotaciaheight);
				$(this).delay(1000).queue(function() {
					$(this).removeClass("on");$(this).dequeue();
					$(".doc-container").not(".doccat4").each(function(){
						$(this).css('height', $(this).find('.doc-title-container').innerHeight() + $(this).find('.doc-text').innerHeight());
					});
				});
			} else {
				$(this).addClass('on');
				anotaciaheight = $(this).parent().parent().parent().find(".doc-text").find(".doc-text-container").innerHeight();
				$(this).parent().parent().parent().find(".doc-text").css('height', anotaciaheight);
				$(this).parent().parent().parent().css('height', $(this).parent().parent().parent().innerHeight() + anotaciaheight);
			}
			return false;
		});
		if($('body').find('.doc-comment-container').length != 0) {
			$('.doc-comment-container[data-ident="disqussion-1"]').ready(function(){
				var disqus_shortname = 'nataliba';
				var disqus_identifier = $('.doc-comment-container[data-ident="disqussion-1"]').attr('data-ident');
				var disqus_url = window.location.href + $('.doc-comment-container[data-ident="disqussion-1"]').attr('data-ident');
				$('.doc-comment-container[data-ident="disqussion-1"]').html('<div id="disqus_thread" style="display:none;"></div>');
				if (window.DISQUS) {
					DISQUS.reset({
						reload: true,
						config: function () {
							this.page.identifier = disqus_identifier;
							this.page.url = disqus_url;
						}
					});
				} else {
				  var s = document.createElement('script');
				  s.type = 'text/javascript';
				  s.async = true;
				  s.src = '//' + disqus_shortname + '.disqus.com/embed.js';
				  $('head').append(s);
				}
			});
		}

		$('.doc-button-comment').click(function(){
			if ($(this).hasClass('on')){
				$(".doc-comment-container[data-ident='disqussion-"+$(this).attr('data-count')+"']").animate({'height': '0'}, 1000, "linear");
				$(".doc-comment-container[data-ident='disqussion-"+$(this).attr('data-count')+"'] #disqus_thread").animate({'height': '0'}, 1000, "linear").delay(1000).queue(function() {$(this).remove();});
				$('.doc-button-comment').removeClass('on');
				return false;
			} else {
				$('.doc-button-comment').removeClass('on');
				$(this).addClass('on');
				$(".doc-comment-container #disqus_thread").animate({'height': '0'}, 800, "linear", function() {$(".doc-comment-container #disqus_thread").remove();});
				var disqus_shortname = 'nataliba';
				var disqus_identifier = $(".doc-comment-container[data-ident='disqussion-"+$(this).attr('data-count')+"']").attr('data-ident');
				var disqus_url = window.location.href + $(".doc-comment-container[data-ident='disqussion-"+$(this).attr('data-count')+"']").attr('data-ident');
				var selector = $(".doc-comment-container[data-ident='disqussion-"+$(this).attr('data-count')+"']");
				setTimeout(function(){
					selector.css('height', '0').html('<div id="disqus_thread"></div>').animate({'height': '95px'}, 800, "linear", function() {$(this).css('height', 'auto')});
					if (window.DISQUS) {
						DISQUS.reset({
							reload: true,
							config: function () {
								this.page.identifier = disqus_identifier;
								this.page.url = disqus_url;
							}
						});
					} else {
					  var s = document.createElement('script');
					  s.type = 'text/javascript';
					  s.async = true;
					  s.src = '//' + disqus_shortname + '.disqus.com/embed.js';
					  $('head').append(s);
					}
				}, 1000);
			}
				return false;
		});

		$('.filter-select li').click(function(){
			$('.filter-selected').html($(this).text());
			$('#filter-check').prop('checked', false);
			if ($(this).attr('data-attr') != 0) {
				$('.doc-container').removeClass('filter-hidden');
				$('.doc-container:not(.doccat'+$(this).attr('data-attr')+')').addClass('filter-hidden');
			} else {
				$('.doc-container').removeClass('filter-hidden');
			}
		});

		$(window).resize(function(){
			$(".doc-container").not(".doccat4").each(function(){
				if($(this).find('.doc-title-container').find('.doc-buttons').find('.doc-button-more').hasClass('on')) {
					$(this).find(".doc-text").css('height', $(this).find('.doc-text').find(".doc-text-container").innerHeight());
				}
				$(this).css('height', $(this).find('.doc-title-container').innerHeight() + $(this).find('.doc-text').innerHeight());
			});
		});
	}
	if($('body').find('.aboutme-container').length != 0) {
		$(window).load(function() {
			if ($(window).width() < 768) {
				var bodycont = $(document);
			}else{
				var bodycont = $('.content');
			}
			var offsetPixels = $('.aboutme').offset().top;
			var maxheight = $('.aboutme-text-container').innerHeight();
			var maxheightimg = $(".aboutme").outerHeight(true);

			bodycont.scroll(function() {
				if (bodycont.scrollTop() > offsetPixels && bodycont.scrollTop()+maxheightimg < maxheight) {
					$(".aboutme").stop().animate({
						marginTop: bodycont.scrollTop() - offsetPixels + 15
					});
				} else if (bodycont.scrollTop() > offsetPixels && bodycont.scrollTop()+maxheightimg > maxheight) {
					$(".aboutme").stop().animate({
						marginTop: maxheight-maxheightimg
					});
				} else {
					$(".aboutme").stop().animate({
						marginTop: 5
					});
				}
			});
		});
		$(window).resize(function(){
			setTimeout(function() {
			if ($(window).width() < 768) {
				bodycont = $(document);
			}else{
				bodycont = $('.content');
			}
			offsetPixels = $('.aboutme').offset().top;
			maxheight = $('.aboutme-text-container').innerHeight();
			maxheightimg = $(".aboutme").outerHeight(true);

			bodycont.scroll(function() {
				if (bodycont.scrollTop() > offsetPixels && bodycont.scrollTop()+maxheightimg < maxheight) {
					$(".aboutme").stop().animate({
						marginTop: bodycont.scrollTop() - offsetPixels + 15
					});
				} else if (bodycont.scrollTop() > offsetPixels && bodycont.scrollTop()+maxheightimg > maxheight) {
					$(".aboutme").stop().animate({
						marginTop: maxheight-maxheightimg
					});
				} else {
					$(".aboutme").stop().animate({
						marginTop: 5
					});
				}
			});
			}, 300);
		});
		$("#mySlider").ionImageSlider({slideShowDelay: 5});
	}
	if($('body').find('.contacts-container').length != 0) {
		var map;
		var myLatlng = new google.maps.LatLng(49.747893, 27.465121);
		function initialize() {			
			var mapOptions = {
				zoom: 13,
				center: myLatlng,
				scrollwheel: false,
				streetViewControl: false,
				mapTypeControl:true,
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE
				}
			};
			map = new google.maps.Map(document.getElementById('map-canvas'),
				mapOptions);
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
			});
		}
		google.maps.event.addDomListener(window, 'load', initialize);

		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center); 
		});

	}
	var per = 0;
	var progressbar = setInterval(function() {
		var children = document.body.children;

		var pernce = (100 / children.length);
		pernce = Math.ceil(pernce);
		var not_tag_present = false;

		for (var i = 0; i < children.length; i++) {
			var innerchilds = $(children[i]).children();
			if (innerchilds.length > 0) {
				var innerpercen = pernce / innerchilds.length;
				innerpercen = Math.ceil(innerpercen);
				for (var j = 0; j < innerchilds.length; j++) {
					per = per + innerpercen;
					if ($(innerchilds[j]).length > 0) {

						if (!not_tag_present) {
							if (per >= 101) {
								$('.loader-progress').attr('data-progress-text', '100%');
								setTimeout(function() {$('body').removeClass('loader-init').addClass('loader-finish')}, 600);
								$('.loader-container').delay(2000).fadeOut('slow');
								clearInterval(progressbar);
							} else {
								$('.loader-progress').attr('data-progress-text', per+'%');
							}
						}
						not_tag_present = false;
					} else {
						setTimeout(function() {
							j--;
							not_tag_present = true;
						}, 1000);
					}
				}
			} else {
				if ($(children[i]).length > 0) {
					per = per + pernce;
					if (!not_tag_present) {
						if (per >= 101) {
							$('.loader-progress').attr('data-progress-text', '100%');
							setTimeout(function() {$('body').removeClass('loader-init').addClass('loader-finish')}, 600);
							$('.loader-container').delay(2000).fadeOut('slow');
							clearInterval(progressbar);
						} else {
							$('.loader-progress').attr('data-progress-text', per+'%');
						}

					}
					not_tag_present = false;
				} else {
					setTimeout(function() {
						i--;
						not_tag_present = true;
					}, 1000);
				}
			}
		}
	}, 1000);

});