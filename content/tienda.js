var tienda = class {
    constructor (a, b, c) {
        console.log('tienda.js -> constructor');
        this.tiendaRow = "<tr class='trListaTienda'><td>{{tie_id}}</td><td>{{tie_name}}</td></tr>";
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
            let me = e.form.modul;
            for (let x=0; x<d.root.length; x++) {
                let HTML = $.parseHTML(me.script.tiendaRow.reemplazaMostachos(d.root[x]));
                HTML[0].addEventListener('click', function () { me.Forms.masterTienda.set(d.root[x]); });
                $(".trTiendas").append(HTML);
            }
        }
    }
}