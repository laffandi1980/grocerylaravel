(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[29],{202:function(a,e){a.exports=function(a){return a&&a.__esModule?a:{default:a}},a.exports.__esModule=!0,a.exports.default=a.exports},204:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}},a.exports=e.default},205:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var r;if("formatting"===(null!==t&&void 0!==t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,n=null!==t&&void 0!==t&&t.width?String(t.width):i;r=a.formattingValues[n]||a.formattingValues[i]}else{var o=a.defaultWidth,u=null!==t&&void 0!==t&&t.width?String(t.width):a.defaultWidth;r=a.values[u]||a.values[o]}return r[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},206:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.width,i=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],n=e.match(i);if(!n)return null;var o,u=n[0],d=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(d)?function(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t;return}(d,(function(a){return a.test(u)})):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t;return}(d,(function(a){return a.test(u)}));return o=a.valueCallback?a.valueCallback(l):l,{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(u.length)}}},a.exports=e.default},207:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.match(a.matchPattern);if(!r)return null;var i=r[0],n=e.match(a.parsePattern);if(!n)return null;var o=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(i.length)}}},a.exports=e.default},842:function(a,e,t){"use strict";var r=t(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t(843)),n=r(t(844)),o=r(t(845)),u=r(t(846)),d=r(t(847)),l={code:"eu",formatDistance:i.default,formatLong:n.default,formatRelative:o.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,a.exports=e.default},843:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={lessThanXSeconds:{one:"segundo bat baino gutxiago",other:"{{count}} segundo baino gutxiago"},xSeconds:{one:"1 segundo",other:"{{count}} segundo"},halfAMinute:"minutu erdi",lessThanXMinutes:{one:"minutu bat baino gutxiago",other:"{{count}} minutu baino gutxiago"},xMinutes:{one:"1 minutu",other:"{{count}} minutu"},aboutXHours:{one:"1 ordu gutxi gorabehera",other:"{{count}} ordu gutxi gorabehera"},xHours:{one:"1 ordu",other:"{{count}} ordu"},xDays:{one:"1 egun",other:"{{count}} egun"},aboutXWeeks:{one:"aste 1 inguru",other:"{{count}} aste inguru"},xWeeks:{one:"1 aste",other:"{{count}} astean"},aboutXMonths:{one:"1 hilabete gutxi gorabehera",other:"{{count}} hilabete gutxi gorabehera"},xMonths:{one:"1 hilabete",other:"{{count}} hilabete"},aboutXYears:{one:"1 urte gutxi gorabehera",other:"{{count}} urte gutxi gorabehera"},xYears:{one:"1 urte",other:"{{count}} urte"},overXYears:{one:"1 urte baino gehiago",other:"{{count}} urte baino gehiago"},almostXYears:{one:"ia 1 urte",other:"ia {{count}} urte"}},i=function(a,e,t){var i,n=r[a];return i="string"===typeof n?n:1===e?n.one:n.other.replace("{{count}}",String(e)),null!==t&&void 0!==t&&t.addSuffix?t.comparison&&t.comparison>0?"en "+i:"duela "+i:i};e.default=i,a.exports=e.default},844:function(a,e,t){"use strict";var r=t(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t(204)),n={date:(0,i.default)({formats:{full:"EEEE, y'ko' MMMM'ren' d'a' y'ren'",long:"y'ko' MMMM'ren' d'a'",medium:"y MMM d",short:"yy/MM/dd"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'tan' {{time}}",long:"{{date}} 'tan' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=n,a.exports=e.default},845:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={lastWeek:"'joan den' eeee, LT",yesterday:"'atzo,' p",today:"'gaur,' p",tomorrow:"'bihar,' p",nextWeek:"eeee, p",other:"P"},i={lastWeek:"'joan den' eeee, p",yesterday:"'atzo,' p",today:"'gaur,' p",tomorrow:"'bihar,' p",nextWeek:"eeee, p",other:"P"},n=function(a,e){return 1!==e.getUTCHours()?i[a]:r[a]};e.default=n,a.exports=e.default},846:function(a,e,t){"use strict";var r=t(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t(205)),n={ordinalNumber:function(a,e){return Number(a)+"."},era:(0,i.default)({values:{narrow:["k.a.","k.o."],abbreviated:["k.a.","k.o."],wide:["kristo aurretik","kristo ondoren"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1H","2H","3H","4H"],wide:["1. hiruhilekoa","2. hiruhilekoa","3. hiruhilekoa","4. hiruhilekoa"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["u","o","m","a","m","e","u","a","i","u","a","a"],abbreviated:["urt","ots","mar","api","mai","eka","uzt","abu","ira","urr","aza","abe"],wide:["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["i","a","a","a","o","o","l"],short:["ig","al","as","az","og","or","lr"],abbreviated:["iga","ast","ast","ast","ost","ost","lar"],wide:["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"ge",noon:"eg",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"},abbreviated:{am:"AM",pm:"PM",midnight:"gauerdia",noon:"eguerdia",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"},wide:{am:"a.m.",pm:"p.m.",midnight:"gauerdia",noon:"eguerdia",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"ge",noon:"eg",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"},abbreviated:{am:"AM",pm:"PM",midnight:"gauerdia",noon:"eguerdia",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"},wide:{am:"a.m.",pm:"p.m.",midnight:"gauerdia",noon:"eguerdia",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"}},defaultFormattingWidth:"wide"})};e.default=n,a.exports=e.default},847:function(a,e,t){"use strict";var r=t(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t(206)),n={ordinalNumber:(0,r(t(207)).default)({matchPattern:/^(\d+)(.)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(k.a.|k.o.)/i,abbreviated:/^(k.a.|k.o.)/i,wide:/^(kristo aurretik|kristo ondoren)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^k.a./i,/^k.o./i],abbreviated:[/^(k.a.)/i,/^(k.o.)/i],wide:[/^(kristo aurretik)/i,/^(kristo ondoren)/i]},defaultParseWidth:"wide"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]H/i,wide:/^[1234](.)? hiruhilekoa/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[uomaei]/i,abbreviated:/^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i,wide:/^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^u/i,/^o/i,/^m/i,/^a/i,/^m/i,/^e/i,/^u/i,/^a/i,/^i/i,/^u/i,/^a/i,/^a/i],any:[/^urt/i,/^ots/i,/^mar/i,/^api/i,/^mai/i,/^eka/i,/^uzt/i,/^abu/i,/^ira/i,/^urr/i,/^aza/i,/^abe/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[iaol]/i,short:/^(ig|al|as|az|og|or|lr)/i,abbreviated:/^(iga|ast|ast|ast|ost|ost|lar)/i,wide:/^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^a/i,/^a/i,/^a/i,/^o/i,/^o/i,/^l/i],short:[/^ig/i,/^al/i,/^as/i,/^az/i,/^og/i,/^or/i,/^lr/i],abbreviated:[/^iga/i,/^ast/i,/^ast/i,/^ast/i,/^ost/i,/^ost/i,/^lar/i],wide:[/^igandea/i,/^astelehena/i,/^asteartea/i,/^asteazkena/i,/^osteguna/i,/^ostirala/i,/^larunbata/i]},defaultParseWidth:"wide"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i,any:/^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^a/i,pm:/^p/i,midnight:/^ge/i,noon:/^eg/i,morning:/goiz/i,afternoon:/arratsaldea/i,evening:/arratsaldea/i,night:/gau/i},any:{am:/^a/i,pm:/^p/i,midnight:/^gauerdia/i,noon:/^eguerdia/i,morning:/goiz/i,afternoon:/arratsaldea/i,evening:/arratsaldea/i,night:/gau/i}},defaultParseWidth:"any"})};e.default=n,a.exports=e.default}}]);