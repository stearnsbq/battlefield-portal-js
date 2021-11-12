const Condition  = require('./model/Condition');
const Literal  = require('./model/Literal');
const Mod = require('./model/Mod');
const { RuleEvent, Scope, LiteralType, EventPayloads } = require('./model/types');



const baseMod = new Mod();

const rule = baseMod.addRule("dome").listenTo(RuleEvent.OnGoing).onScope(Scope.Global)



const literal = new Literal(LiteralType.Boolean, false)

const lul = new Literal(LiteralType.Boolean, true)


const condition = new Condition().Equals(literal, lul)


rule.addCondition(condition)



console.log(baseMod)







