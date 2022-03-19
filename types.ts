// boolean (true/false)

let isOpen: boolean
isOpen = true

//string ('foo', "foo", 'foo')
let messeage: string 
messeage = 'foo ${isOpen}'

//number (int, float, hex, binary)
let total: number 
total = 0xff0

//array 
let items : string[]
items = ["foo", "bar"]

let values, array, number
    <unknown>values,  [1, 2, 3];

//TUPLE 
let title : [number, string, String];
title = [1, "foo", "bar"];

//enum 
enum Color {
    white = '#fff',
    black = '#000',

}
//any (qualquer coisa ) NÃO É LEGAL !

let Coisa : any;
Coisa : [1];

//void (vazio)

function logger(): void {
    console.log('foo')
}
//null/undefined

type bla = string | undefined


//never
function error (): never {
    throw new Error ("error");
}

//object 

let cart : object;
cart = {
        key: "fi"
}

// type inference 

let message = "mensagem definida"
message = "string nova";

window.addEventListener("click", (e.));{ 
    console.log('e'. target)
};
