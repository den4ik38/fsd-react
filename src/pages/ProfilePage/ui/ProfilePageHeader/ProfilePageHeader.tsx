import { ProfileActions, updateProfileData } from 'entities/Profile';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
 className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(ProfileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(ProfileActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button onClick={onEdit} className={cls.editBtn} theme={ThemeButton.OUTLINE}>
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button onClick={onCancelEdit} className={cls.editBtn} theme={ThemeButton.OUTLINE_RED}>
                            {t('Отменить')}
                        </Button>
                        <Button onClick={onSave} className={cls.saveBtn} theme={ThemeButton.OUTLINE}>
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
        </div>
    );
};
