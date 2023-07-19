import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '12233',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('12233');
    });
    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
