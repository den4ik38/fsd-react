import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { FetchProfileData } from './FetchProfileData';

describe('FetchProfileData.test', () => {
    test('success login', async () => {
        const data = {
            first: 'Denis',
            lastname: 'Reznikov',
            city: 'Irkutsk',
            country: Countries.Russia,
            currency: Currency.RUB,
            username: 'admin',
            age: 34,
        };
        const thunk = new TestAsyncThunk(FetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.CallThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('error login', async () => {
        const thunk = new TestAsyncThunk(FetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.CallThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
