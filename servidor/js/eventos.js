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

	var teclaNombreUusuario=function(tecla){
		if(tecla.which==13){//enter
			buscarUsuario();

		}
	}


	})
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






//agrege hoy no esta bien
	var Guardar=function(){
		var usuario=$("#txtNombreUsuario").val();
		var nombre=$("#txtNombre").val();
		var clave=$("#txtClaveUsuario").val();
		var parametros= "opc=guardarUsuario"+
						"&usuario"+usuario+
						"&clave"+clave+
						"&nombre"+nombre+
						"&aleatorio"+Math.random();

		if (usuario!="" && nombre!="" && clave!=""{
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

var Borrar=function({
	var usuario=$("#txtNombreUsuario").val();
	var nombre=$("#txtNombre").val();
	var pregunta=prompt("Seguro de borrar a "+nombre+"?(si/no)","no");
	var parametros="opc=borrarusuario"+
					""

	if (pregunta!=null && pregunta=="si") {
		$.ajax({
		cache:false,
			type:"POST",
			dataType:"json",
			url:"php/listado.php",
			data:parametros,
			success:function(response){
				if(response.respuesta==true){
					alert("Usuario borrado correctamente");
					$("#frmUsuarios>input").val("");
				}else{
					alert("Ocurrio un error, intente de nuevo");
				}
			},
			//error de coneccion del servidor-no existia el servidor
			error:function(xhr,ajaxOptions,thrownError){

			}
		});
		
	}
	}
})

//listo el listado

var Listado=function(){
	$("main>section").hide("slow");
	$("#frmListado").show("slow");
	var parametros="opc=listado"+
					"&aleatorio="=Math.random();
	$.ajax({
		cache:false,
			type:"POST",
			dataType:"json",
			url:"php/listado.php",
			data:parametros,
			success:function(response){
				if(response.respuesta==true){
					$('#tblListado').append(response.tabla);
				}else{
					alert("Ocurrio un error, intente de nuevo");
				}
			},
			//error de coneccion del servidor-no existia el servidor
			error:function(xhr,ajaxOptions,thrownError){

			}
		});
		
	}







	//hace referencia al boton para encender el evento clic//
$("#btnAceptar").on("click",Aceptar); //cuando de clic se realiza la funcion Aceptar//
$("#txtNombreUsuario").on("keypress",teclaNombreUusuario);
$("#btnGuardar").on("click",Guardar);
$("#btnBorrar").on("click",Borrar);
$("#btnListado").on("click",Listado);
}
//cuando este listo inicia//
$(document).ready(inicioApp);