const HomeViewModel = require("../login/login-view-model");
const homeViewModel = new HomeViewModel();

exports.pageLoaded = function(args) {
  const page = args.object;
  page.bindingContext = homeViewModel;
}