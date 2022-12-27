import { Component } from '@angular/core';
     
@Component({
    selector: 'app-task',
    template: `<label>Input 2 : legs of triangle</label>
                 1-й <input [(ngModel)]="kat1" placeholder="kat1">  2nd <input [(ngModel)]="kat2" placeholder="kat2"><br>
                 <button (click)="GetGip(kat1, kat2)">find hypotenuse</button> <label> hypotenuse: </label> {{gip}}<br>
                 <button (click)="GetS(kat1, kat2)">find space</button> <label> space: </label> {{S}}<br>
                 <button (click)="GetP(kat1, kat2, gip)">find perimetr</button> <label> perimetr: </label> {{P}}<br>
                 `           
})
export class TaskComp {
    kat1=''
    kat2 = ''
    gip:number=0
    S :number=0
    P :number=0
    GetGip(bS:string, cS: string){
        this.kat1 = bS;
        this.kat2 = cS;
        var b = +this.kat1;
        var c = +this.kat2;
        this.gip = Math.pow(b,2)+Math.pow(c,2);
    }
    GetS(bS:string, cS: string):void{
        this.kat1 = bS;
        this.kat2 = cS;
        var b = +this.kat1;
        var c = +this.kat2;
        this.S = 0.5*(b*c);
    }
    GetP(bS:string, cS: string, gip:number):void{
        this.kat1 = bS;
        this.kat2 = cS;
        this.gip = gip
        var b = +this.kat1;
        var c = +this.kat2;
        this.P = b + c + gip;
    }
   
}