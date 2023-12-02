
function cerrar() {
document.getElementById("flotante")
.style.display='none';
}

function cerrarNoticiaAdicional() {
	document.getElementById("noticiaInicio")
	.style.display='none';
}

/*cuadro feo*/
function show(id) {
	document.getElementById(id).style.display = 'block';
}
function showi(id) {
	document.getElementById(id).style.display = 'inline-block';
}

function show1(id) {
	document.getElementById('res1').style.display = 'none';
	document.getElementById('res2').style.display = 'none';
	document.getElementById('res3').style.display = 'none';
	document.getElementById('res4').style.display = 'none';
	document.getElementById('res5').style.display = 'none';
	document.getElementById('res6').style.display = 'none';
	document.getElementById('res7').style.display = 'none';
	document.getElementById('res8').style.display = 'none';
	document.getElementById('res9').style.display = 'none';
	document.getElementById('res10').style.display = 'none';

	document.getElementById(id).style.display = 'block';
}

function show2() {
	document.getElementById('res1').style.display = 'none';
	document.getElementById('res2').style.display = 'none';
	document.getElementById('res3').style.display = 'none';
	document.getElementById('res4').style.display = 'none';
	document.getElementById('res5').style.display = 'none';
	document.getElementById('res6').style.display = 'none';
	document.getElementById('res7').style.display = 'none';
	document.getElementById('res8').style.display = 'none';
	document.getElementById('res9').style.display = 'none';
	document.getElementById('res10').style.display = 'none';
}

// Hide
function hide(id) {
	document.getElementById(id).style.display = 'none';
	// alert(id);
}

function mostrar1() {
	document.getElementById('registro_paso_1').style.display = 'block';
	document.getElementById('registro_paso_2').style.display = 'none';
	document.getElementById('registro_paso_3').style.display = 'none';
	document.getElementById('registro_paso_4').style.display = 'none';
	flecha_presente('flecha1', 'punta11');
	flecha_futuro('flecha2', 'punta12');
	flecha_futuro('flecha3', 'punta13');
	flecha_futuro('flecha4', 'punta14');
	fondo_futuro('punta1');
	fondo_futuro('punta2');
	fondo_futuro('punta3');
	fondo_neutro('punta4');
}

function mostrar2() {
	document.getElementById('registro_paso_2').style.display = 'block';
	document.getElementById('registro_paso_1').style.display = 'none';
	document.getElementById('registro_paso_3').style.display = 'none';
	document.getElementById('registro_paso_4').style.display = 'none';
	flecha_pasado('flecha1', 'punta11');
	flecha_presente('flecha2', 'punta12');
	flecha_futuro('flecha3', 'punta13');
	flecha_futuro('flecha4', 'punta14');
	fondo_presente('punta1');
	fondo_futuro('punta2');
	fondo_futuro('punta3');
	fondo_neutro('punta4');
}

function mostrar3() {
	document.getElementById('registro_paso_3').style.display = 'block';
	document.getElementById('registro_paso_2').style.display = 'none';
	document.getElementById('registro_paso_1').style.display = 'none';
	document.getElementById('registro_paso_4').style.display = 'none';
	flecha_pasado('flecha1', 'punta11');
	flecha_pasado('flecha2', 'punta12');
	flecha_presente('flecha3', 'punta13');
	flecha_futuro('flecha4', 'punta14');
	fondo_pasado('punta1');
	fondo_presente('punta2');
	fondo_futuro('punta3');
	fondo_neutro('punta4');
}

function mostrar4() {
	document.getElementById('registro_paso_4').style.display = 'block';
	document.getElementById('registro_paso_2').style.display = 'none';
	document.getElementById('registro_paso_3').style.display = 'none';
	document.getElementById('registro_paso_1').style.display = 'none';
	flecha_pasado('flecha1', 'punta11');
	flecha_pasado('flecha2', 'punta12');
	flecha_pasado('flecha3', 'punta13');
	flecha_presente('flecha4', 'punta14');
	fondo_pasado('punta1');
	fondo_pasado('punta2');
	fondo_presente('punta3');
	fondo_neutro('punta4');
}

function flecha_pasado(id, div_punta) {
	document.getElementById(id).setAttribute("class", "flecha_pasado");
	document.getElementById(div_punta).setAttribute("class", "punta_pasado");
}
function flecha_presente(id, div_punta) {
	document.getElementById(id).setAttribute("class", "flecha_presente");
	document.getElementById(div_punta).setAttribute("class", "punta_presente");
}
function flecha_futuro(id, div_punta) {
	document.getElementById(id).setAttribute("class", "flecha_futuro");
	document.getElementById(div_punta).setAttribute("class", "punta_futuro");
}

function fondo_neutro(id) {
	document.getElementById(id).setAttribute("class", "punta_flecha");
}
function fondo_pasado(id) {
	document.getElementById(id).setAttribute("class", "punta_flecha_pasado");
}
function fondo_presente(id) {
	document.getElementById(id).setAttribute("class", "punta_flecha_presente");
}
function fondo_futuro(id) {
	document.getElementById(id).setAttribute("class", "punta_flecha_futuro");
}

function expandir(id) {
	var x = document.getElementById(id);
	// alert(x.getAttribute("class"));
	if (x.style.display == null || x.style.display == 'none') {
		document.getElementById(id).style.display = 'block';
	} else {
		document.getElementById(id).style.display = 'none';
	}
}

