(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});r(2791);var n=r(1087),s=r(6842),i=r(7892),a=r.n(i),o=r(184),c=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},u=[{title:"Nearest Dollar",subtitle:"2015 BVP Hackathon",image:"/images/projects/nearestdollar.jpg",date:"2015-11-20",desc:"Built for a social impact hackathon. NearestDollar connected to your bank accounts, credit cards, or debit cards and rounded up your purchases to donate the balance to the charity of your choice."},{title:"Harvest",subtitle:"Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon",link:"https://devpost.com/software/harvest",image:"/images/projects/harvest.jpg",date:"2015-09-20",desc:"Won ~ $7000 in prizes for an advanced, low cost monitoring solution for crops. Harvest was designed to catch irrigation leaks, overwatering, and nutrient deficiencies at an affordable price for the developing world."},{title:"Space Potato",subtitle:"A kickstarter funded potato powered weather balloon.",link:"http://www.spacepotato.org",image:"/images/projects/spacepotato.jpg",date:"2015-06-28",desc:"Launched a potato battery powered weather balloon with two cameras and gps transponder. Resulting photos were published in a coffee table book. You can email me for a copy."},{title:"Cat Detector",subtitle:"A convolutional neural network to classify cats! (and dogs)",image:"/images/projects/catdetector.jpg",date:"2015-05-15",desc:"Trained a convolutional neural network to classify between ~ 80 cats breeds. Over 60,000 cats were classified before server bills made the project too expensive to continue hosting."}],d=function(){return(0,o.jsx)(s.Z,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(n.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return(0,o.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",a="hour",o="day",c="week",u="month",d="quarter",l="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,u),i=r-s<0,a=e.clone().add(n+(i?-1:1),u);return+(-(n+(r-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:c,d:o,D:h,h:a,m:i,s:s,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",M={};M[w]=m;var y=function(t){return t instanceof S},D=function t(e,r,n){var s;if(!e)return w;if("string"==typeof e){var i=e.toLowerCase();M[i]&&(s=i),r&&(M[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,s=o}return!n&&s&&(w=s),s||!n&&w},b=function(t,e){if(y(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new S(r)},j=v;j.l=D,j.i=y,j.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return j},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var r=b(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return b(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<b(t)},g.$g=function(t,e,r){return j.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!j.u(e)||e,d=j.p(t),f=function(t,e){var s=j.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(o)},p=function(t,e){return j.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},$=this.$W,m=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case l:return n?f(1,0):f(31,11);case u:return n?f(1,m):f(0,m+1);case c:var w=this.$locale().weekStart||0,M=($<w?$+7:$)-w;return f(n?g-M:g+(6-M),m);case o:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case s:return p(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,c=j.p(t),d="set"+(this.$u?"UTC":""),f=(r={},r[o]=d+"Date",r[h]=d+"Date",r[u]=d+"Month",r[l]=d+"FullYear",r[a]=d+"Hours",r[i]=d+"Minutes",r[s]=d+"Seconds",r[n]=d+"Milliseconds",r)[c],p=c===o?this.$D+(e-this.$W):e;if(c===u||c===l){var $=this.clone().set(h,1);$.$d[f](p),$.init(),this.$d=$.set(h,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[j.p(t)]()},g.add=function(n,d){var h,f=this;n=Number(n);var p=j.p(d),$=function(t){var e=b(f);return j.w(e.date(e.date()+Math.round(t*n)),f)};if(p===u)return this.set(u,this.$M+n);if(p===l)return this.set(l,this.$y+n);if(p===o)return $(1);if(p===c)return $(7);var m=(h={},h[i]=e,h[a]=r,h[s]=t,h)[p]||1,g=this.$d.getTime()+n*m;return j.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=j.z(this),i=this.$H,a=this.$m,o=this.$M,c=r.weekdays,u=r.months,d=r.meridiem,l=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},h=function(t){return j.s(i%12||12,t,"0")},p=d||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace($,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return j.s(e.$y,4,"0");case"M":return o+1;case"MM":return j.s(o+1,2,"0");case"MMM":return l(r.monthsShort,o,u,3);case"MMMM":return l(u,o);case"D":return e.$D;case"DD":return j.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(r.weekdaysMin,e.$W,c,2);case"ddd":return l(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return j.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(e.$s);case"ss":return j.s(e.$s,2,"0");case"SSS":return j.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,h,f){var p,$=this,m=j.p(h),g=b(n),v=(g.utcOffset()-this.utcOffset())*e,w=this-g,M=function(){return j.m($,g)};switch(m){case l:p=M()/12;break;case u:p=M();break;case d:p=M()/3;break;case c:p=(w-v)/6048e5;break;case o:p=(w-v)/864e5;break;case a:p=w/r;break;case i:p=w/e;break;case s:p=w/t;break;default:p=w}return f?p:j.a(p)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=D(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return j.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),k=S.prototype;return b.prototype=k,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",o],["$M",u],["$y",l],["$D",h]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,S,b),t.$i=!0),b},b.locale=D,b.isDayjs=y,b.unix=function(t){return b(1e3*t)},b.en=M[w],b.Ls=M,b.p={},b}()}}]);
//# sourceMappingURL=161.08537016.chunk.js.map