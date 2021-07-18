var tienda = class {
    constructor (a, b, c) {
        console.log('tienda.js -> constructor');
        this.tiendaRow = "<tr><td>{{tie_id}}</td><td>{{tie_name}}</td></tr>";
    }

    guardarTienda (s, d, e) {
        validaErroresCBK(d.root||d);
        if (s) {
            e.form.modul.Forms.listaTienda.executeForm();
        }
    }

    listarTienda (s, d, e) {
        if (s) {
            $(".trTiendas").empty();
            let me = e.form.modul.script;
            for (let x=0; x<d.root.length; x++) {
                $(".trTiendas").append($.parseHTML(me.tiendaRow.reemplazaMostachos(d.root[x])));
            }
        }
    }
}