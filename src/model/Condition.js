export class Condition{
    constructor(){
        this.cond = {}
    }

    Equals(value1, value2){
        this.cond = {value1, operator: "EQ", value2}
        return this;
    }


}