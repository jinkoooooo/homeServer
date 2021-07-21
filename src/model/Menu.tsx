
export class UserMenu {
    public code:number;
    public name:string;
    public parentCode:number;
    public viewName:string;
    public orderSeq:number;
    public children:UserMenu[];
    //public functions:MenuFunc[];
    public expaned:boolean;
    public iconFa:string;


    constructor(code: number, name: string, parentCode: number, viewName:string, orderSeq:number, children: UserMenu[], iconFa:string, expaned: boolean) {
        this.code = code;
        this.name = name;
        this.parentCode = parentCode;
        this.viewName = viewName;
        this.orderSeq = orderSeq;
        this.children = children;
        this.expaned = expaned;
        this.iconFa = iconFa;
    }
}

export class Menu {
    public code:number;
    public name:string;
    public parentCode:number;
    public viewName:string;
    public orderSeq:number;
    public createDate:Date;
    public updateDate:Date;


    constructor(code: number, name: string, parentCode: number, viewName:string, orderSeq:number, createDate: Date, updateDate: Date) {
        this.code = code;
        this.name = name;
        this.parentCode = parentCode;
        this.viewName = viewName;
        this.orderSeq = orderSeq;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }
}

export type MenuPatch = {
    code:string,
    name:string,
    parentCode:string,
    viewName:string
}