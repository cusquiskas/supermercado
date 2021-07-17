var compra = class {
    constructor (a, b, c) {
        console.log('compras.js -> constructor');
        Moduls.getTienda().load({ url: 'content/tienda.html', script: true})
    }
}