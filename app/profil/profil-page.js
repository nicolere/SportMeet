var HomeViewModel = require("../login/login-view-model");
var homeViewModel = new HomeViewModel();

exports.pageLoaded = function(args) {
  var titre = "Paramètre";
  const page = args.object;
  page.bindingContext = homeViewModel;
}