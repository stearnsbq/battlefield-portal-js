
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
    Global: 0,
    Player: 1,
    Team: 2,
};


const LiteralType = {
  Boolean: 0,
  Number: 1,
  Text: 2
}

const EventPayloads = {
  EventOtherPlayer: 0,
  EventPlayer: 1,
  EventTeam: 2
}



module.exports = {RuleEvent, Scope, LiteralType, EventPayloads}