function filtro_main(id, label, txt) {

	document.getElementById('label199').style.fontWeight = 'normal';
	document.getElementById('label200').style.fontWeight = 'normal';
	document.getElementById('label201').style.fontWeight = 'normal';
	document.getElementById('label202').style.fontWeight = 'normal';
	document.getElementById('label203').style.fontWeight = 'normal';

	document.getElementById('opcion199').checked = false;
	document.getElementById('opcion200').checked = false;
	document.getElementById('opcion201').checked = false;
	document.getElementById('opcion202').checked = false;
	document.getElementById('opcion203').checked = false;

	document.getElementById(label).style.fontWeight = 'bold';
	document.getElementById(id).checked = true;
	var texto = new String();
	texto = txt;

	if (id == 'opcion202') {
		document.getElementById('divBusquedaCiudades').style.width = '100%';
		document.getElementById('ciudad').style.display = 'none';
		document.getElementById('empresaBusqueda').style.display = 'none';
		if (document.getElementById('divNivelFormacionBusquedaCT') != null) {
			document.getElementById('divNivelFormacionBusquedaCT').style.display = 'none';
		}
		if (document.getElementById('divFamiliasVirtualBusquedaV') != null) {
			document.getElementById('divFamiliasVirtualBusquedaV').style.display = 'inline-block';
		}
	} else if (id == 'opcion203') {
		document.getElementById('divBusquedaCiudades').style.width = '100%';
		document.getElementById('ciudad').style.display = 'block';
		document.getElementById('ciudad').className='col-md-6';
		document.getElementById('empresaBusqueda').style.display = 'inline-block';
		if (document.getElementById('divNivelFormacionBusquedaCT') != null) {
			document.getElementById('divNivelFormacionBusquedaCT').style.display = 'none';
		}
		if (document.getElementById('divFamiliasVirtualBusquedaV') != null) {
			document.getElementById('divFamiliasVirtualBusquedaV').style.display = 'none';
		}
	} else if (id == 'opcion200') {
		document.getElementById('ciudad').className='col-md-6';
		document.getElementById('empresaBusqueda').style.display = 'none';
		if (document.getElementById('divNivelFormacionBusquedaCT') != null) {
			document.getElementById('divNivelFormacionBusquedaCT').style.display = 'inline-block';
			document.getElementById('divBusquedaCiudades').style.width = '100%';
		} else {
			document.getElementById('divBusquedaCiudades').style.width = '100%';
		}
		if (document.getElementById('divFamiliasVirtualBusquedaV') != null) {
			document.getElementById('divFamiliasVirtualBusquedaV').style.display = 'none';
		}
	} else {
		document.getElementById('divBusquedaCiudades').style.width = '100%';
		document.getElementById('ciudad').style.display = 'block';
		document.getElementById('ciudad').className='col-md-12';
		document.getElementById('empresaBusqueda').style.display = 'none';
		if (document.getElementById('divNivelFormacionBusquedaCT') != null) {
			document.getElementById('divNivelFormacionBusquedaCT').style.display = 'none';
		}
		if (document.getElementById('divFamiliasVirtualBusquedaV') != null) {
			document.getElementById('divFamiliasVirtualBusquedaV').style.display = 'none';
		}
		


	}

	var color = document.getElementById(label).style.backgroundColor;

	document.getElementById('label_tipo').innerText = texto;
	document.getElementById('label_tipo').textContent = texto;
	document.getElementById('li_tipo').style.backgroundColor = color;
}

function filtro_main1(id, label) {

	document.getElementById('label204').style.fontWeight = 'normal';
	document.getElementById('label205').style.fontWeight = 'normal';

	document.getElementById('opcion204').checked = false;
	document.getElementById('opcion205').checked = false;

	document.getElementById(label).style.fontWeight = 'bold';
	document.getElementById(id).checked = true;
}

function add_filter_nivel(txt, check, l) {
	document.getElementById('opcion299').checked = false;
	document.getElementById('l299').style.fontWeight = 'normal';
	var cur = document.getElementById('filtros_nivel_a').innerHTML;
	if (cur == '') {
		cur = document.getElementById('filtros_nivel_a').innerHTML;
	}
	if (cur == undefined || cur == 'Sin filtros' || cur == 'undefined') {
		cur = "";
	}
	// Si añade
	if (check == true) {
		add_miga(txt, true, 'n');
		var texto = new String();
		texto = cur + "<br /><span>" + txt + "</span>";
		document.getElementById('filtros_nivel_a').innerHTML = texto;
		document.getElementById(l).style.fontWeight = 'bold';
	} else {
		add_miga(txt, false, 'n');
		var nuevo = new String(cur
				.replace('<br /><span>' + txt + '</span>', ''));
		nuevo = new String(cur.replace('<br><span>' + txt + '</span>', ''));
		document.getElementById('filtros_nivel_a').innerHTML = nuevo;
		document.getElementById(l).style.fontWeight = 'normal';
	}

}

