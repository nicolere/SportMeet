const HomeViewModel = require("../home/home-view-model");
const homeViewModel = new HomeViewModel();

exports.pageLoaded = function(args) {
  var titre = "Carte du sport";
  const page = args.object;
  page.bindingContext = homeViewModel;
}