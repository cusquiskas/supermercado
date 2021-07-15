var compra = class {
    constructor (a, b, c) {
        console.log('compras.js -> constructor');
        Moduls.getCompra().load({ url: 'content/tienda.html', script: true})
    }
}