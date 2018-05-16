<?php //abrir
	$p1=$_GET["parametro1"];

	for ($i=0; $i < 10; $i++) { //$:declara la variable
		//echo "string"; //imprimir pantalla y consola -se utiliza para depurar
		print("Hola PHP ".$i."<br>");	//imprimir en la pantalla
	}

?> 

<html>
<head>
	<title></title>
</head>
<body>
	<?php print($p1); ?>
</body>
</html>