import { LoginSchema } from '../types/LoginSchema';
import { LoginActions, LoginReducer } from './LoginSlice';

describe('LoginSlice.test', () => {
    test('test setUsername', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '12332',
        };
        expect(LoginReducer(state as LoginSchema, LoginActions.setUserName('12332'))).toEqual({ username: '12332' });
    });
    test('test password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword('123'))).toEqual({ password: '123' });
    });
});
