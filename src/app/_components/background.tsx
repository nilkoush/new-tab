'use client';

import { useSettings } from '@/hooks/use-settings';
import { type ReactNode } from 'react';

type BackgroundProps = Readonly<{
    children?: ReactNode;
}>;

export default function Background({ children }: BackgroundProps) {
    const [backgroundImage, setBackgroundImage] = useSettings(
        'background_image',
        'https://source.unsplash.com/random/1920x1080?iceland'
    );

    return (
        <>
            <div
                className="relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {children}
            </div>
        </>
    );
}
