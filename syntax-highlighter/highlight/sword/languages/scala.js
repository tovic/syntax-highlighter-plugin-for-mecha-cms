/*!
Language: Scala
Author: Jan Berkel <jan.berkel@gmail.com>
*/
hljs.registerLanguage("scala",function(a){var c={className:"annotation",begin:"@[A-Za-z]+"};var b={className:"string",begin:'u?r?"""',end:'"""',relevance:10};return{keywords:"type yield lazy override def with val var false true sealed abstract private trait object null if for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws",contains:[{className:"javadoc",begin:"/\\*\\*",end:"\\*/",contains:[{className:"javadoctag",begin:"@[A-Za-z]+"}],relevance:10},a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,b,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,{className:"class",begin:"((case )?class |object |trait )",end:"({|$)",illegal:":",keywords:"case class trait object",contains:[{beginKeywords:"extends with",relevance:10},a.UNDERSCORE_TITLE_MODE,{className:"params",begin:"\\(",end:"\\)",contains:[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,b,c]}]},a.C_NUMBER_MODE,c]}});