var friendsViewModel = require("./friends-view-model").friendsViewModel;

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = friendsViewModel(page);
}

exports.pageLoaded = pageLoaded;
