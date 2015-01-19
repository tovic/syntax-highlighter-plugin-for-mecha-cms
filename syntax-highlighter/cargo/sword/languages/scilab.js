/*
Language: Scilab
Author: Sylvestre Ledru <sylvestre.ledru@scilab-enterprises.com>
Origin: matlab.js
Description: Scilab is a port from Matlab
Category: scientific
*/
function(e){var n=[e.C_NUMBER_MODE,{className:"string",begin:"'|\"",end:"'|\"",contains:[e.BACKSLASH_ESCAPE,{begin:"''"}]}];return{aliases:["sci"],keywords:{keyword:"abort break case clear catch continue do elseif else endfunction end for functionglobal if pause return resume select try then while%f %F %t %T %pi %eps %inf %nan %e %i %z %s",built_in:"abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp errorexec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isemptyisinfisnan isvector lasterror length load linspace list listfiles log10 log2 logmax min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand realround sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tantype typename warning zeros matrix"},illegal:'("|#|/\\*|\\s+/\\w+)',contains:[{className:"function",beginKeywords:"function endfunction",end:"$",keywords:"function endfunction|10",contains:[e.UNDERSCORE_TITLE_MODE,{className:"params",begin:"\\(",end:"\\)"}]},{className:"transposed_variable",begin:"[a-zA-Z_][a-zA-Z_0-9]*('+[\\.']*|[\\.']+)",end:"",relevance:0},{className:"matrix",begin:"\\[",end:"\\]'*[\\.']*",relevance:0,contains:n},{className:"comment",begin:"//",end:"$"}].concat(n)}}