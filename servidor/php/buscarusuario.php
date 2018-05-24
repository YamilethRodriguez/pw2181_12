<?php
include 'conexiones.php';
function buscarusuario(){
	$respuesta=false;
	//variable php, arreglo post--usuario:texto extraido de la caja de texto de la pagina web
	$usuario=$_POST["usuario"];
	
	//conectarnos al servido de base de datos//alta-baja-cambia-consulta
	$con=conecta();
	$consulta="select usuario,nombre,clave from usuarios where usuario='".$usuario."'limit 1 ";
	//ejecutamos la consulta
	$resConsulta=mysqli_query($con,$consulta);
	$nombre="";
	$clave="";
	//SI ES MAYOR DEBOLVIO UN REGISTRO Y SE ENCONTRO EN LA BD
	if(mysqli_num_rows($resConsulta)>0){
		$respuesta=true;
		while($regConsulta=mysqli_fetch_array($resConsulta) ){
			$nombre=$regConsulta["nombre"];
			$clave=$regConsulta["clave"];
		}
	}
	//array asociativo
	$salidaJSON = array('respuesta' => $respuesta ,
						'nombre' =>$nombre,
						'clave'=>$clave);
	
	print json_encode($salidaJSON);
}

//arreglo que tiene acceso a los parametros//
	$opc=$_POST["opc"];

	switch ($opc) {
		case 'buscarUsuario':
			buscarusuario();
			break;
		
		default:
			# code...
			break;
	}
?>