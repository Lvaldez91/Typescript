
//Clases de TypeScript
(() => {

    // clase 
    class Datos{
        nombre: string; 
        edad: number; 
        mail: string; 
        carrera: string; 
        direccion: string;
        activo: boolean;
    }

    const Enviar = new Datos(); 
    
    console.log(Enviar);

})();