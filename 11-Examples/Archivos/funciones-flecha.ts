
//Funciones de flecha
(function(){
    
    let mifuncion = function(a:string){

        return a.toUpperCase();
    }

    // funcion de flecha '=>' 
    const mifuncionF = (a:string) =>  {

        return a.toUpperCase(); 
    }
    

    const SumaN = function(a:number, b:number){
        return a + b; 
    }

    // funcion tipo flecha, si solo se debe hacer una evaluacion
    const SumaF = (a:number, b:number) => a + b; 

    console.log(mifuncion('Lucero')); 
    console.log(mifuncionF('Lucero')); 
    console.log(SumaF(19, 5)); 
    console.log(SumaN(9, 10)); 

    // Metodo
    const hulk = {
        nombre: 'Lucero'
        , smash(){
            // es una funcion de flecha y por eso puede utilizar dentro this.nombre pero si 
            // se coloca function() generaria un error al utilizar this.nombre 
            setTimeout(() =>{
                console.log(`${this.nombre} smash!!!`);
             }, 1000);
        }
    }

    hulk.smash();

})();
 