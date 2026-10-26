const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.core-CKHUdKZ4.js","assets/src-6xwdQXoi.js","assets/chunk-Y2CYZVJY-DsF7k-Jl.js","assets/chunk-DSNLSHJZ-DNMJ7e0Q.js","assets/chunk-7S6XSTFO-D4Gj625f.js","assets/dist-DboGfcMY.js","assets/chunk-YZO67HFG-8Zoq5bgQ.js","assets/chunk-AQDTSKZB-Chr_7AUj.js","assets/chunk-DUW6YSOI-Dgx8z5s3.js","assets/chunk-UHW7PFBP-DpkaYg8F.js","assets/chunk-HAGFOTED-Bqqt81HT.js","assets/chunk-J5ZVWO5B-oDCd-gWO.js","assets/rough.esm-Dy-Kn_BL.js","assets/chunk-ZAUX2LTX-CG_HRusG.js","assets/chunk-WQQL4CDK-CYYDRFoj.js","assets/line-BSfbY0ve.js","assets/path-fybaL0A-.js","assets/array-BifhSqXX.js","assets/chunk-HNE4Q36P-DgzfqINZ.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var t=e();function n(e){t=e}var r={exec:()=>null};function i(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function a(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(s.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var o=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),s={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:i(e=>RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:i(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:i(e=>RegExp(`^ {0,${e}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:i(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:i(e=>RegExp(`^ {0,${e}}(?:</?(?:${v})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,`i`)),blockquoteBeginRegex:i(e=>RegExp(`^ {0,${e}}>`))},c=/^(?:[ \t]*(?:\n|$))+/,l=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,u=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,d=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,f=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,p=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,m=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,h=a(m).replace(/bull/g,p).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),g=a(m).replace(/bull/g,p).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,ee=/^[^\n]+/,te=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ne=a(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,te).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),re=a(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,p).getRegex(),v=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,y=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ie=a(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,y).replace(`tag`,v).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ae=e=>a(_).replace(`hr`,d).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,v).getRegex(),oe=ae(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),se=ae(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),ce={blockquote:a(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace(`paragraph`,se).getRegex(),code:l,def:ne,fences:u,heading:f,hr:d,html:ie,lheading:h,list:re,newline:c,paragraph:oe,table:r,text:ee},le=a(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,d).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,v).getRegex(),ue={...ce,lheading:g,table:le,paragraph:a(_).replace(`hr`,d).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,le).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,v).getRegex()},de={...ce,html:a(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,y).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:r,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:a(_).replace(`hr`,d).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,h).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},fe=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,pe=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,me=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,he=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,b=/[\p{P}\p{S}]/u,x=/[\s\p{P}\p{S}]/u,S=/[^\s\p{P}\p{S}]/u,ge=a(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,x).getRegex(),_e=/[\p{Pi}\p{Ps}"']/u,ve=/(?!~)[\p{P}\p{S}]/u,ye=/(?!~)[\s\p{P}\p{S}]/u,be=/(?:[^\s\p{P}\p{S}]|~)/u,xe=a(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,o?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Se=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ce=a(Se,`u`).replace(/punct/g,b).getRegex(),we=a(Se,`u`).replace(/punct/g,ve).getRegex(),Te=a(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,_e).replace(/punct/g,b).getRegex(),Ee=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,De=a(Ee,`gu`).replace(/notPunctSpace/g,S).replace(/punctSpace/g,x).replace(/punct/g,b).getRegex(),Oe=a(Ee,`gu`).replace(/notPunctSpace/g,be).replace(/punctSpace/g,ye).replace(/punct/g,ve).getRegex(),ke=a(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,S).replace(/punctSpace/g,x).replace(/punct/g,b).getRegex(),Ae=a(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,S).replace(/punctSpace/g,x).replace(/punct/g,b).getRegex(),je=a(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,S).replace(/punctSpace/g,x).replace(/punct/g,b).getRegex(),Me=a(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,b).getRegex(),Ne=a(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,S).replace(/punctSpace/g,x).replace(/punct/g,b).getRegex(),Pe=a(/\\(punct)/,`gu`).replace(/punct/g,b).getRegex(),Fe=a(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,`gu`).replace(/punct/g,b).getRegex(),Ie=a(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Le=a(y).replace(`(?:-->|$)`,`-->`).getRegex(),Re=a(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Le).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ze=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,C=a(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,ze).getRegex(),Be=a(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`,C).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ve=a(/^!?\[(label)\]\[(ref)\]/).replace(`label`,C).replace(`ref`,te).getRegex(),He=a(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,te).getRegex(),Ue=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,We=a(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,ze).getRegex(),Ge=a(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,a(/^!?\[(label)\]\[(ref)\]/).replace(`label`,We).replace(`ref`,Ue).getRegex()).replace(`nolink`,a(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Ue).getRegex()).getRegex(),Ke=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,qe=a(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),w={_backpedal:r,anyPunctuation:Pe,anyPunctuationOutsideCode:Fe,autolink:Ie,blockSkip:xe,br:me,code:pe,del:r,delLDelim:r,delRDelim:r,emStrongLDelim:Ce,emStrongRDelimAst:De,emStrongRDelimUnd:Ae,escape:fe,link:Be,nolink:He,punctuation:ge,reflink:Ve,reflinkSearch:Ge,tag:Re,text:he,url:r},Je={...w,emStrongLDelim:Te,emStrongRDelimAst:ke,emStrongRDelimUnd:je,link:a(/^!?\[(label)\]\((.*?)\)/).replace(`label`,C).getRegex(),reflink:a(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,C).getRegex()},T={...w,emStrongRDelimAst:Oe,emStrongLDelim:we,delLDelim:Me,delRDelim:Ne,url:a(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,qe).replace(`protocol`,Ke).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:a(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,Ke).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},Ye={...T,br:a(me).replace(`{2,}`,`*`).getRegex(),text:a(T.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},E={normal:ce,gfm:ue,pedantic:de},D={normal:w,gfm:T,breaks:Ye,pedantic:Je},Xe={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Ze=e=>Xe[e];function O(e,t){if(t){if(s.escapeTest.test(e))return e.replace(s.escapeReplace,Ze)}else if(s.escapeTestNoEncode.test(e))return e.replace(s.escapeReplaceNoEncode,Ze);return e}function Qe(e){return s.numericCharacterReference.test(e)?e.replace(s.numericCharacterReferenceOrAmpersand,(e,t,n)=>{if(t===void 0&&n===void 0)return`&amp;`;let r=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:r===38?`&amp;`:String.fromCodePoint(r)}):e}function $e(e){try{e=encodeURI(e).replace(s.percentDecode,`%`)}catch{return null}return e}function et(e,t){let n=e.replace(s.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(s.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(s.slashPipe,`|`);return n}function k(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function tt(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&s.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function A(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function nt(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function j(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function rt(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`,l=r.state.inLink,u=r.state.linkEmitted,d=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let f=r.inlineTokens(s),p=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=l,!c){if(p){r.state.inRawBlock=d;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:f}}function it(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}function at(e,t,n,r){if(!t.includes(`<`))return!1;for(let i=0;i<t.length;i++){if(t[i]===`\\`){i++;continue}if(t[i]==="`"){let e=r.inline.code.exec(t.slice(i));if(e){i+=e[0].length-1;continue}}if(t[i]!==`<`)continue;let a=e.slice(n+i),o=r.inline.tag.exec(a)||r.inline.autolink.exec(a);if(o){if(o[0].length>t.length-i)return!0;i+=o[0].length-1}}return!1}var M=class{options;rules;lexer;constructor(e){this.options=e||t}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:tt(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=it(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=k(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:k(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:k(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=k(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteMarkerWhitespace,(e,t,n)=>t+j(n,t.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`||u?.type===`heading`||u?.type===`hr`||u?.type===`html`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s;let c=o.substring(s.raw.length).replace(/^\n/,``),l=c?c.split(`
`).length:0,d=l?e.slice(0,-l):e;d.length>0&&(n=`${n}
${d.join(`
`)}`),r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o;let s=o.raw.length>t.raw.length?a.slice(t.raw.length+1,o.raw.length).split(`
`).length:0;if(s>0){let t=e.slice(0,s).join(`
`);n=`${n}
${t}`,r=`${r}
${t}`}e=e.slice(s)}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=e,r=()=>n.length-e.length,i=t[1].trim(),a=i.length>1,o={type:`list`,raw:``,ordered:a,start:a?+i.slice(0,-1):``,loose:!1,items:[]};i=a?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=a?i:`[*+-]`);let s=this.rules.other.listItemRegex(i),c=!1;for(;e;){let i=!1,a=``;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;let l=r();e=e.substring(t[0].length);let u=t[2].split(`
`,1)[0],d=t[1].length,f=this.options.pedantic?j(u,d):u.replace(this.rules.other.leadingSpaceTab,e=>j(e,d)),p=e.split(`
`,1)[0],m=!f.trim(),h=0;if(this.options.pedantic?(h=2,a=f.trimStart()):m?h=d+1:(h=f.search(this.rules.other.nonSpaceChar),h=h>4?1:h,a=f.slice(h),h+=d),m&&this.rules.other.blankLine.test(p)&&(e=e.substring(p.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(h),n=this.rules.other.hrRegex(h),r=this.rules.other.fencesBeginRegex(h),i=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(h):this.rules.other.headingBeginRegex(h),o=this.rules.other.htmlBeginRegex(h),s=this.rules.other.blockquoteBeginRegex(h);for(;e;){let c=e.split(`
`,1)[0],l;if(p=c,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,`  `),l=p):l=p.replace(this.rules.other.leadingSpaceTab,e=>j(e)),r.test(p)||i.test(p)||o.test(p)||s.test(p)||t.test(p)||n.test(p))break;if(l.search(this.rules.other.nonSpaceChar)>=h||!p.trim())a+=`
`+l.slice(h);else{if(m||f.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||r.test(f)||i.test(f)||n.test(f))break;let e=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(p)&&this.rules.block.lheading.test(`${f}
${p}`)?`    ${l.replace(/^ {0,3}/,``)}`:p;a+=`
`+e}m=!p.trim(),e=e.substring(c.length+1),f=l.slice(h)}}let g=n.slice(l,r());o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(g)&&(c=!0)),o.items.push({type:`list_item`,raw:g,task:!!this.options.gfm&&this.rules.other.listIsTask.test(a),loose:!1,text:a,tokens:[]})}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=n.slice(0,r()).trimEnd();for(let e of o.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!o.loose){let t=e.tokens.filter(e=>e.type===`space`);o.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of o.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,o.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(o.loose)for(let e of o.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return o}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=tt(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&nt(t[2],`()`)!==-1)return;let e=A(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:k(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=et(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:k(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(et(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:k(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&at(e,t[1],n,this.rules))return;let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let e=k(r.slice(0,-1),`\\`);if((r.length-e.length)%2==0)return}else{let e=nt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let i=t[2],a=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):``;return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i.slice(1):i.slice(1,-1)),rt(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&at(e,n[1],r,this.rules))return;let i=t[A((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!i){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return rt(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||!r[1]&&!r[2]&&!r[3]&&!r[4])return;let i=r[0][0],a=n===i,o=t.length-e.length,s=o;for(;!this.options.pedantic&&s>0&&t[s-1]===i;)s--;let c=[...t.slice(Math.max(0,s-2),s)].at(-1)??``,l=c===`*`||c===`_`||!!this.rules.inline.punctuation.exec(c);s<o&&(n=c);let u=s<o?l:!!this.rules.inline.punctuation.exec(n);if(r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let d=r[1]||r[3]||``;if(!d||!n||u){let n=[...r[0]].length-1,u,f,p=n,m=0,h=o-s+n,g=!this.options.pedantic&&!!c.trim()&&(!!d||i===`*`&&!l),_=i===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(_.lastIndex=0,t=t.slice(-1*e.length+n);(r=_.exec(t))!==null;){if(u=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!u)continue;if(f=[...u].length,r[3]||r[4]){p+=f;continue}if(r[5]||r[6]||g){if(a&&(r[5]||r[6]))break;if(h%3&&!((h+f)%3)){m+=f;continue}}if(p-=f,p>0)continue;f=Math.min(f,f+p+m);let t=[...r[0]][0].length,i=e.slice(0,n+r.index+t+f);if(Math.min(n,f)%2){let e=i.slice(1,-1);return{type:`em`,raw:i,text:e,tokens:this.lexer.inlineTokens(e)}}let o=i.slice(2,-2);return{type:`strong`,raw:i,text:o,tokens:this.lexer.inlineTokens(o)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:e?t[0]:Qe(t[0]),escaped:e}}}},N=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||t,this.options.tokenizer=this.options.tokenizer||new M,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:s,block:E.normal,inline:D.normal};this.options.pedantic?(n.block=E.pedantic,n.inline=D.pedantic):this.options.gfm&&(n.block=E.gfm,n.inline=this.options.breaks?D.breaks:D.gfm),this.tokenizer.rules=n}static get rules(){return{block:E,inline:D}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(s.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.state.inRawBlock=!1,this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(s.tabCharGlobal,`    `).replace(s.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if((i=this.tokenizer.fences(e))||(i=this.tokenizer.heading(e))||(i=this.tokenizer.hr(e))||(i=this.tokenizer.blockquote(e))||(i=this.tokenizer.list(e))||(i=this.tokenizer.html(e))){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):(this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}),t.push(i));continue}if((i=this.tokenizer.table(e))||(i=this.tokenizer.lheading(e))){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length)}else if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,A(e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=this.state.linkParenPossible;this.state.linkParenPossible=n&&e.includes(`)`);try{return this.#e(e,t)}finally{this.state.linkParenPossible=n}}#e(e,t){let n=e.includes(`*`)||e.includes(`_`)||e.includes(`~`)||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==M.prototype.emStrong||this.tokenizer.del!==M.prototype.del?this.#t(e):e,r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if((o=this.tokenizer.escape(e))||(o=this.tokenizer.tag(e))||(o=this.tokenizer.link(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if((o=this.tokenizer.emStrong(e,n,i))||(o=this.tokenizer.codespan(e))||(o=this.tokenizer.br(e))||(o=this.tokenizer.del(e,n,i))||(o=this.tokenizer.autolink(e))||!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}#t(e){let t=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,n=t=>{let r=t.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,A(t.slice(r+1,-1))))return t;if(r>1&&t.charAt(0)!==`!`){let i=t.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,n)+`][`+`a`.repeat(t.length-r-2)+`]`}return`[`+`a`.repeat(t.length-2)+`]`};t=t.replace(e,n)}return t=t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(e,t,n)=>n?`+`.repeat(e.length):t?t+e.slice(t.length,-t.length).replace(/`/g,`+`)+t:e),t=t.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),t=this.options.hooks?.emStrongMask?.call({lexer:this},t)??t,t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},P=class{options;parser;constructor(e){this.options=e||t}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(s.notSpaceStart)?.[0],i=e?e.replace(s.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+O(r)+`">`+(n?i:O(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:O(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${O(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?O(n,!0):this.parser.parseInline(r),o=$e(e);if(o===null)return a;e=O(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+O(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=$e(e);if(i===null)return O(n);e=i;let a=`<img src="${O(e)}" alt="${O(n)}"`;return t&&(a+=` title="${O(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:O(e.text)}},ot=class{parser;strong({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}em({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}codespan({text:e}){return e}del({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}html({text:e}){return e}text({text:e}){return e}link({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}image({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}br(){return``}checkbox({raw:e}){return e}},F=class e{options;renderer;textRenderer;constructor(e){this.options=e||t,this.options.renderer=this.options.renderer||new P,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ot,this.textRenderer.parser=this}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},I=class{options;block;constructor(e){this.options=e||t}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?N.lex:N.lexInline}provideParser(e=this.block){return e?F.parse:F.parseInline}};function L(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++)e.push(t[n]);else e.push(t)}var R=new class{defaults=e();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=F;Renderer=P;TextRenderer=ot;Lexer=N;Tokenizer=M;Hooks=I;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(L(n,t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)L(n,this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)L(n,this.walkTokens(e.tokens,t));break}case`list`:{let e=r;L(n,this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);L(n,this.walkTokens(i,t))}):e.tokens&&L(n,this.walkTokens(e.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new P(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new M(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new I;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=I.passThroughHooks.has(n)?e=>{if(t.options.async&&I.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(t.options.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&L(n,t.call(this,e)),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return N.lex(e,t??this.defaults)}parser(e,t){return F.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?N.lex:N.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?F.parse:F.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?N.lex:N.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?F.parse:F.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+O(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function z(e,t){return R.parse(e,t)}z.options=z.setOptions=function(e){return R.setOptions(e),z.defaults=R.defaults,n(z.defaults),z},z.getDefaults=e,z.defaults=t;function st(...e){return R.use(...e),z.defaults=R.defaults,n(z.defaults),z}z.use=st,z.walkTokens=function(e,t){return R.walkTokens(e,t)},z.parseInline=R.parseInline,z.Parser=F,z.parser=F.parse,z.Renderer=P,z.TextRenderer=ot,z.Lexer=N,z.lexer=N.lex,z.Tokenizer=M,z.Hooks=I,z.parse=z,z.options,z.setOptions,z.walkTokens,z.parseInline,F.parse,N.lex;var ct=`# Implementation and learning roadmap

Plan for 12 weeks at 6–8 hours per week, approximately 72–96 hours. Estimates assume basic Python, SQL, supervised learning, and HTTP familiarity. Add preparation time if any are new. At 12–15 hours per week, aim for 6–8 weeks, retaining every acceptance gate. Optional distributed-systems extensions are outside this estimate.

Spend roughly half of each milestone implementing, one quarter visualizing, and one quarter testing and explaining. Reduce scope within a milestone before adding infrastructure. All deliverables below are planned.

## M0 — One visible prediction lifecycle · week 1

**Understand:** platform versus model code; artifacts versus metadata; training versus inference.

**Build:** seeded delivery simulator, immutable events, one historical feature, time-based split, a mean-predicting baseline and a small tree regressor. Write a JSON run manifest and load the trained artifact for one prediction. Start a minimal API and console. Target 10,000 events so inspection remains easy.

**Visualize:** clickable event → dataset → run → artifact → prediction graph with actual identifiers and details. The first graph can use a fixed layout.

**Done when:** one documented command produces a real run and prediction; a second fresh run on identical inputs reproduces the dataset and predictions within declared tolerance. Deliberately break an artifact path and show a failed node with an actionable reason.

**Explain:** what must be recorded to reconstruct this prediction a week later?

## M1 — Historical correctness and feature catalog · weeks 2–3

**Understand:** event time, arrival time, leakage, feature windows, label delay, backfill.

**Build:** feature specs for recent restaurant prep time and request context; entity keys; units; TTL; defaults; owner; schema version. Persist historical feature snapshots and simulate an online materialized view. Use the same transformations for training and serving. Build the temporal lookup described in contracts.md before choosing a feature-store product.

**Visualize:** feature catalog, distribution/missingness view, and a timeline with a movable prediction cutoff showing exactly which events were usable.

**Done when:** a future event and a late-arriving event cannot contaminate an earlier prediction. Duplicate replay leaves aggregates unchanged. Offline reconstruction matches logged online features for a replayed request. An unknown entity follows an explicit default policy.

**Explain:** why does an event-time-only join fail to reproduce what production knew?

## M2 — Replay, freshness, and recovery · week 4

**Understand:** materialization lag, checkpoints, idempotence, replay, backpressure.

**Build:** a background materializer consuming the durable local log using offsets and event IDs. Add restart-safe checkpoints and a replay CLI. Keep one worker to avoid distributed locking initially. Persist history before publishing a new online value. Introduce a networked KV store only if process isolation is the question being tested.

**Visualize:** input/output rate, backlog, per-feature age, watermark, and a pause/resume control.

**Done when:** pause consumption, observe stale features, resume, and recover without double-counting. Kill and restart the worker across a checkpoint boundary and compare with clean replay.

**Explain:** which side effects can happen twice even when the event log is durable?

## M3 — Training workflows and reproducible runs · week 5

**Understand:** DAG dependencies, retries, cached outputs, experiment identity, tuning budgets.

**Build:** dataset → train → evaluate → export tasks driven by a validated configuration. Implement a small durable task runner with bounded retries; no arbitrary workflow language. Record task status and immutable manifests. Compare three configurations with fixed data and a fixed compute budget. Add an MLflow adapter if it removes storage/UI work without hiding the run contract.

**Visualize:** DAG with task duration, retry count, logs, and links to artifacts; run comparison with parameter differences.

**Done when:** inject one transient evaluation failure; retry it without silently training a different model. Changing a feature definition invalidates the affected dataset identity. A new process can inspect completed and failed runs.

**Explain:** when is a cached artifact safe to reuse?

## M4 — Evaluation and model inspection · week 6

**Understand:** baselines, temporal holdouts, segment performance, explanation limits.

**Build:** regression MAE/RMSE, actual-versus-predicted values, residuals, and segment metrics by region and demand level. Keep a locked test period outside tuning. Add permutation importance and one decision-tree path inspector. Train-only preprocessing must be bundled with the model.

**Visualize:** linked residual plot, segment table, feature distributions, and an input editor highlighting a tree's active decision path. Clearly label this as the selected tree, not an explanation of every model type.

**Done when:** an overall improvement that hurts a declared segment is visible and fails a configured promotion gate. Report sample counts with all segment metrics.

**Explain:** why can lower validation error still make a worse deployment?

## M5 — Registry, deployment, and rollback · week 7

**Understand:** immutable version versus mutable alias; compatibility; desired versus observed state.

**Build:** artifact digest checks, input signature validation, evaluation-gated promotion, a persistent deployment record, and a controller that loads and warms a candidate before atomically activating it. Add stable/candidate aliases, deterministic traffic assignment, readiness status, and rollback. Begin with one serving process and document that limitation.

**Visualize:** version lineage, desired/current/pending deployment states, gate results, and rollout timeline.

**Done when:** an incompatible candidate is rejected while the active model keeps serving. Restart the controller mid-rollout and recover. Roll back and prove from prediction logs which version served each request.

**Explain:** why is uploading a model file different from successfully deploying it?

## M6 — Prediction traces and online quality · weeks 8–9

**Understand:** request latency, request throughput versus model-score throughput, label delay, drift versus measured quality.

**Build:** trace spans for feature lookup, preprocessing, inference, and response; prediction logging; delayed-label joins keyed by prediction/outcome identity; scheduled monitors for nulls, freshness, distribution shifts, latency, errors, and labeled MAE. Add fixed alert thresholds and evidence links. Evaluate retraining candidates before promotion; start with manual approval in the local console.

**Visualize:** waterfall, p50/p95/p99 over time, distributions with fixed bins, label coverage by cohort age, quality on matured cohorts, and an incident panel.

**Done when:** missing features, slower inference, changed input mix, and genuine label degradation produce distinguishable evidence. Never display unlabeled predictions as correct. Handle requests that never receive labels explicitly.

**Explain:** why can a distribution shift occur without quality degradation, and vice versa?

**Core checkpoint:** demonstrate the full delivery-time lifecycle before starting retrieval.

## M7 — Reuse the platform for retrieval and ranking · weeks 10–11

**Understand:** candidate generation versus ranking, embeddings, hydration, index/model compatibility.

**Build:** seeded user/item interactions, popularity baseline, simple learned embeddings, exact vector search, then a simple click ranker. Reuse run/registry/deployment contracts. Start with about 1,000 users and 10,000 items. Evaluate candidate recall against exact neighbors before introducing ANN. Bind embedding model and index versions; reject mismatched combinations. Split interactions temporally and use an explicit negative-sampling policy.

**Visualize:** candidate funnel, per-stage scores, selected item's features and provenance, index lineage, recall/latency tradeoff, and optional 2D embedding projection with a distortion disclaimer.

**Done when:** the same entity moves from retrieved candidate to scored result with a complete trace. Compare exact search with a deliberate approximation. Show cold-start fallback and an incompatible index deployment rejection. Separate synthetic recommendation metrics from evidence of real user benefit.

**Explain:** why can a great ranker fail if retrieval excludes the relevant item?

## M8 — Serving optimization and final teach-back · week 12

**Understand:** fanout, batching, local hydration, tail latency, capacity versus utilization.

**Build:** benchmark remote-style per-item lookup, multi-get, and an instance-local item-feature snapshot. Compare one-at-a-time scoring with bounded batching. Use separate warmed benchmark runs with identical requests, request sizes, and corpus. Record hardware, concurrency, rates, errors, and memory; use a load generator that reports offered and completed load.

**Visualize:** matched latency distributions, hydration RPC counts, memory/freshness tradeoff, and score-throughput versus request-throughput charts.

**Done when:** publish measurements and explain which strategy you would choose under a memory limit and a freshness objective. Give a ten-minute walkthrough from one raw event to a monitored recommendation, then diagnose one injected incident without opening backend code.

**Explain:** when does saving feature-store calls stop being worth replicated memory and update complexity?

## Optional extensions — after the core roadmap

- Replace the local log with Kafka-compatible infrastructure; demonstrate consumer rebalance and replay correctness.
- Introduce a feature-store framework and compare what it replaces versus what remains your responsibility.
- Move the runner to a workflow engine and preserve the same task and artifact identities.
- Add Kubernetes reconciliation, multiple replicas, mixed-version rollout, and health-based rollback.
- Add deep ranking models and optimized exports only after profiling identifies a compute bottleneck.
- Add sharded retrieval, per-shard hydration, timeouts, and partial-result policy.
- Add authentication, project isolation, quotas, and authorization before any shared hosted deployment.

## Definition of project completion

Both workloads use shared platform contracts. Every production prediction has model and feature provenance. Historical reconstruction excludes unavailable data. Failed training and deployment are inspectable. Rollback is demonstrated. Delayed labels drive honest quality metrics. At least three measured tradeoffs and four incident investigations are documented. All screens show real measurements or clearly labeled fixtures.
`,B=[{id:`roadmap`,title:`Complete roadmap`,category:`THE PLAN`,text:ct},{id:`architecture`,title:`Architecture & APIs`,category:`SYSTEM DESIGN`,text:`# Target architecture and implementation choices

This is a proposed architecture for learning. Components are logical boundaries; initially most can live in one Python repository and run locally.

## Component map

| Component | Responsibility | First implementation | Add complexity when |
| --- | --- | --- | --- |
| Event source and log | Record event identity, time, and arrival | Seeded simulator; append-only JSONL | Broker partition/rebalance is the experiment |
| Feature computation | Version transformations and windows | Shared Python/SQL functions | Data exceeds a local worker's budget |
| Historical store | Preserve timestamped feature history | Parquet queried with DuckDB | Multiple writers or large backfills are needed |
| Online feature view | Return latest eligible entity features | SQLite materialized table via an interface | Network latency and isolation need study |
| Dataset builder | Construct reproducible as-of datasets | DuckDB queries and immutable manifest | Partitioned builds become necessary |
| Workflow runner | Persist task state, retry, and artifacts | One durable background worker | Scheduling/concurrency becomes the bottleneck |
| Training/evaluation | Fit models and generate reports | scikit-learn on CPU | A measured use case needs deep models |
| Tracking/registry | Tie runs to immutable model bundles | SQLite metadata + filesystem; optional MLflow adapter | Shared service operation is needed |
| Deployment controller | Reconcile desired and loaded versions | Single-process controller with persistent state | Multiple replicas require convergence |
| Prediction/retrieval | Validate, hydrate, score, trace | FastAPI and exact search | Benchmarks justify ANN/batching/sharding |
| Monitoring | Join delayed outcomes, aggregate signals | Scheduled local queries and report API | Monitoring volume needs dedicated storage |
| Console | Explain and operate the lifecycle | React/TypeScript; React Flow; chart library | Large graphs require layout/virtualization |

Choose and lock package versions during M0. Do not introduce all optional infrastructure at once. SQLite uses a bounded write path; Parquet snapshots are published atomically and are not mutated by online requests.

## Control plane and data plane

The **control plane** accepts training/deployment intent, records state, and schedules work. The **data plane** handles predictions using loaded model versions and online feature views. The metadata database must not be required for every model score; retain a loaded version if the control plane becomes unavailable.

\`\`\`mermaid
sequenceDiagram
    actor Engineer
    participant UI as Console/API
    participant DB as Metadata
    participant Runner
    participant Registry
    participant Controller
    participant Serving
    Engineer->>UI: Submit versioned configuration
    UI->>DB: Record run intent + idempotency key
    Runner->>DB: Claim pending run
    Runner->>Runner: Build dataset, train, evaluate, export
    Runner->>Registry: Publish immutable bundle + digest
    Runner->>DB: Persist report and lineage
    Engineer->>UI: Request promotion
    UI->>DB: Set desired model version
    Controller->>Registry: Verify bundle + compatibility
    Controller->>Serving: Load, warm, health-check candidate
    Serving-->>Controller: Ready with loaded version
    Controller->>Serving: Atomically activate candidate
    Controller->>DB: Record observed version
\`\`\`

## What to implement yourself

Implement small feature specifications, temporal dataset construction, lineage contracts, promotion policy, deployment state transitions, prediction traces, and linked visual interactions. These are the learning surface. Reuse numerical libraries, HTTP frameworks, storage engines, and chart renderers. Keep adapters small enough that changing infrastructure does not change workload model code.

## Proposed repository layout during implementation

\`\`\`text
apps/console/                 interactive visualization and controls
services/api/                training, registry, monitoring, and inspect APIs
services/worker/             durable jobs and feature materialization
services/serving/            online prediction and retrieval
packages/contracts/          schemas, IDs, and validation
packages/features/           transformations shared by offline/online paths
workloads/delivery/          simulator, configuration, model code
workloads/recommendation/    interactions, embeddings, retrieval, ranking
tests/                       temporal, recovery, compatibility, lifecycle tests
reports/                     committed small benchmark/incident writeups
\`\`\`

These directories are planned, not empty code stubs. Keep architecture docs separate from executable behavior so progress stays honest.

## Proposed API surface

| API | Purpose |
| --- | --- |
| \`GET /features\`, \`GET /features/{id}/history\` | Catalog and temporal inspection |
| \`POST /datasets\`, \`GET /datasets/{id}\` | As-of build request and manifest |
| \`POST /runs\`, \`GET /runs/{id}\` | Idempotent run submission and task state |
| \`GET /models/{version}\` | Immutable bundle metadata and report |
| \`POST /deployments\`, \`GET /deployments/{id}\` | Desired state and reconciliation status |
| \`POST /predict\`, \`POST /rank\` | Versioned predictions and ranked candidates |
| \`GET /traces/{id}\`, \`GET /lineage/{id}\` | Request spans and artifact ancestry |
| \`GET /monitoring\` | Time-filtered quality, freshness, and service signals |

Mutation endpoints validate configuration and return an operation ID. UI buttons display pending/failed/succeeded from backend state. Idempotency keys prevent duplicate run or deployment submissions.
`},{id:`contracts`,title:`Data contracts`,category:`CORRECTNESS`,text:`# Proposed data contracts and invariants

These are design contracts for the implementation, not claims about Snap or Uber internals. All timestamps are UTC with explicit precision. Define units, required fields, and schema compatibility before implementing the corresponding component.

## Objects to carry through the system

| Object | Minimum fields |
| --- | --- |
| Event | event_id, entity_id, event_time, available_at, event_type, payload, schema_version |
| Feature specification | feature_id, version, entity_key, type, unit, window, TTL, default policy, owner, transformation digest |
| Feature snapshot | entity_id, feature_id/version, value, event_cutoff, available_at, materialization_id |
| Dataset manifest | dataset_id, event-log digest, feature-spec digests, as-of policy, split bounds, row count, content digest |
| Run | run_id, config digest, dataset_id, code revision, environment lock digest, seed, tasks, metrics, artifact digests |
| Model bundle | model_version, run_id, artifact digest, preprocessing, input signature, feature versions, evaluation report |
| Retrieval index | index_version, embedding_model_version, corpus snapshot, dimension, distance metric, build digest |
| Deployment | deployment_id, desired/current/pending versions, generation, gate results, route policy, last error |
| Prediction | prediction_id, request_id, trace_id, prediction_time, entity/item IDs, model/index versions, feature values/versions, feature availability timestamps, output |
| Outcome | outcome_id, prediction/request linkage, observed_at, available_at, label, schema_version |

Use opaque immutable IDs; aliases are mutable pointers. Capture the resolved model version in every prediction, even when the request used an alias. Store small full feature vectors during local experiments to make replay possible; introduce sampling/retention policy only after measuring storage.

## Temporal correctness

At prediction time \`t\`, a usable feature snapshot must have both \`event_cutoff <= t\` and \`available_at <= t\`. Select the newest eligible snapshot according to a documented deterministic ordering. A later-arriving correction can change a retrospective analysis but must not silently rewrite the historical view of what serving knew.

For a window of length \`W\`, explicitly use a boundary convention, for example \`[t-W, t)\`. A contributing event must also have been available to the materializer at the time the snapshot was produced. Label availability is separate from event occurrence; the model's own future outcome cannot be an input feature. Fit preprocessing only on the training partition.

An as-of join on event time alone is insufficient for delayed or corrected data. Start with a small explicit bitemporal query and tests. Distinguish two dataset modes: **historical serving reconstruction** and **retrospective corrected analysis**. Store the chosen policy in the dataset manifest.

## Recovery and artifact integrity

- Deduplicate input events by event_id; reject conflicting payloads for the same identity.
- Update feature state and its consumed offset transactionally in the first local implementation.
- Preserve history before publishing the corresponding online snapshot; record materialization identity in both.
- Publish artifacts to a temporary location, verify content digest, then atomically make the immutable bundle visible.
- Retry tasks with the same immutable inputs; never silently replace a completed run's artifacts.
- Version transformation and preprocessing code alongside model weights.

## Deployment state machine

\`\`\`mermaid
stateDiagram-v2
    [*] --> Requested
    Requested --> Validating
    Validating --> Rejected: schema or evaluation gate fails
    Validating --> Loading: compatible bundle
    Loading --> Ready: warmup and checks pass
    Loading --> Failed: load or health error
    Ready --> Active: atomic route update
    Active --> Superseded: replacement activated
    Superseded --> Active: rollback requested and validated
\`\`\`

The currently active version stays loaded during candidate validation. Track desired generation so an older reconciliation cannot overwrite a newer request. Record state changes durably and recover after restart. A promotion request and a successful activation are separate events.

## Evaluation and monitoring rules

Choose delivery MAE as the first promotion metric; also inspect RMSE and declared segments. Compare candidate and baseline on the same data split. Freeze promotion thresholds in configuration before viewing the candidate result.

Join labels to predictions by stable identities, deduplicate outcomes, and define how multiple forecasts for one delivery are evaluated. For example, use only the pre-order forecast for the first quality report. Report matured-cohort quality, label coverage, pending outcomes, and permanently missing labels separately. A simulator's latent click probability is not an observed production label.
`},{id:`visualization`,title:`Visualization guide`,category:`INTERFACE`,text:`# Visualization as the main learning interface

The goal is to answer concrete operational questions. Build each view with the relevant milestone, using real backend records. Early fixtures must have a visible fixture badge. Polling is enough initially; animate only actual transitions.

## Core views

| View | Question answered | Data and interaction | Milestone |
| --- | --- | --- | --- |
| Lifecycle explorer | Where did this prediction come from? | Click event/dataset/run/model/prediction nodes; show IDs, timestamps, digests and causal edges | M0 onward |
| Feature catalog | What does this feature mean and is it fresh? | Search definitions; inspect units, windows, defaults, history and missingness | M1 |
| Time travel | What was knowable at the cutoff? | Move cutoff slider; distinguish occurrence, arrival, snapshot creation and label availability | M1 |
| Materializer | Why are features stale? | Throughput, backlog and age charts; pause/replay controls with actual status | M2 |
| Workflow | Where did this run fail? | Click task DAG nodes for logs, durations, retries, inputs and artifacts | M3 |
| Experiments | What changed between models? | Select runs; highlight config diffs and compare identical evaluation slices | M3–M4 |
| Model inspector | Where is the model wrong? | Linked residuals, segment counts, feature distributions and tree-path inspector | M4 |
| Deployments | Is intended state actually serving? | Desired/observed versions, gates, health status, routing and rollback history | M5 |
| Prediction debugger | Why did this request take this long? | Waterfall and actual feature vector; model version; defaults, cache ages and output | M6 |
| Monitoring | Is data, infrastructure, or model quality failing? | Aligned time ranges for freshness, missingness, shifts, labeled error and label coverage | M6 |
| Retrieval lab | Which stage excluded or promoted this item? | Candidate funnel, exact-neighbor comparison, per-stage scores and index version | M7 |
| Performance lab | What does the optimization cost? | Compare latency, RPC count, memory, staleness and load under matched conditions | M8 |

## Interaction rules

Select a prediction to filter its model, feature snapshots, and request trace. Select a time interval to update all monitoring panels consistently. Keep deep links with object ID, selected run versions, and time range. Show numerator, denominator, sample count, and units in tooltips; use consistent bins for distribution comparisons.

Use color plus text/icon for status, keyboard focus for graph nodes, and tables as alternatives to graphs. Empty data, delayed data, failed queries, and true zero values must have distinct presentations. Display clock/timezone conventions. Label rates as requests/sec or candidate scores/sec rather than an ambiguous QPS.

The lifecycle graph shows causal relationships. It should not imply every dataset row is individually drawn; aggregate by artifact and allow drill-down to sampled records. Start with fixed graph layouts, then introduce React Flow interaction without changing the underlying lineage API.

## Screen walkthrough for the final demo

1. Open a delivery prediction and inspect its features and historical cutoff.
2. Jump to its model, training dataset, and validation report.
3. Compare a candidate and stable version, request rollout, then observe activation.
4. Pause feature materialization and diagnose the freshness incident.
5. Join matured labels and see the quality effect; restore the pipeline.
6. Open a recommendation trace and inspect the retrieval/ranking funnel.
7. Compare hydration strategies using recorded benchmark conditions.

Capture one screenshot and a short explanation per milestone in reports/. A polished static dashboard with fabricated activity does not satisfy any backend acceptance gate.
`},{id:`experiments`,title:`Failure experiments`,category:`PRACTICE`,text:`# Experiments that make the components understandable

These are proposed exercises. No benchmark or result has been measured yet. Each report should contain a hypothesis, fixed inputs, intervention, observed evidence, explanation, and next decision.

| Experiment | Intervention | Observe | Passing evidence |
| --- | --- | --- | --- |
| Future leakage | Add a highly predictive event after the cutoff | Dataset rows and suspicious score improvement | Correct builder excludes it; deliberately naive builder shows the trap |
| Late arrival | Deliver an old event after prediction time | Event versus availability timeline | Historical serving reconstruction remains unchanged |
| Duplicate processing | Replay a batch and crash near checkpoint | Aggregates, offsets, duplicate count | Recovered output equals clean replay |
| Stale features | Pause materialization during continued traffic | Backlog, feature age, fallback and errors | Freshness alert points to paused worker; recovery clears lag |
| Failed task | Make evaluation fail once | DAG task states and artifacts | Retry preserves dataset/model identity |
| Segment regression | Improve a dominant segment while hurting another | Overall and slice metrics with counts | Declared gate rejects the candidate |
| Bad deployment | Change an input signature or corrupt a bundle | Validation status and active prediction version | Candidate rejected; current version still serves |
| Controller restart | Restart during candidate warmup | Desired generation, loaded model, routing log | Converges without activating an obsolete request |
| Label delay | Increase outcome arrival delay | Label coverage and matured-cohort quality | Missing labels are pending, not successes or failures |
| Input shift | Change one feature distribution without changing labels | Distribution and quality panels | Shift detected without falsely equating it to accuracy loss |
| Retrieval mismatch | Load an index from another embedding model | Compatibility check and candidate quality | Deployment rejects incompatible versions |
| Fanout | Score 10/100/1,000 items with per-item lookup vs multi-get vs local snapshot | RPC count, p95, memory and feature age | Reproducible measured tradeoff, even if the expected winner loses |
| Batch scoring | Vary batch size and concurrent requests | Throughput, p99, errors, queue delay | Identify a bounded operating range rather than maximizing throughput alone |

## Small benchmark protocol

Record machine/OS, source revision, package lock digest, dataset/seed, model/index version, corpus size, cache state, feature sizes, request count, offered rate, completed rate, concurrency, failures/timeouts, warmup, and run duration. Repeat independent measured runs; report variation and sample count with percentiles. Include queueing and failed requests so overload is visible. Separate request counts from number of candidate scores.

Suggested first sweeps: 1/8/32 concurrent clients; 10/100/1,000 candidates; warm and cold caches. Stop or reduce the sweep if the machine cannot support it and record the limit. Establish latency/freshness objectives after measuring the baseline. No company-scale throughput claim follows from these local results.

## Report template

\`\`\`text
Question:
Hypothesis:
Code/data/environment identities:
Fixed conditions:
Intervention:
Measurements and sample counts:
Screenshots/trace IDs:
What happened and why:
Limitations:
Implementation decision:
\`\`\`
`},{id:`sources`,title:`Sources & reading`,category:`REFERENCES`,text:`# Reading notes and source boundaries

Read on October 26, 2026. These are historical public descriptions, not verified descriptions of either company's current internal platform. The rest of this repository is an original proposed learning design; its service names, schemas, experiments, and schedule are recommendations.

## Snap Bento

[Introducing Bento, Snap's ML Platform](https://eng.snap.com/introducing-bento), January 28, 2025.

Bento groups its architecture into feature/training-data generation, training, production, and a UI/control plane with monitoring. It describes offline and online features, configurable training workflows, model export, and automated incremental updates. Its recommendation-serving discussion emphasizes feature hydration, retrieval, batching, and hardware-aware efficiency. Deployments reconcile desired and running state. Monitoring includes feature statistics, predictions, and online/offline discrepancies.

Read these sections in order: System Architecture → Feature and Training Data Generation → Model Training → ML Production → UI, Control Plane and Monitoring. Use the ad-ranking case study after the first end-to-end implementation.

## Uber Michelangelo

[Meet Michelangelo: Uber's Machine Learning Platform](https://www.uber.com/us/en/blog/michelangelo-machine-learning-platform/), September 5, 2017.

Michelangelo organizes the lifecycle around data management, training, evaluation, deployment, prediction, and monitoring. The delivery-time example combines request, historical, and near-real-time features. Shared feature definitions connect offline and online use. The article describes versioned experiment/model metadata, tree and feature visualizations, online/batch serving, model aliases, and outcome-based monitoring. Embedded-library deployment is described as intended future functionality in this article.

Read the delivery-time case study first, then Manage data → Evaluate models → Deploy models → Monitor predictions → Management plane, API, and web UI.

## How to use the references

These two posts are sufficient for the core reading track. Use them as questions to investigate rather than specifications to reproduce verbatim. For each section, write: What problem is being solved? What invariant should hold? What breaks if this component disappears? Which measurement would justify adding complexity?

The roadmap deliberately uses a modern local stack instead of reproducing either company's historical infrastructure. Point-in-time tests, workload sizes, screen interactions, rollout policy, and acceptance criteria are this project's choices.

## Tool references for implementation

Check APIs and pin compatible versions when implementing; this planning repository installs no dependencies.

- [DuckDB as-of joins](https://duckdb.org/docs/stable/guides/sql_features/asof_join.html): candidate primitive for historical feature lookup; arrival-time constraints still need explicit treatment.
- [FastAPI](https://fastapi.tiangolo.com/): candidate API layer.
- [MLflow Tracking](https://mlflow.org/docs/latest/ml/tracking/): adapter candidate for run parameters, metrics, and artifacts.
- [React Flow](https://reactflow.dev/learn): candidate interactive graph renderer.
`}],V=ct.split(/^## /m).slice(1).filter(e=>/^M\d+ —/.test(e)).map((e,t)=>{let[n,...r]=e.split(`
`),[,i,a,o]=n.match(/^(M\d+) — (.+) · (.+)$/);return{id:i,title:a,week:o,body:r.join(`
`).trim(),issue:t+1}}),H=[{id:`events`,title:`Event log`,group:`Data`,stage:`M0`,icon:`01`,desc:`The durable record of what happened and when it became available.`,input:`Seeded delivery or interaction events`,output:`Immutable events with identity and two clocks`,invariant:`Replaying an event must not count it twice.`,experiment:`Duplicate a batch and compare recovered state with clean replay.`},{id:`features`,title:`Feature computation`,group:`Data`,stage:`M1`,icon:`02`,desc:`Turns raw events into reusable, versioned signals such as recent restaurant prep time.`,input:`Events, feature definitions, window bounds`,output:`Historical snapshots and online values`,invariant:`A feature can only use data available at its materialization time.`,experiment:`Pause the worker and inspect backlog and feature age.`},{id:`history`,title:`Historical features`,group:`Data`,stage:`M1`,icon:`03`,desc:`Preserves old feature values so a training row can reconstruct the past.`,input:`Timestamped feature snapshots`,output:`As-of lookups over versioned history`,invariant:`Future and late-arriving information cannot leak into an earlier prediction.`,experiment:`Move the cutoff in the time-travel lab.`},{id:`online`,title:`Online feature view`,group:`Serving`,stage:`M2`,icon:`04`,desc:`A small serving-oriented view of the latest usable entity features.`,input:`Published materializations`,output:`Feature values, versions, and freshness`,invariant:`Missing or stale data follows an explicit policy.`,experiment:`Request an unknown entity and inspect its fallback.`},{id:`dataset`,title:`Dataset builder`,group:`Training`,stage:`M1`,icon:`05`,desc:`Joins labels and historical features into reproducible training rows.`,input:`Feature specifications, log snapshot, temporal policy`,output:`Dataset and immutable manifest`,invariant:`A dataset identity changes when its inputs or transformations change.`,experiment:`Add a future event and verify earlier rows stay unchanged.`},{id:`training`,title:`Training workflow`,group:`Training`,stage:`M3`,icon:`06`,desc:`Runs dataset preparation, training, evaluation, and export as inspectable tasks.`,input:`Validated config and immutable dataset`,output:`Model artifacts, metrics, task logs`,invariant:`Retries retain the same inputs and artifact identity.`,experiment:`Fail evaluation once; retry without training another model.`},{id:`registry`,title:`Model registry`,group:`Training`,stage:`M4`,icon:`07`,desc:`Connects immutable model bundles to the code, data, and evaluation that produced them.`,input:`Model, preprocessing, report, signature`,output:`Verified version and lineage`,invariant:`Weights and preprocessing travel together.`,experiment:`Corrupt an artifact and verify its digest check fails.`},{id:`controller`,title:`Deployment controller`,group:`Control`,stage:`M5`,icon:`08`,desc:`Moves from requested state to a healthy, loaded model that can accept traffic.`,input:`Desired version and promotion gates`,output:`Observed state and routing changes`,invariant:`A failed candidate must leave the active model serving.`,experiment:`Try a broken signature in the rollout lab.`},{id:`retrieval`,title:`Candidate retrieval`,group:`Serving`,stage:`M7`,icon:`09`,desc:`Finds a small candidate set before a ranker spends compute scoring it.`,input:`Query embedding and compatible index`,output:`Candidate IDs, similarity scores, provenance`,invariant:`The index and embedding model must be compatible.`,experiment:`Compare approximate candidates with exact nearest neighbors.`},{id:`inference`,title:`Prediction service`,group:`Serving`,stage:`M6`,icon:`10`,desc:`Hydrates features, applies preprocessing, scores, and records what actually served.`,input:`Request, online features, loaded model`,output:`Prediction, resolved version, trace`,invariant:`Every prediction identifies the actual model and feature versions.`,experiment:`Compare per-item lookups with multi-get and local hydration.`},{id:`monitoring`,title:`Outcome monitoring`,group:`Feedback`,stage:`M6`,icon:`11`,desc:`Connects predictions with delayed outcomes to distinguish freshness, service, and quality issues.`,input:`Prediction logs, labels, traces`,output:`Coverage, quality, freshness, and latency signals`,invariant:`An unknown outcome is never counted as a correct prediction.`,experiment:`Delay labels and watch coverage change separately from accuracy.`},{id:`console`,title:`Visual control plane`,group:`Control`,stage:`M0`,icon:`12`,desc:`Makes intent, lineage, and failures understandable across the lifecycle.`,input:`API records, state transitions, reports`,output:`Inspectable graphs and explicit user actions`,invariant:`A screen must show real state or label itself as a simulation.`,experiment:`Diagnose an incident using the views without opening backend code.`}],lt=`# Tutorials for every platform layer

Start here if the architecture diagram feels like a collection of unfamiliar boxes. Each lesson introduces one responsibility, walks through a small example, and asks you to connect it to a real implementation. Python examples use only the standard library and can be saved to a scratch file and run with \`python3 filename.py\`. They teach a contract; they are not deployed services.

Work through the lessons in order, or open one from the architecture inspector. Spend 30–60 minutes on each example and use the associated roadmap milestone for the larger build. Run the example, predict the result of the suggested change, then explain what happened in your own notes.

## 01 — Event log

### Start with the problem

A user sees an ad, clicks it, and sends another request. These facts are the raw material for both training and serving. A durable log lets multiple consumers process the same history and recover after a failure. An event needs an identity as well as a timestamp: retries can deliver the same fact twice.

Use separate occurrence and availability times. A click that happened at 12:00 but arrived at 12:03 was unavailable to a prediction made at 12:01.

### Try it in Python

\`\`\`python
events = [
    {"id": "e1", "user": 123, "kind": "impression", "event_at": 1, "available_at": 2},
    {"id": "e2", "user": 123, "kind": "click", "event_at": 3, "available_at": 8},
    {"id": "e2", "user": 123, "kind": "click", "event_at": 3, "available_at": 8},
]
unique = {}
for event in events:
    previous = unique.get(event["id"])
    if previous is not None and previous != event:
        raise ValueError("Conflicting payload for an existing event ID")
    unique[event["id"]] = event
known_at_5 = [e for e in unique.values() if e["available_at"] <= 5]
print(len(unique), [e["id"] for e in known_at_5])
\`\`\`

Expected output: \`2 ['e1']\`. There are two unique facts, but only one was known at time 5. Identity-based deduplication removes the repeated click; the availability filter excludes the delayed click.

### Build the layer

1. Persist the records as newline-delimited JSON, retaining both clocks and a schema version.
2. Give each consumer a durable offset. Commit the offset together with its local aggregate update when using one transactional database.
3. Restart the consumer halfway through a batch and compare its result with a clean replay.

### See it and break it

Draw an event timeline and show accepted, duplicate, conflicting, and not-yet-available events. Change the duplicate's user ID: the example must reject it rather than silently replace an earlier fact. An in-memory dictionary forgets deduplication state after restart; the production exercise must persist it.

### Check your understanding

Why is an event ID different from a user ID? What fails if you advance the consumer offset before writing its output? Complete this layer when replay produces the same accepted records and you can explain your recovery boundary.

## 02 — Feature computation

### Start with the problem

A model needs measurable signals, not an unstructured history. A feature definition specifies an entity, a time window, a transformation, and a missing-value policy. For ads, one simple signal is user click-through rate: clicks divided by impressions from the same eligible population and window.

Counting all event types in the denominator changes the metric. Counting repeated clicks without deduplication can also produce a misleading rate.

### Try it in Python

\`\`\`python
from collections import Counter

events = [
    {"kind": "impression", "at": 1, "available": 1},
    {"kind": "impression", "at": 2, "available": 2},
    {"kind": "click", "at": 3, "available": 7},
    {"kind": "video_view", "at": 4, "available": 4},
]
def features(cutoff):
    eligible = [e for e in events
                if cutoff - 10 <= e["at"] < cutoff
                and e["available"] <= cutoff]
    counts = Counter(e["kind"] for e in eligible)
    impressions = counts["impression"]
    ctr = counts["click"] / impressions if impressions else None
    return impressions, counts["click"], ctr

print(features(5))
print(features(8))
\`\`\`

Expected: \`(2, 0, 0.0)\` and \`(2, 1, 0.5)\`. The window is \`[cutoff − 10, cutoff)\`. The video view does not increase impression count. This tiny example assumes one click per impression; a real pipeline needs an impression identifier and an attribution policy.

### Build the layer

1. Store the feature name, version, entity key, unit, window, and default policy in a catalog.
2. Implement the transformation once and reuse its definition for historical and online paths.
3. Add a per-category aggregation to create interest features; define a zero-impression result explicitly.

### See it and break it

Plot counts and CTR as the cutoff moves. Try including video views in the denominator, then explain why the result changed. Test window boundaries, missing entities, and late events before optimizing execution. Use the Spark track to implement the same aggregation over a million synthetic records.

### Check your understanding

What must stay identical between training and serving? Why might clicks and impressions from mismatched attribution windows produce CTR above one? Completion means your definition and denominator can be explained without reading the code.

## 03 — Historical feature store

### Start with the problem

An online store usually answers “what is the latest value?” Training needs “what value could this prediction have used then?” Preserve a history of feature snapshots and the times they became available. Overwriting yesterday's value destroys the evidence needed to reproduce a training row.

Iceberg can version a table, but table commit time and the business-time correctness of individual rows are separate concerns. A frozen table may still contain future information relative to a training example.

### Try it in Python

\`\`\`python
snapshots = [
    {"id": "s1", "cutoff": 4, "available": 5, "clicks": 1},
    {"id": "s2", "cutoff": 8, "available": 12, "clicks": 3},
]
def lookup(prediction_time):
    usable = [s for s in snapshots
              if s["cutoff"] <= prediction_time
              and s["available"] <= prediction_time]
    return max(usable, key=lambda s: (s["cutoff"], s["available"], s["id"])) if usable else None

print(lookup(10)["id"])
print(lookup(12)["id"])
\`\`\`

Expected: \`s1\`, then \`s2\`. The second snapshot describes events before time 10, but was only available at time 12. Selecting by cutoff alone would reconstruct knowledge the serving system did not yet have.

### Build the layer

1. Store \`(entity, feature_version, event_cutoff, available_at, value, snapshot_id)\` as immutable history.
2. Define deterministic tie-breaking for corrections with equal event cutoffs.
3. Record table snapshot IDs in a dataset manifest, and independently enforce the temporal join policy for each prediction row.

### See it and break it

Use a two-axis timeline: occurrence/cutoff time and availability time. Remove the availability condition from the example and show the incorrect result at time 10. In the Iceberg week, retain an earlier snapshot, evolve a schema, and compare both snapshots before experimenting with retention policies.

### Check your understanding

What does a table snapshot reproduce, and what does it not prove? Why can a correction be useful for retrospective analysis but invalid for reconstructing historical serving? You are done when those two dataset purposes are explicitly distinguished.

## 04 — Online feature serving

### Start with the problem

A prediction request cannot scan all historical events. It needs a small lookup keyed by entity and feature version. The value must carry freshness and provenance so serving can decide whether to use it, fall back, or fail.

A key-value database such as Redis is one possible implementation. It does not define the feature's meaning, repair stale producers, or guarantee training/serving parity on its own.

### Try it in Python

\`\`\`python
store = {123: {"clicks": 7, "available_at": 90, "version": "clicks-v1"}}
def fetch(user, now, ttl=15):
    row = store.get(user)
    if row is None:
        return {"value": 0, "reason": "missing", "version": "clicks-v1"}
    if row["available_at"] > now:
        raise ValueError("Future materialization")
    if now - row["available_at"] > ttl:
        return {"value": 0, "reason": "stale", "version": row["version"]}
    return {"value": row["clicks"], "reason": "fresh", "version": row["version"]}

print(fetch(123, 100)["reason"], fetch(123, 110)["reason"], fetch(999, 100)["reason"])
\`\`\`

Expected: \`fresh stale missing\`. Zero is an explicit teaching fallback, not a universally correct product choice. Preserve the reason so a dashboard can distinguish true zero activity from unavailable data.

### Build the layer

1. Introduce a store interface with single and batch lookup, then start with a local implementation.
2. Store definition version, materialization time, and value together; reject older writes that would replace newer values.
3. Add Redis after you can test the contract; use bounded connection and request timeouts.

### See it and break it

Pause the materializer and watch age grow while the last value remains present. Visualize stale fraction, missing fraction, and lookup latency separately. An expired Redis key and a stale value require a deliberate policy, not an accidental exception handler.

### Check your understanding

What happens if your feature service times out? When is using an older value better than returning zero? Completion means every prediction records which policy was applied and which feature version it used.

## 05 — Training dataset builder

### Start with the problem

A training dataset combines a prediction opportunity, features available at that opportunity, and an outcome learned later. It must not use the outcome as an input. Splitting randomly can hide temporal changes, so begin with a chronological holdout.

The manifest is the dataset's identity card: source snapshot, feature definitions, temporal policy, split bounds, and content digest.

### Try it in Python

\`\`\`python
import hashlib
import json

predictions = [{"id": "p1", "at": 5}, {"id": "p2", "at": 9}]
history = [{"available": 2, "value": 1}, {"available": 7, "value": 3}]
labels = {"p1": 0, "p2": 1}  # outcomes joined after the prediction
rows = []
for p in predictions:
    eligible = [f for f in history if f["available"] <= p["at"]]
    feature = max(eligible, key=lambda f: f["available"])
    rows.append({"id": p["id"], "at": p["at"], "x": feature["value"], "y": labels[p["id"]]})
canonical = json.dumps(rows, sort_keys=True, separators=(",", ":"))
print([(r["x"], r["y"]) for r in rows])
print(len(hashlib.sha256(canonical.encode()).hexdigest()))
\`\`\`

Expected: \`[(1, 0), (3, 1)]\` and a digest length of \`64\`. This example assumes each feature's event cutoff equals its availability time; the real builder must apply both conditions from the historical-store lesson.

### Build the layer

1. Define one prediction opportunity per row and a stable key for joining outcomes.
2. Reject duplicate labels or specify how corrections are resolved. Keep immature labels out of training until their policy is satisfied.
3. Split by time, fit preprocessing on training data only, and persist a manifest before launching training.

### See it and break it

Click a row to reveal its prediction time, chosen snapshots, and eventual label. Add a feature that contains the future click and notice the suspicious model improvement. Your temporal checks should reject that feature before metrics tempt you to deploy it.

### Check your understanding

Would a table snapshot ID alone identify this dataset? What happens if the transformation code changes? Completion means you can reconstruct a row and account for every input without trusting a notebook's current state.

## 06 — Training workflow

### Start with the problem

Training is a sequence of dependent tasks: prepare data, fit a model, evaluate, export. A workflow runner records task state and retries bounded failures. It should not silently turn a retry into a new experiment with different data.

Airflow is useful for coordinating batch workflows. The scheduler tells a task when to run; Spark or the training process performs the computation.

### Try it in Python

\`\`\`python
states = {name: "pending" for name in ["dataset", "train", "evaluate", "export"]}
attempts = {name: 0 for name in states}
for task in states:
    for attempt in range(2):
        attempts[task] += 1
        states[task] = "running"
        try:
            if task == "evaluate" and attempt == 0:
                raise TimeoutError("Temporary evaluator failure")
            states[task] = "succeeded"
            break
        except TimeoutError:
            states[task] = "retrying"
    if states[task] != "succeeded":
        raise RuntimeError(f"Stop downstream work after {task}")
print(attempts)
\`\`\`

Expected: dataset, train, and export each have one attempt; evaluate has two. This local loop teaches sequencing. It does not implement durable scheduling, parallelism, or recovery after process termination.

### Build the layer

1. Give a run immutable inputs: dataset identity, configuration, code revision, environment, and seed.
2. Persist task transitions and write artifacts atomically; only cache tasks whose input identity matches.
3. Pass artifact references between tasks, not large DataFrames. Add explicit resource and timeout budgets.

### See it and break it

Draw a task DAG showing attempt count, duration, input IDs, and output links. Make evaluation fail permanently: export must stay blocked. Change a feature definition: cached dataset and model artifacts must be invalidated if affected.

### Check your understanding

Which task failures are worth retrying? Why would retraining after an evaluation timeout change the experiment? Completion means a failed task is inspectable and a retry preserves the run's declared inputs.

## 07 — Model registry and evaluation

### Start with the problem

A model file is only part of a deployable bundle. Include preprocessing, feature versions, input signature, training lineage, evaluation, and a content digest. A registry keeps immutable versions; an alias such as stable can point to a version and change over time.

Evaluate against a baseline on the same holdout. A good overall score can conceal a harmful regression on a small but important segment.

### Try it in Python

\`\`\`python
actual = [10, 20, 30, 40]
baseline = [12, 22, 28, 38]
candidate = [10, 20, 30, 48]
def mae(truth, guesses):
    return sum(abs(y-p) for y, p in zip(truth, guesses)) / len(truth)
overall = mae(actual, candidate) <= mae(actual, baseline)
tail_segment = abs(actual[-1] - candidate[-1]) <= 3
print(mae(actual, baseline), mae(actual, candidate))
print("promote" if overall and tail_segment else "reject")
\`\`\`

Expected: \`2.0 2.0\` followed by \`reject\`. The average is unchanged, but the last segment has an error of eight. This four-row example illustrates a gate; a real segment decision also requires sample counts and uncertainty assessment.

### Build the layer

1. Save the model and preprocessing together with a validated input signature.
2. Evaluate on a locked time period and record overall and segment metrics, sample counts, and baseline identity.
3. Publish an immutable version only after digest verification; store mutable aliases separately.

### See it and break it

Compare runs using residual plots, metric tables, feature distributions, and configuration differences. Corrupt one byte of an artifact and verify that loading fails before activation. Use a tree-path view only for models whose structure supports that explanation.

### Check your understanding

Why can changing an alias leave the model version unchanged? Which artifacts must be retained for a rollback? Completion means each deployment has an inspectable evaluation report and an intact, reproducible bundle.

## 08 — Deployment controller

### Start with the problem

Requesting a deployment expresses intent. Serving the requested model requires validation, loading, warmup, health checks, and a route change. A controller reconciles desired and observed state while the current model continues serving.

A failed candidate should not replace a working model. Concurrent deployment requests also need generations so an older completion cannot overwrite newer intent.

### Try it in Python

\`\`\`python
active = "v1"
def reconcile(candidate, signature_ok, healthy):
    global active
    if not signature_ok:
        return "rejected"
    if not healthy:
        return "load_failed"
    active = candidate  # represents an atomic switch in this single-process toy
    return "active"

print(reconcile("v2", False, True), active)
print(reconcile("v2", True, True), active)
print(reconcile("v1", True, True), active)
\`\`\`

Expected: \`rejected v1\`, \`active v2\`, then \`active v1\`. The final operation is a rollback. This example does not implement replica coordination; the full milestone adds persistent state and restart recovery.

### Build the layer

1. Persist desired version and generation before starting reconciliation.
2. Verify signature, bundle digest, and evaluation gates; load the candidate alongside the current model.
3. Change routing only after readiness succeeds, and record the actual observed version.

### See it and break it

Use the deployment lab to step through the lifecycle. Visualize desired, pending, and active versions separately. Restart a controller during loading; it should resume from durable intent and reject stale-generation results.

### Check your understanding

At which point should the UI say “active”? What if a model loads correctly but expects a feature version that the online store cannot provide? Completion means invalid candidates preserve service and prediction logs prove which version handled each request.

## 09 — Candidate retrieval

### Start with the problem

A ranker cannot score every item for every request at large corpus sizes. Retrieval selects a manageable candidate set; ranking then spends more work ordering it. A relevant item excluded by retrieval cannot be rescued by the downstream ranker.

Start with exact nearest-neighbor search as an evaluation oracle. Approximate search is valuable when the measured latency/memory tradeoff justifies a recall loss.

### Try it in Python

\`\`\`python
from math import sqrt

query = [1.0, 0.0]
items = {"sports": [1.0, 0.0], "mixed": [0.8, 0.6], "cooking": [0.0, 1.0]}
def cosine(a, b):
    return sum(x*y for x,y in zip(a,b)) / (sqrt(sum(x*x for x in a)) * sqrt(sum(y*y for y in b)))
exact = sorted(items, key=lambda k: cosine(query, items[k]), reverse=True)[:2]
approximate = ["sports", "cooking"]
recall = len(set(exact) & set(approximate)) / len(exact)
print(exact, recall)
\`\`\`

Expected: \`['sports', 'mixed'] 0.5\`. This recall compares approximate results with exact vector neighbors, not with real-world user relevance. Those are different evaluations.

### Build the layer

1. Create a corpus snapshot and embeddings, recording dimension, distance metric, and embedding-model version.
2. Benchmark exact search on a small corpus and measure candidate recall after introducing approximation.
3. Return item IDs, scores, index version, and optional hydrated features to the ranker. Define cold-start and timeout behavior.

### See it and break it

Draw a funnel from full corpus to retrieved candidates to ranked results. Inspect why an item dropped out. Try an index built with a different embedding model: matching dimensions do not guarantee compatible vector meaning.

### Check your understanding

How does increasing candidate count affect latency and ranker work? Why is embedding-neighbor recall insufficient to prove user benefit? Completion means a ranked result can be traced back to the index and candidate set that produced it.

## 10 — Prediction service

### Start with the problem

Serving turns a request into a model-ready vector, then a prediction. It must validate inputs, obtain features, apply the training-time transformations, and log the actual resolved version. A request waterfall reveals where the time went.

Ranking amplifies lookup work: one request may score hundreds of candidates. Count requests separately from candidate scores when discussing throughput.

### Try it in Python

\`\`\`python
import time

trace = []
def span(name, fn):
    start = time.perf_counter()
    value = fn()
    trace.append({"name": name, "milliseconds": (time.perf_counter()-start)*1000})
    return value
features = span("lookup", lambda: {"clicks": 3, "impressions": 20})
vector = span("preprocess", lambda: features["clicks"] / features["impressions"])
score = span("score", lambda: 0.1 + 0.5 * vector)
print({"model_version": "demo-v1", "score": round(score, 3)})
print([s["name"] for s in trace])
\`\`\`

Expected score: \`0.175\`; trace names: lookup, preprocess, score. Durations vary and should not be treated as benchmarks. The arithmetic is a toy model, not a trained click predictor.

### Build the layer

1. Validate request and feature signatures, then record defaults and materialization timestamps.
2. Load a verified model bundle once and reuse it; do not fetch weights for every request.
3. Log prediction identity, trace identity, resolved model/index versions, and feature provenance alongside the output.

### See it and break it

Compare per-item requests, one batch lookup, and a local feature snapshot. Use matched requests and measure memory, freshness, errors, and p95 latency. Inject a slow feature call so the waterfall identifies lookup rather than model computation as the bottleneck.

### Check your understanding

When does batching improve throughput but hurt request latency? What should happen when only one candidate's features are missing? Completion means every result can be explained as a sequence of measured stages with explicit fallback behavior.

## 11 — Outcome monitoring

### Start with the problem

Predictions are immediate; labels often are not. Monitoring needs to distinguish unknown outcomes from good outcomes, and operational failures from model-quality changes. Track feature freshness, missingness, serving errors, distributions, and actual labeled error as separate signals.

A changing input distribution does not automatically mean accuracy declined. A stable input distribution does not prove that the relationship between inputs and labels stayed the same.

### Try it in Python

\`\`\`python
predictions = {"p1": 12.0, "p2": 20.0, "p3": 18.0}
outcomes = {"p1": 10.0, "p3": 21.0}
matched = [(guess, outcomes[key]) for key, guess in predictions.items() if key in outcomes]
coverage = len(matched) / len(predictions)
mae = sum(abs(p-y) for p,y in matched) / len(matched) if matched else None
print(round(coverage, 3), mae)
\`\`\`

Expected: \`0.667 2.5\`. The missing p2 label does not contribute zero error. Coverage must accompany accuracy so a dashboard cannot hide delayed outcomes.

### Build the layer

1. Log stable prediction/outcome join keys and define which forecast is evaluated if one delivery has several forecasts.
2. Compare matured cohorts at the same age; report pending and permanently missing outcomes.
3. Add fixed thresholds and evidence links. Evaluate a retraining candidate before changing the serving model.

### See it and break it

Delay a label stream and observe coverage falling without falsely declaring improved accuracy. Change input mix, then separately alter labels to demonstrate drift and quality degradation as distinct incidents. Align chart time ranges and display sample counts.

### Check your understanding

Why can newly arrived labels revise a previously displayed metric? How would you detect label joins that silently fail? Completion means you can distinguish infrastructure, data, and model problems using recorded evidence.

## 12 — Visual control plane

### Start with the problem

The console should explain real state and let a user express intent. A “deploy” click creates an operation; a controller later reports success or failure. Optimistically labeling a model active before it is ready hides the most important part of the workflow.

Use stable identifiers to connect views: prediction → model → run → dataset → source. Store operational truth in the backend, with the UI reflecting that truth.

### Try it in Python

\`\`\`python
objects = {
    "prediction:p1": ["model:v2"],
    "model:v2": ["run:r7"],
    "run:r7": ["dataset:d3"],
    "dataset:d3": ["events:snapshot-8"],
    "events:snapshot-8": [],
}
def lineage(node, seen=None):
    seen = set() if seen is None else seen
    if node in seen:
        return []
    seen.add(node)
    return [node] + [ancestor for parent in objects[node] for ancestor in lineage(parent, seen)]
print(" -> ".join(lineage("prediction:p1")))
\`\`\`

Expected: the five identifiers from prediction to event snapshot in order. This is a lineage graph walk, not a workflow execution engine.

### Build the layer

1. Expose inspect APIs before drawing graphs. Each node should link to immutable records and their inputs.
2. Show pending, failed, unknown, and zero states distinctly. Keep timestamps, units, and sample counts visible.
3. Add operation IDs and idempotency keys to mutations. Provide text/table alternatives and keyboard navigation for visual views.

### See it and break it

Select one prediction and highlight all its ancestors. Simulate a failed API request: the UI must not display old data as fresh success. In this learning site, progress and notes are browser-local, while lab activity is explicitly simulated.

### Check your understanding

Which UI state is user intent, and which is observed backend state? Can you diagnose a stale-feature incident without reading logs on a server? Completion means the visualization helps make a decision and points to the evidence behind it.
`,ut=`# Spark → Iceberg → Airflow → Flink

Learn these technologies through one project: a mini ads feature platform that turns simulated impressions and clicks into historical datasets and fresh online features. Start with one week focused on PySpark before adding more infrastructure.

This six-week track assumes basic Python and SQL, 1–2 hours daily, and roughly 70% coding / 30% reading. If Python functions, dictionaries, SQL joins, or terminal commands are new, spend a preparation week on those first. Allow extra setup time for the runtimes. This is a beginner learning sequence, not a claim that every production platform uses these four tools in this arrangement.

Use this as a foundation alongside the original 12-week platform roadmap: weeks 1–3 deepen M0–M1, weeks 4–5 support M2–M3, and week 6 prepares the serving/monitoring work. It is additional practice, not six weeks secretly added to the original 12-week estimate. You can begin the platform before mastering all four.

| Technology | Main responsibility | Mental model |
| --- | --- | --- |
| Apache Spark | Distributed batch processing in this track | Compute over historical data |
| Apache Iceberg | Table format and metadata | Manage versions of large tables |
| Apache Airflow | Workflow orchestration | Schedule and coordinate jobs |
| Apache Flink | Stateful stream processing in this track | Update results as events arrive |

Spark also supports streaming and Flink supports bounded inputs. These are roles chosen for the project, not exclusive capability boundaries. Airflow coordinates finite jobs; a continuous Flink job has its own runtime and lifecycle.

\`\`\`mermaid
flowchart TB
  E[Raw ad impressions, clicks and views]
  E --> B[Durable historical event files]
  E --> L[Replayable live event log]
  B --> S[Spark: historical aggregation]
  S --> I[Iceberg: versioned feature tables]
  I --> D[Point-in-time training datasets]
  D --> T[Model training and evaluation]
  L --> F[Flink: event-time aggregation]
  F --> K[Online feature KV store]
  K --> P[Retrieval and prediction]
  T --> P
  A[Airflow: batch orchestration] -. schedules .-> S
  A -. coordinates .-> D
  A -. triggers .-> T
\`\`\`

This is a conceptual learning system inspired by the public Bento article. The article describes its own technology choices; this diagram does not establish that Snap uses Airflow or Flink for those exact responsibilities.

## Week 1 — Spark fundamentals

### Learn the mental model

A DataFrame describes a table. Transformations such as select, filter, join, and groupBy build a plan. An action such as a write asks Spark to execute it. Run locally first: parallel tasks on a laptop expose the programming model without pretending to demonstrate cluster-scale performance.

### Set up the first job

Use Python 3.11, Java 17, and PySpark 3.5.7 for the reference recipe. These versions are chosen for a bounded learning environment, not as a recommendation to deploy old releases to production. Check \`python3.11 --version\` and \`java -version\` first. On macOS, if you use Homebrew, install \`python@3.11\` and \`openjdk@17\`; point \`JAVA_HOME\` to the installed Java 17 home. Linux users can install OpenJDK 17 using their distribution's package manager.

From the project root:

\`\`\`bash
python3.11 -m venv .venv-spark
source .venv-spark/bin/activate
python -m pip install pyspark==3.5.7
python examples/ads_features/generate_events.py --rows 10000 --output data/ads/small.jsonl
python examples/ads_features/spark_features.py --input data/ads/small.jsonl --output data/ads/small-features
\`\`\`

Use the downloadable scripts on this page if you have not cloned the repository. Save them together in a local directory and omit the \`examples/ads_features/\` prefix from the commands. Generated outputs are local files; GitHub Pages does not execute Spark.

### Exercise 1: read and inspect

Read the generated JSONL with an explicit schema. Display five rows and inspect types. Then read the written Parquet feature directory. Add a CSV export/read exercise using \`header=true\` and an explicit schema; explain why CSV does not retain the same type metadata as Parquet.

### Exercise 2: aggregate impressions and clicks

The central transformation is:

\`\`\`python
from pyspark.sql import functions as F

# \`events\` is the DataFrame read by spark_features.py.
features = (
    events.groupBy("user_id")
    .agg(
        F.count("*").alias("total_events"),
        F.sum(F.when(F.col("event") == "ad_impression", 1).otherwise(0)).alias("impressions"),
        F.sum(F.when(F.col("event") == "ad_click", 1).otherwise(0)).alias("clicks"),
    )
    .withColumn("ctr", F.when(F.col("impressions") > 0, F.col("clicks") / F.col("impressions")))
)
\`\`\`

CTR is clicks / impressions. \`total_events\` includes both and is not the denominator. The fixture links each click to one preceding impression; a real system must specify deduplication, attribution, and window alignment.

### Exercise 3: inspect the plan, then scale the input

Run \`features.explain("formatted")\` and find the aggregation and exchange. Explain which operation groups rows from different partitions. Then run:

\`\`\`bash
python examples/ads_features/generate_events.py --rows 1000000 --output data/ads/million.jsonl
python examples/ads_features/spark_features.py --input data/ads/million.jsonl --output data/ads/million-features
\`\`\`

Expected totals: **1,000,000 events, 900,000 impressions, 100,000 clicks, 10,000 users**. Each user has 90 impressions and 10 clicks. Both scripts refuse existing output paths; pick a fresh path to rerun. This all-history aggregate teaches execution, not point-in-time training correctness.

**Visualize:** raw events → partitions → partial aggregate → shuffle → user features. Capture the physical plan and a small feature table.

**Troubleshoot:** a Java gateway failure often indicates the wrong Java runtime; verify Java 17 in the same shell. An existing-output error is intentional. If the machine struggles, return to 10,000 rows before adding resources.

**Read:** [Spark 3.5.7 quickstart](https://spark.apache.org/docs/3.5.7/quick-start.html) and [runtime requirements](https://spark.apache.org/docs/3.5.7/).

## Week 2 — Spark internals

### Learn the mental model

The driver builds and schedules work; executors process partitions. A stage boundary often appears when data must be redistributed. A partition is a unit of distributed work; it is not the same thing as a machine. More partitions can improve parallelism or create unnecessary scheduling overhead.

### Exercise 1: compare shuffle partition counts

Reuse the million-event file. Run the script with \`--partitions 2\`, \`8\`, and \`32\`, using a different output directory each time. Record elapsed time, task counts, and the physical plan. Keep hardware and input identical. Adaptive execution may coalesce partitions; inspect what actually ran rather than assuming the configured number equals the final task count.

### Exercise 2: compare a normal join and broadcast join

In a PySpark shell, load the event file and build a three-row category lookup. Compare plans with and without an explicit broadcast hint. Automatic broadcast may already choose the same plan; if so, temporarily disable the automatic threshold for the comparison and record the change.

\`\`\`python
# Run inside pyspark after loading \`events\`.
categories = spark.createDataFrame([
    ("sports", "active"), ("gaming", "digital"), ("travel", "explore")
], ["ad_category", "interest_group"])
joined = events.join(F.broadcast(categories), "ad_category")
joined.explain("formatted")
\`\`\`

Import \`functions as F\` if starting a fresh shell. Never broadcast a table merely because the hint made a toy example fast; the table must fit the available executor memory.

### Exercise 3: create and diagnose skew

Change 80% of records to the same user ID in a separate experiment. Compare task durations and partition sizes with the balanced fixture. Explain why the slowest partition can dominate job completion. Propose a two-stage salted aggregation, then verify it preserves the final result before measuring its cost.

**Visualize:** partition-size bars, shuffle read/write, and task duration distributions. Open Spark's local UI at port 4040 while the process is running; the batch script exits quickly, so use an interactive shell or configure event logging for post-run analysis.

**Done when:** you can explain one \`Exchange\`, identify a broadcast join, and distinguish skew from insufficient total compute. Do not call a faster local run a cluster-scale benchmark.

**Read:** [Spark SQL performance tuning](https://spark.apache.org/docs/3.5.7/sql-performance-tuning.html) and [monitoring](https://spark.apache.org/docs/3.5.7/monitoring.html).

## Week 3 — Apache Iceberg

### Learn the mental model

Parquet stores columnar data in files. Iceberg adds table metadata that tracks which files belong to a table snapshot. A catalog locates a table and coordinates metadata updates. None of these is the same as Spark, which executes the queries.

### Set up a local table

Keep the Spark 3.5.7 environment and Java 17. Use the Iceberg runtime compiled for Spark 3.5 and Scala 2.12; mixing the Spark/Scala artifact suffix is a common classpath failure.

\`\`\`bash
pyspark --packages org.apache.iceberg:iceberg-spark-runtime-3.5_2.12:1.10.0 \\
  --conf spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions \\
  --conf spark.sql.catalog.lab=org.apache.iceberg.spark.SparkCatalog \\
  --conf spark.sql.catalog.lab.type=hadoop \\
  --conf spark.sql.catalog.lab.warehouse=file:///tmp/ml-platform-iceberg-warehouse
\`\`\`

This local Hadoop catalog is for one-machine exploration. A shared object-store deployment needs an appropriate catalog and concurrency design. The first launch downloads the runtime JAR.

### Exercise 1: create and query a feature table

In that PySpark shell:

\`\`\`python
spark.sql("CREATE NAMESPACE IF NOT EXISTS lab.ads")
spark.sql("""CREATE TABLE IF NOT EXISTS lab.ads.user_features (
  user_id BIGINT, clicks BIGINT, impressions BIGINT,
  feature_cutoff TIMESTAMP, available_at TIMESTAMP
) USING iceberg""")
spark.sql("""INSERT INTO lab.ads.user_features VALUES
  (123, 2, 20, TIMESTAMP '2026-10-26 12:00:00', TIMESTAMP '2026-10-26 12:01:00')""")
spark.table("lab.ads.user_features").show()
\`\`\`

### Exercise 2: inspect snapshots and time travel

\`\`\`python
snapshot = spark.sql("""SELECT snapshot_id FROM lab.ads.user_features.snapshots
  ORDER BY committed_at DESC LIMIT 1""").first()[0]
spark.sql("""INSERT INTO lab.ads.user_features VALUES
  (456, 1, 10, TIMESTAMP '2026-10-26 13:00:00', TIMESTAMP '2026-10-26 13:01:00')""")
before = spark.read.option("snapshot-id", str(snapshot)).format("iceberg").load("lab.ads.user_features")
print(before.count(), spark.table("lab.ads.user_features").count())
\`\`\`

On a fresh table, expect \`1 2\`. If you repeated inserts, the second count should still be exactly one larger than the first. Save the snapshot ID in a training manifest. Retention must preserve snapshots needed by your experiments.

### Exercise 3: evolve schema without losing the past

Add \`interest_category STRING\` with \`ALTER TABLE ... ADD COLUMN\`, write a new row, and inspect old rows. Predict their value for the new column. Compare the schema and data returned by a snapshot read. Then inspect \`lab.ads.user_features.files\` to connect table metadata to physical files.

**Visualize:** catalog → table metadata → snapshot → manifests → data files. Show a snapshot timeline beside the business-time feature timeline; they answer different questions.

**Done when:** you can reproduce a snapshot and still explain why each training row needs event-time and availability constraints. Time travel by itself does not prevent leakage.

**Read:** [Iceberg Spark setup](https://iceberg.apache.org/docs/1.10.0/spark-getting-started/), [queries and time travel](https://iceberg.apache.org/docs/1.10.0/spark-queries/), and [schema evolution](https://iceberg.apache.org/docs/1.10.0/evolution/).

## Week 4 — Apache Airflow

### Learn the mental model

A DAG specifies task dependencies; a scheduled run represents a data interval. A daily run normally processes a completed interval, not whatever data happens to exist at the wall-clock moment it starts. Retries and backfills are normal, so outputs need an interval-based identity and idempotent publication.

### Set up an isolated scheduler

Use a separate Python 3.11 environment so Airflow's dependency constraints do not interfere with Spark. The reference uses Airflow 3.1.0 and its matching constraints file:

\`\`\`bash
python3.11 -m venv .venv-airflow
source .venv-airflow/bin/activate
python -m pip install "apache-airflow==3.1.0" \\
  --constraint "https://raw.githubusercontent.com/apache/airflow/constraints-3.1.0/constraints-3.11.txt"
airflow standalone
\`\`\`

Use the local URL and credentials printed by the process. It initializes a learning instance under Airflow's configured home. Place the following DAG in that instance's \`dags\` directory. These task return values are a metadata exercise; they do not launch Spark yet.

\`\`\`python
from datetime import datetime, timezone
from airflow.sdk import dag, task, get_current_context

@dag(schedule="@daily", start_date=datetime(2026, 10, 1, tzinfo=timezone.utc),
     catchup=False, max_active_runs=1, tags=["learning"])
def ads_features_lesson():
    @task(retries=1)
    def dataset_interval():
        context = get_current_context()
        return {"start": context["data_interval_start"].isoformat(),
                "end": context["data_interval_end"].isoformat()}

    @task
    def validate(bounds):
        assert bounds["start"] < bounds["end"]
        return {"dataset_key": bounds["start"], "status": "interval_valid"}

    validate(dataset_interval())

ads_features_lesson()
\`\`\`

### Exercise 1: create a DAG and inspect an interval

Run the metadata DAG. Find the run's data interval and inspect each task's logs. Draw the dependency edge and explain why the downstream task waits. Pass references and small metadata through XCom; store dataset rows in the data system.

### Exercise 2: retry a failure safely

Make validation fail and observe the task state. Add a Spark task using a matching provider/operator or a subprocess pointing to the separate Spark environment. Give it a deterministic interval output path. On retry, validate an already-complete output or atomically replace an incomplete staging result; never append the interval twice.

### Exercise 3: backfill three intervals

Use the installed version's backfill UI or CLI to execute three chosen daily intervals. Verify three unique output identities and consistent ordering of validation after computation. Keep scheduled catchup disabled while learning; deliberately requesting a backfill is a separate operation.

**Visualize:** DAG graph, task attempts, run interval, and output snapshot ID. Temporarily omit an input partition and show a clear readiness failure before training begins.

**Done when:** the same interval run twice produces the same published dataset. Airflow coordinates Spark and dataset preparation; it is not a data store or the continuously running streaming engine.

**Read:** [Airflow 3.1 setup](https://airflow.apache.org/docs/apache-airflow/3.1.0/start.html) and [Airflow fundamentals](https://airflow.apache.org/docs/apache-airflow/stable/tutorial/fundamentals.html). The latter tracks the current release; use the version picker when APIs differ.

## Week 5 — Apache Flink

### Learn the mental model

Streaming computation keeps state between events. Event time describes when an event occurred; processing time describes when an operator handles it. A watermark expresses progress through event time so windows can finish. It is not a guarantee that no late event will arrive.

Start with the Flink 1.20.3 binary distribution and its versioned first-steps guide, using a supported JDK for that release. Run \`bin/start-cluster.sh\`, then \`bin/sql-client.sh\` from the distribution directory. Stop the local cluster afterward with \`bin/stop-cluster.sh\`. The example below needs the filesystem connector and JSON format bundled with that distribution; Kafka and other external connectors must match the installed runtime.

### Exercise 1: aggregate a bounded replay

Create \`/tmp/flink-ads.jsonl\` containing these three lines. They are a tiny fixture, not the million-event generator's ISO timestamp format.

\`\`\`json
{"user_id":123,"kind":"ad_click","event_time":"2026-10-26 12:00:02"}
{"user_id":123,"kind":"ad_click","event_time":"2026-10-26 12:00:08"}
{"user_id":456,"kind":"ad_impression","event_time":"2026-10-26 12:00:09"}
\`\`\`

Run in the SQL client:

\`\`\`sql
SET 'execution.runtime-mode' = 'streaming';
CREATE TABLE lesson_events (
  user_id BIGINT,
  kind STRING,
  event_time TIMESTAMP(3),
  WATERMARK FOR event_time AS event_time - INTERVAL '5' SECOND
) WITH (
  'connector' = 'filesystem',
  'path' = 'file:///tmp/flink-ads.jsonl',
  'format' = 'json'
);
SELECT user_id, window_start, window_end,
       SUM(CASE WHEN kind = 'ad_click' THEN 1 ELSE 0 END) AS clicks
FROM TABLE(TUMBLE(TABLE lesson_events, DESCRIPTOR(event_time), INTERVAL '1' MINUTE))
GROUP BY user_id, window_start, window_end;
\`\`\`

At the bounded input's end, expect one minute window with two clicks for user 123 and zero for user 456. This demonstrates event-time aggregation, not a continuously updating online feature or a controlled late-event experiment.

### Exercise 2: control ordering and watermarks

Follow the versioned DataStream/event-time tutorial and use a replayable test source with explicit watermark control, or a Kafka source with a producer that controls arrival order. Send events within the out-of-order allowance, then after the watermark has passed a window. Record which result changes and which events are dropped or sent to a configured late-data path. A bounded file ending immediately is not enough to demonstrate those timings reliably.

### Exercise 3: checkpoint and restore

Enable checkpointing, use a replayable source and durable checkpoint storage, wait for a completed checkpoint, then restart a worker. Compare restored state with clean replay. A checkpoint of Flink state alone does not make arbitrary Redis increments exactly-once. For the online sink, publish an absolute aggregate with an entity/window/version key and reject stale writes, or use a supported transactional connector.

**Visualize:** event arrival order, watermark, open/closed windows, checkpoint age, and sink freshness. Label a finalized tumbling-window value differently from a continuously refreshed “last hour” feature. A sliding-window design and update policy are required for the latter.

**Done when:** you can explain a late-event outcome and prove that a restart did not double-count the externally visible result.

**Read:** [Flink 1.20 first steps](https://nightlies.apache.org/flink/flink-docs-release-1.20/docs/try-flink/local_installation/), [window SQL](https://nightlies.apache.org/flink/flink-docs-release-1.20/docs/dev/table/sql/queries/window-tvf/), and [fault tolerance](https://nightlies.apache.org/flink/flink-docs-release-1.20/docs/learn-flink/fault_tolerance/).

## Week 6 — Integration project

### Connect the pieces

Build a mini ads feature platform with two outputs: reproducible historical features for training, and fresh features for a simulated retrieval request. Reuse event identities and definitions across the batch and streaming paths. Add a broker only when you are ready to exercise continuous replay and recovery.

### Exercise 1: schedule the historical path

Airflow identifies one completed day, invokes Spark, validates row counts and event bounds, then publishes an Iceberg snapshot reference. Include input version, feature-definition version, cutoff policy, and output snapshot in a manifest. A readiness check should fail when a required input is absent. Run the same interval twice and prove no duplicate publication.

### Exercise 2: publish an online feature

Flink maintains a bounded recent-activity aggregate and publishes absolute values to a Redis or other KV key. Include \`user_id\`, feature version, window end, materialization time, and monotonically ordered update version. Build a tiny request handler that reads the feature, checks freshness, and records the chosen value and fallback reason. A historical 7-day CTR and a recent 1-hour click count are different features; do not compare their numeric values as a parity test.

### Exercise 3: prove parity and recovery

Pick one common feature definition, one event cutoff, and one availability policy. Compare the batch reconstruction with the logged online value after the streaming watermark and materialization have caught up. Inject duplicates, pause consumption, restart a worker, and send a late event. Explain any differences using the policy rather than changing the expected value after seeing a failure.

**Final artifact:** a trace from event ID to feature materialization, Iceberg snapshot, dataset manifest, and simulated serving response. Include one partition chart, a snapshot timeline, an Airflow DAG, a watermark trace, and a freshness incident writeup.

**Success criteria:** correct counts on the deterministic fixture; replay-safe outputs; temporal reconstruction excludes unavailable data; serving distinguishes missing/stale values; and every displayed result has a provenance identifier. The browser checklist records learning progress, not the result of an automated external job.

## Further reading and priorities

Use books selectively after running the relevant exercise. No purchase is required to complete the track; the official guides linked above are the starting material.

| Book | Authors | Use alongside |
| --- | --- | --- |
| [Learning Spark, 2nd Edition](https://www.oreilly.com/library/view/learning-spark-2nd/9781492050032/) | Jules S. Damji, Brooke Wenig, Tathagata Das, Denny Lee | Weeks 1–2: DataFrames, SQL, distributed execution, tuning |
| [Streaming Systems](https://www.oreilly.com/library/view/streaming-systems/9781491983867/) | Tyler Akidau, Slava Chernyak, Reuven Lax | Week 5 onward: event time, watermarks, windows, correctness |
| [Designing Data-Intensive Applications](https://dataintensive.net/) | Martin Kleppmann (first edition) | Throughout: replication, partitioning, batch and stream processing |

There is also a [second edition of DDIA](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/) by Martin Kleppmann and Chris Riccomini. Either edition can support the conceptual exercises; chapter numbering and examples differ.

For your interest in ads retrieval and ML infrastructure, use these study priorities. They are learning recommendations, not a verified Snap hiring rubric.

| Topic | Priority | Explain confidently |
| --- | --- | --- |
| Spark | Very high | Shuffles, distributed joins, partitions, driver/executors |
| Flink | Very high | Keyed state, checkpointing, event time, sink guarantees |
| Iceberg | High | Snapshots, catalogs, metadata, schema evolution |
| Airflow | Medium–high | DAG scheduling, intervals, retries, backfills |

Your first concrete goal remains small and measurable: process one million simulated ad events, compute user-level features, and explain the Spark plan. The other technologies become easier to understand once that transformation is familiar.
`,dt=`"""Generate deterministic ad events using only the Python standard library."""
import argparse
import json
from datetime import datetime, timedelta, timezone
from pathlib import Path


def records(rows):
    start = datetime(2026, 10, 26, tzinfo=timezone.utc)
    for index in range(rows):
        group, position = divmod(index, 10)
        occurred = start + timedelta(seconds=index)
        yield {
            "event_id": index,
            "impression_id": group * 10 if position == 9 else index,
            "user_id": group % 10000,
            "event": "ad_click" if position == 9 else "ad_impression",
            "ad_category": ["sports", "gaming", "travel"][group % 3],
            "timestamp": occurred.isoformat(),
            "available_at": (occurred + timedelta(seconds=120 if index % 100 == 0 else 2)).isoformat(),
        }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--rows", type=int, default=10000)
    parser.add_argument("--output", type=Path, default=Path("data/ads/events.jsonl"))
    args = parser.parse_args()
    if args.rows < 1:
        parser.error("--rows must be positive")
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("x") as output:
        for record in records(args.rows):
            output.write(json.dumps(record, separators=(",", ":")) + "\\n")
    print(json.dumps({"rows": args.rows, "impressions": args.rows - args.rows // 10,
                      "clicks": args.rows // 10, "output": str(args.output)}))


if __name__ == "__main__":
    main()
`,ft=`"""Aggregate the teaching event log with PySpark 3.5.7. Requires Java 17."""
import argparse
import json
from pyspark.sql import SparkSession, functions as F


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", default="data/ads/events.jsonl")
    parser.add_argument("--output", default="data/ads/features")
    parser.add_argument("--partitions", type=int, default=8)
    args = parser.parse_args()
    if args.partitions < 1:
        parser.error("--partitions must be positive")
    spark = (SparkSession.builder.appName("ads-feature-tutorial").master("local[2]")
             .config("spark.sql.session.timeZone", "UTC")
             .config("spark.sql.shuffle.partitions", str(args.partitions)).getOrCreate())
    try:
        schema = "event_id LONG, impression_id LONG, user_id LONG, event STRING, ad_category STRING, timestamp STRING, available_at STRING"
        events = spark.read.schema(schema).option("mode", "FAILFAST").json(args.input)
        # The supplied generator guarantees unique IDs and one click per linked impression.
        # Add conflict detection and deduplication before accepting external event sources.
        features = events.groupBy("user_id").agg(
            F.count("*").alias("total_events"),
            F.sum(F.when(F.col("event") == "ad_impression", 1).otherwise(0)).alias("impressions"),
            F.sum(F.when(F.col("event") == "ad_click", 1).otherwise(0)).alias("clicks"),
        ).withColumn("ctr", F.when(F.col("impressions") > 0, F.col("clicks") / F.col("impressions")))
        features.explain("formatted")
        features.write.mode("errorifexists").parquet(args.output)
        result = spark.read.parquet(args.output)
        summary = result.agg(F.count("*").alias("users"),
                             F.sum("total_events").alias("events"),
                             F.sum("impressions").alias("impressions"),
                             F.sum("clicks").alias("clicks")).first().asDict()
        print("SUMMARY " + json.dumps(summary, sort_keys=True))
        result.orderBy("user_id").show(5, truncate=False)
    finally:
        spark.stop()


if __name__ == "__main__":
    main()
`,pt=e=>e.split(/^## /m).slice(1).map(e=>{let t=e.indexOf(`
`);return{title:e.slice(0,t),body:e.slice(t+1).trim()}}),U=pt(lt).map((e,t)=>({...e,...H[t],body:e.body})),mt=[{title:`Spark fundamentals`,technology:`Spark`,summary:`Read events, aggregate user features, and inspect the execution plan.`,tasks:[`Read JSON, CSV, and Parquet with a schema`,`Compute impressions, clicks, and CTR per user`,`Explain the plan and process one million events`],layers:[`events`,`features`]},{title:`Spark internals`,technology:`Spark`,summary:`Follow data through partitions, exchanges, and distributed joins.`,tasks:[`Compare 2, 8, and 32 shuffle partitions`,`Compare a normal join with a broadcast join`,`Create skew and diagnose the slowest partition`],layers:[`features`,`dataset`]},{title:`Apache Iceberg`,technology:`Iceberg`,summary:`Manage table snapshots and separate versioning from temporal correctness.`,tasks:[`Create and query an Iceberg feature table`,`Read an earlier snapshot after a new commit`,`Evolve the schema and inspect data files`],layers:[`history`,`dataset`]},{title:`Apache Airflow`,technology:`Airflow`,summary:`Coordinate interval-based jobs, then practice retries and backfills.`,tasks:[`Create a DAG and inspect its data interval`,`Retry a task without duplicating outputs`,`Backfill three daily intervals`],layers:[`training`,`console`]},{title:`Apache Flink`,technology:`Flink`,summary:`Reason about state, event-time windows, and recovery.`,tasks:[`Aggregate a bounded event replay`,`Control out-of-order events and watermarks`,`Restore a checkpoint and verify sink behavior`],layers:[`events`,`online`,`monitoring`]},{title:`Integration project`,technology:`All four`,summary:`Connect historical features and online serving in one mini ads platform.`,tasks:[`Schedule Spark → Iceberg with Airflow`,`Publish a fresh online feature to a KV store`,`Prove batch/stream parity and recovery`],layers:[`dataset`,`online`,`inference`,`monitoring`]}],W=pt(ut).filter(e=>e.title.startsWith(`Week `)).map((e,t)=>({...mt[t],id:`week-${t+1}`,number:t+1,body:e.body,exercises:mt[t].tasks.map((e,n)=>({id:`week-${t+1}-${n+1}`,title:e}))})),ht=ut.split(/^## Week 1/m)[0].replace(/^# .+\n/,``),gt=pt(ut).find(e=>e.title===`Further reading and priorities`).body,_t=[{name:`generate_events.py`,text:dt,description:`Deterministic ad event generator · Python standard library`},{name:`spark_features.py`,text:ft,description:`User feature aggregation · PySpark 3.5.7 + Java 17`}];function vt(e,t){let{main:n,heading:r,markdown:i,state:a,save:o,esc:s}=t,c=U.find(t=>t.id===e);if(n.innerHTML=r(`LAYER TUTORIALS`,c?c.title:`Learn what happens inside every box.`,c?`${c.group} · ${c.stage} · 30–60 minute introduction`:`Twelve guided lessons: start with the problem, run a small example, then build and test the real contract.`,`<span class="learning-count">${a.tutorials.length} / 12 lessons completed</span>`),!c){n.insertAdjacentHTML(`beforeend`,`<div class="learning-intro"><strong>Start small. Make the behavior visible.</strong><p>Each Python example uses only the standard library. Copy it to a scratch file and run it locally. These examples teach the contract; the roadmap milestones turn it into a working platform.</p><a href="#infrastructure">New to data infrastructure? Follow the six-week track →</a></div><div class="tutorial-grid">${U.map(e=>`<a class="tutorial-card ${a.tutorials.includes(e.id)?`completed`:``}" href="#tutorials/${e.id}"><div><span class="eyebrow">${e.icon} / ${e.group.toUpperCase()}</span><span class="lesson-state">${a.tutorials.includes(e.id)?`✓`:`↗`}</span></div><h2>${e.title}</h2><p>${e.desc}</p><span class="tutorial-meta">${e.stage} <span>EXAMPLE · BUILD · DEBUG</span></span></a>`).join(``)}</div>`);return}let l=U.indexOf(c);n.insertAdjacentHTML(`beforeend`,`<div class="lesson-layout"><aside class="lesson-nav"><a href="#tutorials" class="text-link">← All layer tutorials</a>${U.map(t=>`<a href="#tutorials/${t.id}" class="${t.id===e?`active`:``}"><span>${a.tutorials.includes(t.id)?`✓`:t.icon}</span>${t.title}</a>`).join(``)}</aside><article class="lesson-article"><div class="lesson-links"><a href="#architecture/${c.id}">Locate in the architecture ↗</a><a href="#roadmap/${c.stage}">Implementation milestone ${c.stage} ↗</a></div><div class="markdown">${i(c.body)}</div><div class="completion-box"><label><input id="complete-lesson" type="checkbox" ${a.tutorials.includes(e)?`checked`:``}/> I ran the example and can explain this layer’s contract.</label></div><div class="notes-box"><label for="lesson-notes">Your field notes</label><p>What did you observe? What breaks when you change the example?</p><textarea id="lesson-notes" rows="4" placeholder="Explain the layer in your own words…">${s(a.notes[`T-${e}`]||``)}</textarea><small id="lesson-note-status">Saved in this browser; included in your progress export.</small></div><div class="stage-pagination">${l?`<a href="#tutorials/${U[l-1].id}">← Previous layer</a>`:`<a href="#tutorials">All tutorials</a>`}${l<U.length-1?`<a href="#tutorials/${U[l+1].id}">Next layer →</a>`:`<a href="#infrastructure">Infrastructure track →</a>`}</div></article></div>`),n.querySelector(`#complete-lesson`).addEventListener(`change`,t=>{a.tutorials=t.target.checked?[...new Set([...a.tutorials,e])]:a.tutorials.filter(t=>t!==e),o(),n.querySelector(`.learning-count`).textContent=`${a.tutorials.length} / 12 lessons completed`,n.querySelector(`.lesson-nav a[href="#tutorials/${e}"] span`).textContent=t.target.checked?`✓`:c.icon}),n.querySelector(`#lesson-notes`).addEventListener(`input`,t=>{a.notes[`T-${e}`]=t.target.value,o(),n.querySelector(`#lesson-note-status`).textContent=`Notes updated. Export a copy to keep a backup.`})}function yt(e,t){let{main:n,heading:r,markdown:i,diagrams:a,state:o,save:s}=t,c=W.find(t=>t.id===e),l=e=>e.exercises.filter(e=>o.exercises.includes(e.id)).length,u=e=>`<div class="exercise-list">${e.exercises.map(e=>`<label><input type="checkbox" data-exercise="${e.id}" ${o.exercises.includes(e.id)?`checked`:``}/><span>${e.title}</span></label>`).join(``)}</div>`;n.innerHTML=r(`SIX-WEEK INFRASTRUCTURE TRACK`,c?`Week ${c.number}: ${c.title}`:e===`reading`?`Read alongside the work.`:`One project. Four connected technologies.`,c?c.summary:`Spark → Iceberg → Airflow → Flink. Build a mini ads feature platform, one responsibility at a time.`,`<div class="learning-count"><strong id="exercise-count">${o.exercises.length} / 18</strong><span> exercises completed</span></div>`);let d=`<div class="week-nav"><a href="#infrastructure" class="${e?``:`active`}">Overview</a>${W.map(t=>`<a href="#infrastructure/${t.id}" class="${t.id===e?`active`:``}">Week ${t.number}<small>${t.technology}</small></a>`).join(``)}<a href="#infrastructure/reading" class="${e===`reading`?`active`:``}">Books & priorities</a></div>`;n.insertAdjacentHTML(`beforeend`,d),c?n.insertAdjacentHTML(`beforeend`,`<div class="week-checklist"><div><span class="eyebrow">YOUR WEEK ${c.number} CHECKLIST</span><span class="week-count" data-week-count="${c.id}">${l(c)} / 3</span></div>${u(c)}<p>Checks track your learning in this browser. They do not run or verify external jobs.</p></div><article class="markdown reading-article infrastructure-article">${i(c.body)}</article><div class="related-layers"><span class="eyebrow">CONNECT TO THE PLATFORM</span>${c.layers.map(e=>`<a href="#tutorials/${e}">${U.find(t=>t.id===e).title} →</a>`).join(``)}</div>${c.number===1?bt():``}<div class="stage-pagination"><a href="${c.number>1?`#infrastructure/week-${c.number-1}`:`#infrastructure`}">← ${c.number>1?`Previous week`:`Overview`}</a><a href="${c.number<6?`#infrastructure/week-${c.number+1}`:`#infrastructure/reading`}">${c.number<6?`Next week`:`Books & priorities`} →</a></div>`):e===`reading`?n.insertAdjacentHTML(`beforeend`,`<article class="markdown reading-article infrastructure-article">${i(gt)}</article>`):n.insertAdjacentHTML(`beforeend`,`<div class="track-start"><div><span class="eyebrow">START HERE</span><h2>Your first million ad events.</h2><p>Begin with PySpark: read events, compute user features, and explain the physical plan. Add table versioning, orchestration, and streaming after that transformation feels familiar.</p></div><a class="button primary" href="#infrastructure/week-1">Open week 1 ↗</a></div><div class="week-grid">${W.map(e=>`<section class="week-card"><div class="week-card-top"><span class="week-number">0${e.number}</span><span class="week-count" data-week-count="${e.id}">${l(e)} / 3</span></div><h2><a href="#infrastructure/${e.id}">${e.title} ↗</a></h2><p>${e.summary}</p>${u(e)}<a class="text-link" href="#infrastructure/${e.id}">Open the tutorial →</a></section>`).join(``)}</div><details class="track-concepts" open><summary>How the technologies fit together</summary><div class="markdown reading-article">${i(ht)}</div></details><div class="reading-more"><a href="#infrastructure/reading">Books, official resources, and study priorities →</a><a href="#tutorials">Explore all 12 layer tutorials →</a></div>`),n.querySelectorAll(`[data-exercise]`).forEach(e=>e.addEventListener(`change`,e=>{let t=e.target.dataset.exercise;o.exercises=e.target.checked?[...new Set([...o.exercises,t])]:o.exercises.filter(e=>e!==t),s(),n.querySelector(`#exercise-count`).textContent=`${o.exercises.length} / 18`,n.querySelectorAll(`[data-week-count]`).forEach(e=>{e.textContent=`${l(W.find(t=>t.id===e.dataset.weekCount))} / 3`})})),n.querySelectorAll(`[data-download-code]`).forEach(e=>e.addEventListener(`click`,()=>{let t=_t.find(t=>t.name===e.dataset.downloadCode),n=URL.createObjectURL(new Blob([t.text],{type:`text/x-python`})),r=document.createElement(`a`);r.href=n,r.download=t.name,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)})),a()}function bt(){return`<section class="code-downloads"><div><span class="eyebrow">STARTER FILES</span><h2>Take the first job to your terminal.</h2><p>Download both files, then follow the setup and commands above.</p></div>${_t.map(e=>`<div class="download-file"><div><strong>${e.name}</strong><small>${e.description}</small></div><button class="button secondary" data-download-code="${e.name}">Download ↓</button></div>`).join(``)}</section>`}var xt=`modulepreload`,St=function(e){return`/ml-platform-lab-site/`+e},Ct={},wt=function(e){return e.pathname.endsWith(`.css`)},Tt=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Et=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=St(t,n);let r=s(t),i=wt(r);return Tt(Ct,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:xt,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},G=(e,t=document)=>t.querySelector(e),K=(e,t=document)=>[...t.querySelectorAll(e)],q=G(`#main`),Dt=`https://github.com/ericsheng495/ml-platform-lab`,Ot=`ml-platform-lab:v1`,kt=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),J={completed:[],notes:{},tutorials:[],exercises:[]},At=[...V.map(e=>e.id),...U.map(e=>`T-${e.id}`)],jt=new Set(W.flatMap(e=>e.exercises.map(e=>e.id))),Y=!0;try{let e=JSON.parse(localStorage.getItem(Ot)||`null`);e&&Array.isArray(e.completed)&&e.notes&&typeof e.notes==`object`&&(J.completed=e.completed.filter(e=>V.some(t=>t.id===e)),J.notes=Object.fromEntries(At.map(t=>[t,typeof e.notes[t]==`string`?e.notes[t]:``])),J.tutorials=[...new Set((Array.isArray(e.tutorials)?e.tutorials:[]).filter(e=>U.some(t=>t.id===e)))],J.exercises=[...new Set((Array.isArray(e.exercises)?e.exercises:[]).filter(e=>jt.has(e)))])}catch{Y=!1}function Mt(){try{localStorage.setItem(Ot,JSON.stringify(J))}catch{Y=!1}Nt()}function Nt(){G(`#progress-label`).textContent=`${J.completed.length} / ${V.length}`,G(`#progress-fill`).style.width=`${J.completed.length/V.length*100}%`,G(`#learning-progress`).textContent=`${J.tutorials.length}/12 tutorials · ${J.exercises.length}/18 exercises`,G(`#storage-status`).textContent=Y?`Saved in this browser. No account sync.`:`Storage unavailable. Export to keep your work.`}function X(e){let t=G(`#toast`);t.textContent=e,t.classList.add(`visible`),clearTimeout(X.timer),X.timer=setTimeout(()=>t.classList.remove(`visible`),2600)}function Z(e,t,n,r=``){return`<div class="page-heading"><div><div class="eyebrow">${e}</div><h1>${t}</h1><p>${n}</p></div>${r}</div>`}function Pt(e){let t=document.createElement(`div`);return t.innerHTML=z.parse(e),K(`a`,t).forEach(e=>{let t=e.getAttribute(`href`),n=t?.match(/(?:^|\/)(roadmap|architecture|contracts|visualization|experiments|sources)\.md(?:#.*)?$/);n?e.setAttribute(`href`,`#library/${n[1]}`):t?.startsWith(`http`)&&(e.target=`_blank`,e.rel=`noreferrer`)}),K(`table`,t).forEach(e=>{let t=document.createElement(`div`);t.className=`table-scroll`,e.replaceWith(t),t.append(e)}),t.innerHTML}async function Ft(){let e=K(`code.language-mermaid`,q);if(!e.length)return;let{default:t}=await Et(async()=>{let{default:e}=await import(`./mermaid.core-CKHUdKZ4.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]));t.initialize({startOnLoad:!1,securityLevel:`strict`,theme:`base`,themeVariables:{primaryColor:`#e7edda`,primaryTextColor:`#203b34`,primaryBorderColor:`#95a791`,lineColor:`#6d8176`,fontFamily:`system-ui`}});for(let n of e){if(!n.isConnected)continue;let e=document.createElement(`div`);e.className=`mermaid diagram-wrap`,e.textContent=n.textContent,n.parentElement.replaceWith(e);try{await t.run({nodes:[e]})}catch{e.textContent=n.textContent,e.classList.add(`diagram-fallback`)}}}function It(){K(`pre`,q).filter(e=>!G(`code.language-mermaid`,e)).forEach(e=>{let t=document.createElement(`button`);t.className=`copy-code`,t.textContent=`Copy code`;let n=G(`code`,e)?.textContent||e.textContent,r=document.createElement(`div`);r.className=`code-block`,e.replaceWith(r),r.append(t,e),t.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(n),t.textContent=`Copied`,setTimeout(()=>t.textContent=`Copy code`,1500)}catch{X(`Select the code and copy it manually.`)}})})}function Lt(){let e=V.find(e=>!J.completed.includes(e.id));q.innerHTML=`<section class="hero"><div class="hero-copy"><div class="eyebrow"><span class="live-dot"></span> YOUR ML PLATFORM, PIECE BY PIECE</div><h1>Understand the system.<br><em>Build every connection.</em></h1><p>A hands-on field guide to the machinery behind machine learning. Follow a prediction from its first event to the model that serves it.</p><div class="hero-actions"><a class="button primary" href="#roadmap/${e?.id||`M0`}">${e?`Start your next milestone`:`Revisit the learning path`} <span>↗</span></a><a class="button plain" href="#architecture">Explore the architecture →</a></div><div class="hero-meta"><span><b>09</b> milestones</span><span><b>12</b> weeks</span><span><b>02</b> workloads</span></div></div><div class="hero-visual" aria-label="The learning cycle: data, model, prediction, feedback"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit-core"><span>THE LEARNING LOOP</span><strong>One prediction.<br>A whole system.</strong><small>Trace every connection</small></div><div class="orbit-tag tag-data"><i></i> DATA</div><div class="orbit-tag tag-model"><i></i> MODEL</div><div class="orbit-tag tag-predict"><i></i> PREDICTION</div><div class="orbit-tag tag-feedback"><i></i> FEEDBACK</div><span class="visual-caption">EVENT → FEATURE → MODEL → OUTCOME</span></div></section>
  <div class="learning-banner"><div><span class="eyebrow">NEW / LEARN BY DOING</span><strong>Tutorials for every layer. One focused infrastructure project.</strong><p>Explore 12 guided lessons, or start the six-week Spark → Iceberg → Airflow → Flink track.</p></div><div><a href="#tutorials">Layer tutorials →</a><a href="#infrastructure">Six-week track →</a></div></div>
  <div class="section-heading"><div><div class="eyebrow">THE APPROACH</div><h2>Learn the platform by making it visible.</h2></div><span class="quiet">6–8 hours a week · CPU-first · Local development</span></div>
  <section class="approach-grid"><article><span class="step-number">01 / BUILD</span><h3>Make it work.</h3><p>Start with delivery-time prediction. Build a small end-to-end platform, then reuse it for retrieval and ranking.</p></article><article><span class="step-number">02 / SEE</span><h3>Follow the evidence.</h3><p>Inspect feature history, training graphs, model lineage, request traces, and the state of a deployment.</p></article><article><span class="step-number">03 / EXPLAIN</span><h3>Break it on purpose.</h3><p>Inject late events, stale features, or a bad model. Use the visualizations to explain what failed and why.</p></article></section>
  <div class="overview-lower"><section class="next-panel"><div class="eyebrow">${e?`YOUR NEXT CHAPTER`:`ALL CHAPTERS CHECKED`}</div><div class="next-code">${e?.id||`✓`}</div><h2>${e?.title||`Time to teach it back.`}</h2><p>${e?.week||`Revisit your notes and demonstrate the complete lifecycle.`}</p><a href="#roadmap/${e?.id||`M0`}">Open milestone <span>↗</span></a></section><section class="reading-panel"><div class="eyebrow">TWO PLATFORMS. ONE LEARNING PROJECT.</div><h2>Inspired by the engineering behind them.</h2><a href="https://eng.snap.com/introducing-bento" target="_blank" rel="noreferrer"><div><strong>Snap Bento</strong><span>Introducing Bento · January 2025</span></div><span>↗</span></a><a href="https://www.uber.com/us/en/blog/michelangelo-machine-learning-platform/" target="_blank" rel="noreferrer"><div><strong>Uber Michelangelo</strong><span>Meet Michelangelo · September 2017</span></div><span>↗</span></a><p>Public design references. The roadmap and local implementation choices are our learning design.</p></section></div>
  <div class="status-note"><strong>Where this project stands</strong><span>The guide and simulations are ready. Building the working ML platform begins at M0. Progress checkmarks record your own learning.</span></div>`}function Rt(e){let t=V.find(t=>t.id===e);q.innerHTML=Z(`THE LEARNING PATH`,`Small steps. A complete system.`,`Nine milestones, each with something to build, something to see, and something to explain.`,`<a class="button secondary" href="#library/roadmap">Read the full plan ↗</a>`)+`<div class="roadmap-layout"><div class="milestone-list">${V.map(e=>`<a href="#roadmap/${e.id}" class="milestone-row ${t?.id===e.id?`selected`:``} ${J.completed.includes(e.id)?`complete`:``}"><span class="milestone-code">${J.completed.includes(e.id)?`✓`:e.id}</span><span><small>${e.week}</small><strong>${e.title}</strong></span><span class="row-arrow">↗</span></a>`).join(``)}</div><section class="milestone-detail">${t?`<div class="detail-top"><span class="pill">${t.id} · ${t.week}</span><a class="text-link" href="${Dt}/issues/${t.issue}" target="_blank" rel="noreferrer">GitHub issue ↗</a></div><h2>${t.title}</h2><div class="markdown milestone-body">${Pt(t.body)}</div><div class="completion-box"><label><input type="checkbox" id="complete-stage" ${J.completed.includes(t.id)?`checked`:``} /> I met the criteria and can explain the tradeoff.</label></div><div class="notes-box"><label for="stage-notes">Your field notes</label><p>What surprised you? What would you change?</p><textarea id="stage-notes" rows="5" placeholder="Capture your observations here…"></textarea><small id="note-status">Saved only in this browser. Export a backup from the sidebar.</small></div><div class="stage-pagination">${Number(t.id.slice(1))>0?`<a href="#roadmap/M${Number(t.id.slice(1))-1}">← Previous</a>`:`<span></span>`}${Number(t.id.slice(1))<8?`<a href="#roadmap/M${Number(t.id.slice(1))+1}">Next milestone →</a>`:`<a href="#labs">Explore the labs →</a>`}</div>`:`<div class="empty-detail"><div class="eyebrow">PICK A CHAPTER</div><h2>Your path from events<br>to production.</h2><p>Start with a single visible prediction. Each milestone builds on the previous one.</p><a href="#roadmap/M0" class="button primary">Begin with M0 ↗</a><div class="path-summary"><span>Weeks 1–4 <b>Data foundations</b></span><span>Weeks 5–9 <b>Model lifecycle</b></span><span>Weeks 10–12 <b>Retrieval & performance</b></span></div></div>`}</section></div>`,t&&(G(`#stage-notes`).value=J.notes[t.id]||``,G(`#stage-notes`).addEventListener(`input`,e=>{J.notes[t.id]=e.target.value,Mt(),G(`#note-status`).textContent=Y?`Notes saved in this browser.`:`Storage unavailable. Export your notes before leaving.`}),G(`#complete-stage`).addEventListener(`change`,e=>{J.completed=e.target.checked?[...new Set([...J.completed,t.id])]:J.completed.filter(e=>e!==t.id),Mt();let n=G(`a[href="#roadmap/${t.id}"]`,q);n.classList.toggle(`complete`,e.target.checked),G(`.milestone-code`,n).textContent=e.target.checked?`✓`:t.id,X(e.target.checked?`${t.id} marked complete`:`${t.id} reopened`)}))}function zt(e=`events`){let t=H.find(t=>t.id===e)||H[0];q.innerHTML=Z(`THE SYSTEM MAP`,`Every box has a reason.`,`Select a component to inspect its role, inputs, outputs, and the failure that makes it matter.`,`<a href="#library/architecture" class="button secondary">Design & APIs ↗</a>`)+`<div class="architecture-layout"><section class="system-map"><div class="map-caption"><span class="live-dot"></span> TARGET ARCHITECTURE <span>Click to inspect</span></div>${[[`Data foundations`,[`events`,`features`,`history`,`online`]],[`Model lifecycle`,[`dataset`,`training`,`registry`,`controller`]],[`Serving & feedback`,[`retrieval`,`inference`,`monitoring`,`console`]]].map(([e,n],r)=>`<div class="map-lane"><div class="lane-title"><span>0${r+1}</span> ${e}</div><div class="map-nodes">${n.map(e=>{let n=H.find(t=>t.id===e);return`<a class="component-node ${t.id===e?`active`:``}" href="#architecture/${e}"><small>${n.icon} / ${n.group}</small><strong>${n.title}</strong><span>Inspect →</span></a>`}).join(``)}</div></div>`).join(``)}<div class="map-legend">Grouped by responsibility. Arrows in the flow below show data dependencies.</div><div class="flow-strip">Events → Features → Dataset → Training → Registry → Serving → Monitoring ↺</div></section><aside class="inspector"><div class="eyebrow">COMPONENT ${t.icon} / ${t.group.toUpperCase()}</div><h2>${t.title}</h2><p>${t.desc}</p><dl><dt>INPUT</dt><dd>${t.input}</dd><dt>OUTPUT</dt><dd>${t.output}</dd><dt>THE RULE TO PROTECT</dt><dd>${t.invariant}</dd></dl><div class="experiment-callout"><span>TRY BREAKING IT</span><p>${t.experiment}</p></div><a class="button primary" href="#tutorials/${t.id}">Open layer tutorial ↗</a><a class="inspector-milestone" href="#roadmap/${t.stage}">Implementation milestone ${t.stage} →</a></aside></div><div class="architecture-bottom"><strong>Two planes, different jobs.</strong><p>The control plane records intent and manages workflows. The data plane serves predictions from loaded models and available features. Explore their interaction in the <a href="#labs/deployment">deployment lab</a>.</p></div>`}function Bt(e){let t=B.find(t=>t.id===e)||B[0];q.innerHTML=Z(`THE READING ROOM / `+t.category,t.title,`The full project specification, kept in sync with the repository.`,`<a class="button secondary" href="${Dt}/blob/main/docs/${t.id}.md" target="_blank" rel="noreferrer">Source document ↗</a>`)+`<div class="reading-layout"><article class="markdown reading-article">${Pt(t.text.replace(/^# .+\n/,``))}</article><aside class="reading-toc"><div class="eyebrow">ON THIS PAGE</div><nav aria-label="Document sections"></nav><div class="reading-tip">Read a section, then turn it into a question you can answer with a working experiment.</div></aside></div>`,K(`h2`,q).forEach((e,t)=>{e.id=`section-${t}`;let n=document.createElement(`button`);n.textContent=e.textContent,n.addEventListener(`click`,()=>e.scrollIntoView({behavior:`smooth`,block:`start`})),G(`.reading-toc nav`).append(n)}),Ft()}var Vt=[{id:`A`,event:2,arrival:3,prep:12},{id:`B`,event:5,arrival:6,prep:18},{id:`C`,event:8,arrival:17,prep:36},{id:`D`,event:13,arrival:14,prep:14},{id:`E`,event:18,arrival:19,prep:20}];function Ht(e=`timing`){q.innerHTML=Z(`THE INTERACTIVE LABS`,`Change one thing. See what breaks.`,`Small, deterministic simulations to make the platform concepts concrete.`)+`<div class="lab-tabs" role="group" aria-label="Choose a lab"><a href="#labs/timing" class="${e===`deployment`?``:`active`}">01 / Feature time travel</a><a href="#labs/deployment" class="${e===`deployment`?`active`:``}">02 / Safe deployment</a><span class="pill">EDUCATIONAL SIMULATION</span></div><div id="lab-content"></div>`,e===`deployment`?Gt():Ut()}function Ut(){G(`#lab-content`).innerHTML=`<div class="lab-intro"><h2>What did the system actually know?</h2><p>An event can happen before a prediction and still arrive too late to be used. Move the prediction cutoff to see the difference.</p></div><div class="timing-layout"><section class="lab-panel"><div class="slider-heading"><label for="cutoff">Prediction cutoff</label><output id="cutoff-label" for="cutoff">10:12</output></div><input type="range" id="cutoff" min="1" max="22" value="12" /><div class="range-ends"><span>10:01</span><span>10:22</span></div><div class="timeline-legend"><span><i class="event-key"></i> Event occurred</span><span><i class="arrival-key"></i> Available to system</span><span><i class="cutoff-key"></i> Prediction cutoff</span></div><div id="event-timeline"></div><p class="lab-footnote">Five synthetic restaurant events. Mean prep time uses a 30-minute window [cutoff − 30 min, cutoff). Materialization is immediate at arrival in this simplified example.</p></section><aside class="lab-results"><div class="result-card correct"><span>AVAILABILITY-AWARE</span><strong id="correct-mean"></strong><p id="correct-detail"></p></div><div class="result-card naive"><span>EVENT-TIME ONLY</span><strong id="naive-mean"></strong><p id="naive-detail"></p></div><div class="explanation" id="time-explanation" aria-live="polite"></div><a href="#library/contracts">Read the temporal contract →</a></aside></div><div class="table-scroll"><table class="event-table"><thead><tr><th>Event</th><th>Occurred</th><th>Available</th><th>Prep time</th><th>At your cutoff</th></tr></thead><tbody id="event-table-body"></tbody></table></div>`,G(`#cutoff`).addEventListener(`input`,Wt),Wt()}function Wt(){let e=Number(G(`#cutoff`).value),t=e=>`10:${String(e).padStart(2,`0`)}`,n=Vt.filter(t=>t.event<e),r=n.filter(t=>t.arrival<=e),i=n.filter(t=>t.arrival>e),a=e=>e.length?`${(e.reduce((e,t)=>e+t.prep,0)/e.length).toFixed(1)} <small>min</small>`:`No data`;G(`#cutoff-label`).textContent=t(e),G(`#correct-mean`).innerHTML=a(r),G(`#naive-mean`).innerHTML=a(n),G(`#correct-detail`).textContent=`${r.length} events the system could use.`,G(`#naive-detail`).textContent=`${n.length} events, ignoring when they arrived.`,G(`#time-explanation`).innerHTML=i.length?`<strong>${i.map(e=>e.id).join(`, `)} arrived too late.</strong><p>The event-time-only calculation uses information unavailable at ${t(e)}. That leaks future knowledge into the historical feature.</p>`:`<strong>The two views agree here.</strong><p>Try 10:12 to expose event C: it happened at 10:08 but only arrived at 10:17.</p>`,G(`#event-timeline`).innerHTML=Vt.map(n=>`<div class="timeline-row"><span>${n.id}</span><div class="timeline-track"><span class="timeline-delay" style="left:${n.event/22*100}%;width:${(n.arrival-n.event)/22*100}%"></span><i class="event-point" style="left:${n.event/22*100}%" title="Occurred ${t(n.event)}"></i><i class="arrival-point ${n.arrival<=e?`available`:``}" style="left:${n.arrival/22*100}%" title="Available ${t(n.arrival)}"></i><span class="cutoff-line" style="left:${e/22*100}%"></span></div></div>`).join(``),G(`#event-table-body`).innerHTML=Vt.map(n=>`<tr><td><b>${n.id}</b></td><td>${t(n.event)}</td><td>${t(n.arrival)}</td><td>${n.prep} min</td><td><span class="table-status ${n.event<e&&n.arrival<=e?`usable`:``}">${n.event>=e?`Outside window`:n.arrival>e?`Not yet available`:`Usable`}</span></td></tr>`).join(``)}function Gt(){let e=0,t=`v1`,n=[`v1 is active and serving requests.`],r=[`Requested`,`Validating`,`Loading`,`Ready`,`Active`];G(`#lab-content`).innerHTML=`<div class="lab-intro"><h2>A request to deploy is not a deployment.</h2><p>Step through a controller’s work. Make the candidate incompatible and see why the current model stays active.</p></div><section class="deployment-lab lab-panel"><div class="deploy-settings"><label>Candidate bundle<select id="candidate-mode"><option value="valid">v2 · compatible signature</option><option value="invalid">v2 · incompatible signature</option></select></label><div class="serving-indicator"><span class="live-dot"></span> SERVING <strong id="active-model">v1</strong></div></div><div class="deployment-steps" id="deployment-steps"></div><div class="deploy-actions"><button id="step-deploy" class="button primary">Advance controller →</button><button id="rollback" class="button secondary" disabled>Roll back to v1</button><button id="reset-deploy" class="text-button">Reset simulation</button></div><p class="deploy-state" id="deploy-state" aria-live="polite"></p><div class="event-log"><div class="eyebrow">CONTROLLER EVENT LOG</div><ol id="deploy-log"></ol></div></section><div class="architecture-bottom"><strong>Why this matters</strong><p>Model loading, warmup, validation, and routing are separate steps. A failed candidate must preserve availability. This simplified single-process simulation illustrates the contract you will build in <a href="#roadmap/M5">M5</a>.</p></div>`;function i(){G(`#deployment-steps`).innerHTML=r.map((t,n)=>`<div class="deploy-step ${e===-1&&n===1?`failed`:n<=e?`reached`:``}"><span>${e===-1&&n===1?`×`:String(n+1).padStart(2,`0`)}</span><strong>${e===-1&&n===1?`Rejected`:t}</strong></div>`).join(``),G(`#active-model`).textContent=t,G(`#deploy-state`).textContent=e===-1?`Candidate rejected. v1 continues to serve.`:e===4?`v2 is active. Every prediction should now record v2.`:`Candidate: ${r[e].toLowerCase()}. v1 continues to serve.`,G(`#step-deploy`).disabled=e===-1||e===4,G(`#rollback`).disabled=t!==`v2`,G(`#candidate-mode`).disabled=e!==0,G(`#deploy-log`).innerHTML=n.map((e,t)=>`<li><span>${String(t).padStart(2,`0`)}</span>${e}</li>`).join(``)}G(`#step-deploy`).addEventListener(`click`,()=>{e===0?(e=1,n.push(`Controller begins signature and evaluation checks.`)):e===1&&G(`#candidate-mode`).value===`invalid`?(e=-1,n.push(`Rejected: feature signature mismatch. Active route unchanged.`)):e===1?(e=2,n.push(`Validation passed. Loading the candidate bundle.`)):e===2?(e=3,n.push(`Warmup and health checks passed. Candidate is ready.`)):e===3&&(e=4,t=`v2`,n.push(`Route switched atomically. Observed version is now v2.`)),i()}),G(`#rollback`).addEventListener(`click`,()=>{t=`v1`,e=0,n.push(`Rollback: validated prior bundle v1 restored to active route.`),i()}),G(`#reset-deploy`).addEventListener(`click`,()=>{e=0,t=`v1`,n=[`v1 is active and serving requests.`],G(`#candidate-mode`).value=`valid`,i()}),i()}var Q=``;function Kt(){let[e=`overview`,t]=location.hash.slice(1).split(`/`);if(e===`main`){q.focus();return}let n=[`overview`,`roadmap`,`architecture`,`labs`,`library`,`tutorials`,`infrastructure`].includes(e)?e:`overview`;G(`#breadcrumb`).textContent=`FIELD GUIDE / ${n===`library`?`READING ROOM`:n.toUpperCase()}`,K(`[data-nav]`).forEach(e=>{let t=e.dataset.nav===n;e.classList.toggle(`active`,t),t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)}),K(`#document-nav a`).forEach(e=>{let r=n===`library`&&e.hash===`#library/${t}`;e.classList.toggle(`active`,r),r?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)}),document.body.classList.remove(`menu-open`),G(`#menu-toggle`).setAttribute(`aria-expanded`,`false`);let r={main:q,heading:Z,markdown:Pt,diagrams:Ft,state:J,save:Mt,esc:kt};n===`tutorials`?vt(t,r):n===`infrastructure`?yt(t,r):n===`roadmap`?Rt(t):n===`architecture`?zt(t):n===`library`?Bt(t):n===`labs`?Ht(t):Lt(),It(),document.title=`${G(`h1`,q)?.textContent||`Field guide`} — ML Platform Lab`,Q&&q.focus({preventScroll:!0}),n===`architecture`&&Q.startsWith(`architecture/`)||window.scrollTo(0,0),Q=`${n}/${t||``}`}G(`#document-nav`).innerHTML=B.filter(e=>e.id!==`roadmap`).map(e=>`<a href="#library/${e.id}">${e.title}</a>`).join(``),G(`#menu-toggle`).addEventListener(`click`,()=>{let e=document.body.classList.toggle(`menu-open`);G(`#menu-toggle`).setAttribute(`aria-expanded`,String(e))}),G(`#export-progress`).addEventListener(`click`,()=>{let e=new Blob([JSON.stringify({...J,exportedAt:new Date().toISOString(),project:Dt},null,2)],{type:`application/json`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`ml-platform-lab-progress.json`,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3),X(`Progress and notes exported`)});var $=G(`#search-dialog`);function qt(){let e=G(`#search-input`).value.trim().toLowerCase();if(!e){G(`#search-results`).innerHTML=`<p class="search-hint">Search documents, milestones, layer tutorials, and the six-week track.</p>`;return}let t=[...V.map(e=>({title:`${e.id} · ${e.title}`,text:e.body,href:`#roadmap/${e.id}`})),...B.map(e=>({title:e.title,text:e.text,href:`#library/${e.id}`})),...U.map(e=>({title:`Tutorial · ${e.title}`,text:e.body,href:`#tutorials/${e.id}`})),...W.map(e=>({title:`Week ${e.number} · ${e.title}`,text:e.body,href:`#infrastructure/${e.id}`})),{title:`Books & study priorities`,text:gt,href:`#infrastructure/reading`}].filter(t=>(t.title+` `+t.text).toLowerCase().includes(e));G(`#search-results`).innerHTML=t.length?t.map(t=>{let n=t.text.toLowerCase().indexOf(e),r=Math.max(0,n-50);return`<a class="search-result" href="${t.href}"><strong>${kt(t.title)}</strong><span>${kt(t.text.slice(r,r+180).replace(/[#*`]/g,``))}…</span></a>`}).join(``):`<p class="search-hint">No matches. Try a broader term.</p>`,K(`.search-result`).forEach(e=>e.addEventListener(`click`,()=>$.close()))}G(`#open-search`).addEventListener(`click`,()=>{$.showModal(),qt(),G(`#search-input`).focus()}),G(`#close-search`).addEventListener(`click`,()=>$.close()),G(`#search-input`).addEventListener(`input`,qt),$.addEventListener(`click`,e=>{e.target===$&&$.close()}),document.addEventListener(`keydown`,e=>{e.key===`/`&&![`INPUT`,`TEXTAREA`,`SELECT`].includes(document.activeElement.tagName)&&(e.preventDefault(),G(`#open-search`).click())}),window.addEventListener(`hashchange`,Kt),Nt(),Kt();export{Et as t};