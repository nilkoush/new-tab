import Image from 'next/image';
import type { FC, ReactNode } from 'react';

interface BookmarkProps {
    children?: ReactNode;
    icon: string;
    name: string;
    url: string;
}

const Bookmark: FC<BookmarkProps> = ({ children, icon, name, url }) => {
    return (
        <>
            <li>
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
            </li>
        </>
    );
};

export default Bookmark;
