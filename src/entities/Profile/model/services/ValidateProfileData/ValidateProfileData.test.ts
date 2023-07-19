import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from '../../types/profile';
import { ValidateProfileData } from './ValidateProfileData';

const data = {
    first: 'Denis',
    lastname: 'Reznikov',
    city: 'Irkutsk',
    country: Countries.Russia,
    currency: Currency.RUB,
    username: 'admin',
    age: 34,
};

describe('ValidateProfileData.test', () => {
    test('success login', async () => {
        const result = ValidateProfileData(data);

        expect(result).toEqual([]);
    });
    test('wothout firstname or lastname', async () => {
        const result = ValidateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USERDATA,
        ]);
    });
    test('incorrect country', async () => {
        const result = ValidateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ]);
    });
    test('incorrect age', async () => {
        const result = ValidateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_AGE,
        ]);
    });
    test('with empty form', async () => {
        const result = ValidateProfileData({ });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USERDATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ]);
    });
});
