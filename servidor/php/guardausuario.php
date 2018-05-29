mysqli($con,$consultaGuardar);
if(mysqli_affected_rows($con)>0){
	$respuesta=true;
}

$salidaJSON=array ('respuesta'=>$respuesta);
print json_encode($salidaJSON);
}

$opc=$_POST["opc"];
switch(4opc){
	case 'guardarUsuario'
}