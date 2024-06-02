import { useSettings } from '@/hooks/use-settings';

export type BookmarkType = Readonly<{
    icon: string;
    name: string;
    url: string;
}>;

export function useBookmarks() {
    const [bookmarks, setBookmarks] = useSettings<BookmarkType[]>('bookmarks', [
        {
            icon: 'facebook',
            name: 'Facebook',
            url: 'https://www.facebook.com',
        },
        {
            icon: 'github',
            name: 'GitHub',
            url: 'https://www.github.com',
        },
        {
            icon: 'gmail',
            name: 'Gmail',
            url: 'https://www.gmail.com',
        },
        {
            icon: 'instagram',
            name: 'Instagram',
            url: 'https://www.instagram.com',
        },
        {
            icon: 'twitter',
            name: 'Twitter',
            url: 'https://www.twitter.com',
        },
        {
            icon: 'youtube',
            name: 'Youtube',
            url: 'https://www.youtube.com',
        },
    ]);

    const addBookmark = (bookmark: BookmarkType) => {
        const newBookmarks = [...bookmarks, bookmark];
        setBookmarks(newBookmarks);
    };

    const removeBookmark = (index: number) => {
        const newBookmarks = [...bookmarks];
        newBookmarks.splice(index, 1);
        setBookmarks(newBookmarks);
    };

    return { bookmarks, addBookmark, removeBookmark };
}
