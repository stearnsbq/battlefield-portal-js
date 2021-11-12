export class Rule {
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


  addCondition(){
      this.conditions.push()
      return this;
  }


}


