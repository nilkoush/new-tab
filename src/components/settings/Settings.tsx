import Bookmarks from '@components/settings/Bookmarks';
import GeneralSettings from '@components/settings/GeneralSettings';
import SearchBarSettings from '@components/settings/SearchBarSettings';
import TimeWidgetSettings from '@components/settings/TimeWidgetSettings';
import WeatherWidgetSettings from '@components/settings/WeatherWidgetSettings';
import { Dialog, Transition } from '@headlessui/react';
import { SearchEngine } from '@pages/index';
import { BookmarkType } from '@types';
import { Fragment, type FC } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

export interface SettingsProps {
    isOpen: boolean;
    closeModal: () => void;
    backgroundImage: string;
    setBackgroundImage: (backgroundImage: string) => void;
    temperatureUnit: 'C' | 'F';
    setTemperatureUnit: (temperatureUnit: 'C' | 'F') => void;
    bookmarks: BookmarkType[];
    addBookmark: (bookmark: BookmarkType) => void;
    removeBookmark: (index: number) => void;
    searchEngine: SearchEngine;
    setSearchEngine: (searchEngine: SearchEngine) => void;
    searchBar: boolean;
    setSearchBar: (value: boolean) => void;
    timeWidget: boolean;
    setTimeWidget: (value: boolean) => void;
    weatherWidget: boolean;
    setWeatherWidget: (value: boolean) => void;
}

const Settings: FC<SettingsProps> = ({
    isOpen,
    closeModal,
    backgroundImage,
    setBackgroundImage,
    temperatureUnit,
    setTemperatureUnit,
    bookmarks,
    addBookmark,
    removeBookmark,
    searchEngine,
    setSearchEngine,
    searchBar,
    setSearchBar,
    timeWidget,
    setTimeWidget,
    weatherWidget,
    setWeatherWidget,
}) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-60" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-screen items-center justify-center px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="flex w-full max-w-3xl flex-col gap-8 rounded-2xl bg-white px-6 py-8 shadow-xl transition-all">
                                    <Dialog.Title className="flex items-center gap-2 text-3xl font-bold leading-6 text-gray-900">
                                        <IoSettingsOutline className="h-8 w-8" />
                                        Settings
                                    </Dialog.Title>

                                    <main className="flex w-full flex-col gap-4">
                                        <GeneralSettings
                                            backgroundImage={backgroundImage}
                                            setBackgroundImage={
                                                setBackgroundImage
                                            }
                                        />
                                        <hr />
                                        <SearchBarSettings
                                            searchBar={searchBar}
                                            setSearchBar={setSearchBar}
                                            searchEngine={searchEngine}
                                            setSearchEngine={setSearchEngine}
                                        />
                                        <hr />
                                        <TimeWidgetSettings
                                            timeWidget={timeWidget}
                                            setTimeWidget={setTimeWidget}
                                        />
                                        <hr />
                                        <WeatherWidgetSettings
                                            weatherWidget={weatherWidget}
                                            setWeatherWidget={setWeatherWidget}
                                            temperatureUnit={temperatureUnit}
                                            setTemperatureUnit={
                                                setTemperatureUnit
                                            }
                                        />
                                        <hr />
                                        <Bookmarks
                                            bookmarks={bookmarks}
                                            addBookmark={addBookmark}
                                            removeBookmark={removeBookmark}
                                        />
                                    </main>
                                    <footer className="w-full">
                                        <button
                                            className="w-full rounded-md bg-gray-900 px-3 py-2 font-bold text-white transition-colors hover:bg-gray-800"
                                            onClick={closeModal}
                                        >
                                            Save
                                        </button>
                                    </footer>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Settings;
