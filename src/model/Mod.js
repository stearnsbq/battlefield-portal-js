import { Rule } from "./Rule";

export class Mod{

    constructor(){
        this.rules = [];
    }

    addRule(name){
        const newRule = new Rule(name);

        this.rules.push(newRule)
        return newRule
    }


    // builds our mod into xml for import in battlefield portal rule builder
    build(){

    }


}