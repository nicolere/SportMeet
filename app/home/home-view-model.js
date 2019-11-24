const observableModule = require("data/observable");
const dialogsModule = require("ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;

function HomeViewModel() {
  const viewModel = observableModule.fromObject({
    message: "You have successfully authenticated. This is where you build your core application functionality.",
    titre_page: "Carte du sport",
    deconnexion()
    {
      console.log("deco");
      this.set("processing", false);
      topmost().navigate({
        moduleName: "login/login-page",
        clearHistory: true
      });
    },

    getToNews()
    {
      console.log("Je veux les news");
      this.set("processing", false);
      topmost().navigate({
        moduleName: "news/news-page",
        clearHistory: true
      });
    },

    getToFriends()
    {
      console.log("Je veux les amis");
      this.set("processing", false);
      topmost().navigate({
        moduleName: "friends/friends-page",
        clearHistory: true
      });
    },

    getToMap()
    {
      console.log("Je veux les amis");
      this.set("processing", false);
      topmost().navigate({
        moduleName: "home/home-page",
        clearHistory: true
      });
    },

    getToMenu()
    {
      console.log("Je veux les amis");
      this.set("processing", false);
      topmost().navigate({
        moduleName: "menu/menu-page",
        clearHistory: true
      });
    },

  });
  return viewModel;  
}

module.exports = HomeViewModel;
