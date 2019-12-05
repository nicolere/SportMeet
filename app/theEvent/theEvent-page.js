const HomeViewModel = require("../home/home-view-model");
const HtmlView = require("tns-core-modules/ui/html-view").HtmlView;
const homeViewModel = new HomeViewModel();

exports.pageLoaded = function(args) {

  const myHtmlView = new HtmlView();
  
  const page = args.object;
  page.bindingContext = homeViewModel;
}