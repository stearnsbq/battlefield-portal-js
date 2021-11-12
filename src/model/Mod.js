const Rule = require('./Rule');
class Mod{

    constructor(){
        this.rules = [];
        this.subroutineMap = {};
    }

    addRule(name){
        const newRule = new Rule(name);

        this.rules.push(newRule)
        return newRule
    }


    addSubroutine(name, routine){
        this.subroutineMap[name] = routine;
    }


    // builds our mod into xml for import in battlefield portal rule builder
    build(){

        for(const rule of rules){

        }

    }


}

module.exports = Mod;