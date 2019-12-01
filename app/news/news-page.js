var newsViewModel = require('./news-view-model').newsViewModel;

function pageLoaded(args) {
  var page = args.object;

  page.bindingContext = newsViewModel(page);
}

exports.pageLoaded = pageLoaded;