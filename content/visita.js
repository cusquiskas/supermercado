var visita = class {
    constructor (a, b, c) {
        console.log('visita.js -> constructor');
        this.compraRow = "<tr class='trListaCompra'><td>{{com_id}}</td><td>{{tie_name}}</td><td>{{com_dateX}}</td></tr>";
        $('.resetFormCompra').click(function () {
            Moduls.getCompra().Forms['masterCompra'].set({com_id:'', com_date:'', com_tie:''});
        });
    }

    guardarCompra (s, d, e) {
        validaErroresCBK(d.root||d);
        if (s) {
            e.form.modul.Forms.listaCompra.executeForm();
        }
    }

    listarCompra (s, d, e) {
        if (s) {
            $(".trCompras").empty();
            let me = e.form.modul;
            for (let x=0; x<d.root.length; x++) {
                let HTML = $.parseHTML(me.script.compraRow.reemplazaMostachos(d.root[x]));
                HTML[0].addEventListener('click', function () { me.Forms.masterCompra.set(d.root[x]); });
                $(".trCompras").append(HTML);
            }
        }
    }
}