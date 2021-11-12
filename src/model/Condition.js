const { ConditionType } = require("./types");

class Condition{

   static Equals(value1, value2){
        return {type: ConditionType.Equals, value1, value2};
    }

   static And(value1, value2){
        return {type: ConditionType.And, value1, operator: "AND", value2};
    }


}

module.exports = Condition;