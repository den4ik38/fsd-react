import { StateSchema } from 'app/providers/StoreProvider';
import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            first: 'Denis',
            lastname: 'Reznikov',
            city: 'Irkutsk',
            country: Countries.Russia,
            currency: Currency.RUB,
            username: 'admin',
            age: 34,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
