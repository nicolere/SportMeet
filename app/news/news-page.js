const HomeViewModel = require("../home/home-view-model");
const homeViewModel = new HomeViewModel();

exports.pageLoaded = function(args) {
  const page = args.object;
  page.bindingContext = homeViewModel;
}