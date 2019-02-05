const descripcion = {

    alias: '-d',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    demand: true,
    desc: 'Marca como completado o pendiente la tarea'
};




const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina la tarea', {
        descripcion
    })


.help()
    .argv;
module.exports = {
    argv
}



/*
const opciones = {
    descripcion: {
        alias: '-d',
        demand: true
    },
    completado: {
        alias: 'c',
        demand: true,
    }
}


.command('actualizar', 'Actualiza el estado de una tarea', opciones)
    .command('crear', 'Crea una tarea por hacer', opciones)
    .help()
    .argv;


module.exports = {
    argv
}
*/