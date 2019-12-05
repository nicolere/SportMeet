var theEventViewModel = require("./theEvent-view-model").theEventViewModel;
const HtmlView = require("tns-core-modules/ui/html-view").HtmlView;

function pageLoaded(args) {

  const myHtmlView = new HtmlView();
  
  var page = args.object;
  page.bindingContext = theEventViewModel(page);
}

exports.pageLoaded = pageLoaded;