const Rule = require('./Rule');
const { create } = require('xmlbuilder2');
const { nanoid } = require('nanoid');
const { ConditionType, PlayerType, GameplayType, EventPayloads } = require('./types');
const Gameplay = require('./Gameplay');

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


        let xml = create()
        .ele('xml')
        .ele('block', {type: 'modBlock', id: nanoid(), deleteable: "false", x: "0", y: "0"})
        .ele('statement', {name: 'RULES'})
        .ele('block', {type: 'ruleBlock', id: nanoid()})

        for(const rule of this.rules){

           xml = xml.ele('mutation', {isOnGoingEvent: false})
            .up()
            .ele('field', {name: 'NAME'})
            .txt(rule.name)
            .up()
            .ele('field', {name: 'EVENTTYPE'})
            .txt(rule.event)
            .up()
            .ele('statement', {name: 'CONDITIONS'})



            rule.conditions.forEach((condition, index) => {

    
                xml = xml.ele('block', {type: 'conditionBlock', id: nanoid()})
                .ele('value', {name: "CONDITION"})

                switch(condition.type){
                    case ConditionType.Equals:{
                       xml = xml.ele('block', {type: 'Equals', id: nanoid()})
                        .ele('value', {name: "VALUE-0"})

                        const value1 = condition['value1'];

                        const value2 = condition['value2']

                        switch(value1.type){
                            case GameplayType.GetGameModeScore:{

                                const value = value1.value

                               xml = xml.ele('block', {type: GameplayType.GetGameModeScore, id: nanoid()})
                                .ele('value', {name: 'VALUE-0'})
                                .ele('block', {type: value.type, id: nanoid()})

                                switch(value.value){
                                    case EventPayloads.EventPlayer:{
                                       xml = xml.ele('value', {name: 'VALUE-0'}).ele('block', { type: EventPayloads.EventPlayer, id: nanoid()}).up().up().up().up().up().up()
                                    }
                                }

                            }
                        }

                        xml = xml.ele('value', {name: "VALUE-1"})

                        switch(value2.type){
                            case GameplayType.GetGameModeTargetScore:{
                                xml = xml.ele('block', {type: GameplayType.GetGameModeTargetScore, id: nanoid()})
                                break
                            }
                        }

                        xml = xml.up().up().up().up()


                        break
                    }
                }


                if(rule.conditions[index + 1]){
                    xml = xml.ele('next')
                }

            })



            xml = xml.up().up().ele('statement', {name: "ACTIONS"})


            rule.actions.forEach((action, index) => {

                switch(action.type){
                    case GameplayType.EndGameMode: {
                        xml = xml.ele('block', {type: GameplayType.EndGameMode, id: nanoid()}).ele('value', {name: 'VALUE-0'})

 
                        switch(typeof action.value){
                            case 'object':{
                                const {value, type} = action.value;

                                switch(type){
                                    case PlayerType.GetTeamId:{
                                        xml = xml
                                        .ele('block', {type: PlayerType.GetTeamId, id: nanoid()})
                                        .ele('value', {name: 'VALUE-0'})
                                        .ele('block', {type: value, id: nanoid()}).up().up().up()
                                        break;
                                    }
                                }

                                break;
                            }
                            case 'string':{
                                break;
                            }
                        }

                        break;
                    }
                }

                if(rule.actions[index + 1]){
                   xml = xml.ele('next')
                }

            })



      
        }

      
        console.log(xml.end({prettyPrint: true}))

    }




}

module.exports = Mod;