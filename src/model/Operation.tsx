export class Operation {
    public id: string;
    public name: string;
    public address: string;
    public phoneNo: string;
    public operQty: number;

    constructor(name: string = "", address: string = "", phoneNo: string = "", operQty: number = 1) {
        this.id = "0";
        this.name = name;
        this.address = address;
        this.phoneNo = phoneNo;
        this.operQty = operQty;
    }

}