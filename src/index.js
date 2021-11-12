const { Condition } = require('./model/Condition');
const { Mod } = require('./model/Mod');
const { RuleEvent, Scope } = require('./model/types');

const baseMod = new Mod();

const rule = baseMod.addRule("dome").listenTo(RuleEvent.OnGoing).onScope(Scope.Global)


const condition = new Condition().Equals("", "")


rule.addCondition(condition)








