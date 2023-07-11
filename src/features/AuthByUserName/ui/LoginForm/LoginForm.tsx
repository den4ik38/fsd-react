import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { LoginActions, LoginReducer } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';
import { LoginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
 className?: string;
}

const initialReducers: ReducersList = {
    loginForm: LoginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(LoginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(LoginActions.setPassword(value));
    }, [dispatch]);

    const onLoginForm = useCallback(() => {
        dispatch(LoginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                {error && <Text title={t('Форма авторизации')} />}
                {error && <Text text={t('Вы ввели неправильный емаил или пароль')} theme={ThemeText.ERROR} />}
                <Input
                    onChange={onChangeUsername}
                    autoFocus
                    placeholder={t('Введите username')}
                    type="text"
                    className={cls.input}
                    value={username}
                />
                <Input
                    onChange={onChangePassword}
                    placeholder={t('Введите пароль')}
                    type="text"
                    className={cls.input}
                    value={password}
                />
                <Button
                    onClick={onLoginForm}
                    theme={ThemeButton.OUTLINE}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
