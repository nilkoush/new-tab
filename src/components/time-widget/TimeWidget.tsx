import { FC, ReactNode, useEffect, useState } from 'react';

interface TimeWidgetProps {
	children?: ReactNode;
}

const TimeWidget: FC<TimeWidgetProps> = ({ children }) => {
	const [time, setTime] = useState('00:00:00');

	useEffect(() => {
		getTime();
	}, []);

	const getTime = () => {
		let current = new Date().toLocaleTimeString();
		setTime(current);
		setTimeout(getTime, 1000);
	};

	const getGreeting = () => {
		const hours = Number(time.slice(0, 1));
		if (hours < 6) {
			return 'Good night.';
		} else if (hours < 12) {
			return 'Good morning.';
		} else if (hours < 18) {
			return 'Good afternoon.';
		} else if (hours < 24) {
			return 'Good evening.';
		}
	};

	const getBackgroundGradient = () => {
		const hours = +time.slice(0, 1);
		if (hours < 6) {
			return 'from-[#152853] to-[#040c24]';
		} else if (hours < 12) {
			return 'from-[#804565] to-[#AA585B]';
		} else if (hours < 18) {
			return 'from-[#7dc7ff] to-[#3e67ed]';
		} else if (hours < 24) {
			return 'from-[#50366F] to-[#1F214D]';
		}
	};

	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	return (
		<>
			<article
				className={`flex w-full flex-col justify-center gap-2 rounded-lg bg-gradient-to-b ${getBackgroundGradient()} py-8 px-8 text-white shadow-sm`}
			>
				<h2 className="text-3xl font-semibold tracking-wide">
					{getGreeting()}
				</h2>
				<p className="text-xl font-light">
					{days[new Date().getDay()]} • {time}
				</p>
			</article>
		</>
	);
};

export default TimeWidget;
