export class Product {
    public name: string;
    public qty: number = 0;
    public price: number;
    public disc: number = 0;

    public constructor(name: string, qty: number, price: number, disc: number){
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.disc = disc;

    }
    public add(): void { 
        this.qty++;
    }

    public remove(): void {
        if (this.qty > 0) {
        this.qty--;
        } else if(this.qty === 0) {
            return;
        } 
    }
}
