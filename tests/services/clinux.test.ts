import { describe, expect, it } from 'vitest';
import { auth } from '../../src/services/clinux';

describe('suite name', () => {
  it('foo', async () => {
    const user = {
      companyCode: '1',
      username: 'douglas.gomes',
      password: 'snoop123',
    };

    const response = await auth(user);

    expect(response).toMatchObject({});
  });
});
