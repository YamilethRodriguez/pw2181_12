
<?php
//coneccion ala base de datos//
function conecta(){
	//servidor,usuario,contrasena,base de datos
	$con=mysql_connect("127.0.0.1","root","","pw218112");
	return $con;
}

?>