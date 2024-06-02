'use client';

import { search } from '@/app/actions/search';
import { useEditMode } from '@/contexts/edit-mode-context';
import { useSettings } from '@/hooks/use-settings';
import { IoSearchOutline } from 'react-icons/io5';

export const searchEngines = [
    {
        name: 'Bing',
        queryUrl: 'https://www.bing.com/search?q=',
    },
    {
        name: 'Brave',
        queryUrl: 'https://search.brave.com/search?q=',
    },
    {
        name: 'DuckDuckGo',
        queryUrl: 'https://duckduckgo.com/?q=',
    },
    {
        name: 'Google',
        queryUrl: 'https://www.google.com/search?q=',
    },
];

export default function SearchBar() {
    const [searchEngine, setSearchEngine] = useSettings(
        'search_engine',
        searchEngines[0].queryUrl
    );
    const { isEditMode } = useEditMode();

    return (
        <>
            <form
                className="flex w-full gap-2 rounded-md bg-[#38383d] shadow-sm"
                action={search}
                suppressHydrationWarning
            >
                <input
                    className="w-full rounded-lg bg-transparent py-4 px-4 text-[#b1b1bd] outline-none"
                    type="text"
                    placeholder="Search"
                    name="search"
                    disabled={isEditMode}
                />
                {!isEditMode ? (
                    <button className="flex items-center justify-center py-4 px-4 rounded-lg text-[#b1b1bd]">
                        <IoSearchOutline className="h-6 w-6" />
                    </button>
                ) : (
                    <select
                        className="rounded-lg bg-transparent outline-none py-4 px-4 text-[#b1b1bd]"
                        value={searchEngine}
                        onChange={(e) => setSearchEngine(e.target.value)}
                    >
                        {searchEngines.map((engine) => (
                            <option
                                className="bg-[#38383d] text-white"
                                value={engine.queryUrl}
                                key={engine.name}
                            >
                                {engine.name}
                            </option>
                        ))}
                    </select>
                )}
            </form>
        </>
    );
}
