(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[88],{1158:function(a,e,t){"use strict";var n=t(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(1159)),r=n(t(1160)),u=n(t(1161)),o=n(t(1162)),d=n(t(1163)),l={code:"uz",formatDistance:i.default,formatLong:r.default,formatRelative:u.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,a.exports=e.default},1159:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"sekunddan kam",other:"{{count}} sekunddan kam"},xSeconds:{one:"1 sekund",other:"{{count}} sekund"},halfAMinute:"yarim minut",lessThanXMinutes:{one:"bir minutdan kam",other:"{{count}} minutdan kam"},xMinutes:{one:"1 minut",other:"{{count}} minut"},aboutXHours:{one:"tahminan 1 soat",other:"tahminan {{count}} soat"},xHours:{one:"1 soat",other:"{{count}} soat"},xDays:{one:"1 kun",other:"{{count}} kun"},aboutXWeeks:{one:"tahminan 1 hafta",other:"tahminan {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"tahminan 1 oy",other:"tahminan {{count}} oy"},xMonths:{one:"1 oy",other:"{{count}} oy"},aboutXYears:{one:"tahminan 1 yil",other:"tahminan {{count}} yil"},xYears:{one:"1 yil",other:"{{count}} yil"},overXYears:{one:"1 yildan ko'p",other:"{{count}} yildan ko'p"},almostXYears:{one:"deyarli 1 yil",other:"deyarli {{count}} yil"}},i=function(a,e,t){var i,r=n[a];return i="string"===typeof r?r:1===e?r.one:r.other.replace("{{count}}",String(e)),null!==t&&void 0!==t&&t.addSuffix?t.comparison&&t.comparison>0?i+" dan keyin":i+" oldin":i};e.default=i,a.exports=e.default},1160:function(a,e,t){"use strict";var n=t(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(204)),r={date:(0,i.default)({formats:{full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"h:mm:ss zzzz",long:"h:mm:ss z",medium:"h:mm:ss",short:"h:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};e.default=r,a.exports=e.default},1161:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'oldingi' eeee p 'da'",yesterday:"'kecha' p 'da'",today:"'bugun' p 'da'",tomorrow:"'ertaga' p 'da'",nextWeek:"eeee p 'da'",other:"P"},i=function(a,e,t,i){return n[a]};e.default=i,a.exports=e.default},1162:function(a,e,t){"use strict";var n=t(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(205)),r={ordinalNumber:function(a,e){return String(a)},era:(0,i.default)({values:{narrow:["M.A","M."],abbreviated:["M.A","M."],wide:["Miloddan Avvalgi","Milodiy"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["CH.1","CH.2","CH.3","CH.4"],wide:["1-chi chorak","2-chi chorak","3-chi chorak","4-chi chorak"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["Y","D","S","CH","P","J","SH"],short:["Ya","Du","Se","Cho","Pa","Ju","Sha"],abbreviated:["Yak","Dush","Sesh","Chor","Pay","Jum","Shan"],wide:["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},1163:function(a,e,t){"use strict";var n=t(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(206)),r={ordinalNumber:(0,n(t(207)).default)({matchPattern:/^(\d+)(chi)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(m\.a|m\.)/i,abbreviated:/^(m\.a\.?\s?m\.?)/i,wide:/^(miloddan avval|miloddan keyin)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](chi)? chorak/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[yfmasond]/i,abbreviated:/^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,wide:/^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ya/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^iyun/i,/^iyul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[ydschj]/i,short:/^(ya|du|se|cho|pa|ju|sha)/i,abbreviated:/^(yak|dush|sesh|chor|pay|jum|shan)/i,wide:/^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^d/i,/^s/i,/^ch/i,/^p/i,/^j/i,/^sh/i],any:[/^ya/i,/^d/i,/^se/i,/^ch/i,/^p/i,/^j/i,/^sh/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,any:/^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^y\.t/i,noon:/^pe/i,morning:/ertalab/i,afternoon:/tushdan keyin/i,evening:/kechqurun/i,night:/tun/i}},defaultParseWidth:"any"})};e.default=r,a.exports=e.default},202:function(a,e){a.exports=function(a){return a&&a.__esModule?a:{default:a}},a.exports.__esModule=!0,a.exports.default=a.exports},204:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}},a.exports=e.default},205:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n;if("formatting"===(null!==t&&void 0!==t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!==t&&void 0!==t&&t.width?String(t.width):i;n=a.formattingValues[r]||a.formattingValues[i]}else{var u=a.defaultWidth,o=null!==t&&void 0!==t&&t.width?String(t.width):a.defaultWidth;n=a.values[o]||a.values[u]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},206:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,i=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],r=e.match(i);if(!r)return null;var u,o=r[0],d=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(d)?function(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t;return}(d,(function(a){return a.test(o)})):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t;return}(d,(function(a){return a.test(o)}));return u=a.valueCallback?a.valueCallback(l):l,{value:u=t.valueCallback?t.valueCallback(u):u,rest:e.slice(o.length)}}},a.exports=e.default},207:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(a.matchPattern);if(!n)return null;var i=n[0],r=e.match(a.parsePattern);if(!r)return null;var u=a.valueCallback?a.valueCallback(r[0]):r[0];return{value:u=t.valueCallback?t.valueCallback(u):u,rest:e.slice(i.length)}}},a.exports=e.default}}]);