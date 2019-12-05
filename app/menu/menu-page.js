var menuViewModel = require("./menu-view-model").menuViewModel;

function pageLoaded(args) {
  
  var page = args.object;
  page.bindingContext = menuViewModel(page);
}

exports.pageLoaded = pageLoaded;