(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.maybe = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	var f=React,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
		function q(c,a,g){var b,d={},e=null,h=null;undefined!==g&&(e=""+g);undefined!==a.key&&(e=""+a.key);undefined!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) undefined===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	var hasRequiredJsxRuntime;

	function requireJsxRuntime () {
		if (hasRequiredJsxRuntime) return jsxRuntime.exports;
		hasRequiredJsxRuntime = 1;

		{
		  jsxRuntime.exports = requireReactJsxRuntime_production_min();
		}
		return jsxRuntime.exports;
	}

	var jsxRuntimeExports = requireJsxRuntime();

	const LocaleContext = React.createContext({
	    locale: "zh-CN",
	});

	const CalendarLocale$1 = {
	    formatYear: "YYYY 年",
	    formatMonth: "YYYY 年 MM 月",
	    today: "今天",
	    month: {
	        January: "一月",
	        February: "二月",
	        March: "三月",
	        April: "四月",
	        May: "五月",
	        June: "六月",
	        July: "七月",
	        August: "八月",
	        September: "九月",
	        October: "十月",
	        November: "十一月",
	        December: "十二月",
	    },
	    week: {
	        monday: "周一",
	        tuesday: "周二",
	        wednesday: "周三",
	        thursday: "周四",
	        friday: "周五",
	        saturday: "周六",
	        sunday: "周日",
	    },
	};

	const CalendarLocale = {
	    formatYear: "YYYY",
	    formatMonth: "MMM YYYY",
	    today: "Today",
	    month: {
	        January: "January",
	        February: "February",
	        March: "March",
	        April: "April",
	        May: "May",
	        June: "June",
	        July: "July",
	        August: "August",
	        September: "September",
	        October: "October",
	        November: "November",
	        December: "December",
	    },
	    week: {
	        monday: "Monday",
	        tuesday: "Tuesday",
	        wednesday: "Wednesday",
	        thursday: "Thursday",
	        friday: "Friday",
	        saturday: "Saturday",
	        sunday: "Sunday",
	    },
	};

	const allLocales = {
	    "zh-CN": CalendarLocale$1,
	    "en-US": CalendarLocale,
	};

	var classnames = {exports: {}};

	/*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
	*/

	var hasRequiredClassnames;

	function requireClassnames () {
		if (hasRequiredClassnames) return classnames.exports;
		hasRequiredClassnames = 1;
		(function (module) {
			/* global define */

			(function () {

				var hasOwn = {}.hasOwnProperty;

				function classNames () {
					var classes = '';

					for (var i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						if (arg) {
							classes = appendClass(classes, parseValue(arg));
						}
					}

					return classes;
				}

				function parseValue (arg) {
					if (typeof arg === 'string' || typeof arg === 'number') {
						return arg;
					}

					if (typeof arg !== 'object') {
						return '';
					}

					if (Array.isArray(arg)) {
						return classNames.apply(null, arg);
					}

					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						return arg.toString();
					}

					var classes = '';

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes = appendClass(classes, key);
						}
					}

					return classes;
				}

				function appendClass (value, newClass) {
					if (!newClass) {
						return value;
					}
				
					if (value) {
						return value + ' ' + newClass;
					}
				
					return value + newClass;
				}

				if (module.exports) {
					classNames.default = classNames;
					module.exports = classNames;
				} else {
					window.classNames = classNames;
				}
			}()); 
		} (classnames));
		return classnames.exports;
	}

	var classnamesExports = requireClassnames();
	var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

	function getAllDays(date) {
	    const startDate = date.startOf("month");
	    const day = startDate.day();
	    const daysInfo = new Array(6 * 7);
	    for (let i = 0; i < day; i++) {
	        daysInfo[i] = {
	            date: startDate.subtract(day - i, "day"),
	            currentMonth: false,
	        };
	    }
	    for (let i = day; i < daysInfo.length; i++) {
	        const calcDate = startDate.add(i - day, "day");
	        daysInfo[i] = {
	            date: calcDate,
	            currentMonth: calcDate.month() === date.month(),
	        };
	    }
	    return daysInfo;
	}
	function MonthCalendar(props) {
	    const { value, curMonth, dateRender, dateInnerContent, selectHandler } = props;
	    const localeContext = React.useContext(LocaleContext);
	    const CalendarLocale = allLocales[localeContext.locale];
	    const weekList = [
	        "sunday",
	        "monday",
	        "tuesday",
	        "wednesday",
	        "thursday",
	        "friday",
	        "saturday",
	    ];
	    const allDays = getAllDays(curMonth);
	    function renderDays(days) {
	        const rows = [];
	        for (let i = 0; i < 6; i++) {
	            const row = [];
	            for (let j = 0; j < 7; j++) {
	                const item = days[i * 7 + j];
	                row[j] = (jsxRuntimeExports.jsx("div", { className: "calendar-month-body-cell " +
	                        (item.currentMonth ? "calendar-month-body-cell-current" : ""), onClick: () => selectHandler === null || selectHandler === undefined ? undefined : selectHandler(item.date), children: dateRender ? (dateRender(item.date)) : (jsxRuntimeExports.jsxs("div", { className: "calendar-month-body-cell-date", children: [jsxRuntimeExports.jsx("div", { className: classNames("calendar-month-body-cell-date-value", (value === null || value === undefined ? undefined : value.format("YYYY-MM-DD")) ===
	                                    item.date.format("YYYY-MM-DD")
	                                    ? "calendar-month-body-cell-date-selected"
	                                    : ""), children: item.date.date() }), jsxRuntimeExports.jsx("div", { className: "calendar-month-body-cell-date-content", children: dateInnerContent === null || dateInnerContent === undefined ? undefined : dateInnerContent(item.date) })] })) }));
	            }
	            rows.push(row);
	        }
	        return rows.map((row) => (jsxRuntimeExports.jsx("div", { className: "calendar-month-body-row", children: row })));
	    }
	    return (jsxRuntimeExports.jsxs("div", { className: "calendar-month", children: [jsxRuntimeExports.jsx("div", { className: "calendar-month-week-list", children: weekList.map((week) => (jsxRuntimeExports.jsx("div", { className: "calendar-month-week-list-item", children: CalendarLocale.week[week] }, week))) }), jsxRuntimeExports.jsx("div", { className: "calendar-month-body", children: renderDays(allDays) })] }));
	}

	var dayjs_min$1 = {exports: {}};

	var dayjs_min = dayjs_min$1.exports;

	var hasRequiredDayjs_min;

	function requireDayjs_min () {
		if (hasRequiredDayjs_min) return dayjs_min$1.exports;
		hasRequiredDayjs_min = 1;
		(function (module, exports) {
			!function(t,e){module.exports=e();}(dayjs_min,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return undefined===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,true),this.parse(t),this.$x=this.$x||t.x||{},this[p]=true;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,false)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case "YY":return String(e.$y).slice(-2);case "YYYY":return b.s(e.$y,4,"0");case "M":return a+1;case "MM":return b.s(a+1,2,"0");case "MMM":return h(n.monthsShort,a,c,3);case "MMMM":return h(c,a);case "D":return e.$D;case "DD":return b.s(e.$D,2,"0");case "d":return String(e.$W);case "dd":return h(n.weekdaysMin,e.$W,o,2);case "ddd":return h(n.weekdaysShort,e.$W,o,3);case "dddd":return o[e.$W];case "H":return String(s);case "HH":return b.s(s,2,"0");case "h":return d(1);case "hh":return d(2);case "a":return $(s,u,true);case "A":return $(s,u,false);case "m":return String(u);case "mm":return b.s(u,2,"0");case "s":return String(e.$s);case "ss":return b.s(e.$s,2,"0");case "SSS":return b.s(e.$ms,3,"0");case "Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,true);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=true),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
		} (dayjs_min$1));
		return dayjs_min$1.exports;
	}

	var dayjs_minExports = requireDayjs_min();
	var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

	function Header(props) {
	    const { curMonth, prevMonthHandler, nextMonthHandler, todayHandler } = props;
	    const localeContext = React.useContext(LocaleContext);
	    const CalendarContext = allLocales[localeContext.locale];
	    return (jsxRuntimeExports.jsx("div", { className: "calendar-header", children: jsxRuntimeExports.jsxs("div", { className: "calendar-header-left", children: [jsxRuntimeExports.jsx("div", { className: "calendar-header-icon", onClick: prevMonthHandler, children: "<" }), jsxRuntimeExports.jsx("div", { className: "calendar-header-value", children: curMonth.format(CalendarContext.formatMonth) }), jsxRuntimeExports.jsx("div", { className: "calendar-header-icon", onClick: nextMonthHandler, children: ">" }), jsxRuntimeExports.jsx("button", { className: "calendar-header-btn", onClick: todayHandler, children: CalendarContext.today })] }) }));
	}

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	function __spreadArray(to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	}

	typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
	    var e = new Error(message);
	    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};

	var isFunction$1 = function (value) {
	  return typeof value === 'function';
	};

	function useMemoizedFn(fn) {
	  var fnRef = React.useRef(fn);
	  // why not write `fnRef.current = fn`?
	  // https://github.com/alibaba/hooks/issues/728
	  fnRef.current = React.useMemo(function () {
	    return fn;
	  }, [fn]);
	  var memoizedFn = React.useRef();
	  if (!memoizedFn.current) {
	    memoizedFn.current = function () {
	      var args = [];
	      for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	      }
	      return fnRef.current.apply(this, args);
	    };
	  }
	  return memoizedFn.current;
	}

	var useUpdate = function () {
	  var _a = __read(React.useState({}), 2),
	    setState = _a[1];
	  return React.useCallback(function () {
	    return setState({});
	  }, []);
	};

	function useControllableValue(defaultProps, options) {
	  if (options === undefined) {
	    options = {};
	  }
	  var props = defaultProps !== null && defaultProps !== undefined ? defaultProps : {};
	  var defaultValue = options.defaultValue,
	    _a = options.defaultValuePropName,
	    defaultValuePropName = _a === undefined ? 'defaultValue' : _a,
	    _b = options.valuePropName,
	    valuePropName = _b === undefined ? 'value' : _b,
	    _c = options.trigger,
	    trigger = _c === undefined ? 'onChange' : _c;
	  var value = props[valuePropName];
	  var isControlled = Object.prototype.hasOwnProperty.call(props, valuePropName);
	  var initialValue = React.useMemo(function () {
	    if (isControlled) {
	      return value;
	    }
	    if (Object.prototype.hasOwnProperty.call(props, defaultValuePropName)) {
	      return props[defaultValuePropName];
	    }
	    return defaultValue;
	  }, []);
	  var stateRef = React.useRef(initialValue);
	  if (isControlled) {
	    stateRef.current = value;
	  }
	  var update = useUpdate();
	  function setState(v) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	      args[_i - 1] = arguments[_i];
	    }
	    var r = isFunction$1(v) ? v(stateRef.current) : v;
	    if (!isControlled) {
	      stateRef.current = r;
	      update();
	    }
	    if (props[trigger]) {
	      props[trigger].apply(props, __spreadArray([r], __read(args), false));
	    }
	  }
	  return [stateRef.current, useMemoizedFn(setState)];
	}

	function Calendar(props) {
	    const { value, style, className, dateRender, dateInnerContent, locale, onChange, } = props;
	    const [curValue, setCurValue] = useControllableValue(props, {
	        defaultValue: dayjs(),
	    });
	    const [curMonth, setCurMonth] = React.useState(curValue);
	    const classNames$1 = classNames("calendar", className);
	    function changeDate(date) {
	        setCurValue(date);
	        setCurMonth(date);
	        onChange === null || onChange === undefined ? undefined : onChange(date);
	    }
	    function selectHandler(date) {
	        changeDate(date);
	    }
	    function prevMonthHandler() {
	        setCurMonth(curMonth.subtract(1, "month"));
	    }
	    function nextMonthHandler() {
	        setCurMonth(curMonth.add(1, "month"));
	    }
	    function todayHandler() {
	        const date = dayjs(Date.now());
	        changeDate(date);
	    }
	    return (jsxRuntimeExports.jsx(LocaleContext.Provider, { value: {
	            locale: locale || navigator.language,
	        }, children: jsxRuntimeExports.jsxs("div", { className: classNames$1, style: style, children: [jsxRuntimeExports.jsx(Header, { curMonth: curMonth, prevMonthHandler: prevMonthHandler, nextMonthHandler: nextMonthHandler, todayHandler: todayHandler }), jsxRuntimeExports.jsx(MonthCalendar, Object.assign({}, props, { value: curValue, curMonth: curMonth, selectHandler: selectHandler }))] }) }));
	}

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Built-in value references. */
	var Symbol$1 = root.Symbol;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$9.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty$7.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$8.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$1 = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString$2.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$7 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$6).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue$1(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue$1(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

	  return value === proto;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag$1;
	}

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	/** Detect free variable `exports`. */
	var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

	/** Built-in value references. */
	var Buffer$1 = moduleExports$2 ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag$1 = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/** Detect free variable `exports`. */
	var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports$1 && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if (!(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$3.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeysIn(object);
	}

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$1 ? undefined : result;
	  }
	  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
	}

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$1.call(data, key);
	}

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/* Built-in method references that are verified to be native. */
	var Map$1 = getNative(root, 'Map');

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$1 || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	    Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  {
	    return buffer.slice();
	  }
	}

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = cloneArrayBuffer(typedArray.buffer) ;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function safeGet(object, key) {
	  if (key === 'constructor' && typeof object[key] === 'function') {
	    return;
	  }

	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = safeGet(object, key),
	      srcValue = safeGet(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || isFunction(objValue)) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    stack || (stack = new Stack);
	    if (isObject(srcValue)) {
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	// 判断对象是否为数字
	function isNumber(obj) {
	    return (Object.prototype.toString.call(obj) === "[object Number]" && obj === obj);
	}
	// 将值转换为数字
	const toNumber = (value, defaultValue) => {
	    if (value === undefined) {
	        return defaultValue;
	    }
	    if (isNumber(value)) {
	        return value;
	    }
	    const numberVal = parseFloat(value);
	    return isNumber(numberVal) ? numberVal : defaultValue;
	};
	// 默认配置
	const defaultOptions = {
	    rotate: -20,
	    zIndex: 1,
	    width: 100,
	    gap: [100, 100],
	    fontStyle: {
	        fontSize: "16px",
	        color: "rgba(0, 0, 0, 0.15)",
	        fontFamily: "sans-serif",
	        fontWeight: "normal",
	    },
	    getContainer: () => document.body,
	};
	// 合并用户配置和默认配置
	const getMergedOptions = (o) => {
	    var _a, _b, _c, _d, _e, _f;
	    const options = o || {};
	    const mergedOptions = Object.assign(Object.assign({}, options), { rotate: options.rotate || defaultOptions.rotate, zIndex: options.zIndex || defaultOptions.zIndex, fontStyle: Object.assign(Object.assign({}, defaultOptions.fontStyle), options.fontStyle), width: toNumber(options.width, options.image ? defaultOptions.width : undefined), height: toNumber(options.height, undefined), getContainer: options.getContainer, gap: [
	            toNumber((_a = options.gap) === null || _a === undefined ? undefined : _a[0], defaultOptions.gap[0]),
	            toNumber(((_b = options.gap) === null || _b === undefined ? undefined : _b[1]) || ((_c = options.gap) === null || _c === undefined ? undefined : _c[0]), defaultOptions.gap[1]),
	        ] });
	    const mergedOffsetX = toNumber((_d = mergedOptions.offset) === null || _d === undefined ? undefined : _d[0], 0);
	    const mergedOffsetY = toNumber(((_e = mergedOptions.offset) === null || _e === undefined ? undefined : _e[1]) || ((_f = mergedOptions.offset) === null || _f === undefined ? undefined : _f[0]), 0);
	    mergedOptions.offset = [mergedOffsetX, mergedOffsetY];
	    return mergedOptions;
	};
	// 测量文本尺寸
	const measureTextSize = (ctx, content, rotate) => {
	    let width = 0;
	    let height = 0;
	    const lineSize = [];
	    content.forEach((item) => {
	        const { width: textWidth, fontBoundingBoxAscent, fontBoundingBoxDescent, } = ctx.measureText(item);
	        const textHeight = fontBoundingBoxAscent + fontBoundingBoxDescent;
	        if (textWidth > width) {
	            width = textWidth;
	        }
	        height += textHeight;
	        lineSize.push({ height: textHeight, width: textWidth });
	    });
	    const angle = (rotate * Math.PI) / 180;
	    return {
	        originWidth: width,
	        originHeight: height,
	        width: Math.ceil(Math.abs(Math.sin(angle) * height) + Math.abs(Math.cos(angle) * width)),
	        height: Math.ceil(Math.abs(Math.sin(angle) * width) + Math.abs(height * Math.cos(angle))),
	        lineSize,
	    };
	};
	// 获取画布数据
	const getCanvasData = (options) => __awaiter(undefined, undefined, undefined, function* () {
	    const { rotate, image, content, fontStyle, gap } = options;
	    const canvas = document.createElement("canvas");
	    const ctx = canvas.getContext("2d");
	    const ratio = window.devicePixelRatio;
	    const configCanvas = (size) => {
	        const canvasWidth = gap[0] + size.width;
	        const canvasHeight = gap[1] + size.height;
	        canvas.setAttribute("width", `${canvasWidth * ratio}px`);
	        canvas.setAttribute("height", `${canvasHeight * ratio}px`);
	        canvas.style.width = `${canvasWidth}px`;
	        canvas.style.height = `${canvasHeight}px`;
	        ctx.translate((canvasWidth * ratio) / 2, (canvasHeight * ratio) / 2);
	        ctx.scale(ratio, ratio);
	        const RotateAngle = (rotate * Math.PI) / 180;
	        ctx.rotate(RotateAngle);
	    };
	    // 绘制文本
	    const drawText = () => {
	        const { fontSize, color, fontWeight, fontFamily } = fontStyle;
	        const realFontSize = toNumber(fontSize, 0) || fontStyle.fontSize;
	        ctx.font = `${fontWeight} ${realFontSize}px ${fontFamily}`;
	        const measureSize = measureTextSize(ctx, [...content], rotate);
	        const width = options.width || measureSize.width;
	        const height = options.height || measureSize.height;
	        configCanvas({ width, height });
	        ctx.fillStyle = color;
	        ctx.font = `${fontWeight} ${realFontSize}px ${fontFamily}`;
	        ctx.textBaseline = "top";
	        [...content].forEach((item, index) => {
	            const { height: lineHeight, width: lineWidth } = measureSize.lineSize[index];
	            const xStartPoint = -lineWidth / 2;
	            const yStartPoint = -(options.height || measureSize.originHeight) / 2 + lineHeight * index;
	            ctx.fillText(item, xStartPoint, yStartPoint, options.width || measureSize.originWidth);
	        });
	        return Promise.resolve({ base64Url: canvas.toDataURL(), height, width });
	    };
	    // 绘制图像
	    function drawImage() {
	        return new Promise((resolve) => {
	            const img = new Image();
	            img.crossOrigin = "anonymous";
	            img.referrerPolicy = "no-referrer";
	            img.src = image;
	            img.onload = () => {
	                let { width, height } = options;
	                if (!width || !height) {
	                    if (width) {
	                        height = (img.height / img.width) * +width;
	                    }
	                    else {
	                        width = (img.width / img.height) * +height;
	                    }
	                }
	                configCanvas({ width, height });
	                ctx.drawImage(img, -width / 2, -height / 2, width, height);
	                return resolve({ base64Url: canvas.toDataURL(), width, height });
	            };
	            img.onerror = () => {
	                return drawText();
	            };
	        });
	    }
	    return image ? drawImage() : drawText();
	});
	// 水印 Hook
	function useWatermark(params) {
	    const [options, setOptions] = React.useState(params);
	    const mergedOptions = getMergedOptions(options);
	    const watermarkDiv = React.useRef();
	    const mutationObserver = React.useRef();
	    const container = mergedOptions.getContainer();
	    const { zIndex, gap } = mergedOptions;
	    // 绘制水印
	    function drawWatermark() {
	        if (!container) {
	            return;
	        }
	        getCanvasData(mergedOptions).then(({ base64Url, width, height }) => {
	            var _a, _b;
	            const offsetLeft = mergedOptions.offset[0] + "px";
	            const offsetTop = mergedOptions.offset[1] + "px";
	            const wmStyle = `
      width:calc(100% - ${offsetLeft});
      height:calc(100% - ${offsetTop});
      position:absolute;
      top:${offsetTop};
      left:${offsetLeft};
      bottom:0;
      right:0;
      pointer-events: none;
      z-index:${zIndex};
      background-position: 0 0;
      background-size:${gap[0] + width}px ${gap[1] + height}px;
      background-repeat: repeat;
      background-image:url(${base64Url})`;
	            if (!watermarkDiv.current) {
	                const div = document.createElement("div");
	                watermarkDiv.current = div;
	                container.append(div);
	                container.style.position = "relative";
	            }
	            (_a = watermarkDiv.current) === null || _a === undefined ? undefined : _a.setAttribute("style", wmStyle.trim());
	            if (container) {
	                (_b = mutationObserver.current) === null || _b === undefined ? undefined : _b.disconnect();
	                mutationObserver.current = new MutationObserver((mutations) => {
	                    var _a, _b;
	                    const isChanged = mutations.some((mutation) => {
	                        let flag = false;
	                        if (mutation.removedNodes.length) {
	                            flag = Array.from(mutation.removedNodes).some((node) => node === watermarkDiv.current);
	                        }
	                        if (mutation.type === "attributes" &&
	                            mutation.target === watermarkDiv.current) {
	                            flag = true;
	                        }
	                        return flag;
	                    });
	                    if (isChanged) {
	                        (_b = (_a = watermarkDiv.current) === null || _a === undefined ? undefined : _a.parentNode) === null || _b === undefined ? undefined : _b.removeChild(watermarkDiv.current);
	                        watermarkDiv.current = undefined;
	                        drawWatermark();
	                    }
	                });
	                mutationObserver.current.observe(container, {
	                    attributes: true,
	                    subtree: true,
	                    childList: true,
	                });
	            }
	        });
	    }
	    React.useEffect(() => {
	        drawWatermark();
	    }, [options]);
	    return {
	        generateWatermark: (newOptions) => {
	            setOptions(merge({}, options, newOptions));
	        },
	    };
	}

	const Watermark = (props) => {
	    const { className, style, zIndex, width, height, rotate, image, content, fontStyle, gap, offset, } = props;
	    const containerRef = React.useRef(null);
	    const getContainer = React.useCallback(() => {
	        return props.getContainer ? props.getContainer() : containerRef.current;
	    }, [containerRef.current, props.getContainer]);
	    const { generateWatermark } = useWatermark({
	        zIndex,
	        width,
	        height,
	        rotate,
	        image,
	        content,
	        fontStyle,
	        gap,
	        offset,
	        getContainer,
	    });
	    React.useEffect(() => {
	        generateWatermark({
	            zIndex,
	            width,
	            height,
	            rotate,
	            image,
	            content,
	            fontStyle,
	            gap,
	            offset,
	            getContainer,
	        });
	    }, [
	        zIndex,
	        width,
	        height,
	        rotate,
	        image,
	        content,
	        JSON.stringify(props.fontStyle),
	        JSON.stringify(props.gap),
	        JSON.stringify(props.offset),
	        getContainer,
	    ]);
	    return props.children ? (jsxRuntimeExports.jsx("div", { className: className, style: style, ref: containerRef, children: props.children })) : null;
	};

	const initialState = {
	    top: [],
	    bottom: [],
	};
	function useStore(defaultPosition) {
	    const [messageList, setMessageList] = React.useState(Object.assign({}, initialState));
	    return {
	        messageList,
	        add: (messageProps) => {
	            const id = getId(messageProps);
	            setMessageList((preState) => {
	                var _a, _b;
	                if (messageProps === null || messageProps === undefined ? undefined : messageProps.id) {
	                    const position = getMessagePosition(preState, messageProps.id);
	                    if (position)
	                        return preState;
	                }
	                const position = messageProps.position || defaultPosition;
	                const isTop = position.includes("top");
	                const messages = isTop
	                    ? [Object.assign(Object.assign({}, messageProps), { id }), ...((_a = preState[position]) !== null && _a !== undefined ? _a : [])] //添加消息
	                    : [...((_b = preState[position]) !== null && _b !== undefined ? _b : []), Object.assign(Object.assign({}, messageProps), { id })];
	                return Object.assign(Object.assign({}, preState), { [position]: messages });
	            });
	            return id;
	        },
	        update: (id, messageProps) => {
	            if (!id)
	                return;
	            setMessageList((preState) => {
	                const nextState = Object.assign({}, preState);
	                const { position, index } = findMessage(nextState, id);
	                if (position && index !== -1) {
	                    nextState[position][index] = Object.assign(Object.assign({}, nextState[position][index]), messageProps);
	                }
	                return nextState;
	            });
	        },
	        remove: (id) => {
	            setMessageList((prevState) => {
	                const position = getMessagePosition(prevState, id);
	                if (!position)
	                    return prevState;
	                return Object.assign(Object.assign({}, prevState), { [position]: prevState[position].filter((notice) => notice.id !== id) });
	            });
	        },
	        clearAll: () => {
	            setMessageList(Object.assign({}, initialState));
	        },
	    };
	}
	let count = 1;
	function getId(messageProps) {
	    if (messageProps.id) {
	        return messageProps.id;
	    }
	    count += 1;
	    return count;
	}
	function getMessagePosition(messageList, id) {
	    for (const [position, list] of Object.entries(messageList)) {
	        if (list.find((item) => item.id === id)) {
	            return position;
	        }
	    }
	}
	function findMessage(messageList, id) {
	    const position = getMessagePosition(messageList, id);
	    const index = position
	        ? messageList[position].findIndex((message) => message.id === id)
	        : -1;
	    return {
	        position,
	        index,
	    };
	}

	function _extends$1() {
	  return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
	    for (var e = 1; e < arguments.length; e++) {
	      var t = arguments[e];
	      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
	    }
	    return n;
	  }, _extends$1.apply(null, arguments);
	}

	function _objectWithoutPropertiesLoose(r, e) {
	  if (null == r) return {};
	  var t = {};
	  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
	    if (e.includes(n)) continue;
	    t[n] = r[n];
	  }
	  return t;
	}

	function _setPrototypeOf$1(t, e) {
	  return _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
	    return t.__proto__ = e, t;
	  }, _setPrototypeOf$1(t, e);
	}

	function _inheritsLoose$1(t, o) {
	  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf$1(t, o);
	}

	/**
	 * Checks if a given element has a CSS class.
	 * 
	 * @param element the element
	 * @param className the CSS class name
	 */
	function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);
	  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
	}

	/**
	 * Adds a CSS class to a given element.
	 * 
	 * @param element the element
	 * @param className the CSS class name
	 */

	function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
	}

	function replaceClassName(origClass, classToRemove) {
	  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	}
	/**
	 * Removes a CSS class from a given element.
	 * 
	 * @param element the element
	 * @param className the CSS class name
	 */


	function removeClass$1(element, className) {
	  if (element.classList) {
	    element.classList.remove(className);
	  } else if (typeof element.className === 'string') {
	    element.className = replaceClassName(element.className, className);
	  } else {
	    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
	  }
	}

	var config = {
	  disabled: false
	};

	var TransitionGroupContext = React.createContext(null);

	var forceReflow = function forceReflow(node) {
	  return node.scrollTop;
	};

	var UNMOUNTED = 'unmounted';
	var EXITED = 'exited';
	var ENTERING = 'entering';
	var ENTERED = 'entered';
	var EXITING = 'exiting';
	/**
	 * The Transition component lets you describe a transition from one component
	 * state to another _over time_ with a simple declarative API. Most commonly
	 * it's used to animate the mounting and unmounting of a component, but can also
	 * be used to describe in-place transition states as well.
	 *
	 * ---
	 *
	 * **Note**: `Transition` is a platform-agnostic base component. If you're using
	 * transitions in CSS, you'll probably want to use
	 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
	 * instead. It inherits all the features of `Transition`, but contains
	 * additional features necessary to play nice with CSS transitions (hence the
	 * name of the component).
	 *
	 * ---
	 *
	 * By default the `Transition` component does not alter the behavior of the
	 * component it renders, it only tracks "enter" and "exit" states for the
	 * components. It's up to you to give meaning and effect to those states. For
	 * example we can add styles to a component when it enters or exits:
	 *
	 * ```jsx
	 * import { Transition } from 'react-transition-group';
	 *
	 * const duration = 300;
	 *
	 * const defaultStyle = {
	 *   transition: `opacity ${duration}ms ease-in-out`,
	 *   opacity: 0,
	 * }
	 *
	 * const transitionStyles = {
	 *   entering: { opacity: 1 },
	 *   entered:  { opacity: 1 },
	 *   exiting:  { opacity: 0 },
	 *   exited:  { opacity: 0 },
	 * };
	 *
	 * const Fade = ({ in: inProp }) => (
	 *   <Transition in={inProp} timeout={duration}>
	 *     {state => (
	 *       <div style={{
	 *         ...defaultStyle,
	 *         ...transitionStyles[state]
	 *       }}>
	 *         I'm a fade Transition!
	 *       </div>
	 *     )}
	 *   </Transition>
	 * );
	 * ```
	 *
	 * There are 4 main states a Transition can be in:
	 *  - `'entering'`
	 *  - `'entered'`
	 *  - `'exiting'`
	 *  - `'exited'`
	 *
	 * Transition state is toggled via the `in` prop. When `true` the component
	 * begins the "Enter" stage. During this stage, the component will shift from
	 * its current transition state, to `'entering'` for the duration of the
	 * transition and then to the `'entered'` stage once it's complete. Let's take
	 * the following example (we'll use the
	 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
	 *
	 * ```jsx
	 * function App() {
	 *   const [inProp, setInProp] = useState(false);
	 *   return (
	 *     <div>
	 *       <Transition in={inProp} timeout={500}>
	 *         {state => (
	 *           // ...
	 *         )}
	 *       </Transition>
	 *       <button onClick={() => setInProp(true)}>
	 *         Click to Enter
	 *       </button>
	 *     </div>
	 *   );
	 * }
	 * ```
	 *
	 * When the button is clicked the component will shift to the `'entering'` state
	 * and stay there for 500ms (the value of `timeout`) before it finally switches
	 * to `'entered'`.
	 *
	 * When `in` is `false` the same thing happens except the state moves from
	 * `'exiting'` to `'exited'`.
	 */

	var Transition = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose$1(Transition, _React$Component);

	  function Transition(props, context) {
	    var _this;

	    _this = _React$Component.call(this, props, context) || this;
	    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

	    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	    var initialStatus;
	    _this.appearStatus = null;

	    if (props.in) {
	      if (appear) {
	        initialStatus = EXITED;
	        _this.appearStatus = ENTERING;
	      } else {
	        initialStatus = ENTERED;
	      }
	    } else {
	      if (props.unmountOnExit || props.mountOnEnter) {
	        initialStatus = UNMOUNTED;
	      } else {
	        initialStatus = EXITED;
	      }
	    }

	    _this.state = {
	      status: initialStatus
	    };
	    _this.nextCallback = null;
	    return _this;
	  }

	  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
	    var nextIn = _ref.in;

	    if (nextIn && prevState.status === UNMOUNTED) {
	      return {
	        status: EXITED
	      };
	    }

	    return null;
	  } // getSnapshotBeforeUpdate(prevProps) {
	  //   let nextStatus = null
	  //   if (prevProps !== this.props) {
	  //     const { status } = this.state
	  //     if (this.props.in) {
	  //       if (status !== ENTERING && status !== ENTERED) {
	  //         nextStatus = ENTERING
	  //       }
	  //     } else {
	  //       if (status === ENTERING || status === ENTERED) {
	  //         nextStatus = EXITING
	  //       }
	  //     }
	  //   }
	  //   return { nextStatus }
	  // }
	  ;

	  var _proto = Transition.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.updateStatus(true, this.appearStatus);
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var nextStatus = null;

	    if (prevProps !== this.props) {
	      var status = this.state.status;

	      if (this.props.in) {
	        if (status !== ENTERING && status !== ENTERED) {
	          nextStatus = ENTERING;
	        }
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          nextStatus = EXITING;
	        }
	      }
	    }

	    this.updateStatus(false, nextStatus);
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };

	  _proto.getTimeouts = function getTimeouts() {
	    var timeout = this.props.timeout;
	    var exit, enter, appear;
	    exit = enter = appear = timeout;

	    if (timeout != null && typeof timeout !== 'number') {
	      exit = timeout.exit;
	      enter = timeout.enter; // TODO: remove fallback for next major

	      appear = timeout.appear !== undefined ? timeout.appear : enter;
	    }

	    return {
	      exit: exit,
	      enter: enter,
	      appear: appear
	    };
	  };

	  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
	    if (mounting === undefined) {
	      mounting = false;
	    }

	    if (nextStatus !== null) {
	      // nextStatus will always be ENTERING or EXITING.
	      this.cancelNextCallback();

	      if (nextStatus === ENTERING) {
	        if (this.props.unmountOnExit || this.props.mountOnEnter) {
	          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
	          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
	          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

	          if (node) forceReflow(node);
	        }

	        this.performEnter(mounting);
	      } else {
	        this.performExit();
	      }
	    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	      this.setState({
	        status: UNMOUNTED
	      });
	    }
	  };

	  _proto.performEnter = function performEnter(mounting) {
	    var _this2 = this;

	    var enter = this.props.enter;
	    var appearing = this.context ? this.context.isMounting : mounting;

	    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
	        maybeNode = _ref2[0],
	        maybeAppearing = _ref2[1];

	    var timeouts = this.getTimeouts();
	    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
	    // if we are mounting and running this it means appear _must_ be set

	    if (!mounting && !enter || config.disabled) {
	      this.safeSetState({
	        status: ENTERED
	      }, function () {
	        _this2.props.onEntered(maybeNode);
	      });
	      return;
	    }

	    this.props.onEnter(maybeNode, maybeAppearing);
	    this.safeSetState({
	      status: ENTERING
	    }, function () {
	      _this2.props.onEntering(maybeNode, maybeAppearing);

	      _this2.onTransitionEnd(enterTimeout, function () {
	        _this2.safeSetState({
	          status: ENTERED
	        }, function () {
	          _this2.props.onEntered(maybeNode, maybeAppearing);
	        });
	      });
	    });
	  };

	  _proto.performExit = function performExit() {
	    var _this3 = this;

	    var exit = this.props.exit;
	    var timeouts = this.getTimeouts();
	    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

	    if (!exit || config.disabled) {
	      this.safeSetState({
	        status: EXITED
	      }, function () {
	        _this3.props.onExited(maybeNode);
	      });
	      return;
	    }

	    this.props.onExit(maybeNode);
	    this.safeSetState({
	      status: EXITING
	    }, function () {
	      _this3.props.onExiting(maybeNode);

	      _this3.onTransitionEnd(timeouts.exit, function () {
	        _this3.safeSetState({
	          status: EXITED
	        }, function () {
	          _this3.props.onExited(maybeNode);
	        });
	      });
	    });
	  };

	  _proto.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };

	  _proto.safeSetState = function safeSetState(nextState, callback) {
	    // This shouldn't be necessary, but there are weird race conditions with
	    // setState callbacks and unmounting in testing, so always make sure that
	    // we can cancel any pending setState callbacks after we unmount.
	    callback = this.setNextCallback(callback);
	    this.setState(nextState, callback);
	  };

	  _proto.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;

	    var active = true;

	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	        callback(event);
	      }
	    };

	    this.nextCallback.cancel = function () {
	      active = false;
	    };

	    return this.nextCallback;
	  };

	  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
	    this.setNextCallback(handler);
	    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
	    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

	    if (!node || doesNotHaveTimeoutOrListener) {
	      setTimeout(this.nextCallback, 0);
	      return;
	    }

	    if (this.props.addEndListener) {
	      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
	          maybeNode = _ref3[0],
	          maybeNextCallback = _ref3[1];

	      this.props.addEndListener(maybeNode, maybeNextCallback);
	    }

	    if (timeout != null) {
	      setTimeout(this.nextCallback, timeout);
	    }
	  };

	  _proto.render = function render() {
	    var status = this.state.status;

	    if (status === UNMOUNTED) {
	      return null;
	    }

	    var _this$props = this.props,
	        children = _this$props.children;
	        _this$props.in;
	        _this$props.mountOnEnter;
	        _this$props.unmountOnExit;
	        _this$props.appear;
	        _this$props.enter;
	        _this$props.exit;
	        _this$props.timeout;
	        _this$props.addEndListener;
	        _this$props.onEnter;
	        _this$props.onEntering;
	        _this$props.onEntered;
	        _this$props.onExit;
	        _this$props.onExiting;
	        _this$props.onExited;
	        _this$props.nodeRef;
	        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

	    return (
	      /*#__PURE__*/
	      // allows for nested Transitions
	      React.createElement(TransitionGroupContext.Provider, {
	        value: null
	      }, typeof children === 'function' ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
	    );
	  };

	  return Transition;
	}(React.Component);

	Transition.contextType = TransitionGroupContext;
	Transition.propTypes = {}; // Name the function so it is clearer in the documentation

	function noop() {}

	Transition.defaultProps = {
	  in: false,
	  mountOnEnter: false,
	  unmountOnExit: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	Transition.UNMOUNTED = UNMOUNTED;
	Transition.EXITED = EXITED;
	Transition.ENTERING = ENTERING;
	Transition.ENTERED = ENTERED;
	Transition.EXITING = EXITING;

	var _addClass = function addClass$1(node, classes) {
	  return node && classes && classes.split(' ').forEach(function (c) {
	    return addClass(node, c);
	  });
	};

	var removeClass = function removeClass(node, classes) {
	  return node && classes && classes.split(' ').forEach(function (c) {
	    return removeClass$1(node, c);
	  });
	};
	/**
	 * A transition component inspired by the excellent
	 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
	 * use it if you're using CSS transitions or animations. It's built upon the
	 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
	 * component, so it inherits all of its props.
	 *
	 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
	 * and `exit` states of the transition. The first class is applied and then a
	 * second `*-active` class in order to activate the CSS transition. After the
	 * transition, matching `*-done` class names are applied to persist the
	 * transition state.
	 *
	 * ```jsx
	 * function App() {
	 *   const [inProp, setInProp] = useState(false);
	 *   return (
	 *     <div>
	 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
	 *         <div>
	 *           {"I'll receive my-node-* classes"}
	 *         </div>
	 *       </CSSTransition>
	 *       <button type="button" onClick={() => setInProp(true)}>
	 *         Click to Enter
	 *       </button>
	 *     </div>
	 *   );
	 * }
	 * ```
	 *
	 * When the `in` prop is set to `true`, the child component will first receive
	 * the class `example-enter`, then the `example-enter-active` will be added in
	 * the next tick. `CSSTransition` [forces a
	 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
	 * between before adding the `example-enter-active`. This is an important trick
	 * because it allows us to transition between `example-enter` and
	 * `example-enter-active` even though they were added immediately one after
	 * another. Most notably, this is what makes it possible for us to animate
	 * _appearance_.
	 *
	 * ```css
	 * .my-node-enter {
	 *   opacity: 0;
	 * }
	 * .my-node-enter-active {
	 *   opacity: 1;
	 *   transition: opacity 200ms;
	 * }
	 * .my-node-exit {
	 *   opacity: 1;
	 * }
	 * .my-node-exit-active {
	 *   opacity: 0;
	 *   transition: opacity 200ms;
	 * }
	 * ```
	 *
	 * `*-active` classes represent which styles you want to animate **to**, so it's
	 * important to add `transition` declaration only to them, otherwise transitions
	 * might not behave as intended! This might not be obvious when the transitions
	 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
	 * the example above (minus `transition`), but it becomes apparent in more
	 * complex transitions.
	 *
	 * **Note**: If you're using the
	 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
	 * prop, make sure to define styles for `.appear-*` classes as well.
	 */


	var CSSTransition = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose$1(CSSTransition, _React$Component);

	  function CSSTransition() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.appliedClasses = {
	      appear: {},
	      enter: {},
	      exit: {}
	    };

	    _this.onEnter = function (maybeNode, maybeAppearing) {
	      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
	          node = _this$resolveArgument[0],
	          appearing = _this$resolveArgument[1];

	      _this.removeClasses(node, 'exit');

	      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

	      if (_this.props.onEnter) {
	        _this.props.onEnter(maybeNode, maybeAppearing);
	      }
	    };

	    _this.onEntering = function (maybeNode, maybeAppearing) {
	      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
	          node = _this$resolveArgument2[0],
	          appearing = _this$resolveArgument2[1];

	      var type = appearing ? 'appear' : 'enter';

	      _this.addClass(node, type, 'active');

	      if (_this.props.onEntering) {
	        _this.props.onEntering(maybeNode, maybeAppearing);
	      }
	    };

	    _this.onEntered = function (maybeNode, maybeAppearing) {
	      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
	          node = _this$resolveArgument3[0],
	          appearing = _this$resolveArgument3[1];

	      var type = appearing ? 'appear' : 'enter';

	      _this.removeClasses(node, type);

	      _this.addClass(node, type, 'done');

	      if (_this.props.onEntered) {
	        _this.props.onEntered(maybeNode, maybeAppearing);
	      }
	    };

	    _this.onExit = function (maybeNode) {
	      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
	          node = _this$resolveArgument4[0];

	      _this.removeClasses(node, 'appear');

	      _this.removeClasses(node, 'enter');

	      _this.addClass(node, 'exit', 'base');

	      if (_this.props.onExit) {
	        _this.props.onExit(maybeNode);
	      }
	    };

	    _this.onExiting = function (maybeNode) {
	      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
	          node = _this$resolveArgument5[0];

	      _this.addClass(node, 'exit', 'active');

	      if (_this.props.onExiting) {
	        _this.props.onExiting(maybeNode);
	      }
	    };

	    _this.onExited = function (maybeNode) {
	      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
	          node = _this$resolveArgument6[0];

	      _this.removeClasses(node, 'exit');

	      _this.addClass(node, 'exit', 'done');

	      if (_this.props.onExited) {
	        _this.props.onExited(maybeNode);
	      }
	    };

	    _this.resolveArguments = function (maybeNode, maybeAppearing) {
	      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
	      : [maybeNode, maybeAppearing];
	    };

	    _this.getClassNames = function (type) {
	      var classNames = _this.props.classNames;
	      var isStringClassNames = typeof classNames === 'string';
	      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
	      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
	      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
	      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
	      return {
	        baseClassName: baseClassName,
	        activeClassName: activeClassName,
	        doneClassName: doneClassName
	      };
	    };

	    return _this;
	  }

	  var _proto = CSSTransition.prototype;

	  _proto.addClass = function addClass(node, type, phase) {
	    var className = this.getClassNames(type)[phase + "ClassName"];

	    var _this$getClassNames = this.getClassNames('enter'),
	        doneClassName = _this$getClassNames.doneClassName;

	    if (type === 'appear' && phase === 'done' && doneClassName) {
	      className += " " + doneClassName;
	    } // This is to force a repaint,
	    // which is necessary in order to transition styles when adding a class name.


	    if (phase === 'active') {
	      if (node) forceReflow(node);
	    }

	    if (className) {
	      this.appliedClasses[type][phase] = className;

	      _addClass(node, className);
	    }
	  };

	  _proto.removeClasses = function removeClasses(node, type) {
	    var _this$appliedClasses$ = this.appliedClasses[type],
	        baseClassName = _this$appliedClasses$.base,
	        activeClassName = _this$appliedClasses$.active,
	        doneClassName = _this$appliedClasses$.done;
	    this.appliedClasses[type] = {};

	    if (baseClassName) {
	      removeClass(node, baseClassName);
	    }

	    if (activeClassName) {
	      removeClass(node, activeClassName);
	    }

	    if (doneClassName) {
	      removeClass(node, doneClassName);
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props;
	        _this$props.classNames;
	        var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

	    return /*#__PURE__*/React.createElement(Transition, _extends$1({}, props, {
	      onEnter: this.onEnter,
	      onEntered: this.onEntered,
	      onEntering: this.onEntering,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }));
	  };

	  return CSSTransition;
	}(React.Component);

	CSSTransition.defaultProps = {
	  classNames: ''
	};
	CSSTransition.propTypes = {};

	function _assertThisInitialized(e) {
	  if (undefined === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  return e;
	}

	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */

	function getChildMapping(children, mapFn) {
	  var mapper = function mapper(child) {
	    return mapFn && React.isValidElement(child) ? mapFn(child) : child;
	  };

	  var result = Object.create(null);
	  if (children) React.Children.map(children, function (c) {
	    return c;
	  }).forEach(function (child) {
	    // run the map function here instead so that the key is the computed one
	    result[child.key] = mapper(child);
	  });
	  return result;
	}
	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */

	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};

	  function getValueForKey(key) {
	    return key in next ? next[key] : prev[key];
	  } // For each key of `next`, the list of keys to insert before that key in
	  // the combined list


	  var nextKeysPending = Object.create(null);
	  var pendingKeys = [];

	  for (var prevKey in prev) {
	    if (prevKey in next) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }

	  var i;
	  var childMapping = {};

	  for (var nextKey in next) {
	    if (nextKeysPending[nextKey]) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }

	    childMapping[nextKey] = getValueForKey(nextKey);
	  } // Finally, add the keys which didn't appear before any key in `next`


	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }

	  return childMapping;
	}

	function getProp(child, prop, props) {
	  return props[prop] != null ? props[prop] : child.props[prop];
	}

	function getInitialChildMapping(props, onExited) {
	  return getChildMapping(props.children, function (child) {
	    return React.cloneElement(child, {
	      onExited: onExited.bind(null, child),
	      in: true,
	      appear: getProp(child, 'appear', props),
	      enter: getProp(child, 'enter', props),
	      exit: getProp(child, 'exit', props)
	    });
	  });
	}
	function getNextChildMapping(nextProps, prevChildMapping, onExited) {
	  var nextChildMapping = getChildMapping(nextProps.children);
	  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
	  Object.keys(children).forEach(function (key) {
	    var child = children[key];
	    if (!React.isValidElement(child)) return;
	    var hasPrev = (key in prevChildMapping);
	    var hasNext = (key in nextChildMapping);
	    var prevChild = prevChildMapping[key];
	    var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

	    if (hasNext && (!hasPrev || isLeaving)) {
	      // console.log('entering', key)
	      children[key] = React.cloneElement(child, {
	        onExited: onExited.bind(null, child),
	        in: true,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    } else if (!hasNext && hasPrev && !isLeaving) {
	      // item is old (exiting)
	      // console.log('leaving', key)
	      children[key] = React.cloneElement(child, {
	        in: false
	      });
	    } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
	      // item hasn't changed transition states
	      // copy over the last transition props;
	      // console.log('unchanged', key)
	      children[key] = React.cloneElement(child, {
	        onExited: onExited.bind(null, child),
	        in: prevChild.props.in,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    }
	  });
	  return children;
	}

	var values = Object.values || function (obj) {
	  return Object.keys(obj).map(function (k) {
	    return obj[k];
	  });
	};

	var defaultProps = {
	  component: 'div',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	};
	/**
	 * The `<TransitionGroup>` component manages a set of transition components
	 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
	 * components, `<TransitionGroup>` is a state machine for managing the mounting
	 * and unmounting of components over time.
	 *
	 * Consider the example below. As items are removed or added to the TodoList the
	 * `in` prop is toggled automatically by the `<TransitionGroup>`.
	 *
	 * Note that `<TransitionGroup>`  does not define any animation behavior!
	 * Exactly _how_ a list item animates is up to the individual transition
	 * component. This means you can mix and match animations across different list
	 * items.
	 */

	var TransitionGroup = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose$1(TransitionGroup, _React$Component);

	  function TransitionGroup(props, context) {
	    var _this;

	    _this = _React$Component.call(this, props, context) || this;

	    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


	    _this.state = {
	      contextValue: {
	        isMounting: true
	      },
	      handleExited: handleExited,
	      firstRender: true
	    };
	    return _this;
	  }

	  var _proto = TransitionGroup.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	    this.setState({
	      contextValue: {
	        isMounting: false
	      }
	    });
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };

	  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
	    var prevChildMapping = _ref.children,
	        handleExited = _ref.handleExited,
	        firstRender = _ref.firstRender;
	    return {
	      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
	      firstRender: false
	    };
	  } // node is `undefined` when user provided `nodeRef` prop
	  ;

	  _proto.handleExited = function handleExited(child, node) {
	    var currentChildMapping = getChildMapping(this.props.children);
	    if (child.key in currentChildMapping) return;

	    if (child.props.onExited) {
	      child.props.onExited(node);
	    }

	    if (this.mounted) {
	      this.setState(function (state) {
	        var children = _extends$1({}, state.children);

	        delete children[child.key];
	        return {
	          children: children
	        };
	      });
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        Component = _this$props.component,
	        childFactory = _this$props.childFactory,
	        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

	    var contextValue = this.state.contextValue;
	    var children = values(this.state.children).map(childFactory);
	    delete props.appear;
	    delete props.enter;
	    delete props.exit;

	    if (Component === null) {
	      return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
	        value: contextValue
	      }, children);
	    }

	    return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
	      value: contextValue
	    }, /*#__PURE__*/React.createElement(Component, props, children));
	  };

	  return TransitionGroup;
	}(React.Component);

	TransitionGroup.propTypes = {};
	TransitionGroup.defaultProps = defaultProps;

	function useTimer(props) {
	    const { remove, id, duration = 2000 } = props;
	    const timer = React.useRef(null);
	    const startTimer = () => {
	        timer.current = window.setTimeout(() => {
	            remove(id);
	            removeTimer();
	        }, duration);
	    };
	    const removeTimer = () => {
	        if (timer.current) {
	            clearTimeout(timer.current);
	            timer.current = null;
	        }
	    };
	    React.useEffect(() => {
	        startTimer();
	        return () => removeTimer();
	    }, []);
	    const onMouseEnter = () => {
	        removeTimer();
	    };
	    const onMouseLeave = () => {
	        startTimer();
	    };
	    return {
	        onMouseEnter,
	        onMouseLeave,
	    };
	}

	const MessageItem = (item) => {
	    const { onMouseEnter, onMouseLeave } = useTimer({
	        id: item.id,
	        duration: item.duration,
	        remove: item.onClose,
	    });
	    return (jsxRuntimeExports.jsx("div", { className: "message-item", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, children: item.content }));
	};
	const MessageProvider = React.forwardRef((props, ref) => {
	    const { messageList, add, update, remove, clearAll } = useStore("top");
	    //   useImperativeHandle(//他的执行时机有问题，不是立即修改ref
	    //     ref,
	    //     () => {
	    //       return {
	    //         add,
	    //         update,
	    //         remove,
	    //         clearAll,
	    //       };
	    //     },
	    //     []
	    //   );
	    if ("current" in ref) {
	        ref.current = {
	            add,
	            update,
	            remove,
	            clearAll,
	        };
	    }
	    const positions = Object.keys(messageList);
	    const messageWrapper = (jsxRuntimeExports.jsx("div", { className: "message-wrapper", children: positions.map((direction) => {
	            return (jsxRuntimeExports.jsx("div", { className: `message-wrapper-${direction}`, children: jsxRuntimeExports.jsx(TransitionGroup, { children: messageList[direction].map((item) => {
	                        const nodeRef = React.createRef();
	                        return (jsxRuntimeExports.jsx(CSSTransition, { timeout: 1000, classNames: "message", nodeRef: nodeRef, children: jsxRuntimeExports.jsx("div", { ref: nodeRef, children: jsxRuntimeExports.jsx(MessageItem, Object.assign({ onClose: remove }, item)) }) }, item.id));
	                    }) }) }, direction));
	        }) }));
	    const el = React.useMemo(() => {
	        const el = document.createElement("div");
	        el.className = `wrapper`;
	        document.body.appendChild(el);
	        return el;
	    }, []);
	    return ReactDOM.createPortal(messageWrapper, el);
	});

	const ConfigContext$1 = React.createContext({});
	function ConfigProvider(props) {
	    const { children } = props;
	    const messageRef = React.useRef(null);
	    return (jsxRuntimeExports.jsxs(ConfigContext$1.Provider, { value: { messageRef }, children: [jsxRuntimeExports.jsx(MessageProvider, { ref: messageRef }), children] }));
	}

	function useMessage() {
	    const { messageRef } = React.useContext(ConfigContext$1);
	    if (!messageRef) {
	        throw new Error("请在最外层添加 ConfigProvider 组件");
	    }
	    return messageRef.current;
	}

	//处理大小
	const getSize = (size) => {
	    if (Array.isArray(size) && size.length === 2) {
	        return size;
	    }
	    const width = size || "1em";
	    const height = size || "1em";
	    return [width, height];
	};
	const Icon = React.forwardRef((props, ref) => {
	    const { style, className, spin, size = "1em", children } = props, rest = __rest(props, ["style", "className", "spin", "size", "children"]);
	    const [width, height] = getSize(size);
	    const cn = classNames("icon", {
	        "icon-spin": spin,
	    }, className);
	    return (jsxRuntimeExports.jsx("svg", Object.assign({ ref: ref, className: cn, style: style, width: width, height: height, fill: "currentColor" }, rest, { children: children })));
	});

	function createIcon(options) {
	    const { content, iconProps = {}, viewBox = "0 0 1024 1024" } = options;
	    return React.forwardRef((props, ref) => {
	        return (jsxRuntimeExports.jsx(Icon, Object.assign({ ref: ref, viewBox: viewBox }, iconProps, props, { children: content })));
	    });
	}

	const IconAdd = createIcon({
	    content: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" }) })),
	});

	const IconEmail = createIcon({
	    content: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M874.666667 181.333333H149.333333c-40.533333 0-74.666667 34.133333-74.666666 74.666667v512c0 40.533333 34.133333 74.666667 74.666666 74.666667h725.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V256c0-40.533333-34.133333-74.666667-74.666666-74.666667z m-725.333334 64h725.333334c6.4 0 10.666667 4.266667 10.666666 10.666667v25.6L512 516.266667l-373.333333-234.666667V256c0-6.4 4.266667-10.666667 10.666666-10.666667z m725.333334 533.333334H149.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667V356.266667l356.266666 224c4.266667 4.266667 10.666667 4.266667 17.066667 4.266666s12.8-2.133333 17.066667-4.266666l356.266666-224V768c0 6.4-4.266667 10.666667-10.666666 10.666667z" }) })),
	});

	var FormContext = React.createContext({});

	const Form$1 = React.forwardRef((props, ref) => {
	    const { className, style, children, onFinish, onFinishFailed, initialValues } = props, others = __rest(props, ["className", "style", "children", "onFinish", "onFinishFailed", "initialValues"]);
	    const [values, setValues] = React.useState(initialValues || {});
	    React.useImperativeHandle(ref, () => {
	        return {
	            getFieldsValue() {
	                return values;
	            },
	            setFieldsValue(fieldValues) {
	                setValues(Object.assign(Object.assign({}, values), fieldValues));
	            },
	        };
	    }, []);
	    const validatorMap = React.useRef(new Map()); //用来存储校验规则，不需要重新渲染
	    const errors = React.useRef({}); //用来存储错误信息
	    const onValueChange = (key, value) => {
	        values[key] = value;
	    };
	    const handleSubmit = (e) => {
	        e.preventDefault(); //阻止默认事件，防止页面刷新
	        for (let [key, callbackFunc] of validatorMap.current) {
	            if (typeof callbackFunc === "function") {
	                errors.current[key] = callbackFunc();
	            }
	        }
	        const errorList = Object.keys(errors.current)
	            .map((key) => {
	            return errors.current[key];
	        })
	            .filter(Boolean);
	        if (errorList.length) {
	            onFinishFailed === null || onFinishFailed === undefined ? undefined : onFinishFailed(errors.current);
	        }
	        else {
	            onFinish === null || onFinish === undefined ? undefined : onFinish(values);
	        }
	    };
	    const handleValidateRegister = (name, cb) => {
	        validatorMap.current.set(name, cb);
	    };
	    const cls = classNames("ant-form", className);
	    return (jsxRuntimeExports.jsx(FormContext.Provider, { value: {
	            onValueChange,
	            values,
	            setValues: (v) => setValues(v),
	            validateRegister: handleValidateRegister,
	        }, children: jsxRuntimeExports.jsx("form", Object.assign({}, others, { className: cls, style: style, onSubmit: handleSubmit, children: children })) }));
	});

	function _extends() {
	  _extends = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	  return _extends.apply(this, arguments);
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;

	  _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _construct(Parent, args, Class) {
	  if (_isNativeReflectConstruct()) {
	    _construct = Reflect.construct.bind();
	  } else {
	    _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) _setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }

	  return _construct.apply(null, arguments);
	}

	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;

	  _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !_isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
	    }

	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return _setPrototypeOf(Wrapper, Class);
	  };

	  return _wrapNativeSuper(Class);
	}

	/* eslint no-console:0 */
	var formatRegExp = /%[sdj%]/g;
	var warning = function warning() {}; // don't print warning message when in production env or node runtime

	if (typeof process !== 'undefined' && process.env && "production" !== 'production') ;

	function convertFieldsError(errors) {
	  if (!errors || !errors.length) return null;
	  var fields = {};
	  errors.forEach(function (error) {
	    var field = error.field;
	    fields[field] = fields[field] || [];
	    fields[field].push(error);
	  });
	  return fields;
	}
	function format(template) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  var i = 0;
	  var len = args.length;

	  if (typeof template === 'function') {
	    return template.apply(null, args);
	  }

	  if (typeof template === 'string') {
	    var str = template.replace(formatRegExp, function (x) {
	      if (x === '%%') {
	        return '%';
	      }

	      if (i >= len) {
	        return x;
	      }

	      switch (x) {
	        case '%s':
	          return String(args[i++]);

	        case '%d':
	          return Number(args[i++]);

	        case '%j':
	          try {
	            return JSON.stringify(args[i++]);
	          } catch (_) {
	            return '[Circular]';
	          }

	          break;

	        default:
	          return x;
	      }
	    });
	    return str;
	  }

	  return template;
	}

	function isNativeStringType(type) {
	  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
	}

	function isEmptyValue(value, type) {
	  if (value === undefined || value === null) {
	    return true;
	  }

	  if (type === 'array' && Array.isArray(value) && !value.length) {
	    return true;
	  }

	  if (isNativeStringType(type) && typeof value === 'string' && !value) {
	    return true;
	  }

	  return false;
	}

	function asyncParallelArray(arr, func, callback) {
	  var results = [];
	  var total = 0;
	  var arrLength = arr.length;

	  function count(errors) {
	    results.push.apply(results, errors || []);
	    total++;

	    if (total === arrLength) {
	      callback(results);
	    }
	  }

	  arr.forEach(function (a) {
	    func(a, count);
	  });
	}

	function asyncSerialArray(arr, func, callback) {
	  var index = 0;
	  var arrLength = arr.length;

	  function next(errors) {
	    if (errors && errors.length) {
	      callback(errors);
	      return;
	    }

	    var original = index;
	    index = index + 1;

	    if (original < arrLength) {
	      func(arr[original], next);
	    } else {
	      callback([]);
	    }
	  }

	  next([]);
	}

	function flattenObjArr(objArr) {
	  var ret = [];
	  Object.keys(objArr).forEach(function (k) {
	    ret.push.apply(ret, objArr[k] || []);
	  });
	  return ret;
	}

	var AsyncValidationError = /*#__PURE__*/function (_Error) {
	  _inheritsLoose(AsyncValidationError, _Error);

	  function AsyncValidationError(errors, fields) {
	    var _this;

	    _this = _Error.call(this, 'Async Validation Error') || this;
	    _this.errors = errors;
	    _this.fields = fields;
	    return _this;
	  }

	  return AsyncValidationError;
	}( /*#__PURE__*/_wrapNativeSuper(Error));
	function asyncMap(objArr, option, func, callback, source) {
	  if (option.first) {
	    var _pending = new Promise(function (resolve, reject) {
	      var next = function next(errors) {
	        callback(errors);
	        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
	      };

	      var flattenArr = flattenObjArr(objArr);
	      asyncSerialArray(flattenArr, func, next);
	    });

	    _pending["catch"](function (e) {
	      return e;
	    });

	    return _pending;
	  }

	  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
	  var objArrKeys = Object.keys(objArr);
	  var objArrLength = objArrKeys.length;
	  var total = 0;
	  var results = [];
	  var pending = new Promise(function (resolve, reject) {
	    var next = function next(errors) {
	      results.push.apply(results, errors);
	      total++;

	      if (total === objArrLength) {
	        callback(results);
	        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
	      }
	    };

	    if (!objArrKeys.length) {
	      callback(results);
	      resolve(source);
	    }

	    objArrKeys.forEach(function (key) {
	      var arr = objArr[key];

	      if (firstFields.indexOf(key) !== -1) {
	        asyncSerialArray(arr, func, next);
	      } else {
	        asyncParallelArray(arr, func, next);
	      }
	    });
	  });
	  pending["catch"](function (e) {
	    return e;
	  });
	  return pending;
	}

	function isErrorObj(obj) {
	  return !!(obj && obj.message !== undefined);
	}

	function getValue(value, path) {
	  var v = value;

	  for (var i = 0; i < path.length; i++) {
	    if (v == undefined) {
	      return v;
	    }

	    v = v[path[i]];
	  }

	  return v;
	}

	function complementError(rule, source) {
	  return function (oe) {
	    var fieldValue;

	    if (rule.fullFields) {
	      fieldValue = getValue(source, rule.fullFields);
	    } else {
	      fieldValue = source[oe.field || rule.fullField];
	    }

	    if (isErrorObj(oe)) {
	      oe.field = oe.field || rule.fullField;
	      oe.fieldValue = fieldValue;
	      return oe;
	    }

	    return {
	      message: typeof oe === 'function' ? oe() : oe,
	      fieldValue: fieldValue,
	      field: oe.field || rule.fullField
	    };
	  };
	}
	function deepMerge(target, source) {
	  if (source) {
	    for (var s in source) {
	      if (source.hasOwnProperty(s)) {
	        var value = source[s];

	        if (typeof value === 'object' && typeof target[s] === 'object') {
	          target[s] = _extends({}, target[s], value);
	        } else {
	          target[s] = value;
	        }
	      }
	    }
	  }

	  return target;
	}

	var required$1 = function required(rule, value, source, errors, options, type) {
	  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
	    errors.push(format(options.messages.required, rule.fullField));
	  }
	};

	/**
	 *  Rule for validating whitespace.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */

	var whitespace = function whitespace(rule, value, source, errors, options) {
	  if (/^\s+$/.test(value) || value === '') {
	    errors.push(format(options.messages.whitespace, rule.fullField));
	  }
	};

	// https://github.com/kevva/url-regex/blob/master/index.js
	var urlReg;
	var getUrlRegex = (function () {
	  if (urlReg) {
	    return urlReg;
	  }

	  var word = '[a-fA-F\\d:]';

	  var b = function b(options) {
	    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : '';
	  };

	  var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
	  var v6seg = '[a-fA-F\\d]{1,4}';
	  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

	  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
	  var v4exact = new RegExp("^" + v4 + "$");
	  var v6exact = new RegExp("^" + v6 + "$");

	  var ip = function ip(options) {
	    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
	  };

	  ip.v4 = function (options) {
	    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
	  };

	  ip.v6 = function (options) {
	    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
	  };

	  var protocol = "(?:(?:[a-z]+:)?//)";
	  var auth = '(?:\\S+(?::\\S*)?@)?';
	  var ipv4 = ip.v4().source;
	  var ipv6 = ip.v6().source;
	  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
	  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
	  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
	  var port = '(?::\\d{2,5})?';
	  var path = '(?:[/?#][^\\s"]*)?';
	  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
	  urlReg = new RegExp("(?:^" + regex + "$)", 'i');
	  return urlReg;
	});

	/* eslint max-len:0 */

	var pattern$2 = {
	  // http://emailregex.com/
	  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
	  // url: new RegExp(
	  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
	  //   'i',
	  // ),
	  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	};
	var types = {
	  integer: function integer(value) {
	    return types.number(value) && parseInt(value, 10) === value;
	  },
	  "float": function float(value) {
	    return types.number(value) && !types.integer(value);
	  },
	  array: function array(value) {
	    return Array.isArray(value);
	  },
	  regexp: function regexp(value) {
	    if (value instanceof RegExp) {
	      return true;
	    }

	    try {
	      return !!new RegExp(value);
	    } catch (e) {
	      return false;
	    }
	  },
	  date: function date(value) {
	    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
	  },
	  number: function number(value) {
	    if (isNaN(value)) {
	      return false;
	    }

	    return typeof value === 'number';
	  },
	  object: function object(value) {
	    return typeof value === 'object' && !types.array(value);
	  },
	  method: function method(value) {
	    return typeof value === 'function';
	  },
	  email: function email(value) {
	    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
	  },
	  url: function url(value) {
	    return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
	  },
	  hex: function hex(value) {
	    return typeof value === 'string' && !!value.match(pattern$2.hex);
	  }
	};

	var type$1 = function type(rule, value, source, errors, options) {
	  if (rule.required && value === undefined) {
	    required$1(rule, value, source, errors, options);
	    return;
	  }

	  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
	  var ruleType = rule.type;

	  if (custom.indexOf(ruleType) > -1) {
	    if (!types[ruleType](value)) {
	      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
	    } // straight typeof check

	  } else if (ruleType && typeof value !== rule.type) {
	    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
	  }
	};

	var range = function range(rule, value, source, errors, options) {
	  var len = typeof rule.len === 'number';
	  var min = typeof rule.min === 'number';
	  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

	  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	  var val = value;
	  var key = null;
	  var num = typeof value === 'number';
	  var str = typeof value === 'string';
	  var arr = Array.isArray(value);

	  if (num) {
	    key = 'number';
	  } else if (str) {
	    key = 'string';
	  } else if (arr) {
	    key = 'array';
	  } // if the value is not of a supported type for range validation
	  // the validation rule rule should use the
	  // type property to also test for a particular type


	  if (!key) {
	    return false;
	  }

	  if (arr) {
	    val = value.length;
	  }

	  if (str) {
	    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
	    val = value.replace(spRegexp, '_').length;
	  }

	  if (len) {
	    if (val !== rule.len) {
	      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
	    }
	  } else if (min && !max && val < rule.min) {
	    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
	  } else if (max && !min && val > rule.max) {
	    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
	  } else if (min && max && (val < rule.min || val > rule.max)) {
	    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
	  }
	};

	var ENUM$1 = 'enum';

	var enumerable$1 = function enumerable(rule, value, source, errors, options) {
	  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

	  if (rule[ENUM$1].indexOf(value) === -1) {
	    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
	  }
	};

	var pattern$1 = function pattern(rule, value, source, errors, options) {
	  if (rule.pattern) {
	    if (rule.pattern instanceof RegExp) {
	      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
	      // flag is accidentally set to `true`, which in a validation scenario
	      // is not necessary and the result might be misleading
	      rule.pattern.lastIndex = 0;

	      if (!rule.pattern.test(value)) {
	        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	      }
	    } else if (typeof rule.pattern === 'string') {
	      var _pattern = new RegExp(rule.pattern);

	      if (!_pattern.test(value)) {
	        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	      }
	    }
	  }
	};

	var rules = {
	  required: required$1,
	  whitespace: whitespace,
	  type: type$1,
	  range: range,
	  "enum": enumerable$1,
	  pattern: pattern$1
	};

	var string = function string(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value, 'string') && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options, 'string');

	    if (!isEmptyValue(value, 'string')) {
	      rules.type(rule, value, source, errors, options);
	      rules.range(rule, value, source, errors, options);
	      rules.pattern(rule, value, source, errors, options);

	      if (rule.whitespace === true) {
	        rules.whitespace(rule, value, source, errors, options);
	      }
	    }
	  }

	  callback(errors);
	};

	var method = function method(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);

	    if (value !== undefined) {
	      rules.type(rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var number = function number(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (value === '') {
	      value = undefined;
	    }

	    if (isEmptyValue(value) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);

	    if (value !== undefined) {
	      rules.type(rule, value, source, errors, options);
	      rules.range(rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var _boolean = function _boolean(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);

	    if (value !== undefined) {
	      rules.type(rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var regexp = function regexp(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);

	    if (!isEmptyValue(value)) {
	      rules.type(rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var integer = function integer(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);

	    if (value !== undefined) {
	      rules.type(rule, value, source, errors, options);
	      rules.range(rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var floatFn = function floatFn(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);

	    if (value !== undefined) {
	      rules.type(rule, value, source, errors, options);
	      rules.range(rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var array = function array(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if ((value === undefined || value === null) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options, 'array');

	    if (value !== undefined && value !== null) {
	      rules.type(rule, value, source, errors, options);
	      rules.range(rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var object = function object(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);

	    if (value !== undefined) {
	      rules.type(rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var ENUM = 'enum';

	var enumerable = function enumerable(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);

	    if (value !== undefined) {
	      rules[ENUM](rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var pattern = function pattern(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value, 'string') && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);

	    if (!isEmptyValue(value, 'string')) {
	      rules.pattern(rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var date = function date(rule, value, callback, source, options) {
	  // console.log('integer rule called %j', rule);
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

	  if (validate) {
	    if (isEmptyValue(value, 'date') && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);

	    if (!isEmptyValue(value, 'date')) {
	      var dateObject;

	      if (value instanceof Date) {
	        dateObject = value;
	      } else {
	        dateObject = new Date(value);
	      }

	      rules.type(rule, dateObject, source, errors, options);

	      if (dateObject) {
	        rules.range(rule, dateObject.getTime(), source, errors, options);
	      }
	    }
	  }

	  callback(errors);
	};

	var required = function required(rule, value, callback, source, options) {
	  var errors = [];
	  var type = Array.isArray(value) ? 'array' : typeof value;
	  rules.required(rule, value, source, errors, options, type);
	  callback(errors);
	};

	var type = function type(rule, value, callback, source, options) {
	  var ruleType = rule.type;
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value, ruleType) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options, ruleType);

	    if (!isEmptyValue(value, ruleType)) {
	      rules.type(rule, value, source, errors, options);
	    }
	  }

	  callback(errors);
	};

	var any = function any(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	  if (validate) {
	    if (isEmptyValue(value) && !rule.required) {
	      return callback();
	    }

	    rules.required(rule, value, source, errors, options);
	  }

	  callback(errors);
	};

	var validators = {
	  string: string,
	  method: method,
	  number: number,
	  "boolean": _boolean,
	  regexp: regexp,
	  integer: integer,
	  "float": floatFn,
	  array: array,
	  object: object,
	  "enum": enumerable,
	  pattern: pattern,
	  date: date,
	  url: type,
	  hex: type,
	  email: type,
	  required: required,
	  any: any
	};

	function newMessages() {
	  return {
	    "default": 'Validation error on field %s',
	    required: '%s is required',
	    "enum": '%s must be one of %s',
	    whitespace: '%s cannot be empty',
	    date: {
	      format: '%s date %s is invalid for format %s',
	      parse: '%s date could not be parsed, %s is invalid ',
	      invalid: '%s date %s is invalid'
	    },
	    types: {
	      string: '%s is not a %s',
	      method: '%s is not a %s (function)',
	      array: '%s is not an %s',
	      object: '%s is not an %s',
	      number: '%s is not a %s',
	      date: '%s is not a %s',
	      "boolean": '%s is not a %s',
	      integer: '%s is not an %s',
	      "float": '%s is not a %s',
	      regexp: '%s is not a valid %s',
	      email: '%s is not a valid %s',
	      url: '%s is not a valid %s',
	      hex: '%s is not a valid %s'
	    },
	    string: {
	      len: '%s must be exactly %s characters',
	      min: '%s must be at least %s characters',
	      max: '%s cannot be longer than %s characters',
	      range: '%s must be between %s and %s characters'
	    },
	    number: {
	      len: '%s must equal %s',
	      min: '%s cannot be less than %s',
	      max: '%s cannot be greater than %s',
	      range: '%s must be between %s and %s'
	    },
	    array: {
	      len: '%s must be exactly %s in length',
	      min: '%s cannot be less than %s in length',
	      max: '%s cannot be greater than %s in length',
	      range: '%s must be between %s and %s in length'
	    },
	    pattern: {
	      mismatch: '%s value %s does not match pattern %s'
	    },
	    clone: function clone() {
	      var cloned = JSON.parse(JSON.stringify(this));
	      cloned.clone = this.clone;
	      return cloned;
	    }
	  };
	}
	var messages = newMessages();

	/**
	 *  Encapsulates a validation schema.
	 *
	 *  @param descriptor An object declaring validation rules
	 *  for this schema.
	 */

	var Schema = /*#__PURE__*/function () {
	  // ========================= Static =========================
	  // ======================== Instance ========================
	  function Schema(descriptor) {
	    this.rules = null;
	    this._messages = messages;
	    this.define(descriptor);
	  }

	  var _proto = Schema.prototype;

	  _proto.define = function define(rules) {
	    var _this = this;

	    if (!rules) {
	      throw new Error('Cannot configure a schema with no rules');
	    }

	    if (typeof rules !== 'object' || Array.isArray(rules)) {
	      throw new Error('Rules must be an object');
	    }

	    this.rules = {};
	    Object.keys(rules).forEach(function (name) {
	      var item = rules[name];
	      _this.rules[name] = Array.isArray(item) ? item : [item];
	    });
	  };

	  _proto.messages = function messages(_messages) {
	    if (_messages) {
	      this._messages = deepMerge(newMessages(), _messages);
	    }

	    return this._messages;
	  };

	  _proto.validate = function validate(source_, o, oc) {
	    var _this2 = this;

	    if (o === undefined) {
	      o = {};
	    }

	    if (oc === undefined) {
	      oc = function oc() {};
	    }

	    var source = source_;
	    var options = o;
	    var callback = oc;

	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }

	    if (!this.rules || Object.keys(this.rules).length === 0) {
	      if (callback) {
	        callback(null, source);
	      }

	      return Promise.resolve(source);
	    }

	    function complete(results) {
	      var errors = [];
	      var fields = {};

	      function add(e) {
	        if (Array.isArray(e)) {
	          var _errors;

	          errors = (_errors = errors).concat.apply(_errors, e);
	        } else {
	          errors.push(e);
	        }
	      }

	      for (var i = 0; i < results.length; i++) {
	        add(results[i]);
	      }

	      if (!errors.length) {
	        callback(null, source);
	      } else {
	        fields = convertFieldsError(errors);
	        callback(errors, fields);
	      }
	    }

	    if (options.messages) {
	      var messages$1 = this.messages();

	      if (messages$1 === messages) {
	        messages$1 = newMessages();
	      }

	      deepMerge(messages$1, options.messages);
	      options.messages = messages$1;
	    } else {
	      options.messages = this.messages();
	    }

	    var series = {};
	    var keys = options.keys || Object.keys(this.rules);
	    keys.forEach(function (z) {
	      var arr = _this2.rules[z];
	      var value = source[z];
	      arr.forEach(function (r) {
	        var rule = r;

	        if (typeof rule.transform === 'function') {
	          if (source === source_) {
	            source = _extends({}, source);
	          }

	          value = source[z] = rule.transform(value);
	        }

	        if (typeof rule === 'function') {
	          rule = {
	            validator: rule
	          };
	        } else {
	          rule = _extends({}, rule);
	        } // Fill validator. Skip if nothing need to validate


	        rule.validator = _this2.getValidationMethod(rule);

	        if (!rule.validator) {
	          return;
	        }

	        rule.field = z;
	        rule.fullField = rule.fullField || z;
	        rule.type = _this2.getType(rule);
	        series[z] = series[z] || [];
	        series[z].push({
	          rule: rule,
	          value: value,
	          source: source,
	          field: z
	        });
	      });
	    });
	    var errorFields = {};
	    return asyncMap(series, options, function (data, doIt) {
	      var rule = data.rule;
	      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
	      deep = deep && (rule.required || !rule.required && data.value);
	      rule.field = data.field;

	      function addFullField(key, schema) {
	        return _extends({}, schema, {
	          fullField: rule.fullField + "." + key,
	          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
	        });
	      }

	      function cb(e) {
	        if (e === undefined) {
	          e = [];
	        }

	        var errorList = Array.isArray(e) ? e : [e];

	        if (!options.suppressWarning && errorList.length) {
	          Schema.warning('async-validator:', errorList);
	        }

	        if (errorList.length && rule.message !== undefined) {
	          errorList = [].concat(rule.message);
	        } // Fill error info


	        var filledErrors = errorList.map(complementError(rule, source));

	        if (options.first && filledErrors.length) {
	          errorFields[rule.field] = 1;
	          return doIt(filledErrors);
	        }

	        if (!deep) {
	          doIt(filledErrors);
	        } else {
	          // if rule is required but the target object
	          // does not exist fail at the rule level and don't
	          // go deeper
	          if (rule.required && !data.value) {
	            if (rule.message !== undefined) {
	              filledErrors = [].concat(rule.message).map(complementError(rule, source));
	            } else if (options.error) {
	              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
	            }

	            return doIt(filledErrors);
	          }

	          var fieldsSchema = {};

	          if (rule.defaultField) {
	            Object.keys(data.value).map(function (key) {
	              fieldsSchema[key] = rule.defaultField;
	            });
	          }

	          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
	          var paredFieldsSchema = {};
	          Object.keys(fieldsSchema).forEach(function (field) {
	            var fieldSchema = fieldsSchema[field];
	            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
	            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
	          });
	          var schema = new Schema(paredFieldsSchema);
	          schema.messages(options.messages);

	          if (data.rule.options) {
	            data.rule.options.messages = options.messages;
	            data.rule.options.error = options.error;
	          }

	          schema.validate(data.value, data.rule.options || options, function (errs) {
	            var finalErrors = [];

	            if (filledErrors && filledErrors.length) {
	              finalErrors.push.apply(finalErrors, filledErrors);
	            }

	            if (errs && errs.length) {
	              finalErrors.push.apply(finalErrors, errs);
	            }

	            doIt(finalErrors.length ? finalErrors : null);
	          });
	        }
	      }

	      var res;

	      if (rule.asyncValidator) {
	        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
	      } else if (rule.validator) {
	        try {
	          res = rule.validator(rule, data.value, cb, data.source, options);
	        } catch (error) {
	          console.error == null ? undefined : console.error(error); // rethrow to report error

	          if (!options.suppressValidatorError) {
	            setTimeout(function () {
	              throw error;
	            }, 0);
	          }

	          cb(error.message);
	        }

	        if (res === true) {
	          cb();
	        } else if (res === false) {
	          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
	        } else if (res instanceof Array) {
	          cb(res);
	        } else if (res instanceof Error) {
	          cb(res.message);
	        }
	      }

	      if (res && res.then) {
	        res.then(function () {
	          return cb();
	        }, function (e) {
	          return cb(e);
	        });
	      }
	    }, function (results) {
	      complete(results);
	    }, source);
	  };

	  _proto.getType = function getType(rule) {
	    if (rule.type === undefined && rule.pattern instanceof RegExp) {
	      rule.type = 'pattern';
	    }

	    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
	      throw new Error(format('Unknown rule type %s', rule.type));
	    }

	    return rule.type || 'string';
	  };

	  _proto.getValidationMethod = function getValidationMethod(rule) {
	    if (typeof rule.validator === 'function') {
	      return rule.validator;
	    }

	    var keys = Object.keys(rule);
	    var messageIndex = keys.indexOf('message');

	    if (messageIndex !== -1) {
	      keys.splice(messageIndex, 1);
	    }

	    if (keys.length === 1 && keys[0] === 'required') {
	      return validators.required;
	    }

	    return validators[this.getType(rule)] || undefined;
	  };

	  return Schema;
	}();

	Schema.register = function register(type, validator) {
	  if (typeof validator !== 'function') {
	    throw new Error('Cannot register a validator by type, validator is not a function');
	  }

	  validators[type] = validator;
	};

	Schema.warning = warning;
	Schema.messages = messages;
	Schema.validators = validators;

	const getValueFromEvent = (e) => {
	    const { target } = e;
	    if (target.type === "checkbox") {
	        return target.checked;
	    }
	    else if (target.type === "radio") {
	        return target.value;
	    }
	    return target.value;
	};
	const Item = (props) => {
	    const { className, label, children, style, name, valuePropName, rules } = props;
	    if (!name) {
	        return children;
	    }
	    const [value, setValue] = React.useState();
	    const [error, setError] = React.useState("");
	    const { onValueChange, values, validateRegister } = React.useContext(FormContext); //从 context 中读取对应 name 的 values 的值，同步设置 value
	    React.useEffect(() => {
	        if (value !== (values === null || values === undefined ? undefined : values[name])) {
	            setValue(values === null || values === undefined ? undefined : values[name]);
	        }
	    }, [values, values === null || values === undefined ? undefined : values[name]]);
	    const handleValidate = (value) => {
	        let errorMsg = null;
	        if (Array.isArray(rules) && rules.length) {
	            const validator = new Schema({
	                [name]: rules.map((rule) => {
	                    return Object.assign({ type: "string" }, rule);
	                }),
	            });
	            validator.validate({ [name]: value }, (errors) => {
	                if (errors) {
	                    if (errors === null || errors === undefined ? undefined : errors.length) {
	                        setError(errors[0].message);
	                        errorMsg = errors[0].message;
	                    }
	                }
	                else {
	                    setError("");
	                    errorMsg = null;
	                }
	            });
	        }
	        return errorMsg;
	    };
	    React.useEffect(() => {
	        validateRegister === null || validateRegister === undefined ? undefined : validateRegister(name, () => handleValidate(value));
	    }, [value]);
	    const propsName = {};
	    if (valuePropName) {
	        propsName[valuePropName] = value;
	    }
	    else {
	        propsName.value = value;
	    }
	    const childEle = React.Children.toArray(children).length > 1
	        ? children
	        : React.cloneElement(children, Object.assign(Object.assign({}, propsName), { onChange: (e) => {
	                const value = getValueFromEvent(e);
	                setValue(value);
	                onValueChange === null || onValueChange === undefined ? undefined : onValueChange(name, value);
	                handleValidate(value);
	            } }));
	    const cls = classNames("ant-form-item", className);
	    return (jsxRuntimeExports.jsxs("div", { className: cls, style: style, children: [jsxRuntimeExports.jsx("div", { children: label && jsxRuntimeExports.jsx("label", { children: label }) }), jsxRuntimeExports.jsxs("div", { children: [childEle, error && jsxRuntimeExports.jsx("div", { style: { color: "red" }, children: error })] })] }));
	};

	const Form = Form$1;
	Form.Item = Item;

	const ConfigContext = React.createContext({});

	const spaceSize = {
	    small: 8,
	    middle: 16,
	    large: 24,
	};
	function getNumberSize(size) {
	    return typeof size === "string" ? spaceSize[size] : size || 0;
	}
	const Space = (props) => {
	    const { space } = React.useContext(ConfigContext);
	    const { className, style, children, size = (space === null || space === undefined ? undefined : space.size) || "small", direction = "horizontal", align, split, wrap = false } = props, otherProps = __rest(props, ["className", "style", "children", "size", "direction", "align", "split", "wrap"]);
	    const childNodes = React.Children.toArray(children);
	    const mergedAlign = direction === "horizontal" && align === undefined ? "center" : align;
	    const cn = classNames("space", `space-${direction}`, {
	        [`space-align-${mergedAlign}`]: mergedAlign,
	    }, className);
	    const nodes = childNodes.map((child, i) => {
	        const key = (child && child.key) || `space-item-${i}`;
	        return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("div", { className: "space-item", children: child }, key), i < childNodes.length && split && (jsxRuntimeExports.jsx("span", { className: `${className}-split`, style: style, children: split }))] }));
	    });
	    const otherStyles = {};
	    const [horizontalSize, verticalSize] = React.useMemo(() => (Array.isArray(size) ? size : [size, size]).map((item) => getNumberSize(item)), [size]);
	    otherStyles.columnGap = horizontalSize;
	    otherStyles.rowGap = verticalSize;
	    if (wrap) {
	        otherStyles.flexWrap = "wrap";
	    }
	    return (jsxRuntimeExports.jsx("div", Object.assign({ className: cn, style: Object.assign(Object.assign({}, otherStyles), style) }, otherProps, { children: nodes })));
	};

	exports.Calendar = Calendar;
	exports.ConfigProvider = ConfigProvider;
	exports.Form = Form;
	exports.Icon = Icon;
	exports.IconAdd = IconAdd;
	exports.IconEmail = IconEmail;
	exports.Space = Space;
	exports.Watermark = Watermark;
	exports.useMessage = useMessage;

}));
