type Size = ''|'S'|'M'|'L'|'XL';

class Producto {
    constructor(public name: string, public price : number = 0, public size:Size){}

    toString() {
        // No dry
        if (this.name.length <= 0) throw Error("name is empty");
        if (this.price <= 0) throw Error("Price is empty");
        if (this.size.length <= 0) throw Error("Size is empty");
        return `${this.name} (${this.price}), ${this.size}`
    }
}

(() => {
    const bluePants = new Producto('Blue Large Pants',10.89,'M');
    console.log(bluePants);
})();