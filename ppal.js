const {inscribir, verInfoCurso, argv} = require('./info.js');

if(argv._[0]=='inscribir'){
	respuesta = inscribir(argv.id,argv.n,argv.c);
	console.log(respuesta);
}
else {
	verInfoCurso(1,2, function(mensaje){
		console.log(mensaje);
	});
	verInfoCurso(2,4, function(mensaje){
		console.log(mensaje);
	});
	verInfoCurso(3,6, function(mensaje){
		console.log(mensaje);
	});
}
