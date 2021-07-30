var detalle = class {
    constructor (yo, param) {
        console.log('detalle.js -> constructor');
        yo.Forms.masterDetalle.set(param);
    }

    listarDetalle (s, d, e) {
        debugger
    }

    guardarDetalle (s, d, e) {
        debugger
        validaErroresCBK(d.root||d);
        if (s) {
            e.form.modul.Forms.listaDetalle.executeForm();
        }
    }
}