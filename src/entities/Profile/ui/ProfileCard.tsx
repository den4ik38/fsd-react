import { Countries, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { AlignText, Text, ThemeText } from 'shared/ui/Text/Text';
import { Profile } from '../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
 className?: string;
 data?: Profile;
 error?: string;
 isLoading?: boolean;
 readonly?: boolean;
 onChangeLastName?: (value: string) => void;
 onChangeFirstName?: (value: string) => void;
 onChangeAge?: (value: string) => void;
 onChangeCity?: (value: string) => void;
 onChangeUsername?: (value: string) => void;
 onChangeAvatar?: (value: string) => void;
 onChangeCurrency?: (currency: Currency) => void;
 onChangeCountry?: (country: Countries) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        readonly = true,
        data,
        error,
        isLoading,
        onChangeLastName,
        onChangeFirstName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loader])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loader])}>
                <Text
                    theme={ThemeText.ERROR}
                    align={AlignText.CENTER}
                    title={t('Произошла ошибка при получении данных')}
                    text={t('Попробуйте обноваить старницу')}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar alt="" src={data?.avatar} />
                    </div>
                )}
                <Input
                    className={cls.input}
                    placeholder={t('Ваше имя')}
                    value={data?.first}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    placeholder={t('Ваша фамилия')}
                    value={data?.lastname}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    placeholder={t('Ваш возраст')}
                    value={data?.age}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    placeholder={t('Ваше имя пользователя')}
                    value={data?.username}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    placeholder={t('Город')}
                    value={data?.city}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    placeholder={t('Аватар')}
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    readonly={readonly}
                    value={data?.currency}
                    className={cls.input}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    readonly={readonly}
                    value={data?.country}
                    className={cls.input}
                    onChange={onChangeCountry}
                />
            </div>
        </div>
    );
};
