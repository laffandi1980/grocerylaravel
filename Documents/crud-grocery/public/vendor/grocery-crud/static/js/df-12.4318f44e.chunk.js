(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[8],{202:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},204:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.width?String(t.width):e.defaultWidth;return e.formats[o]||e.formats[e.defaultWidth]}},e.exports=t.default},205:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,o){var a;if("formatting"===(null!==o&&void 0!==o&&o.context?String(o.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,i=null!==o&&void 0!==o&&o.width?String(o.width):n;a=e.formattingValues[i]||e.formattingValues[n]}else{var r=e.defaultWidth,u=null!==o&&void 0!==o&&o.width?String(o.width):e.defaultWidth;a=e.values[u]||e.values[r]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},206:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.width,n=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var r,u=i[0],d=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?function(e,t){for(var o=0;o<e.length;o++)if(t(e[o]))return o;return}(d,(function(e){return e.test(u)})):function(e,t){for(var o in e)if(e.hasOwnProperty(o)&&t(e[o]))return o;return}(d,(function(e){return e.test(u)}));return r=e.valueCallback?e.valueCallback(s):s,{value:r=o.valueCallback?o.valueCallback(r):r,rest:t.slice(u.length)}}},e.exports=t.default},207:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var n=a[0],i=t.match(e.parsePattern);if(!i)return null;var r=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:r=o.valueCallback?o.valueCallback(r):r,rest:t.slice(n.length)}}},e.exports=t.default},771:function(e,t,o){"use strict";var a=o(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o(772)),i=a(o(773)),r=a(o(774)),u=a(o(775)),d=a(o(776)),s={code:"bs",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default},772:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:{standalone:"manje od 1 sekunde",withPrepositionAgo:"manje od 1 sekunde",withPrepositionIn:"manje od 1 sekundu"},dual:"manje od {{count}} sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:{standalone:"1 sekunda",withPrepositionAgo:"1 sekunde",withPrepositionIn:"1 sekundu"},dual:"{{count}} sekunde",other:"{{count}} sekundi"},halfAMinute:"pola minute",lessThanXMinutes:{one:{standalone:"manje od 1 minute",withPrepositionAgo:"manje od 1 minute",withPrepositionIn:"manje od 1 minutu"},dual:"manje od {{count}} minute",other:"manje od {{count}} minuta"},xMinutes:{one:{standalone:"1 minuta",withPrepositionAgo:"1 minute",withPrepositionIn:"1 minutu"},dual:"{{count}} minute",other:"{{count}} minuta"},aboutXHours:{one:{standalone:"oko 1 sat",withPrepositionAgo:"oko 1 sat",withPrepositionIn:"oko 1 sat"},dual:"oko {{count}} sata",other:"oko {{count}} sati"},xHours:{one:{standalone:"1 sat",withPrepositionAgo:"1 sat",withPrepositionIn:"1 sat"},dual:"{{count}} sata",other:"{{count}} sati"},xDays:{one:{standalone:"1 dan",withPrepositionAgo:"1 dan",withPrepositionIn:"1 dan"},dual:"{{count}} dana",other:"{{count}} dana"},aboutXWeeks:{one:{standalone:"oko 1 sedmicu",withPrepositionAgo:"oko 1 sedmicu",withPrepositionIn:"oko 1 sedmicu"},dual:"oko {{count}} sedmice",other:"oko {{count}} sedmice"},xWeeks:{one:{standalone:"1 sedmicu",withPrepositionAgo:"1 sedmicu",withPrepositionIn:"1 sedmicu"},dual:"{{count}} sedmice",other:"{{count}} sedmice"},aboutXMonths:{one:{standalone:"oko 1 mjesec",withPrepositionAgo:"oko 1 mjesec",withPrepositionIn:"oko 1 mjesec"},dual:"oko {{count}} mjeseca",other:"oko {{count}} mjeseci"},xMonths:{one:{standalone:"1 mjesec",withPrepositionAgo:"1 mjesec",withPrepositionIn:"1 mjesec"},dual:"{{count}} mjeseca",other:"{{count}} mjeseci"},aboutXYears:{one:{standalone:"oko 1 godinu",withPrepositionAgo:"oko 1 godinu",withPrepositionIn:"oko 1 godinu"},dual:"oko {{count}} godine",other:"oko {{count}} godina"},xYears:{one:{standalone:"1 godina",withPrepositionAgo:"1 godine",withPrepositionIn:"1 godinu"},dual:"{{count}} godine",other:"{{count}} godina"},overXYears:{one:{standalone:"preko 1 godinu",withPrepositionAgo:"preko 1 godinu",withPrepositionIn:"preko 1 godinu"},dual:"preko {{count}} godine",other:"preko {{count}} godina"},almostXYears:{one:{standalone:"gotovo 1 godinu",withPrepositionAgo:"gotovo 1 godinu",withPrepositionIn:"gotovo 1 godinu"},dual:"gotovo {{count}} godine",other:"gotovo {{count}} godina"}},n=function(e,t,o){var n,i=a[e];return n="string"===typeof i?i:1===t?null!==o&&void 0!==o&&o.addSuffix?o.comparison&&o.comparison>0?i.one.withPrepositionIn:i.one.withPrepositionAgo:i.one.standalone:t%10>1&&t%10<5&&"1"!==String(t).substr(-2,1)?i.dual.replace("{{count}}",String(t)):i.other.replace("{{count}}",String(t)),null!==o&&void 0!==o&&o.addSuffix?o.comparison&&o.comparison>0?"za "+n:"prije "+n:n};t.default=n,e.exports=t.default},773:function(e,t,o){"use strict";var a=o(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o(204)),i={date:(0,n.default)({formats:{full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'u' {{time}}",long:"{{date}} 'u' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},774:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:function(e){switch(e.getUTCDay()){case 0:return"'pro\u0161le nedjelje u' p";case 3:return"'pro\u0161le srijede u' p";case 6:return"'pro\u0161le subote u' p";default:return"'pro\u0161li' EEEE 'u' p"}},yesterday:"'ju\u010de u' p",today:"'danas u' p",tomorrow:"'sutra u' p",nextWeek:function(e){switch(e.getUTCDay()){case 0:return"'sljede\u0107e nedjelje u' p";case 3:return"'sljede\u0107u srijedu u' p";case 6:return"'sljede\u0107u subotu u' p";default:return"'sljede\u0107i' EEEE 'u' p"}},other:"P"},n=function(e,t,o,n){var i=a[e];return"function"===typeof i?i(t):i};t.default=n,e.exports=t.default},775:function(e,t,o){"use strict";var a=o(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o(205)),i={ordinalNumber:function(e,t){var o=Number(e);return String(o)+"."},era:(0,n.default)({values:{narrow:["pr.n.e.","AD"],abbreviated:["pr. Hr.","po. Hr."],wide:["Prije Hrista","Poslije Hrista"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar"]},defaultFormattingWidth:"wide"}),day:(0,n.default)({values:{narrow:["N","P","U","S","\u010c","P","S"],short:["ned","pon","uto","sre","\u010det","pet","sub"],abbreviated:["ned","pon","uto","sre","\u010det","pet","sub"],wide:["nedjelja","ponedjeljak","utorak","srijeda","\u010detvrtak","petak","subota"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uve\u010de",night:"no\u0107u"},abbreviated:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uve\u010de",night:"no\u0107u"},wide:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"poslije podne",evening:"uve\u010de",night:"no\u0107u"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uve\u010de",night:"no\u0107u"},abbreviated:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uve\u010de",night:"no\u0107u"},wide:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"poslije podne",evening:"uve\u010de",night:"no\u0107u"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},776:function(e,t,o){"use strict";var a=o(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o(206)),i={ordinalNumber:(0,a(o(207)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Hr\.|po\.\s?Hr\.)/i,wide:/^(Prije Hrista|prije nove ere|Poslije Hrista|nova era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|nova)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,wide:/^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(juni|juna)|(juli|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^avg/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[npus\u010dc]/i,short:/^(ned|pon|uto|sre|(\u010det|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sre|(\u010det|cet)|pet|sub)/i,wide:/^(nedjelja|ponedjeljak|utorak|srijeda|(\u010detvrtak|cetvrtak)|petak|subota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^(am|pm|ponoc|pono\u0107|(po)?podne|uvece|uve\u010de|no\u0107u|poslije podne|ujutru)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(poslije\s|po)+podne/i,evening:/(uvece|uve\u010de)/i,night:/(nocu|no\u0107u)/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default}}]);