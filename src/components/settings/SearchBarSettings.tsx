import { Switch } from '@headlessui/react';
import { searchEngines } from '@pages/index';
import { SearchEngine } from '@types';
import type { FC } from 'react';

export interface SearchBarSettingsProps {
    searchBar: boolean;
    setSearchBar: (value: boolean) => void;
    searchEngine: SearchEngine;
    setSearchEngine: (searchEngine: SearchEngine) => void;
}

const SearchBarSettings: FC<SearchBarSettingsProps> = ({
    searchBar,
    setSearchBar,
    searchEngine,
    setSearchEngine,
}) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-2">
                    <h2 className="font-bold text-gray-900">Search Bar</h2>
                    <Switch
                        className={`${
                            searchBar
                                ? 'bg-gray-900 hover:bg-gray-800'
                                : 'bg-black/5 hover:bg-black/10 active:bg-black/10'
                        } inline-flex h-6 w-11 items-center rounded-full transition-all`}
                        id="timeWidget"
                        checked={searchBar}
                        onChange={setSearchBar}
                    >
                        <span className="sr-only">Search bar visibility</span>
                        <span
                            aria-hidden="true"
                            className={`${
                                searchBar ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                    </Switch>
                </div>
                <div className="flex w-full flex-col gap-1">
                    <label
                        className="text-sm font-semibold text-gray-900"
                        htmlFor="searchEngine"
                    >
                        Search Engine:
                    </label>
                    <select
                        className="cursor-pointer rounded-lg bg-black/5 px-3 py-2 text-gray-700 outline-none transition-colors hover:bg-black/[0.075] hover:text-gray-900 focus:bg-black/[0.075]"
                        name=""
                        id="searchEngine"
                        value={searchEngine.name}
                        onChange={(e) =>
                            setSearchEngine(
                                searchEngines.filter(
                                    (se) => e.target.value === se.name
                                )[0]
                            )
                        }
                    >
                        {searchEngines.map((se, index) => (
                            <option
                                className="bg-white text-gray-900"
                                value={se.name}
                                key={index}
                            >
                                {se.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default SearchBarSettings;