function add_filter_nivel2(txt, check, l) {

	var a_elements = document.getElementsByTagName("input");

	for (var i = 0, len = a_elements.length; i < len; i++) {
		var t = a_elements[i].getAttribute("type");
		// alert(t);
		if (t == 'checkbox') {
			var z = a_elements[i].getAttribute("id");
			document.getElementById(z).checked = false;
		}
	}

	var a_elements = document.getElementsByTagName("span");
	for (var i = 0, len = a_elements.length; i < len; i++) {
		var t = a_elements[i].getAttribute("class");
		// alert(t);
		if (t == 'texto_input') {
			var z = a_elements[i].getAttribute("id");
			document.getElementById(z).style.fontWeight = 'normal';
		}
	}

	if (check == true) {
		document.getElementById(l).style.fontWeight = 'bold';
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(l).style.fontWeight = 'normal';
		document.getElementById(txt).checked = false;
	}

}

function add_filter_nivel2a1(txt, check, l) {

	var names = [ "21", "22", "23", "24", "25" ];
	var ido = "";
	for ( var i in names) {
		ido = "opcion" + names[i];
		document.getElementById(ido).checked = false;
	}

	if (check == true) {
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(txt).checked = false;
	}

	cuantas(6);

}

function add_filter_nivel2a2(txt, check, l) {

	var names = [ "31", "32", "33", "34", "35" ];
	var ido = "";
	for ( var i in names) {
		ido = "opcion" + names[i];
		document.getElementById(ido).checked = false;
	}

	if (check == true) {
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(txt).checked = false;
	}

	cuantas(7);

}

function add_filter_nivel2a3(txt, check, l) {

	var names = [ "41", "42", "43", "44", "45" ];
	var ido = "";
	for ( var i in names) {
		ido = "opcion" + names[i];
		document.getElementById(ido).checked = false;
	}

	if (check == true) {
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(txt).checked = false;
	}

	cuantas(8);

}

function add_filter_nivel2a4(txt, check, l) {

	var names = [ "51", "52", "53", "54", "55" ];
	var ido = "";
	for ( var i in names) {
		ido = "opcion" + names[i];
		document.getElementById(ido).checked = false;
	}

	if (check == true) {
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(txt).checked = false;
	}

	cuantas(9);
}

function add_filter_nivel2a5(txt, check, l) {

	var names = [ "61", "62", "63", "64", "65" ];
	var ido = "";
	for ( var i in names) {
		ido = "opcion" + names[i];
		document.getElementById(ido).checked = false;
	}

	if (check == true) {
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(txt).checked = false;
	}

	cuantas(10);
}

function add_filter_nivel3(txt, check, l) {

	if (check == true) {
		document.getElementById(l).style.fontWeight = 'bold';
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(l).style.fontWeight = 'normal';
		document.getElementById(txt).checked = false;
	}

}

function add_filter_nivel31(txt, check, l) {

	if (l == 'l20' || l == 'l21' || l == 'l222' || l == 'l23' || l == 'l24') {
		document.getElementById('l25').style.fontWeight = 'normal';
		document.getElementById('poblacion_25').checked = false;
	}

	if (l == 'l30' || l == 'l31' || l == 'l32' || l == 'l33' || l == 'l34') {
		document.getElementById('l19').style.fontWeight = 'normal';
		document.getElementById('poblacion_19').checked = false;
	}

	if (l == 'l18' || l == 'l4' || l == 'l8' || l == 'l200' || l == 'l1'
			|| l == 'l22' || l == 'l2' || l == 'l3' || l == 'l5' || l == 'l6'
			|| l == 'l14') {
		document.getElementById('l1000').style.fontWeight = 'normal';
		document.getElementById('poblacion_1000').checked = false;
	}

	if (l == 'l15' || l == 'l11' || l == 'l211' || l == 'l10' || l == 'l17'
			|| l == 'l9' || l == 'l7') {
		document.getElementById('l2000').style.fontWeight = 'normal';
		document.getElementById('poblacion_2000').checked = false;
	}

	if (l == 'l25') {
		document.getElementById('l20').style.fontWeight = 'normal';
		document.getElementById('poblacion_20').checked = false;
		document.getElementById('l21').style.fontWeight = 'normal';
		document.getElementById('poblacion_21').checked = false;
		document.getElementById('l222').style.fontWeight = 'normal';
		document.getElementById('poblacion_222').checked = false;
		document.getElementById('l23').style.fontWeight = 'normal';
		document.getElementById('poblacion_23').checked = false;
		document.getElementById('l24').style.fontWeight = 'normal';
		document.getElementById('poblacion_24').checked = false;
	}

	if (l == 'l19') {
		document.getElementById('l30').style.fontWeight = 'normal';
		document.getElementById('poblacion_30').checked = false;
		document.getElementById('l31').style.fontWeight = 'normal';
		document.getElementById('poblacion_31').checked = false;
		document.getElementById('l32').style.fontWeight = 'normal';
		document.getElementById('poblacion_32').checked = false;
		document.getElementById('l33').style.fontWeight = 'normal';
		document.getElementById('poblacion_33').checked = false;
		document.getElementById('l34').style.fontWeight = 'normal';
		document.getElementById('poblacion_34').checked = false;
	}

	if (l == 'l1000') {
		document.getElementById('l18').style.fontWeight = 'normal';
		document.getElementById('poblacion_18').checked = false;
		document.getElementById('l4').style.fontWeight = 'normal';
		document.getElementById('poblacion_4').checked = false;
		document.getElementById('l8').style.fontWeight = 'normal';
		document.getElementById('poblacion_8').checked = false;
		document.getElementById('l200').style.fontWeight = 'normal';
		document.getElementById('poblacion_200').checked = false;
		document.getElementById('l1').style.fontWeight = 'normal';
		document.getElementById('poblacion_1').checked = false;
		document.getElementById('l22').style.fontWeight = 'normal';
		document.getElementById('poblacion_22').checked = false;
		document.getElementById('l2').style.fontWeight = 'normal';
		document.getElementById('poblacion_2').checked = false;
		document.getElementById('l3').style.fontWeight = 'normal';
		document.getElementById('poblacion_3').checked = false;
		document.getElementById('l5').style.fontWeight = 'normal';
		document.getElementById('poblacion_5').checked = false;
		document.getElementById('l6').style.fontWeight = 'normal';
		document.getElementById('poblacion_6').checked = false;
		document.getElementById('l14').style.fontWeight = 'normal';
		document.getElementById('poblacion_14').checked = false;
	}

	if (l == 'l2000') {
		document.getElementById('l15').style.fontWeight = 'normal';
		document.getElementById('poblacion_15').checked = false;
		document.getElementById('l11').style.fontWeight = 'normal';
		document.getElementById('poblacion_11').checked = false;
		document.getElementById('l211').style.fontWeight = 'normal';
		document.getElementById('poblacion_211').checked = false;
		document.getElementById('l10').style.fontWeight = 'normal';
		document.getElementById('poblacion_10').checked = false;
		document.getElementById('l17').style.fontWeight = 'normal';
		document.getElementById('poblacion_17').checked = false;
		document.getElementById('l9').style.fontWeight = 'normal';
		document.getElementById('poblacion_9').checked = false;
		document.getElementById('l7').style.fontWeight = 'normal';
		document.getElementById('poblacion_7').checked = false;
	}

	if (check == true) {
		document.getElementById(l).style.fontWeight = 'bold';
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(l).style.fontWeight = 'normal';
		document.getElementById(txt).checked = false;
	}

}

