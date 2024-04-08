import { useEffect, useState } from 'react';

export const useTimedConditionalEffect = ({
    duration,
    condition,
}: {
    duration: number;
    condition: boolean;
}) => {
    const [timeExpired, setTimeExpired] = useState<boolean>(false);
    useEffect(() => {
        if (!condition) return;
        let timer: NodeJS.Timeout | null = null;
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
    }, [condition, duration]);
    return [timeExpired, setTimeExpired] as const;
};
