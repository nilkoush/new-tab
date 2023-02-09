import { BookmarkType } from '@types';
import Image from 'next/image';
import { FC, useState } from 'react';
import { IoClose } from 'react-icons/io5';

export interface BookmarksProps {
    bookmarks: BookmarkType[];
    addBookmark: (bookmark: BookmarkType) => void;
    removeBookmark: (index: number) => void;
}

const Bookmarks: FC<BookmarksProps> = ({
    bookmarks,
    addBookmark,
    removeBookmark,
}) => {
    const [create, setCreate] = useState(false);
    const [icon, setIcon] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (icon === '' || name === '' || url === '') {
            setCreate(false);
            return;
        }
        addBookmark({ icon, name, url });
        setCreate(false);
        setIcon('');
        setName('');
        setUrl('');
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-gray-900">Bookmarks</h2>
                <ul className="flex flex-col gap-2">
                    {bookmarks.map((bookmark, index) => (
                        <li
                            className="flex items-center justify-between"
                            key={index}
                        >
                            <div className="flex items-center gap-2">
                                <Image
                                    src={`https://www.vectorlogo.zone/logos/${bookmark.icon}/${bookmark.icon}-tile.svg`}
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                                <p className="font-bold text-gray-900">
                                    {bookmark.name}
                                </p>
                            </div>
                            <a
                                className="hidden text-gray-700 underline sm:block"
                                href={`${bookmark.url}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {bookmark.url}
                            </a>
                            <button
                                className="rounded-lg p-1 text-gray-900 transition-all duration-200 hover:bg-black/5 active:scale-95 active:bg-black/5 "
                                onClick={() => removeBookmark(index)}
                            >
                                <IoClose className="h-6 w-6" />
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    {!create && (
                        <button
                            className="italic text-gray-700 transition-colors hover:text-gray-900"
                            onClick={() => setCreate(true)}
                        >
                            Create new bookmark...
                        </button>
                    )}
                    {create && (
                        <form
                            className="grid w-full grid-cols-1 items-end gap-2 md:grid-cols-[1fr_1fr_2fr_1fr]"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-semibold text-gray-900"
                                    htmlFor="bookmarkIcon"
                                >
                                    Bookmark Icon
                                </label>
                                <input
                                    className="rounded-lg bg-black/5 p-2 text-black/80 outline-none transition-all hover:bg-black/10 hover:text-black focus:bg-black/10"
                                    type="text"
                                    id="bookmarkIcon"
                                    value={icon}
                                    onChange={(e) => setIcon(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-semibold text-gray-900"
                                    htmlFor="bookmarkName"
                                >
                                    Bookmark Name
                                </label>
                                <input
                                    className="rounded-lg bg-black/5 p-2 text-black/80 outline-none transition-all hover:bg-black/10 hover:text-black focus:bg-black/10"
                                    type="text"
                                    id="bookmarkName"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-semibold text-gray-900"
                                    htmlFor="bookmarkUrl"
                                >
                                    Bookmark URL
                                </label>
                                <input
                                    className="rounded-lg bg-black/5 p-2 text-black/80 outline-none transition-all hover:bg-black/10 hover:text-black focus:bg-black/10"
                                    type="text"
                                    id="bookmarkUrl"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </div>
                            <button
                                className="rounded-md bg-gray-900 px-3 py-2 text-white transition-colors hover:bg-gray-800"
                                type="submit"
                            >
                                Create
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default Bookmarks;
