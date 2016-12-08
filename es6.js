// ES6
'use strict';

class User {
  constructor(name) {
    this._name = name;
  }

  say() {
    return 'My name is ' + this._name;
  }
}

class Admin extends User {
  say() {
    return '[Administrator] ' + super.say();
  }
}

var user = new User('Mary');
console.log(user.say()); // My name is Mary

var admin = new Admin('Tom');
console.log(admin.say()); // [Administrator] My name is Tom