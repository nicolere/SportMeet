var observableModule = require("tns-core-modules/data/observable").Observable;
const topmost = require("tns-core-modules/ui/frame").topmost;

const viewModel = new observableModule();

let eventsViewModel = page => {
    viewModel.set("eventsColor", "#1aa3ff");

    return viewModel;
};

viewModel.goToMenu = args => {
    // console.log("Navigate vers Menu");
    topmost().navigate({
        moduleName: "menu/menu-page",
        clearHistory: true
    });
};

viewModel.deconnexion = args => {
    // console.log("Déconnexion");
    topmost().navigate({
        moduleName: "login/login-page",
        clearHistory: true
    });
};

viewModel.goToMap = args => {
    // console.log("Navigate vers Map");
    topmost().navigate({
        moduleName: "home/home-page",
        clearHistory: true,
        animated: true
    });
};

viewModel.goToNews = args => {
    // console.log("Navigate vers News");
    topmost().navigate({
        moduleName: "news/news-page",
        clearHistory: true,
        animated: true
    });
};

viewModel.goToFriends = args => {
    // console.log("Navigate vers Friends");
    topmost().navigate({
        moduleName: "friends/friends-page",
        clearHistory: true,
        animated: true
    });
};

viewModel.goToEvents = args => {
    // console.log("Navigate vers Events")
    topmost().navigate({
        moduleName: "events/events-page",
        clearHistory: true,
        animated: true
    });
};

viewModel.goToTheEvent = args => {
    // console.log("Navigate vers the Event")
    topmost().navigate({
        moduleName: "theEvent/theEvent-page",
        clearHistory: true,
        animated: true
    });
};

exports.eventsViewModel = eventsViewModel;
