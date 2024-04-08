import { DependencyList, useEffect, useState } from 'react';

export const useTimedEffect = (duration: number, deps?: DependencyList) => {
    const [timeExpired, setTimeExpired] = useState<boolean>(false);
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (deps) {
            setTimeExpired(false);
        }
        const startCountdown = () => {
            timer = setTimeout(() => {
                setTimeExpired(true);
            }, duration);
        };
        startCountdown();
        return (): void => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, deps);
    return timeExpired;
};
