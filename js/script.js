'use strict';

function President(name, party, years, state) {
    this.name = name;
    this.politicalParty = party;
    this.yearsInOffice = years;
    this.homeState = state;
    this.veto = function(){
      return "NO!";
    }
    this.passBill = function(){
      return "You can do that!";
    }
    this.doCharity = function() {
      return "I like to help people.";
    }
    this.conductPressInterview = function() {
      return "I am proud to be an American.";
    }
    this.sayHi = function() {
      return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + "."
    }
  }
