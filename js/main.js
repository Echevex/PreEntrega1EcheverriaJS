let pais = ""
while (pais === "" || Number(pais)){
    pais = prompt("Escribe de que pais nos estas visitando");
    if (pais === ""){
        alert("Debes escribir un pais para avanzar");
    }
}

console.log(pais);

let total = 0

function calculasubtotal(precio,cantidad){
    return precio*cantidad
}


function valorproducto(productos){

    switch(productos){
        case 'chocolate':
        return 50;

        case 'caramelos':
        return 3.50;

        case 'chizitos':
        return 30;

        case 'picodulce':
        return 15;

        case 'alfajores':
        return 21.50;

        default:
            return 0;
     }
}



let productos;   
  do{    productos = prompt ("Seleccione el producto que desea comprar:\nchocolate. \ncaramelos. \nchizitos. \npicodulce. \nalfajores. ");
   
}while (productos !== "chocolate" && productos !== "caramelos" && productos !== "chizitos" && productos !== "picodulce" && productos !== "alfajores");

productos = productos.toLowerCase();



let cantidad
do {
    cantidad = parseInt (prompt( "Ingrese la cantidad que desee"));
    if (isNaN(cantidad)){
        alert("Seleccione una cantidad correcta")
    }
} while (isNaN(cantidad))


let precio = valorproducto(productos);
let subtotal = calculasubtotal (precio,cantidad);
total += subtotal

alert(`Se agregaron ${cantidad} ${productos}(s) al carrito. Subtotal: $${subtotal.toFixed(2)}.`);





console.log (calculasubtotal);
