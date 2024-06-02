import { BookmarkType } from '@/hooks/use-bookmarks';
import { cn } from '@/lib/utils';
import { LuPlus } from 'react-icons/lu';

type NewBookmarkProps = Readonly<{
    addBookmark: (bookmark: BookmarkType) => void;
}>;

export default function NewBookmark({ addBookmark }: NewBookmarkProps) {
    return (
        <>
            <li
                className={cn(
                    'border-gray-500 relative border-2 backdrop-blur-3xl bg-white/5 hover:border-white transition-all cursor-pointer group border-dashed justify-center items-center'
                )}
            >
                <LuPlus className="w-12 h-12 group-hover:text-white transition-all text-gray-500" />
            </li>
        </>
    );
}
