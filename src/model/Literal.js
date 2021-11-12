const { LiteralType } = require('./types');
class Literal{

    static Boolean(value){
        return {type: LiteralType.Boolean, value}
    }

    static Text(value){
        return {type: LiteralType.Text, value}
    }

    static Number(value){
        return {type: LiteralType.Number, value}
    }


}

module.exports = Literal