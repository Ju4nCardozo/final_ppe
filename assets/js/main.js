var secciones = [];
var rutas = ["","index", "about", "contact","registro"];
var usuario_logeado = true;
var resultado;

window.onload = init;

function init(){
    asignarVariables();
    asignarEventos();

    if(resultado)
    {
        traerDatos();
    }
}

function traerDatos(){
  fetch('https://api.randomuser.me/?results=8')
  .then(response => response.json())
  .then(data => pintarDatos(data));
}

function pintarDatos(data){
  //console.dir(data);
  //console.log(datos.name.first +" " + datos.name.last);
  //console.log(datos.picture.medium);
  var datos = data.results; 
  var temp;
  var ans = "";
    
	//console.log(data.results[0].name.first);

	for(var i in datos)
	{
		temp = datos[i];
		ans+= "<div class='usuario'><img class='img-circle' src='"+temp.picture.medium+"' />";
		ans+= "<p>";
		ans+= temp.name.first+" "+temp.name.last;
		ans+= "</p></div>";
	}

	resultado.innerHTML = ans;
}

function asignarVariables(){
    resultado = document.getElementById("resultado");
    secciones["seccion_1"] = document.getElementById("seccion_1");
    secciones["seccion_2"] = document.getElementById("seccion_2");
    secciones["seccion_3"] = document.getElementById("seccion_3");
    secciones["seccion_4"] = document.getElementById("seccion_4");
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
    //if(!controlAcceso(id) && usuario_logeado)//Esto no se utiliza en esta implementación pero se deja comentado por si se necesita reestructurar de alguna manera
    //{
        location.href = ruta;
    //}else{
       // alert("Error, esta seccion requiere de logeo"); //Esto no se utiliza en esta implementación pero se deja comentado por si se necesita reestructurar de alguna manera
    //}
}

//Esto no se utiliza en esta implementación pero se deja comentado por si se necesita reestructurar de alguna manera
/*function controlAcceso(indice){
    for(i in bajo_logeo)
    {
        if(bajo_logeo[i] == indice)
        {
            return true;
        }
    }
    return false;
}*/