function add_filter_nivel1(txt, check, l) {
	// Si añade
	if (check == true) {
		document.getElementById(l).style.fontWeight = 'bold';
	} else {
		document.getElementById(l).style.fontWeight = 'normal';
	}

}

function add_miga(txt, accion, tipo) {
	var cur = document.getElementById('migas_filtro').innerHTML;

	if (tipo == 'c') {
		var backi = document.getElementById('back_c').value;
		// alert(backi);
		var nuevoi = new String(cur.replace('<li class="s_tipo_' + tipo
				+ '" onclick="javascript:remover(\'' + tipo + '\',\'' + backi
				+ '\');">' + backi + '</li>', ''));
		cur = nuevoi;
		// alert(nuevot);
		if (txt == '') {
			accion = false;
			document.getElementById('migas_filtro').innerHTML = nuevoi;
		}
	}
	if (tipo == 'u' && accion == true) {
		if (InString(cur, txt)) {
			tipo = 'x';
			accion = 'false';
		}
	}
	if (tipo == 'a' && accion == true) {
		if (InString(cur, txt)) {
			tipo = 'x';
			accion = 'false';
		}
	}

	// alert(txt);
	if (accion == true) {
		var nuevo = new String();
		if (tipo == 'n' || tipo == 'a' || tipo == 'u' || tipo == 'c') {
			nuevo = cur + "<li class='s_tipo_" + tipo
					+ "' onclick=\"javascript:remover('" + tipo + "','" + txt
					+ "');\">" + txt + "</li>";
		}
		document.getElementById('migas_filtro').innerHTML = nuevo;
		if (tipo == 'c') {
			document.getElementById('back_c').value = txt;
		}
	} else {
		if (tipo == 'n' || tipo == 'a' || tipo == 'u') {
			// alert("<li class='s_tipo_"+tipo+"'>"+txt+"</li>");
			var nuevo = new String(cur.replace('<li class="s_tipo_' + tipo
					+ '" onclick="javascript:remover(\'' + tipo + '\',\'' + txt
					+ '\');">' + txt + '</li>', ''));
			document.getElementById('migas_filtro').innerHTML = nuevo;
		}
	}

}

function remover(tipo, txt) {

	if (tipo == 'a' || tipo == 'n') {

		var a_elements = document.getElementsByTagName("input");

		for (var i = 0, len = a_elements.length; i < len; i++) {
			var t = a_elements[i].getAttribute("type");
			// alert(t);
			if (t == 'checkbox') {
				var hh = a_elements[i].getAttribute("title");
				if (hh == txt) {
					var z = a_elements[i].getAttribute("id");
					document.getElementById(z).checked = false;
					var ele = new String(z.replace('opcion', ''));
					ele = 'l' + ele;
					document.getElementById(ele).style.fontWeight = 'normal';
					add_miga(txt, false, tipo);
				}
			}
		}

	}

	if (tipo == 'u') {
		document.getElementById('opcion204').checked = true;
		document.getElementById('opcion205').checked = false;
		add_miga('Solo programas con oferta', false, 'u');
	}

	if (tipo == 'c') {
		document.getElementById('mundep').value = '';
		add_miga('', false, 'c');
	}

	buscar_programas(document.buscador, '');
}

