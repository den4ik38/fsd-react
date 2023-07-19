import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
 className?: string;
 size?: number;
 alt?: string;
 src?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, size = 100, alt, src,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    return (
        <img alt={alt} style={styles} src={src} className={classNames(cls.Avatar, {}, [className])} />
    );
};
