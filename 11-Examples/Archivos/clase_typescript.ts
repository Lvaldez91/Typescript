
//Clases de TypeScript
(() => {

    // clase 
    class Datos{
        // nombre: string; 
        // edad: number; 
        // mail: string; 
        // carrera: string; 
        // direccion: string;
        // activo: boolean;

        // constructor(public nombre:string, private edad:number, mail:string, carrera:string, direccion:string, activo:boolean) {
        constructor(public nombre:string, public edad: number, public mail: string
            , public carrera?:string, public direccion?: string, public activo? : boolean) {
            this.nombre = nombre; 
            this.edad = edad;
            this.mail = mail; 
            this.carrera= carrera;
            this.direccion = direccion;
            this.activo = activo; 
        }
    }

    // utilizando la clase Datos
    const Enviar = new Datos('Lucero', 28, 'luz.momo098@gmail.com'); 
    Enviar.nombre = 'Lucero'; 
    Enviar.edad = 28;
    Enviar.mail = 'luz.momo098@gmail.com';
    Enviar.carrera = 'Ingenieria en Sistemas Computacionales';
    Enviar.direccion = 'Dia. Minas palacio num. 4';
    Enviar.activo = true; 

    console.log(Enviar);

})();