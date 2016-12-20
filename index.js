// code solution here
class President{

  constructor(name,politicalParty,yearsInOffice,homeState){
    this.name =name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto(){
    return "NO!"
  }

  doCharity(){
    return "I like to help people."
  }
  passBill(){
    return "You can do that!"
  }

  conductPressInterview() {
    return "I am proud to be an American."
  }

  sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
  }



}
