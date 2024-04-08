'use client';
import { useEggEffect } from '@/lib/hooks/useEggEffect';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ComponentProps, useState } from 'react';
import { EasterStripes } from './EasterStripes';

export type EggProps = {
    text?: string;
    type: 'stripes' | 'spots';
    className?: string;
} & ComponentProps<typeof SpanMotion>;
const SpanMotion = motion.span;
export const Egg = ({ type, children, className, ...props }: EggProps) => {
    const [moving, setMoving] = useState<boolean>(false);
    const [hideEgg, setHideEgg] = useEggEffect({
        duration: 1000,
        condition: moving,
    });

    if (hideEgg && moving) {
        setMoving(false);
        setHideEgg(false);
        return null;
    }

    return (
        <SpanMotion
            onClick={() => {
                if (moving) return;
                setMoving(true);
            }}
            initial={{
                y: -200,
                opacity: 1,
            }}
            {...props}
            style={{
                borderRadius: '100% / 125% 125% 80% 80%',
            }}
            animate={{
                y: moving ? 500 : 0,
                opacity: moving ? 0 : 1,
                rotate: moving ? 360 : 0,
                transition: {
                    duration: 1,
                },
            }}
            className={classNames(
                className,
                'h-[100px] w-[70px] overflow-hidden bg-white shadow-lg hover:scale-110',
            )}
        >
            {type === 'stripes' && <EasterStripes />}
        </SpanMotion>
    );
};
