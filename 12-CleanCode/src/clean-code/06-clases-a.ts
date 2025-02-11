
type Gender = 'M'|'F';

// Clase anonima
(()=>{
    class Person{
        public name: string;
        public gender: string;
        public brithdate: Date;

        constructor(name:string, gender:string, brithdate:Date) {
            this.name = name;
            this.gender = gender;
            this.brithdate = brithdate;
        }
    }

    const newPerson= new Person('Lucero','F',new Date('1991-07-19'));
    console.log(newPerson);
})();