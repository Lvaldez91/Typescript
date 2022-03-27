// properties of the multimedia - clase padre
class MultimediaFile{
    //dateCreation: string = '';
    //dateModification: string ='';
    //name:string = '';
    //typeElement: string = '';

    constructor(public dateCreation:string, public dateModification:string,
        public name:string, public typeElement:string){
        
    }
    // method
    deployInformation(): void{
        const information: string = this.name + ' ' + this.typeElement + ' ' + this.dateModification + ' ' +  this.dateCreation;
        console.log(information);
    }
}

class DynamicFile extends MultimediaFile{
    // se utiliza super para invocar el constructor principal de multimedia file
    constructor(public dateCreation:string, public dateModification:string,
        public name:string, public typeElement:string, public  duration:string){
        super(dateCreation, dateModification,name, typeElement);
    }

    stoping():void{

    }

    paused():void{

    }

    playing():void{
        
    }
}

class StaticFile extends MultimediaFile{
    // se utiliza super para invocar el constructor principal de multimedia file
    constructor(public dateCreation:string, public dateModification:string,
        public name:string, public typeElement:string){
        super(dateCreation, dateModification,name, typeElement);
    }

    Edit():void {
        console.log('Editing...');
    }
}

const mFile = new MultimediaFile('2020-09-15','2021-09-15','Luz','File Text');
mFile.name = 'prueba.txt';
mFile.dateCreation = '2021-07-19';
mFile.dateModification = '2021-09-15';
mFile.typeElement = 'Text File';
mFile.deployInformation();

const dFile = new DynamicFile('2020-09-15','2021-09-15','Luz','File Text', '122');


const sFile = new StaticFile('2020-09-15','2021-09-15','Luz','File Text');
sFile.Edit();

