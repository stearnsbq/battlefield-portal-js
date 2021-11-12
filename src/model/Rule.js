class Rule {
  constructor(name) {
    this.name = name;
    this.conditions = [];
    this.actions = [];
  }


  listenTo(event){
    this.event = event
    return this;
  }

  onScope(scope){
    this.scope = scope;
    return this;
  }

  addCondition(condition){
    this.conditions.push(condition)
  }

  addAction(action){
    this.actions.push(action)
  }


}

module.exports = Rule;
