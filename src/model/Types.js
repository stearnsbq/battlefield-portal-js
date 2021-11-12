
const RuleEvent = {
    OnGoing: "OnGoing",
    OnGameModeEnding: "OnGameModeEnding",
    OnGameModeStarted: "OnGameModeStarted",
    OnMandown: "OnMandown",
    OnPlayerDeployed: "OnPlayerDeployed",
    OnPlayerDied: "OnPlayerDied",
    OnPlayerEarnedKill: "OnPlayerEarnedKill",
    OnPlayerIrreversiblyDead: "OnPlayerIrreversiblyDead",
    OnPlayerJoinGame: "OnPlayerJoinGame",
    OnPlayerLeaveGame: "OnPlayerLeaveGame",
    OnRevived: "OnRevived",
    OnTimeLimitReached: "OnTimeLimitReached",
  };
  
const Scope = {
    Global : "Global",
    Player: "Player",
    Team: "Team",
};


const LiteralType = {
  Boolean: "Boolean",
  Number: "Number",
  Text: "Text"
}

const EventPayloads = {
  EventOtherPlayer: "EventOtherPlayer",
  EventPlayer : "EventPlayer",
  EventTeam : "EventTeam"
}


const ConditionType = {
  Equals: "Equals",
  And: "And"
}


const PlayerType = {
  GetPlayers: "GetPlayers",
  GetTeamId: "GetTeamId"
}

const GameplayType = {
  GetGameModeScore: "GetGamemodeScore",
  GetGameModeTargetScore: "GetTargetScore",
  EndGameMode: "EndRound"
}

class SyntaxError extends Error{

}


module.exports = {RuleEvent, Scope, LiteralType, EventPayloads, ConditionType, PlayerType, SyntaxError, GameplayType}