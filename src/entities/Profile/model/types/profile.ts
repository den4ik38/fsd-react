import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileErrors {
   NO_DATA = 'NO_DATA',
   INCORRECT_USERDATA = 'INCORRECT_USERDATA',
   INCORRECT_AGE = 'INCORRECT_AGE',
   INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
   SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  first?: string
  lastname?: string,
  age?: number,
  currency?: Currency,
  country?: Countries,
  city?: string,
  username?: string,
  avatar?: string,
}

export interface ProfileSchema {
  readOnly: boolean,
  isLoading: boolean,
  error?: string,
  data?: Profile,
  form?: Profile,
  validateErrors?: ValidateProfileErrors[],
}
