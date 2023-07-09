import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthdata = (state: StateSchema) => state.user.authData;
