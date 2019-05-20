//Jonathan Vasquez Castañeda
//Primera entrega - 19 mayo 2019





// constante para manejo de archivos
const fs = require('fs');

//Definicion de los cursos
const cursos = [
	{
		id: 1,
		nombre: 'HTML',
		duracion: '2 Meses',
		valor: 300000
	},
	{
		id: 2,
		nombre: 'PYTHON',
		duracion: '3 Meses',
		valor: 350000
	},
	{
		id: 3,
		nombre: 'JAVA',
		duracion: '6 Meses',
		valor: 450000
	}
];





// Definicion de campos obligatorios y alias
const opciones = {
	id:{
		demand : true,
	},
	nombre:{
		demand : true,
		alias: 'n'
	},
	cedula:{
		demand : true,
		alias: 'c'
	}
};





//Definicion de la función para ver información del curso. Recibe id del curso

let verInfoCurso = (idCurso, time_out, callback) => {
	setTimeout(function(){
		let miCurso = buscarCurso(idCurso);
		let mensaje = 'El curso con ID ' + miCurso.id + ' de ' + miCurso.nombre + ' tiene una duración de ' + miCurso.duracion + ' y un valor de $' + miCurso.valor + '.';
		callback(mensaje);
	}, time_out*1000);
};






//función para buscar curso

let buscarCurso = (idCurso) => {
	let miCurso = cursos.find(function(curso) {
			return curso.id == idCurso;
		});
	return miCurso;
};


//Funcion para guardar en archivo de texto

let guardarEnTxt = (texto) => {
	fs.writeFile('alumnos.txt', texto, (err) => {
		if(err) throw(err);
	});
};


//Funcion para inscribirse a un curso
let inscribir = (idCurso, nombre, cedula) => {
	let miCurso = buscarCurso(idCurso);
	let mensaje = '';
	if (miCurso)
	{
		mensaje = 'La persona ' + nombre + ' con cédula ' + cedula + ' fue registrada para el curso ' + miCurso.nombre + ' con ID ' + miCurso.id + ' con una duración de ' + miCurso.duracion + ' horas y un costo de $' + miCurso.valor;
		guardarEnTxt(mensaje);
	}
	else
	{
		mensaje = 'No se encuentra curso con el ID ' + idCurso + 'Por favor valida y vuelve a intentarlo';

		//Visualizacion de los cursos disponibles
		verInfoCurso(1, 0, function(mensajeCallback){
			console.log(mensajeCallback);
		});
		verInfoCurso(2, 0, function(mensajeCallback){
			console.log(mensajeCallback);
		});
		verInfoCurso(3, 0, function(mensajeCallback){
			console.log(mensajeCallback);
		});
	}
	return mensaje;
};

//funcion yargs
const argv = require('yargs')
	.command('inscribir','Inscribirse en un curso', opciones)
	.argv;

//exportación de  funciones y la constante
module.exports = {
	verInfoCurso,
	inscribir,
	argv
};
