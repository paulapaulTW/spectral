import { Spectral } from '../../../spectral';
import { oas2Rules } from '../index';

const ruleset = { rules: oas2Rules() };

describe('host-trailing-slash', () => {
  const s = new Spectral();
  s.addRules({
    'host-trailing-slash': Object.assign(ruleset.rules['host-trailing-slash'], {
      enabled: true,
    }),
  });

  test('validate a correct object', async () => {
    const results = await s.run({
      swagger: '2.0',
      paths: {},
      host: 'stoplight.io',
    });
    expect(results.length).toEqual(0);
  });

  test('return errors if host url ends with a slash', async () => {
    const results = await s.run({
      swagger: '2.0',
      paths: {},
      host: 'stoplight.io/',
    });
    expect(results).toMatchSnapshot();
  });
});
