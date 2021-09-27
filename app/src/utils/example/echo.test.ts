import { echoDouble } from './echo';

describe('echo double', () => {
  it('should be return double', () => {
    expect(echoDouble('Hello')).toBe('HelloHello');
    expect(echoDouble('')).toBe('');
  });
});
