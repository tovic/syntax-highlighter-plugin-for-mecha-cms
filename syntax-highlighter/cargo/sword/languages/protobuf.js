/*
Language: Protocol Buffers
Author: Dan Tao <daniel.tao@gmail.com>
Description: Protocol buffer message definition format
Category: protocols
*/
function(e){return{keywords:{keyword:"package import option optional required repeated group",built_in:"double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",literal:"true false"},contains:[e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.C_LINE_COMMENT_MODE,{className:"class",beginKeywords:"message enum service",end:/\{/,illegal:/\n/,contains:[e.inherit(e.TITLE_MODE,{starts:{endsWithParent:!0,excludeEnd:!0}})]},{className:"function",beginKeywords:"rpc",end:/;/,excludeEnd:!0,keywords:"rpc returns"},{className:"constant",begin:/^\s*[A-Z_]+/,end:/\s*=/,excludeEnd:!0}]}}