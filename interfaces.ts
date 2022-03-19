interface Game {
    title: string;
    description: string;
    genre: string;
    platform: string;
    getSimilars: (title: string) => void;

}

const tlou: Game = {
    title: "The last of Us",
    description: "The last game in the world",
    genre: "Action",
   
    getSimilars: (title: string) => {
        console.log('Similar games to ${title}: Unicharted, A page tale, Metro');

    },

};

tlou.getSimilars(tlou.title);