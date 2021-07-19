var articulo = class {
    constructor (a, b, c) {
        console.log('articulo.js -> constructor');
        this.articuloRow = "<tr class='trListaArticulo'><td>{{art_id}}</td><td>{{art_name}}</td></tr>";
    }

    guardarArticulo (s, d, e) {
        validaErroresCBK(d.root||d);
        if (s) {
            e.form.modul.Forms.listaArticulo.executeForm();
        }
    }

    listarArticulo (s, d, e) {
        if (s) {
            $(".trArticulos").empty();
            let me = e.form.modul;
            for (let x=0; x<d.root.length; x++) {
                let HTML = $.parseHTML(me.script.articuloRow.reemplazaMostachos(d.root[x]));
                HTML[0].addEventListener('click', function () { me.Forms.masterArticulo.set(d.root[x]); });
                $(".trArticulos").append(HTML);
            }
        }
    }
}