'use client';

import Bookmark from '@/app/_components/widgets/bookmarks/bookmark';
import NewBookmark from '@/app/_components/widgets/bookmarks/new-bookmark';
import { useEditMode } from '@/contexts/edit-mode-context';
import { useBookmarks } from '@/hooks/use-bookmarks';

export default function Bookmarks() {
    const { isEditMode } = useEditMode();
    const { bookmarks, removeBookmark, addBookmark } = useBookmarks();

    return (
        <>
            <ul className="flex flex-wrap items-center justify-center gap-4">
                {bookmarks && (
                    <>
                        {bookmarks.map((bookmark, index: number) => (
                            <Bookmark
                                key={index}
                                id={index}
                                icon={bookmark.icon}
                                name={bookmark.name}
                                url={bookmark.url}
                                removeBookmark={removeBookmark}
                            />
                        ))}
                    </>
                )}
                {isEditMode && <NewBookmark addBookmark={addBookmark} />}
            </ul>
        </>
    );
}