function InString(myString, word) {
	var regex = new RegExp('\\b' + word + '\\b');
	var result = regex.test(myString);
	return (result);
}

function add_filter_area(txt, check, l) {
	document.getElementById('opcion1').checked = false;
	document.getElementById('l1').style.fontWeight = 'normal';
	var cur = document.getElementById('filtros_areas_a').innerHTML;
	if (cur == '') {
		cur = document.getElementById('filtros_areas_a').textContent;
	}
	if (cur == undefined || cur == 'Sin filtros') {
		cur = "";
	}
	// Si añade
	if (check == true) {
		add_miga(txt, true, 'a');
		var texto = new String();
		texto = cur + "<br /><span>" + txt + "</span>";
		document.getElementById('filtros_areas_a').innerHTML = texto;
		// document.getElementById('filtros_areas_a').textContent = texto;
		document.getElementById(l).style.fontWeight = 'bold';
	} else {
		add_miga(txt, false, 'a');
		var nuevo = new String(cur
				.replace('<br /><span>' + txt + '</span>', ''));
		nuevo = new String(cur.replace('<br><span>' + txt + '</span>', ''));
		document.getElementById('filtros_areas_a').innerHTML = nuevo;
		// document.getElementById('filtros_areas_a').textContent = nuevo;
		document.getElementById(l).style.fontWeight = 'normal';
	}

}
function clean_filter_nivel() {
	document.getElementById('filtros_nivel_a').innerText = '';
	document.getElementById('filtros_nivel_a').textContent = '';
	document.getElementById('opcion299').checked = true;
	document.getElementById('l299').style.fontWeight = 'bold';
	document.getElementById('opcion300').checked = false;
	document.getElementById('opcion301').checked = false;
	document.getElementById('opcion302').checked = false;
	document.getElementById('opcion303').checked = false;
	document.getElementById('opcion304').checked = false;
	document.getElementById('opcion305').checked = false;
	document.getElementById('opcion306').checked = false;
	document.getElementById('l300').style.fontWeight = 'normal';
	document.getElementById('l301').style.fontWeight = 'normal';
	document.getElementById('l302').style.fontWeight = 'normal';
	document.getElementById('l303').style.fontWeight = 'normal';
	document.getElementById('l304').style.fontWeight = 'normal';
	document.getElementById('l305').style.fontWeight = 'normal';
	document.getElementById('l306').style.fontWeight = 'normal';
}
function clean_filter_area() {
	document.getElementById('filtros_areas_a').innerText = '';
	document.getElementById('filtros_areas_a').textContent = '';
	document.getElementById('opcion1').checked = true;
	document.getElementById('l1').style.fontWeight = 'bold';
	document.getElementById('opcion2').checked = false;
	document.getElementById('opcion3').checked = false;
	document.getElementById('opcion4').checked = false;
	document.getElementById('opcion5').checked = false;
	document.getElementById('opcion6').checked = false;
	document.getElementById('opcion7').checked = false;
	document.getElementById('opcion8').checked = false;
	document.getElementById('opcion9').checked = false;
	document.getElementById('opcion10').checked = false;
	document.getElementById('opcion11').checked = false;
	document.getElementById('opcion12').checked = false;
	document.getElementById('opcion13').checked = false;
	document.getElementById('opcion14').checked = false;
	document.getElementById('opcion15').checked = false;
	document.getElementById('opcion16').checked = false;
	document.getElementById('opcion17').checked = false;
	document.getElementById('opcion18').checked = false;
	document.getElementById('opcion19').checked = false;
	document.getElementById('opcion20').checked = false;
	document.getElementById('opcion21').checked = false;
	document.getElementById('opcion22').checked = false;
	document.getElementById('opcion23').checked = false;
	document.getElementById('opcion24').checked = false;
	document.getElementById('opcion25').checked = false;
	document.getElementById('opcion26').checked = false;
	document.getElementById('opcion27').checked = false;
	document.getElementById('l2').style.fontWeight = 'normal';
	document.getElementById('l3').style.fontWeight = 'normal';
	document.getElementById('l4').style.fontWeight = 'normal';
	document.getElementById('l5').style.fontWeight = 'normal';
	document.getElementById('l6').style.fontWeight = 'normal';
	document.getElementById('l7').style.fontWeight = 'normal';
	document.getElementById('l8').style.fontWeight = 'normal';
	document.getElementById('l9').style.fontWeight = 'normal';
	document.getElementById('l10').style.fontWeight = 'normal';
	document.getElementById('l11').style.fontWeight = 'normal';
	document.getElementById('l12').style.fontWeight = 'normal';
	document.getElementById('l13').style.fontWeight = 'normal';
	document.getElementById('l14').style.fontWeight = 'normal';
	document.getElementById('l15').style.fontWeight = 'normal';
	document.getElementById('l16').style.fontWeight = 'normal';
	document.getElementById('l17').style.fontWeight = 'normal';
	document.getElementById('l18').style.fontWeight = 'normal';
	document.getElementById('l19').style.fontWeight = 'normal';
	document.getElementById('l20').style.fontWeight = 'normal';
	document.getElementById('l21').style.fontWeight = 'normal';
	document.getElementById('l22').style.fontWeight = 'normal';
	document.getElementById('l23').style.fontWeight = 'normal';
	document.getElementById('l24').style.fontWeight = 'normal';
	document.getElementById('l25').style.fontWeight = 'normal';
	document.getElementById('l26').style.fontWeight = 'normal';
	document.getElementById('l27').style.fontWeight = 'normal';
}

