const usernameSymbol = Symbol('username');
const passwordSymbol = Symbol('password');

class User {
  constructor(username, password, age) {
    this[usernameSymbol] = username;
    this[passwordSymbol] = password;
    this.age = age;
  }
}

export default User;
