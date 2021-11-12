const Condition  = require('./model/Condition');
const Gameplay = require('./model/Gameplay');
const Mod = require('./model/Mod');
const Player = require('./model/Player');
const { RuleEvent, EventPayloads } = require('./model/types');


const baseMod = new Mod();

const rule = baseMod.addRule("New Rule").listenTo(RuleEvent.OnPlayerEarnedKill)

const teamId = Player.GetTeamId(EventPayloads.EventPlayer);

const condition = Condition.Equals(Gameplay.GetGameModeScore(teamId), Gameplay.GetGameModeTargetScore())

const action = Gameplay.EndGameMode(teamId)

rule.addCondition(condition);

rule.addAction(action);

baseMod.build()
