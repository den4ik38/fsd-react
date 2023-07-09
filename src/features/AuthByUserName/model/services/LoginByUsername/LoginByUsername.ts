import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UserActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LofinByUsernameProps {
  username: string;
  password: string;
}

export const LoginByUsername = createAsyncThunk<User, LofinByUsernameProps, { rejectValue: string }>(
    'features/LoginByUsername',
    async (authdata, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authdata);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(UserActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
