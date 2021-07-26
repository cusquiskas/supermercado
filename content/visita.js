var visita = class {
    constructor (val) {
        console.log('visita.js -> constructor');
        this.compraRow = "<tr class='trListaCompra'><td>{{com_id}}</td><td>{{tie_name}}</td><td>{{com_dateX}}</td><td><button type='button' class='btn btn-primary mb-2'>Detalle</button></td></tr>";
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
                HTML[0].addEventListener('click', function () { 
                    if (event.target.tagName == "BUTTON") 
                        { me.script.abreModal(d.root[x]); } 
                    else 
                        { me.Forms.masterCompra.set(d.root[x]); }
                });
                $(".trCompras").append(HTML);
            }
        }
    }

    abreModal (obj) {
        Moduls.getModalbody().load({ url: 'content/detalle.html', script: true, parametros:obj });
        construirModal({ title: 'Título', w: 900, h:500 });
    }
}