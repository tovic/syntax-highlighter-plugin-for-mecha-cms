/*
Language: Delphi
*/
function(e){var n="exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure",r={className:"comment",variants:[{begin:/\{/,end:/\}/,relevance:0},{begin:/\(\*/,end:/\*\)/,relevance:10}]},t={className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},i={className:"string",begin:/(#\d+)+/},a={begin:e.IDENT_RE+"\\s*=\\s*class\\s*\\(",returnBegin:!0,contains:[e.TITLE_MODE]},s={className:"function",beginKeywords:"function constructor destructor procedure",end:/[:;]/,keywords:"function constructor|10 destructor|10 procedure|10",contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:n,contains:[t,i]},r]};return{case_insensitive:!0,keywords:n,illegal:/"|\$[G-Zg-z]|\/\*|<\/|\|/,contains:[r,e.C_LINE_COMMENT_MODE,t,i,e.NUMBER_MODE,a,s]}}