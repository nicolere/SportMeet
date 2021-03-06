const observableModule = require("tns-core-modules/data/observable");
const dialogsModule = require("tns-core-modules/ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;
const DatePicker = require("tns-core-modules/ui/date-picker").DatePicker;
const CheckBox = require("@nstudio/nativescript-checkbox").CheckBox;

const userService = require("~/services/user-service");

function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        email: "user@nativescript.org",
        password: "password",
        confirmPassword: "",
        surname: "DELATTRE Edouard",
        age: 22,
        name: "",
        title: "SportMeet",
        date: "",
        items: {},
        Genre: ["Homme", "Femme"],
        isLoggingIn: true,
        isMyProfilModif: true,
        processing: false,
        titreView: "Paramètres",

        //Lorsque l'on passe dans la phase d'inscription et vice versa
        toggleForm() {
            console.log("Test Toggle");
            this.isLoggingIn = !this.isLoggingIn;
        },

        //Lors de l'appuie sur le bouton de connexion
        submit() {
            if (this.email.trim() === "" || this.password.trim() === "") {
                alert(
                    "Veuillez rentrer une adresse mail et un mot de passe valide."
                );
                return;
            }

            this.set("processing", true);
            if (this.isLoggingIn) {
                this.login();
            } else {
                this.register();
            }
        },
        login() {
            // console.log("la co");
            userService
                .login({
                    email: this.email,
                    password: this.password
                })
                .then(() => {
                    this.set("processing", false);
                    topmost().navigate({
                        moduleName: "/home/home-page",
                        clearHistory: true
                    });
                })
                .catch(e => {
                    this.set("processing", false);
                    console.log(e);
                    alert("Impossible de retrouver votre compte.");
                });
        },

        //Lors de la création du compte on vérifie le mot de passe et si tout est bon on accepte la création
        register() {
            if (this.password != this.confirmPassword) {
                alert("Vos mots de passe ne correspondent pas.");
                return;
            }
            //On enregistre le mot de passe et l'adresse mail
            userService
                .register({
                    email: this.email,
                    password: this.password
                })
                .then(() => {
                    this.set("processing", false);
                    alert(
                        "Votre compte vient d'être créé, vous pouvez vos connecter."
                    );
                    this.isLoggingIn = true;
                })
                .catch(() => {
                    this.set("processing", false);
                    alert(
                        "Unfortunately we were unable to create your account."
                    );
                });
        },
        forgotPassword() {
            dialogsModule
                .prompt({
                    title: "Forgot Password",
                    message:
                        "Enter the email address you used to register for APP NAME to reset your password.",
                    inputType: "email",
                    defaultText: "",
                    okButtonText: "Ok",
                    cancelButtonText: "Cancel"
                })
                .then(data => {
                    if (data.result) {
                        userService
                            .resetPassword(data.text.trim())
                            .then(() => {
                                alert(
                                    "Your password was successfully reset. Please check your email for instructions on choosing a new password."
                                );
                            })
                            .catch(() => {
                                alert(
                                    "Unfortunately, an error occurred resetting your password."
                                );
                            });
                    }
                });
        },

        getToProfil() {
            topmost().navigate({
                moduleName: "profil/profil-page",
                clearHistory: true
            });
        },

        goToEvents() {
            topmost().navigate({
                moduleName: "events/events-page",
                clearHistory: true
            });
        },

        deconnexion() {
            topmost().navigate({
                moduleName: "login/login-page",
                clearHistory: true
            });
        },

        goToMenu() {
            topmost().navigate({
                moduleName: "menu/menu-page",
                clearHistory: true
            });
        },

        goToFriends() {
            topmost().navigate({
                moduleName: "friends/friends-page",
                clearHistory: true
            });
        },

        goToNews() {
            // console.log("Navigate vers News");
            topmost().navigate({
                moduleName: "news/news-page",
                clearHistory: true
            });
        },

        goToMap() {
            // console.log("Navigate vers Map");
            topmost().navigate({
                moduleName: "home/home-page",
                clearHistory: true
            });
        }
    });

    return viewModel;
}

module.exports = LoginViewModel;
