//funcion anonima//
var inicioApp=function(){
	var Aceptar=function(){
		var usuario=$("#txtUsuario").val();
		var clave=$("#txtClave").val();
		var parametros="opc=validaentrada"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&aleatorio="+Math.random();
		$.ajax({
			//desactivar el cache,
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/validaentrada.php",
			data:parametros,
			success:function(response){
				//clave o usuario incorrecta
					if (response.respuesta==true) {
						alert("Bienvenido");
					}else{
						alert("Usuario o clave incorresta(s)");
					}
			},
			//error de coneccion del servidor-no existia el servidor
			error:function(xhr,ajaxOptions,throwError){

			}
		});
	} 
	//hace referencia al boton para encender el evento clic//
$("#btnAceptar").on("click",Aceptar); //cuando de clic se realiza la funcion Aceptar//
}
//cuando este listo inicia//
$(document).ready(inicioApp);