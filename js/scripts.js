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
}

function validaMensajesCBK (s, m) {

}
