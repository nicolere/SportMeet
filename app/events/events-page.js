var eventsViewModel = require("./events-view-model").eventsViewModel;

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = eventsViewModel(page);
}

exports.pageLoaded = pageLoaded;
