<?php
include 'conexiones.php';
function borrarusuario(){
    $respuesta=false;
    $usuario=GetSQLValuesString($_POST["usuario"],"text");
    $con=$conecta();
    $consulta=sprintf("delete from usuario =",$usuario);
    mysqli_query($con,$consulta);
    if(mysqli_affected_rows($con)>0){
        $respuesta=true;
    }
    $salidaJSON=array('respuesta'=> $respuesta);
    print json_encode($salidaJSON);
    }
    $opc=$_POST["opc"];
    switch($opc){
        case 'borrarusuario';
        borrarusuario();
        break;
        default;
        break;
    }
    
?>