'use client';

import Bookmarks from '@/app/_components/widgets/bookmarks/bookmarks';
import SearchBar from '@/app/_components/widgets/search-bar';
import TimeWidget from '@/app/_components/widgets/time-widget';
import WeatherWidget from '@/app/_components/widgets/weather-widget';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export const widgets = [
    {
        id: 'weather',
        name: 'Weather',
        component: WeatherWidget,
    },
    {
        id: 'time',
        name: 'Time',
        component: TimeWidget,
    },
    {
        id: 'search_bar',
        name: 'Search bar',
        component: SearchBar,
    },
    {
        id: 'bookmarks',
        name: 'Bookmarks',
        component: Bookmarks,
    },
] as const;

type SlotSelectProps = Readonly<{
    setSlot: (value: string | null) => void;
    select: boolean;
    setSelect: Dispatch<SetStateAction<boolean>>;
}>;

export default function SlotSelect({
    setSlot,
    select,
    setSelect,
}: SlotSelectProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener('click', (e) => {});
    }, []);

    return (
        <>
            <div className="flex flex-col rounded-md bg-[#38383d] gap-2 w-full absolute -bottom-8">
                {widgets.map((widget) => (
                    <div
                        className="w-full shadow-sm text-white"
                        onClick={() => {
                            setSlot(widget.id);
                            setSelect(false);
                        }}
                        ref={ref}
                        key={widget.id}
                    >
                        <h2>{widget.name}</h2>
                    </div>
                ))}
            </div>
        </>
    );
}
