import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { LoginActions } from '../../model/slice/LoginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import cls from './LoginForm.module.scss';
import { LoginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';

interface LoginFormProps {
 className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

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
    );
});
