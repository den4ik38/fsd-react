import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { ProfileActions, ProfileReducer } from './ProfileSlice';

const data = {
    first: 'Denis',
    lastname: 'Reznikov',
    city: 'Irkutsk',
    country: Countries.Russia,
    currency: Currency.RUB,
    username: 'admin',
    age: 34,
};

describe('ProfileSlice.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readOnly: false,
        };
        expect(ProfileReducer(state as ProfileSchema, ProfileActions.setReadonly(true))).toEqual({ readOnly: true });
    });
    test('test extra pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };
        expect(ProfileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            validateErrors: undefined,
            isLoading: true,
        });
    });
    test('test extra fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(ProfileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            readOnly: true,
            isLoading: false,
            error: undefined,
            data,
            form: data,
            validateErrors: undefined,
        });
    });
});
