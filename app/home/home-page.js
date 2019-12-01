var homeViewModel = require("./home-view-model").HViewModel;

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = homeViewModel(page);
}

exports.pageLoaded = pageLoaded;
