window.addEventListener("load", iniciarApp);


let Moduls = [];
function iniciarApp() {
    console.log('scripts.js -> iniciarApp()');
    Template = document.getElementsByTagName('template');
    if ( Template){
        for (let i = 0; i < Template.length; i++) {
            Moduls[Template[i].id] = new ModulController(Template[i], null);
            Moduls['get'+Template[i].id.substr(0,1).toUpperCase()+Template[i].id.substr(1).toLowerCase()] = function () { return Moduls[Template[i].id]; };
        }
    }

    Moduls.constants = {};
    Moduls.constants.initDate = new Date;
    Moduls.getFooter().load ({ url: 'content/footer.html', script: false});
    Moduls.getHeader().load ({ url: 'content/header.html', script: false});
    Moduls.getBody().load   ({ url: 'content/compra.html', script: true});
    Moduls.getAlertbox().load({ url: 'content/alerta.html', script: false});
}

function validaErroresCBK (obj) {
    let msg = "<div class='alert alert-{{tipo}}'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>{{Campo}}</strong> {{Detalle}}.</div>";
    for (let i=0; i<obj.length; i++) {
        if (obj[i].type) {
            obj[i].Detalle = (obj[i].type=='required'?'No puede estar vacío':'Error desconocido');
            obj[i].Campo = obj[i].label||obj[i].name; 
            obj[i].tipo = (obj[i].type=='required'?'Validacion':'Error');
        }
        obj[i].tipo = (obj[i].tipo=='Confirmacion'?'success':(obj[i].tipo=='Validacion'?'warning':'danger'));
        if (!obj[i].Detalle) obj[i].Detalle = JSON.stringify(obj[i]);
        if (!obj[i].Campo) obj[i].Campo = "";
        $(".alertBoxMessage").append(msg.reemplazaMostachos(obj[i]));
    }
}

