"use strict";
// boolean (true/false)
var isOpen;
isOpen = true;
//string ('foo', "foo", 'foo')
var messeage;
messeage = 'foo ${isOpen}';
//number (int, float, hex, binary)
var total;
total = 0xff0;
//array 
var items;
items = ["foo", "bar"];
var values, array, number;
values, [1, 2, 3];
//TUPLE 
var title;
title = [1, "foo", "bar"];
//enum 
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
//any (qualquer coisa ) NÃO É LEGAL !
var Coisa;
Coisa: [1];
//void (vazio)
function logger() {
    console.log('foo');
}
//never
function error() {
    throw new Error("error");
}
//object 
var cart;
cart = {
    key: "fi"
};
// type inference 
var message = "mensagem definida";
message = "string nova";
window.addEventListener("click", (e.));
{
    console.log('e'.target);
}
;
