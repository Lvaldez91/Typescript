// primer funcion de hola mundo
function saludar( nombre:string) {
    console.table( 'Hola ' + nombre ); // Hola Logan
}


const wolverine = {
    nombre: 'Luz'
};


saludar( wolverine.nombre);


// 2. Variables Let y const - sustituyendo var en javascript
(function(){
    let mensaje = 'Hola';

    if(true){
       let mensaje = 'Mundo';
    }

    console.log(mensaje); 

    // constantes 
    const valor = 'Hola Luz';
    console.log(valor); 

})();
// 2. Variables Let y const - sustituyendo var en javascript
