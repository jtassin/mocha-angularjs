import expect from 'chai';
import getFive from './index';

describe('desc', () => {
  it('my test', () => {
    expect(getFive()).to.equal(5);
  });
});