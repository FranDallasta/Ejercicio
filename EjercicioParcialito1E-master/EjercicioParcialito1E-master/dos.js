/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{
	respuesta = "si";
	let nombreArt;
	let categoriaArt;
	let preicoArt;

	respuesta = prompt("Quiere ingresar un producto ?");
	while (respuesta == "si") {
		nombreArt = prompt ("Nombre del articulo");
	 	categoriaArt = prompt("Catergoria del articulo");
		preicoArt = prompt ("Precio del articulo");
		respuesta = prompt("Quiere ingresar otro numero ?");
	}

}