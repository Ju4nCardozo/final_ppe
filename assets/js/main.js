var secciones = [];
var rutas = ["","index", "about", "contact"];
var bajo_logeo = ["seccion_2"];
var usuario_logeado = true;

window.onload = init;

function init(){
    asignarVariables();
    asignarEventos();
}

function asignarVariables(){
    secciones["seccion_1"] = document.getElementById("seccion_1");
    secciones["seccion_2"] = document.getElementById("seccion_2");
    secciones["seccion_3"] = document.getElementById("seccion_3");
}

function asignarEventos(){
    var temp;
    for(var i in secciones)
    {
        temp = secciones[i];
        temp.addEventListener("click", navegacion);
    }
}

function navegacion(event){
    var id = event.target.id;
    var indice = id.split("_")[1];
    var ruta = rutas[indice]+".html";
    if(!controlAcceso(id) && usuario_logeado)
    {
        location.href = ruta;
    }else{
        alert("Error, esta seccion requiere de logeo");
    }
}

function controlAcceso(indice){
    for(i in bajo_logeo)
    {
        if(bajo_logeo[i] == indice)
        {
            return true;
        }
    }
    return false;
}