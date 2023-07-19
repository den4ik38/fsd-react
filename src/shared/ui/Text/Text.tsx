import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export const enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum AlignText {
    CENTER = 'center',
    RIGHT = 'right',
    LEFT = 'left',
}

interface TextProps {
 className?: string;
 title?: string;
 text?: string;
 theme?: ThemeText;
 align?: AlignText;
}

export const Text = memo((props: TextProps) => {
    const {
        className, text, title, align = AlignText.LEFT, theme = ThemeText.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
