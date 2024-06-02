import { useEditMode } from '@/contexts/edit-mode-context';
import { useSettings } from '@/hooks/use-settings';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type WeatherWidgetProps = Readonly<{
    defaultState: any;
}>;

export default function WeatherWidget({ defaultState }: WeatherWidgetProps) {
    const weather = defaultState;
    const { isEditMode } = useEditMode();
    const [temperatureUnit, setTemperatureUnit] = useSettings(
        'temperature_unit',
        'C'
    );

    const getBackgroundGradient = () => {
        if (temperatureUnit === 'C') {
            const temperature = Number(
                ((weather.main.temp - 32) / 1.8).toFixed(2)
            );

            if (temperature <= 0) {
                return 'from-[#12a1c0] to-[#07729f]';
            } else if (temperature <= 30) {
                return 'from-[#74d4cc] to-[#61d0cf]';
            } else {
                return 'from-[#f18448] to-[#f06b7e]';
            }
        } else {
            const temperature = weather.main.temp;

            if (temperature <= 32) {
                return 'from-[#12a1c0] to-[#07729f]';
            } else if (temperature <= 86) {
                return 'from-[#74d4cc] to-[#61d0cf]';
            } else {
                return 'from-[#f18448] to-[#f06b7e]';
            }
        }
    };

    return (
        <>
            <article
                className={`flex w-full h-full items-center gap-2 rounded-lg bg-gradient-to-b ${getBackgroundGradient()} py-10 px-10 text-white shadow-sm`}
            >
                <Image
                    className="h-[4.5rem] w-[4.5rem]"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                    width={100}
                    height={100}
                    priority
                />
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold tracking-wide">
                        {temperatureUnit === 'C'
                            ? ((weather.main.temp - 32) / 1.8).toFixed(2)
                            : weather.main.temp}
                        º{' '}
                        {!isEditMode ? (
                            <>{temperatureUnit}</>
                        ) : (
                            <select
                                className={cn(
                                    'bg-gradient-to-b border-gray-500 border bg-white/5 hover:border-white transition-all cursor-pointer hover:text-white text-gray-500 border-dashed outline-none items-center',
                                    getBackgroundGradient()
                                )}
                                value={temperatureUnit}
                                onChange={(e) =>
                                    setTemperatureUnit(e.target.value)
                                }
                            >
                                <option
                                    className="bg-[#38383d] text-white"
                                    value="C"
                                >
                                    C
                                </option>
                                <option
                                    className="bg-[#38383d] text-white"
                                    value="F"
                                >
                                    F
                                </option>
                            </select>
                        )}
                    </h2>
                    <p className="text-xl font-light">
                        {weather.weather[0].description.replace(
                            /(^\w{1})|(\s+\w{1})/g,
                            (letter: any) => letter.toUpperCase()
                        )}
                    </p>
                </div>
            </article>
        </>
    );
}
