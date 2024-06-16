(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[37],{202:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},204:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},205:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!==a&&void 0!==a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!==a&&void 0!==a&&a.width?String(a.width):r;n=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,d=null!==a&&void 0!==a&&a.width?String(a.width):e.defaultWidth;n=e.values[d]||e.values[i]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},206:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,d=o[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a;return}(u,(function(e){return e.test(d)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a;return}(u,(function(e){return e.test(d)}));return i=e.valueCallback?e.valueCallback(s):s,{value:i=a.valueCallback?a.valueCallback(i):i,rest:t.slice(d.length)}}},e.exports=t.default},207:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],o=t.match(e.parsePattern);if(!o)return null;var i=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:i=a.valueCallback?a.valueCallback(i):i,rest:t.slice(r.length)}}},e.exports=t.default},879:function(e,t,a){"use strict";var n=a(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(880)),o=n(a(881)),i=n(a(882)),d=n(a(883)),u=n(a(884)),s={code:"gl",formatDistance:r.default,formatLong:o.default,formatRelative:i.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=s,e.exports=t.default},880:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"menos dun segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos dun minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"arredor dunha hora",other:"arredor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXWeeks:{one:"arredor dunha semana",other:"arredor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"arredor de 1 mes",other:"arredor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"arredor dun ano",other:"arredor de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"m\xe1is dun ano",other:"m\xe1is de {{count}} anos"},almostXYears:{one:"case un ano",other:"case {{count}} anos"}},r=function(e,t,a){var r,o=n[e];return r="string"===typeof o?o:1===t?o.one:o.other.replace("{{count}}",String(t)),null!==a&&void 0!==a&&a.addSuffix?a.comparison&&a.comparison>0?"en "+r:"hai "+r:r};t.default=r,e.exports=t.default},881:function(e,t,a){"use strict";var n=a(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(204)),o={date:(0,r.default)({formats:{full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} '\xe1s' {{time}}",long:"{{date}} '\xe1s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},882:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"'o' eeee 'pasado \xe1' LT",yesterday:"'onte \xe1' p",today:"'hoxe \xe1' p",tomorrow:"'ma\xf1\xe1 \xe1' p",nextWeek:"eeee '\xe1' p",other:"P"},r={lastWeek:"'o' eeee 'pasado \xe1s' p",yesterday:"'onte \xe1s' p",today:"'hoxe \xe1s' p",tomorrow:"'ma\xf1\xe1 \xe1s' p",nextWeek:"eeee '\xe1s' p",other:"P"},o=function(e,t,a,o){return 1!==t.getUTCHours()?r[e]:n[e]};t.default=o,e.exports=t.default},883:function(e,t,a){"use strict";var n=a(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(205)),o={ordinalNumber:function(e,t){return Number(e)+"\xba"},era:(0,r.default)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despois de cristo"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["xan","feb","mar","abr","mai","xun","xul","ago","set","out","nov","dec"],wide:["xaneiro","febreiro","marzo","abril","maio","xu\xf1o","xullo","agosto","setembro","outubro","novembro","decembro"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","me","xo","ve","sa"],abbreviated:["dom","lun","mar","mer","xov","ven","sab"],wide:["domingo","luns","martes","m\xe9rcores","xoves","venres","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediod\xeda",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tardi\xf1a",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediod\xeda",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tardi\xf1a",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediod\xeda",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediod\xeda",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},884:function(e,t,a){"use strict";var n=a(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(206)),o={ordinalNumber:(0,n(a(207)).default)({matchPattern:/^(\d+)(\xba)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era com[u\xfa]n|despois de cristo|era com[u\xfa]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era com[u\xfa]n)/i,/^(despois de cristo|era com[u\xfa]n)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[xfmasond]/i,abbreviated:/^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,wide:/^(xaneiro|febreiro|marzo|abril|maio|xu\xf1o|xullo|agosto|setembro|outubro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^x/i,/^f/i,/^m/i,/^a/i,/^m/i,/^x/i,/^x/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xun/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[dlmxvs]/i,short:/^(do|lu|ma|me|xo|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|xov|ven|sab)/i,wide:/^(domingo|luns|martes|m[e\xe9]rcores|xoves|venres|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^x/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^me/i,/^xo/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|mn|md|(da|[a\xe1]s) (ma\xf1[a\xe1]|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|medianoite|mediod[i\xed]a|(da|[a\xe1]s) (ma\xf1[a\xe1]|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/ma\xf1[a\xe1]/i,afternoon:/tarde/i,evening:/tardi\xf1a/i,night:/noite/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default}}]);