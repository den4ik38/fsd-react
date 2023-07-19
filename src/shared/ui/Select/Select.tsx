import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions {
  content: string,
  value: string,
}

interface SelectProps {
 className?: string;
 label?: string;
 options?: SelectOptions[];
 value?: string;
 onChange?: (value: string) => void;
 readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option key={opt.value} className={cls.option} value={opt.value}>{opt.content}</option>
    )), [options]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select disabled={readonly} value={value} onChange={onChangeHandler} className={cls.select}>
                {optionsList}
            </select>
        </div>
    );
});
