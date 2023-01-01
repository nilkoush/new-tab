import { Weather } from '@types';
import getWeather from '@utils/getWeather';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

interface WeatherWidgetProps {
	temperatureUnit: 'C' | 'F';
}

const WeatherWidget: FC<WeatherWidgetProps> = ({ temperatureUnit }) => {
	const [weather, setWeather] = useState<Weather>({
		main: {
			temp: 0,
		},
		weather: [
			{
				description: 'Loading...',
				icon: '50d',
			},
		],
	});

	useEffect(() => {
		(async () => {
			let currentWeather = await getWeather();
			setWeather(currentWeather);
		})();
	}, []);

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
				className={`flex w-full gap-2 rounded-lg bg-gradient-to-b ${getBackgroundGradient()} py-8 px-8 text-white shadow-sm`}
			>
				<Image
					src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt={weather.weather[0].description}
					width={100}
					height={100}
				/>
				<div className="flex flex-col justify-center">
					<h2 className="text-3xl font-semibold tracking-wide">
						{temperatureUnit === 'C'
							? ((weather.main.temp - 32) / 1.8).toFixed(2)
							: weather.main.temp}
						º {temperatureUnit}
					</h2>
					<p className="text-xl font-light">
						{weather.weather[0].description.replace(
							/(^\w{1})|(\s+\w{1})/g,
							(letter) => letter.toUpperCase()
						)}
					</p>
				</div>
			</article>
		</>
	);
};

export default WeatherWidget;
