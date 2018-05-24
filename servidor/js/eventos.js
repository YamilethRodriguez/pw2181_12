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
						//ocultamps el inicio
						$("#secInicio").hide("slow");
						//aparecemos usuarios
						$("#frmUsuarios").show("slow");
						//cursor en el primer cuadro de texto
						$("#txtNombreUsuario").focus();

						alert("Bienvenido");
					}else{
						alert("Usuario o clave incorresta(s)");
					}
			},
			//error de coneccion del servidor-no existia el servidor
			error:function(xhr,ajaxOptions,thrownError){

			}
		});
	} 
	var buscarUsuario=function(){
		var usuario=$("#txtNombreUsuario").val();
		var parametro="opc=buscarUsuario"+
						"&usuario="+usuario+
						"&aleatorio="+Math.random();

		if(usuario!=""){
			$.ajax({
			//desactivar el cache,
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/buscarusuario.php",
			data:parametros,
			success:function(response){
				if(response.respuesta==true){
					$("#txtNombre").val(response.nombre);
					$("#txtClaveUsuario").val(response.clave);
				}else{
					$$("#txtNombre").focus();
				}
			},
			//error de coneccion del servidor-no existia el servidor
			error:function(xhr,ajaxOptions,thrownError){

			}
		});
		}
	}

	var teclaNombreUusuario=function(tecla){
		if(tecla.which==13){//enter
			buscarUsuario();

		}
	}
	//hace referencia al boton para encender el evento clic//
$("#btnAceptar").on("click",Aceptar); //cuando de clic se realiza la funcion Aceptar//
$("#txtNombreUsuario").on("keypress",teclaNombreUusuario);
}
//cuando este listo inicia//
$(document).ready(inicioApp);