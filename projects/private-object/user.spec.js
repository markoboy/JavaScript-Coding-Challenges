import { expect } from 'chai';
import User from './user';

describe('user.js - basic functionality', () => {
  it('contains private fields for username and password', () => {
    const user = new User('username', 'password', 18);

    expect(user).to.have.property('age');
    expect(user).to.not.have.property('username');
    expect(user).to.not.have.property('password');
  });
});