// Paginacion

$(document)
		.ready(
				function() {

					// how much items per page to show
					var show_per_page = 2;
					// getting the amount of elements inside content div
					var number_of_items = $('#content').children().size();
					// calculate the number of pages we are going to have
					var number_of_pages = Math.ceil(number_of_items
							/ show_per_page);

					// set the value of our hidden input fields
					$('#current_page').val(0);
					$('#show_per_page').val(show_per_page);

					// now when we got all we need for the navigation let's make
					// it '

					/*
					 * what are we going to have in the navigation? - link to
					 * previous page - links to specific pages - link to next
					 * page
					 */
					var navigation_html = '<a class="previous_link" href="javascript:previous();">Ant.</a>';
					var current_link = 0;
					while (number_of_pages > current_link) {
						navigation_html += '<a class="page_link" href="javascript:go_to_page('
								+ current_link
								+ ')" longdesc="'
								+ current_link
								+ '">' + (current_link + 1) + '</a>';
						current_link++;
					}
					navigation_html += '<a class="next_link" href="javascript:next();">Sig.</a>';

					$('#page_navigation').html(navigation_html);

					// add active_page class to the first page link
					$('#page_navigation .page_link:first').addClass(
							'active_page');

					// hide all the elements inside content div
					$('#content').children().css('display', 'none');

					// and show the first n (show_per_page) elements
					$('#content').children().slice(0, show_per_page).css(
							'display', 'block');

				});

function previous() {

	new_page = parseInt($('#current_page').val()) - 1;
	// if there is an item before the current active link run the function
	if ($('.active_page').prev('.page_link').length == true) {
		go_to_page(new_page);
	}

}

function next() {
	new_page = parseInt($('#current_page').val()) + 1;
	// if there is an item after the current active link run the function
	if ($('.active_page').next('.page_link').length == true) {
		go_to_page(new_page);
	}

}
function go_to_page(page_num) {
	// get the number of items shown per page
	var show_per_page = parseInt($('#show_per_page').val());

	// get the element number where to start the slice from
	start_from = page_num * show_per_page;

	// get the element number where to end the slice
	end_on = start_from + show_per_page;

	// hide all children elements of content div, get specific items and show
	// them
	$('#content').children().css('display', 'none').slice(start_from, end_on)
			.css('display', 'block');

	/*
	 * get the page link that has longdesc attribute of the current page and add
	 * active_page class to it and remove that class from previously active page
	 * link
	 */
	$('.page_link[longdesc=' + page_num + ']').addClass('active_page')
			.siblings('.active_page').removeClass('active_page');

	// update the current page input field
	$('#current_page').val(page_num);
	show('head_tabla');
}

function page_5() {

	// how much items per page to show
	var show_per_page = 2;
	// getting the amount of elements inside content div
	var number_of_items = $('#pagina_5').children().size();
	// calculate the number of pages we are going to have
	var number_of_pages = Math.ceil(number_of_items / show_per_page);

	// set the value of our hidden input fields
	$('#current_page_5').val(0);
	$('#show_per_page_5').val(show_per_page);

	// now when we got all we need for the navigation let's make it '

	/*
	 * what are we going to have in the navigation? - link to previous page -
	 * links to specific pages - link to next page
	 */
	var navigation_html = '<a class="previous_link" href="javascript:previous5();">Ant.</a>';
	var current_link = 0;
	while (number_of_pages > current_link) {
		navigation_html += '<a class="page_link" href="javascript:go_to_page5('
				+ current_link + ')" longdesc="' + current_link + '">'
				+ (current_link + 1) + '</a>';
		current_link++;
	}
	navigation_html += '<a class="next_link" href="javascript:next5();">Sig.</a>';

	$('#page_navigation_5').html(navigation_html);

	// add active_page class to the first page link
	$('#page_navigation_5 .page_link:first').addClass('active_page');

	// hide all the elements inside content div
	$('#pagina_5').children().css('display', 'none');

	// and show the first n (show_per_page) elements
	$('#pagina_5').children().slice(0, show_per_page).css('display', 'block');

}

function previous5() {

	new_page = parseInt($('#current_page_5').val()) - 1;
	// if there is an item before the current active link run the function
	if ($('.active_page').prev('.page_link').length == true) {
		go_to_page5(new_page);
	}

}

function next5() {
	new_page = parseInt($('#current_page_5').val()) + 1;
	// if there is an item after the current active link run the function
	if ($('.active_page').next('.page_link').length == true) {
		go_to_page5(new_page);
	}

}
function go_to_page5(page_num) {
	// get the number of items shown per page
	var show_per_page = parseInt($('#show_per_page_5').val());

	// get the element number where to start the slice from
	start_from = page_num * show_per_page;

	// get the element number where to end the slice
	end_on = start_from + show_per_page;

	// hide all children elements of content div, get specific items and show
	// them
	$('#pagina_5').children().css('display', 'none').slice(start_from, end_on)
			.css('display', 'block');

	/*
	 * get the page link that has longdesc attribute of the current page and add
	 * active_page class to it and remove that class from previously active page
	 * link
	 */
	$('.page_link[longdesc=' + page_num + ']').addClass('active_page')
			.siblings('.active_page').removeClass('active_page');

	// update the current page input field
	$('#current_page_5').val(page_num);
}

