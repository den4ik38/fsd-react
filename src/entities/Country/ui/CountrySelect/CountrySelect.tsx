import { t } from 'i18next';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Countries } from '../../model/types/countries';

interface CountriesSelectProps {
 className?: string;
 value?: Countries;
 onChange?: (value: Countries) => void;
 readonly: boolean;
}

const options = [
    { value: Countries.Belarus, content: Countries.Belarus },
    { value: Countries.Kazahstan, content: Countries.Kazahstan },
    { value: Countries.Russia, content: Countries.Russia },
    { value: Countries.Ukraine, content: Countries.Ukraine },

];

export const CountrySelect = memo((props: CountriesSelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Countries);
    }, [onChange]);
    return (
        <Select
            readonly={readonly}
            className={classNames('', {}, [className])}
            label={t('Страна')}
            options={options}
            value={value}
            onChange={onChangeHandler}
        />
    );
});
