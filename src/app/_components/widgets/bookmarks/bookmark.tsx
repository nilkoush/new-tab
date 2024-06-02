'use client';

import { useEditMode } from '@/contexts/edit-mode-context';
import Image from 'next/image';
import { LuMinus } from 'react-icons/lu';

type BookmarkProps = Readonly<{
    id: number;
    icon: string;
    name: string;
    url: string;
    removeBookmark: (id: number) => void;
}>;

export default function Bookmark({
    id,
    icon,
    name,
    url,
    removeBookmark,
}: BookmarkProps) {
    const { isEditMode } = useEditMode();

    return (
        <>
            <li className="relative">
                <a
                    className="flex flex-col content-start items-center gap-2 rounded-lg px-3 py-3 text-sm text-white shadow-sm transition-colors duration-200 hover:bg-[#3B3A43]"
                    href={url}
                >
                    <Image
                        src={`https://www.vectorlogo.zone/logos/${icon}/${icon}-tile.svg`}
                        alt={name}
                        width={65}
                        height={65}
                    />
                    {name}
                </a>
                {isEditMode && (
                    <button
                        className="absolute p-1 rounded-full bg-gray-500 -top-2 text-gray-950 -right-2"
                        onClick={() => removeBookmark(id)}
                    >
                        <LuMinus />
                    </button>
                )}
            </li>
        </>
    );
}