function valpreg1(valor, id) {
	var n = 0;
	if (valor > 0) {
		if (id != 'p11') {
			if (document.getElementById('p11').value == valor) {
				n++;
			}
		}
		if (id != 'p12') {
			if (document.getElementById('p12').value == valor) {
				n++;
			}
		}
		if (id != 'p13') {
			if (document.getElementById('p13').value == valor) {
				n++;
			}
		}
		if (id != 'p14') {
			if (document.getElementById('p14').value == valor) {
				n++;
			}
		}
		if (id != 'p15') {
			if (document.getElementById('p15').value == valor) {
				n++;
			}
		}
		if (n > 0) {
			document.getElementById(id).value = 0;
			window.modalBox && modalBox.trigger("#msg");
		}
		cuantas(1);
	}
}

function valpreg2(valor, id) {
	var n = 0;
	if (valor > 0) {
		if (id != 'p21') {
			if (document.getElementById('p21').value == valor) {
				n++;
			}
		}
		if (id != 'p22') {
			if (document.getElementById('p22').value == valor) {
				n++;
			}
		}
		if (id != 'p23') {
			if (document.getElementById('p23').value == valor) {
				n++;
			}
		}
		if (id != 'p24') {
			if (document.getElementById('p24').value == valor) {
				n++;
			}
		}
		if (id != 'p25') {
			if (document.getElementById('p25').value == valor) {
				n++;
			}
		}
		if (n > 0) {
			document.getElementById(id).value = 0;
			window.modalBox && modalBox.trigger("#msg");
		}
		cuantas(2);
	}
}

function valpreg3(valor, id) {
	var n = 0;
	if (valor > 0) {
		if (id != 'p31') {
			if (document.getElementById('p31').value == valor) {
				n++;
			}
		}
		if (id != 'p32') {
			if (document.getElementById('p32').value == valor) {
				n++;
			}
		}
		if (id != 'p33') {
			if (document.getElementById('p33').value == valor) {
				n++;
			}
		}
		if (id != 'p34') {
			if (document.getElementById('p34').value == valor) {
				n++;
			}
		}
		if (id != 'p35') {
			if (document.getElementById('p35').value == valor) {
				n++;
			}
		}
		if (n > 0) {
			document.getElementById(id).value = 0;
			window.modalBox && modalBox.trigger("#msg");
		}
		cuantas(3);
	}
}

function valpreg4(valor, id) {
	var n = 0;
	if (valor > 0) {
		if (id != 'p41') {
			if (document.getElementById('p41').value == valor) {
				n++;
			}
		}
		if (id != 'p42') {
			if (document.getElementById('p42').value == valor) {
				n++;
			}
		}
		if (id != 'p43') {
			if (document.getElementById('p43').value == valor) {
				n++;
			}
		}
		if (id != 'p44') {
			if (document.getElementById('p44').value == valor) {
				n++;
			}
		}
		if (id != 'p45') {
			if (document.getElementById('p45').value == valor) {
				n++;
			}
		}
		if (n > 0) {
			document.getElementById(id).value = 0;
			window.modalBox && modalBox.trigger("#msg");
		}
		cuantas(4);
	}
}

function valpreg5(valor, id) {
	var n = 0;
	if (valor > 0) {
		if (id != 'p51') {
			if (document.getElementById('p51').value == valor) {
				n++;
			}
		}
		if (id != 'p52') {
			if (document.getElementById('p52').value == valor) {
				n++;
			}
		}
		if (id != 'p53') {
			if (document.getElementById('p53').value == valor) {
				n++;
			}
		}
		if (id != 'p54') {
			if (document.getElementById('p54').value == valor) {
				n++;
			}
		}
		if (id != 'p55') {
			if (document.getElementById('p55').value == valor) {
				n++;
			}
		}
		if (n > 0) {
			document.getElementById(id).value = 0;
			window.modalBox && modalBox.trigger("#msg");
		}
		cuantas(5);
	}
}

function cuantas(id) {

	var nid = "h" + id;
	var control = document.getElementById(nid).value;

	if (control == 0) {

		var c = document.getElementById('cuantas').innerHTML;

		c++;
		if (c == 10
				&& window.location.href == 'http://www.pixelclubcolombia.com/sofiaplus/presentar_prueba_s.php') {
			show('m1');
			window.modalBox
					&& modalBox
							.trigger("finalizar_prueba3.php?iframe=true&width=60%&height=60%");
			exit;
		}
		document.getElementById('cuantas').innerHTML = c;
		document.getElementById(nid).value = 1;

	}
}

// /////////////////////////////

function requisitos() {
	window.modalBox
			&& modalBox
					.trigger("requisitos.html?iframe=true&width=50%&height=50%");
}

function habilidades() {
	window.modalBox
			&& modalBox
					.trigger("competencias.html?iframe=true&width=50%&height=50%");
}

function gotoxy(url) {
	window.modalBox && modalBox.trigger(url);
}

