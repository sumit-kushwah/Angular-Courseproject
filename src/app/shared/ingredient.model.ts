export class Ingredient {
    public name: string; // by default this is public
    public amount: number;
    constructor(name: string, amount: number) {
        this.amount = amount;
        this.name = name;
    }
    //this is also alternative of upper code 
    // constructor (public name: string, public amount: string) it will creare variabe as
    // well as pass the value
}