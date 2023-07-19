import { Profile, ValidateProfileErrors } from '../../types/profile';

export const ValidateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }
    const {
        first, lastname, age, country,
    } = profile;
    const errors: ValidateProfileErrors[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_USERDATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }
    if (!country) {
        errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
    }
    return errors;
};
