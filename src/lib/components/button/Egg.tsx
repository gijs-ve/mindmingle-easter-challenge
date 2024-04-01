import classNames from 'classnames';
import { ComponentProps } from 'react';

export type EggProps = {
    text?: string;
    eggType: 'stripes' | 'spots';
    className?: string;
} & ComponentProps<'span'>;
export const Egg = ({ children, className, ...props }: EggProps) => {
    return (
        <span
            {...props}
            className={classNames(
                className,
                'h-[100px] w-[70px] overflow-hidden rounded-b-[40%] rounded-tl-[60%] rounded-tr-[60%] bg-white',
            )}
        >
            {children}
        </span>
    );
};
