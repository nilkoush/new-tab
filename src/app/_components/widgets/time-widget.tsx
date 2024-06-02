'use client';

import { days, getBackgroundGradient, getGreeting } from '@/lib/time';
import { useEffect, useState } from 'react';

export default function TimeWidget({}) {
    let current = new Date();
    const [time, setTime] = useState(current);

    useEffect(() => {
        const intervalID = setInterval(() => {
            let current = new Date();
            setTime(current);
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <article
                className={`flex w-full h-full flex-col justify-center gap-2 rounded-lg bg-gradient-to-b ${getBackgroundGradient(
                    time.getHours()
                )} py-10 px-10 text-white shadow-sm`}
            >
                <h2 className="text-3xl font-semibold tracking-wide">
                    {getGreeting(time.getHours())}
                </h2>
                <p className="text-xl font-light" suppressHydrationWarning>
                    {days[new Date().getDay()]} • {time.toLocaleTimeString()}
                </p>
            </article>
        </>
    );
}
