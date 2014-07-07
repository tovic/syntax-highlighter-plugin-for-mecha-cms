﻿/*!
Language: CoffeeScript
Author: Dmytrii Nagirniak <dnagir@gmail.com>
Contributors: Oleg Efimov <efimovov@gmail.com>, Cédric Néhémie <cedric.nehemie@gmail.com>
Description: CoffeeScript is a programming language that transcompiles to JavaScript. For info about language see http://coffeescript.org
*/
hljs.registerLanguage("coffeescript",function(c){var b={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"};var a="[A-Za-z$_][0-9A-Za-z$_]*";var f=c.inherit(c.TITLE_MODE,{begin:a});var e={className:"subst",begin:/#\{/,end:/}/,keywords:b};var d=[c.BINARY_NUMBER_MODE,c.inherit(c.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[c.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[c.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[c.BACKSLASH_ESCAPE,e]},{begin:/"/,end:/"/,contains:[c.BACKSLASH_ESCAPE,e]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[e,c.HASH_COMMENT_MODE]},{begin:"//[gim]*",relevance:0},{begin:"/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"}]},{className:"property",begin:"@"+a},{begin:"`",end:"`",excludeBegin:true,excludeEnd:true,subLanguage:"javascript"}];e.contains=d;return{keywords:b,contains:d.concat([{className:"comment",begin:"###",end:"###"},c.HASH_COMMENT_MODE,{className:"function",begin:"("+a+"\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:true,contains:[f,{className:"params",begin:"\\(",returnBegin:true,contains:[{begin:/\(/,end:/\)/,keywords:b,contains:["self"].concat(d)}]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:true,illegal:/[:="\[\]]/,contains:[f]},f]},{className:"attribute",begin:a+":",end:":",returnBegin:true,excludeEnd:true,relevance:0}])}});