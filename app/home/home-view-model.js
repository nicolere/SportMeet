const observableModule = require("data/observable");
const dialogsModule = require("ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;
const HtmlView = require("tns-core-modules/ui/html-view").HtmlView;

function HomeViewModel() {
  const viewModel = observableModule.fromObject({
    message: "You have successfully authenticated. This is where you build your core application functionality.",
    titre_page: "Carte du sport",
    name:"Edouard",
    myHtmlView: "<span><h1><font color=\"blue\">NativeScript HtmlView</font></h1></br><h3>This component accept simple HTML strings</h3></span>",
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

    getToTheEvent()
    {
      this.set("processing", false);
      topmost().navigate({
        moduleName: "theEvent/theEvent-page",
        clearHistory: true
      });
    },

    getToProfil()
    {
      this.set("processing", false);
      topmost().navigate({
        moduleName: "profil/profil-page",
        clearHistory: true
      });
    },

    getToEvents()
    {
      this.set("processing", false);
      topmost().navigate({
        moduleName: "events/events-page",
        clearHistory: true
      });
    },
    
  });
  
  return viewModel;  
}

module.exports = HomeViewModel;
