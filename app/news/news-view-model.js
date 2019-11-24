const observableModule = require("data/observable");
const dialogsModule = require("ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;

function HomeViewModel() {
  const viewModel = observableModule.fromObject({
    message: "You have successfully authenticated. This is where you build your core application functionality.",
    titre_page: "News",
  });
  return viewModel;  
}

module.exports = HomeViewModel;
