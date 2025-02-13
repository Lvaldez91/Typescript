
type Gender = 'M'|'F';

// Clase anonima
(()=>{
    class Person{
        // public name: string;
        // public gender: string;
        // public brithdate: Date;

        constructor(public name:string, public gender:string, public brithdate:Date) {
            // this.name = name;
            // this.gender = gender;
            // this.brithdate = brithdate;
        }
    }
    // Class that extends to Person object
    class User extends Person {
        constructor(public email:string, public role:string, private lastAccess: Date, name:string, gender:Gender, brithDate:Date) {
            super(name, gender, brithDate);
        }

        checkCredentials(){ return true; }
    }


    const newPerson= new Person('Lucero','F',new Date('1991-07-19'));
    console.log(newPerson);

})();