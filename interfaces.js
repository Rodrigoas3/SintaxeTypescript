"use strict";
var tlou = {
    title: "The last of Us",
    description: "The last game in the world",
    genre: "Action",
    getSimilars: function (title) {
        console.log('Similar games to ${title}: Unicharted, A page tale, Metro');
    },
};
tlou.getSimilars(tlou.title);
