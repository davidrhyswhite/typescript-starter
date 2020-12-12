import { greeting } from '../src';

test('greeting correctly returns name', () => {
  expect(greeting('World!')).toBe('Hello World!');
});
