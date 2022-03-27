
//Funciones parametros opcionales, obligatorios y por defecto
(function(){
    // funciones con datos obligatorios, opcionales y por defecto 
    //momento? - es opcional indicado por ?
    function activar(quien: string, objeto : string = 'ISC', momento?:string){
        console.log(`${quien} ${objeto}`);

        if(momento){
            console.log(`${quien} es programador por ser ${objeto}.`);
        } else {
            console.log(`${quien} es programador por ser ${objeto} y es muy excelente en lo que hace.`);
        }
    }

    activar('Lucero', 'ISC', 'Add');
})();
 