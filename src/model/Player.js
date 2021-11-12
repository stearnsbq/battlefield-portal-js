const Literal = require("./Literal");
const { PlayerType, LiteralType, EventPayloads, SyntaxError } = require("./types");

class Player{
    static GetPlayers(){
        return {type: PlayerType.GetPlayers}
    }

    static GetTeamId(playerOrNumber){
        if(![EventPayloads.EventOtherPlayer, EventPayloads.EventPlayer, Literal.Number].includes(playerOrNumber.type)){
            throw new SyntaxError("Syntax Error: Unsupported type for GetTeamId")
        }
        return {type: PlayerType.GetTeamId, value: playerOrNumber}
    }

}