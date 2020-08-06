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

function mostrar() {
	respuesta = "si";
	let nombreArt;
	let categoriaArt;
	let precioArt;
	let mayorPrecio = 0;
	let nombreLacteo;
	let precioLacteo;
	let cantidadBebidas = 0;
	let nombreMayor;
	let precioMayorLacteo = 0;

	respuesta = prompt("Quiere ingresar un producto ?");
	while (respuesta == "si") {
		nombreArt = prompt("Nombre del articulo");
		do {
			categoriaArt = prompt("Catergoria del articulo");
		} while (!(categoriaArt == "lacteo" || categoriaArt == "bebidas" || categoriaArt == "almacen" || categoriaArt == "limpieza"));
		do {
			precioArt = parseInt(prompt("Precio del articulo"));
		} while (!(precioArt <= 1000 && precioArt >= 0));
		if (mayorPrecio < precioArt) {
			nombreMayor = nombreArt;
			mayorPrecio = precioArt;
		}
		if (categoriaArt == "lacteo") {
			if (precioMayorLacteo < precioArt) {
				nombreLacteo = nombreArt;
				precioMayorLacteo = precioArt;
			}
		}
		if (categoriaArt == "bebidas") {
			cantidadBebidas++;
		}
		respuesta = prompt("Quiere ingresar otro articulo?");
	}
	document.writeln(`El mayor precio es de $${mayorPrecio} y corresponde un(a) ${nombreMayor}` + "<br>");
	document.writeln(`La cantidad de bebidas es de ${cantidadBebidas}` + "<br>");
	document.writeln(`El prodcuto lacteo ${nombreLacteo} vale $${precioMayorLacteo}` + "<br>");
}


