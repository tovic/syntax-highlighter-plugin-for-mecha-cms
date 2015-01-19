/*
Language: Objective C
Author: Valerii Hiora <valerii.hiora@gmail.com>
Contributors: Angel G. Olloqui <angelgarcia.mail@gmail.com>, Matt Diephouse <matt@diephouse.com>
Category: common
*/
function(e){var t={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSData NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView NSView NSViewController NSWindow NSWindowController NSSet NSUUID NSIndexSet UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection NSURLSession NSURLSessionDataTask NSURLSessionDownloadTask NSURLSessionUploadTask NSURLResponseUIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},o=/[a-zA-Z@][a-zA-Z0-9_]*/,a="@interface @class @protocol @implementation";return{aliases:["m","mm","objc","obj-c"],keywords:t,lexemes:o,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"'",end:"[^\\\\]'",illegal:"[^\\\\][^']"}]},{className:"preprocessor",begin:"#",end:"$",contains:[{className:"title",variants:[{begin:'"',end:'"'},{begin:"<",end:">"}]}]},{className:"class",begin:"("+a.split(" ").join("|")+")\\b",end:"({|$)",excludeEnd:!0,keywords:a,lexemes:o,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"variable",begin:"\\."+e.UNDERSCORE_IDENT_RE,relevance:0}]}}