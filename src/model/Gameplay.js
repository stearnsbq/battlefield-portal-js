const { GameplayType, EventPayloads, PlayerType } = require("./types");

class Gameplay{
    static GetGameModeScore(playerOrTeamId){
        return {type: GameplayType.GetGameModeScore, value: playerOrTeamId}
    }

    static GetGameModeTargetScore(){
        return {type: GameplayType.GetGameModeTargetScore}
    }


    static EndGameMode(playerOrTeamId){
        if(!([EventPayloads.EventOtherPlayer, EventPayloads.EventPlayer, EventPayloads.EventTeam, PlayerType.GetTeamId].includes(playerOrTeamId.type || playerOrTeamId))){
            throw new SyntaxError("Syntax Error: Unsupported type for GetTeamId")
        }
        return {type: GameplayType.EndGameMode, value: playerOrTeamId}
    }

}

module.exports = Gameplay;