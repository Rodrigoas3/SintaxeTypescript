"use strict";
function logDetails(Uid, user) {
    console.log('A product with ${uid} has a name title as ${item}.');
}
function logInfo(Uid, user) {
    console.log('An user with ${uid} has a name as ${user}.');
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('ios');
logDetails(123, "sapato");
logDetails("123", "sapato");
logInfo(123, "Rodrigo");
logInfo("123", "Rodrigo");
