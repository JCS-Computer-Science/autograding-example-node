const sayName = require('./hello');

test('outputs the correct string', () => {
  expect(sayName()).toBe(process.env.STUDENTNAME);
});