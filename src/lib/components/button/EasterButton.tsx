import classNames from 'classnames';
import { ComponentProps } from 'react';
import { EasterStripes } from './EasterStripes';
import { Egg } from './Egg';

export type EasterButtonProps = {
    text?: string;
    eggType: 'stripes' | 'spots';
} & ComponentProps<'button'>;
export const EasterButton = ({
    text,
    className,
    eggType,
    ...props
}: EasterButtonProps) => {
    return (
        <button className="size-100 flex">
            <Egg className={classNames(className)} eggType={eggType}>
                {eggType === 'stripes' && <EasterStripes text={text} />}
            </Egg>
            <span className="h-24 w-full">{text}</span>
        </button>
    );
};
