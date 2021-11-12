
const RuleEvent = {
    OnGoing: 0,
    OnGameModeEnding: 1,
    OnGameModeStarted: 2,
    OnMandown: 3,
    OnPlayerDeployed: 4,
    OnPlayerDied: 5,
    OnPlayerEarnedKill: 6,
    OnPlayerIrreversiblyDead: 7,
    OnPlayerJoinGame: 8,
    OnPlayerLeaveGame: 9,
    OnRevived: 10,
    OnTimeLimitReached: 11,
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
  Equals: "EQUAL",
  And: "AND"
}


const PlayerType = {
  GetPlayers: "GetPlayers",
  GetTeamId: "GetTeamId"
}

const GameplayType = {
  GetGameModeScore: "GetGameModeScore"
}

class SyntaxError extends Error{

}


module.exports = {RuleEvent, Scope, LiteralType, EventPayloads, ConditionType, PlayerType, SyntaxError, GameplayType}