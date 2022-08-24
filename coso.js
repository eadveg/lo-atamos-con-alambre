let producto = prompt("Indique el producto que va a comprar");
console.log("Producto: " + producto)
let precio_producto = parseInt(prompt("Indique el precio del producto"));
console.log("Precio: " + precio_producto)
let cantidad = parseInt(prompt("Indique la cantidad"));
console.log("Cantidad: " + cantidad)
let cuota_producto = parseInt(prompt("Indique las cuotas en las que desea pagar, 3/6/9/12"));
console.log("Pagando en " + cuota_producto + " cuotas")

function precio_total(precio_producto, cantidad){
    let precio = precio_producto * cantidad;
    return precio
}

function precio_en_cuotas(){
    if(cuota_producto == 3){
        let porcentaje_en_3_cuotas = ((precio_total(precio_producto, cantidad) * 5) / 100)
        let precio_final = precio_total(precio_producto, cantidad) + porcentaje_en_3_cuotas;
        return ("El precio final es de $" + precio_final)
    }
    else if(cuota_producto == 6){
        let porcentaje_en_6_cuotas = ((precio_total(precio_producto, cantidad) * 5) / 100)
        let precio_final = precio_total(precio_producto, cantidad) + porcentaje_en_6_cuotas;
        return ("El precio final es de $" + precio_final)
    }
    else if(cuota_producto == 9){
        let porcentaje_en_9_cuotas = ((precio_total(precio_producto, cantidad) * 10) / 100)
        let precio_final = precio_total(precio_producto, cantidad) + porcentaje_en_9_cuotas;
        return ("El precio final es de $" + precio_final)
    }
    else if(cuota_producto == 12){
        let porcentaje_en_12_cuotas = ((precio_total(precio_producto, cantidad) * 15) / 100)
        let precio_final = precio_total(precio_producto, cantidad) + porcentaje_en_12_cuotas;
        return ("El precio final es de $" + precio_final)
    }
    else {
        console.log("Ingresaste " + cuota_producto + ", recorda que las opciones validas son 3/6/9/12");
        alert("Ingresaste " + cuota_producto + ", recorda que las opciones validas son 3/6/9/12");
        }
}

console.log(precio_en_cuotas())