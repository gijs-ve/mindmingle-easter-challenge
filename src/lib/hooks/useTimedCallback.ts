import { useEffect, useState } from 'react';
import { useTimedEffect } from './useTimedEffect';

export const useTimedCallback = ({
    callback,
    duration,
}: {
    callback: () => void;
    duration: number;
}) => {
    const timerFinished = useTimedEffect(duration);
    const [called, setCalled] = useState<boolean>(false);
    useEffect(() => {
        if (timerFinished && !called) {
            callback();
            setCalled(true);
        }
    }, [timerFinished]);
};
