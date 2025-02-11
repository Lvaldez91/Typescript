type Size = "" | "S" | "M" | "L" | "XL";

class Producto {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size
        ) {}

    isProductReady(): boolean {
        // dry
        for (const key in this) {
            console.log(key);
            console.log(this[key]);
            switch (typeof this[key]) {
                case "string":
                    if (this[key].length <= 0) throw Error(`${key} is empty`);
                break;
                case "number":
                    if (this[key] <= 0) throw Error(`${key} is zero`);
                break;
                default:
                    throw Error(`${typeof this[key]} is not supported`);
            }
        }
        return true;
    }

    toString() {
        // No dry
        // if (this.name.length <= 0) throw Error("name is empty");
        // if (this.price <= 0) throw Error("Price is empty");
        // if (this.size.length <= 0) throw Error("Size is empty");
        if (!this.isProductReady) return;
        return `${this.name} (${this.price}), ${this.size}`;
        }
}

(() => {
    const bluePants = new Producto("Blue Large Pants", 10.89, "M");
    console.log(bluePants);
})();
