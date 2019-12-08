var observableModule = require("tns-core-modules/data/observable").Observable;
const topmost = require("tns-core-modules/ui/frame").topmost;

const viewModel = new observableModule();

let friendsViewModel = page => {
    viewModel.set("friendsColor", "#1aa3ff");
    isFriend = false;
    viewModel.set("Text", "Demande d'ami");
    viewModel.set("Ajouter en ami", "Ajouter en ami");
    viewModel.set("En attente", "En attente");

    return viewModel;
};

viewModel.setFriend = args => {
    isFriend = true;
    var btn = args.object;
    viewModel.set("Text", "Invitation envoyé");
    btn.backgroundColor = "#A1E8AF";
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

viewModel.goToFriendProfil = args => {
    topmost().navigate({
        moduleName: "friendProfile/friendProfile-page",
        clearHistory: true,
        animated: true
    });
};

exports.friendsViewModel = friendsViewModel;
