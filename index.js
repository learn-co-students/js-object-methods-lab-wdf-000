// code solution here
class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return "NO!"
  }

  passBill() {
    return "You can do that!"
  }

  doCharity() {
    return "I like to help people."
  }

  conductPressInterview() {
    return "I am proud to be an American."
  }

  sayHi() {
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + "."
  }
}

var george = new President("George Washington", "Democrat", "3", "Virginia")
var abe =  new President("Abraham Lincoln", "Democrat", "2", "Virginia")
var richy = new President("Richard Nixon", "Democrat", "1", "Washington")
var Jim = new President("Jumy Carter", "Democrat", "3", "New York")
