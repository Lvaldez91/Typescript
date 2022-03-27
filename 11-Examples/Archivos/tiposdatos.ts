
//Variables Let y const - sustituyendo var en javascript
(function(){
    let mensaje : string = 'Hola';
    // este es incorrecto porque es numerico - mensaje = 123;
    let numero : number = 190791;
    let valor : number;
    let x : string;
    let booleano : boolean = true;  // tipo boleano true o false
    let hoy : Date = new Date(); // funcion constructora
    let tipo_x ; 

    x = mensaje; 

    // cuando no se declara el tipo de dato
    tipo_x = numero; 
    tipo_x = booleano; 
    tipo_x = hoy; 

    // nuevo objeto sin tipo de dato
    let mi_valor = {
        nombre: 'Lucero'
        , edad : 28
        , mail : 'luz.momo098@gmail.com'
    };

    // asignando al objeto valores
    mi_valor = {
        nombre : 'Luz Valdez'
        , edad : 28
        , mail: 'luz.momo098@outlook.com'
    };

})();
