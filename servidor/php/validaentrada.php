<?php
include 'conexiones.php';
function valida(){
	$respuesta=false;
	//variable php, arreglo post--usuario:texto extraido de la caja de texto de la pagina web
	$usuario=$_POST["usuario"];
	$clave=md5($_POST["clave"]);
	//conectarnos al servido de base de datos//alta-baja-cambia-consulta
	$con=conecta();
	$consulta="select * from usuarios where usuario='".$usuario." ' and clave='".$clave."'limit 1 ";
	//ejecutamos la consulta
	$resConsulta=mysqli_query($con,$consulta);
	//SI ES MAYOR DEBOLVIO UN REGISTRO Y SE ENCONTRO EN LA BD
	if(mysqli_num_rows($resConsulta)>0){
		$respuesta=true;
	}
	//array asociativo
	$salidaJSON = array('respuesta' => $respuesta );
	print json_encode($salidaJSON);
}

//arreglo que tiene acceso a los parametros//
	$opc=$_POST["opc"];

	switch ($opc) {
		case 'validaentrada':
			valida();
			break;
		
		default:
			# code...
			break;
	}
?>