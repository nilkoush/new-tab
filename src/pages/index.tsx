import Bookmark from '@components/bookmark';
import Settings from '@components/settings';
import TimeWidget from '@components/time-widget';
import WeatherWidget from '@components/weather-widget';
import { BookmarkType, SearchEngine } from '@types';
import { motion } from 'framer-motion';
import { useBookmarks } from 'hooks/useBookmarks';
import { useSettings } from 'hooks/useSettings';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useRef, useState } from 'react';
import {
    IoLogoGithub,
    IoSearchOutline,
    IoSettingsOutline,
} from 'react-icons/io5';

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
    {
        name: 'Heexy',
        queryUrl: 'https://search.heexy.org/search?q=',
    },
    {
        name: 'Seznam',
        queryUrl: 'https://search.seznam.cz/?q=',
    },
];

export default function HomePage() {
    const router = useRouter();

    const searchRef = useRef<HTMLInputElement>(null);

    const [backgroundImage, setBackgroundImage] = useSettings(
        'backgroundImage',
        'https://source.unsplash.com/random/1920x1080?iceland'
    );
    const [temperatureUnit, setTemperatureUnit] = useSettings<'C' | 'F'>(
        'temperatureUnit',
        'C'
    );
    const [bookmarks, addBookmark, removeBookmark] = useBookmarks();
    const [searchEngine, setSearchEngine] = useSettings<SearchEngine>(
        'searchEngine',
        searchEngines[3]
    );
    const [searchBar, setSearchBar] = useSettings('searchBar', true);
    const [timeWidget, setTimeWidget] = useSettings('timeWidget', true);
    const [weatherWidget, setWeatherWidget] = useSettings(
        'weatherWidget',
        true
    );
    const [isOpen, setOpen] = useState(false);

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchRef.current?.value != null && searchRef.current.value != '') {
            if (searchRef.current.value.startsWith('https://')) {
                return router.push(searchRef.current.value);
            } else {
                return router.push(
                    `${searchEngine.queryUrl}${searchRef.current.value}`
                );
            }
        }
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Head>
                <title>New Tab</title>
                <meta
                    name="description"
                    content="A stunning New Tab experience"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div
                className="relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <Settings
                    isOpen={isOpen}
                    closeModal={closeModal}
                    backgroundImage={backgroundImage}
                    setBackgroundImage={setBackgroundImage}
                    temperatureUnit={temperatureUnit}
                    setTemperatureUnit={setTemperatureUnit}
                    bookmarks={bookmarks}
                    addBookmark={addBookmark}
                    removeBookmark={removeBookmark}
                    searchEngine={searchEngine}
                    setSearchEngine={setSearchEngine}
                    searchBar={searchBar}
                    setSearchBar={setSearchBar}
                    timeWidget={timeWidget}
                    setTimeWidget={setTimeWidget}
                    weatherWidget={weatherWidget}
                    setWeatherWidget={setWeatherWidget}
                />
                <div className="backdrop-brightness-[15%]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ ease: 'easeOut', duration: 0.15 }}
                    >
                        <a
                            className="absolute top-4 right-16 flex flex-col content-start items-center gap-2 rounded-lg p-2 text-sm text-white transition-colors duration-200 hover:bg-[#3B3A43] active:bg-[#3B3A43]"
                            href="https://www.github.com/nilkoush/new-tab"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoLogoGithub className="h-6 w-6" />
                        </a>
                        <button
                            className="absolute top-4 right-4 flex flex-col content-start items-center gap-2 rounded-lg p-2 text-sm text-white transition-colors duration-200 hover:bg-[#3B3A43] active:bg-[#3B3A43]"
                            onClick={() => setOpen(true)}
                        >
                            <IoSettingsOutline className="h-6 w-6" />
                        </button>
                        <main className="container flex h-screen flex-col items-center justify-center gap-8">
                            <section className="flex w-full flex-col justify-between gap-2 md:flex-row">
                                {timeWidget && <TimeWidget />}
                                {weatherWidget && (
                                    <WeatherWidget
                                        temperatureUnit={temperatureUnit}
                                    />
                                )}
                            </section>
                            {searchBar && (
                                <form
                                    className="flex w-full gap-2 rounded-md bg-[#38383d] shadow-sm"
                                    onSubmit={(e) => handleFormSubmit(e)}
                                >
                                    <input
                                        className="w-full rounded-lg bg-transparent py-4 px-4 text-[#b1b1bd] outline-none"
                                        type="text"
                                        placeholder="Search"
                                        ref={searchRef}
                                    />
                                    <button className="flex items-center justify-center rounded-lg py-4 px-4 text-[#b1b1bd]">
                                        <IoSearchOutline className="h-6 w-6" />
                                    </button>
                                </form>
                            )}
                            <ul className="flex flex-wrap items-center justify-center gap-4">
                                {bookmarks && (
                                    <>
                                        {bookmarks.map(
                                            (
                                                bookmark: BookmarkType,
                                                index: number
                                            ) => (
                                                <Bookmark
                                                    key={index}
                                                    icon={bookmark.icon}
                                                    name={bookmark.name}
                                                    url={bookmark.url}
                                                />
                                            )
                                        )}
                                    </>
                                )}
                            </ul>
                        </main>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
