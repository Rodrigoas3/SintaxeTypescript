//type alias (apelido)
type Uid = number | string | undefined 

function logDetails(Uid: Uid, user: string ){
    console.log ('A product with ${uid} has a name title as ${item}.');
}

function logInfo(Uid: Uid, user: string ){
    console.log ('An user with ${uid} has a name as ${user}.');

}

type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'ios'

function renderPlatform(platform: Platform){
    return platform
}

renderPlatform('ios')

logDetails(123, "sapato");
logDetails("123", "sapato");
logInfo(123, "Rodrigo");
logInfo("123", "Rodrigo");