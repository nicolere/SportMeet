const init = require("kinvey-nativescript-sdk").init;
const kinveyAppKey = "kid_SyY8LYO8M";
const kinveyAppSecret = "09282985d7c540f7b076a9c7fd884c77";
const kinveyUsername = "admin";
const kinveyPassword = "admin";

exports.setup = function () {
    init({
        appKey: kinveyAppKey,
        appSecret: kinveyAppSecret
    });
};
