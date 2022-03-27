
//Literales ES6
(function(){
    const nombre = 'Lucero';
    const apellido = 'Valdez';
    const edad = 28; 

    function getEdad(){
        return 2 + 26 ;
    }

    //const salida = nombre + ' ' + apellido + ', Edad: ' + edad;
    const salida = `${nombre}\n${apellido}\n(${getEdad()})`; 

    console.log(salida);

})();
