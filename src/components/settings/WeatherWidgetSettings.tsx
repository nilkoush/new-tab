import { Switch } from '@headlessui/react';
import type { FC } from 'react';

export interface WeatherWidgetSettingsProps {
    weatherWidget: boolean;
    setWeatherWidget: (value: boolean) => void;
    temperatureUnit: 'C' | 'F';
    setTemperatureUnit: (temperatureUnit: 'C' | 'F') => void;
}

const WeatherWidgetSettings: FC<WeatherWidgetSettingsProps> = ({
    weatherWidget,
    setWeatherWidget,
    temperatureUnit,
    setTemperatureUnit,
}) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-2">
                    <h2 className="font-bold text-gray-900">Weather Widget</h2>
                    <Switch
                        className={`${
                            weatherWidget
                                ? 'bg-gray-900 hover:bg-gray-800'
                                : 'bg-black/10 hover:bg-black/20 active:bg-black/20'
                        } inline-flex h-6 w-11 items-center rounded-full transition-all`}
                        id="weatherWidget"
                        checked={weatherWidget}
                        onChange={setWeatherWidget}
                    >
                        <span className="sr-only">Toggle Weather Widget</span>
                        <span
                            aria-hidden="true"
                            className={`${
                                weatherWidget
                                    ? 'translate-x-6'
                                    : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                    </Switch>
                </div>
                <div className="flex w-full flex-col gap-1">
                    <label
                        className="text-sm font-semibold text-gray-900"
                        htmlFor="temperatureUnit"
                    >
                        Temperature Unit:
                    </label>
                    <select
                        className="cursor-pointer rounded-lg bg-black/5 px-3 py-2 text-gray-700 outline-none transition-colors hover:bg-black/[0.075] hover:text-gray-900 focus:bg-black/[0.075]"
                        name=""
                        id="temperatureUnit"
                        value={temperatureUnit}
                        onChange={(e) =>
                            setTemperatureUnit(e.target.value as 'C' | 'F')
                        }
                    >
                        <option className="bg-white" value="C">
                            C
                        </option>
                        <option className="bg-white" value="F">
                            F
                        </option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default WeatherWidgetSettings;
