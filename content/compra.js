var compra = class {
    constructor (a, b, c) {
        console.log('compras.js -> constructor');
        Moduls.getTienda().load({ url: 'content/tienda.html', script: true});
        Moduls.getArticulo().load({ url: 'content/articulo.html', script: true});
        Moduls.getCompra().load({ url: 'content/visita.html', script: true});
    }
}