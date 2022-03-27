"use strict";
//Promesas en JavaScript
(() => {
    // sirven para ejecutar codigo sin bloquear codigo
    console.log('Inicio');
    const prom_ = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('Se termino el timeout');
            reject('Error: Se termino el timeout');
        }, 1000);
    });

    prom_.then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));

    console.log('Fin');
})();