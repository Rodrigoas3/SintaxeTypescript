//accountInfo
//charInfo
//PlayerInfo

type AccountInfo = {
    id: number;
    name: string; 
    email?: string;
}

const account : AccountInfo ={ 
    id: 123,
    name: "Rodrigo"
}

type charInfo = { 
    nickname: string;
    level: number

}

const char : charInfo = {
    nickname: "Meliodas_41",
    level: 100
}

//intersection
type PlayerInfo = AccountInfo & charInfo

const player: PlayerInfo = {
    id: 123,
    name: "Rodrigo",
    nickname:"Meliodas_41",
    level: 100


}