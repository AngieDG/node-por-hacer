//const argv = require('yargs').argv;
const argv = require('./conf/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
//console.log(argv);


//Lista de cosas por hacer 
/*
node app crear -d "Pasear al perro"
node app listar
node app actualizar -d "Pasear pal perro" -c true
-c completo  o pendiente
*/

//CReamos una switch para poder listar cada caso 

let comando = argv._[0]; //inicia en la posición 0

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('--------------POR HACER--------------'.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('-------------------------------------'.blue);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log('No se reconoce el comando ingresado');

    case 'borrar':
        let borrado = porHacer.borrado(argv.descripcion);
        console.log(borrado);

}