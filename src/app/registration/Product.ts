export class Product
{
    pid: number;
    pname: string;
    pcost: number;
    ponline: string;
    pcate: string;
    pavail: string;
   
   
    constructor(  pid:number, pname:string, pcost:number,  ponline:string, pcate:string, pavail:string)
    {
        this.pid=pid;
        this.pname=pname;
        this.pcost=pcost;
        this.ponline=ponline;
        this.pcate=pcate;
        this.pavail=pavail;
        
    }
}