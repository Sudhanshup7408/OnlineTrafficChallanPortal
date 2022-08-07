import { Time } from '@angular/common';

export class Challan {
    constructor(public challanNo : number,
                public challanAmount : number,
                public dueDate : Date,
                public date : Date,
                public voilationId : number,
                public proofUrl : string,
                public location : string,
                public dispute : string,
                public policeId : number,
                public vehicleNo : string,
                public disputed : boolean,
                public paid : boolean) {}
}