// /////////////////////
function inipreguntas() {
	show('p1');
	hide('p2');
	hide('p3');
	showi('next');
	hide('recuperar_siguiente');
	hide('back');
}

function sigpreg(tipo) {

	var a = document.getElementById('p1');
	var b = document.getElementById('p2');
	var c = document.getElementById('p3');

	// Ir adelante
	if (tipo == 0) {
		if (a.style.display == "block") {
			hide('p1');
			show('p2');
			hide('p3');
			hide('regresar');
			showi('back');
		} else if (b.style.display == "block") {
			hide('p1');
			hide('p2');
			show('p3');
			hide('next');
			showi('recuperar_siguiente');
		} else {

		}
	}

	// Ir atras
	if (tipo == 1) {
		if (b.style.display == "block") {
			show('p1');
			hide('p2');
			hide('p3');
			hide('back');
			showi('regresar');
		} else if (c.style.display == "block") {
			hide('p1');
			show('p2');
			hide('p3');
			hide('recuperar_siguiente');
			showi('next');
		} else {

		}
	}

}

function valp1(txt, check, l) {

	var a = document.getElementById('fecha_expedicion_documento_opcion_1');
	var b = document.getElementById('fecha_expedicion_documento_opcion_2');
	var c = document.getElementById('fecha_expedicion_documento_opcion_3');

	document.getElementById('l1').style.fontWeight = 'normal';
	document.getElementById('l2').style.fontWeight = 'normal';
	document.getElementById('l3').style.fontWeight = 'normal';

	a.checked = false;
	b.checked = false;
	c.checked = false;

	if (check == true) {
		document.getElementById(l).style.fontWeight = 'bold';
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(l).style.fontWeight = 'normal';
		document.getElementById(txt).checked = false;
	}
}

function valp2(txt, check, l) {

	var a = document.getElementById('fecha_nacimiento_opcion_1');
	var b = document.getElementById('fecha_nacimiento_opcion_2');
	var c = document.getElementById('fecha_nacimiento_opcion_3');

	document.getElementById('l4').style.fontWeight = 'normal';
	document.getElementById('l5').style.fontWeight = 'normal';
	document.getElementById('l6').style.fontWeight = 'normal';

	a.checked = false;
	b.checked = false;
	c.checked = false;

	if (check == true) {
		document.getElementById(l).style.fontWeight = 'bold';
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(l).style.fontWeight = 'normal';
		document.getElementById(txt).checked = false;
	}
}

function valp3(txt, check, l) {

	var a = document.getElementById('fecha_registro_opcion_1');
	var b = document.getElementById('fecha_registro_opcion_2');
	var c = document.getElementById('fecha_registro_opcion_3');

	document.getElementById('l7').style.fontWeight = 'normal';
	document.getElementById('l8').style.fontWeight = 'normal';
	document.getElementById('l9').style.fontWeight = 'normal';

	a.checked = false;
	b.checked = false;
	c.checked = false;

	if (check == true) {
		document.getElementById(l).style.fontWeight = 'bold';
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(l).style.fontWeight = 'normal';
		document.getElementById(txt).checked = false;
	}
}

function valp4(txt, check) {

	var a = document.getElementById('pregunta_1');
	var b = document.getElementById('pregunta_11');
	var c = document.getElementById('pregunta_111');
	var d = document.getElementById('pregunta_1111');

	a.checked = false;
	b.checked = false;
	c.checked = false;
	d.checked = false;

	if (check == true) {
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(txt).checked = false;
	}
}

function valp5(txt, check) {

	var a = document.getElementById('pregunta_2');
	var b = document.getElementById('pregunta_22');
	var c = document.getElementById('pregunta_222');
	var d = document.getElementById('pregunta_2222');

	a.checked = false;
	b.checked = false;
	c.checked = false;
	d.checked = false;

	if (check == true) {
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(txt).checked = false;
	}
}

function valp6(txt, check) {

	var a = document.getElementById('pregunta_3');
	var b = document.getElementById('pregunta_33');
	var c = document.getElementById('pregunta_333');
	var d = document.getElementById('pregunta_3333');

	a.checked = false;
	b.checked = false;
	c.checked = false;
	d.checked = false;

	if (check == true) {
		document.getElementById(txt).checked = true;
	} else {
		document.getElementById(txt).checked = false;
	}
}

function showS1(id) {

	document.getElementById(id).style.display = 'block';
	setTimeout("hide1()", 5000); // 5 seconds after user (re)load the page
}
function showS2(id) {

	document.getElementById(id).style.display = 'block';
	setTimeout("hide2()", 5000); // 5 seconds after user (re)load the page
}
function showS3(id) {

	document.getElementById(id).style.display = 'block';
	setTimeout("hide3()", 5000); // 5 seconds after user (re)load the page
}

function hide1() {
	document.getElementById('av1').style.display = 'none';
	//alert(id);
}
function hide2() {
	document.getElementById('av2').style.display = 'none';
	//alert(id);
}
function hide3() {
	document.getElementById('av3').style.display = 'none';
	//alert(id);
}
function quitarBotonCerrarRegistro() {
	document.getElementById('modal-navi').style.display = 'none';
}

function setOnclickEventUrl(url, idButton){
    document.getElementById(idButton).onclick = function() {eventUrl(url)};
}

function eventUrl(url){
    parent.location.replace(url);
}
