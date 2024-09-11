const tittle = "Dress";
const colors = ['red, white, sky blue, creamy pastel, light yellow'];
const cloth = ['atlas', 'silk', 'linen', 'cotton', 'lether' ];
cloth.unshift('lether')
let presence = true;
let scratches;
let price = 3500;

console.log({
    tittle,
    colors,
    cloth,
    presence,
    scratches, 
    price,

})

//console.log("Товар: ${tittle}, варіанти кольору ${colors}, тканина ${cloth}, Чи є товар в наявності ${presence}, Наявність розтяжок ${scratches}, Ціна ${price} ")