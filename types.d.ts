export interface Parameters {
	name?: string;
	temperatureUnit?: 'C' | 'F';
	backgroundImage?: string;
	countryCode?: string;
}

export interface Weather {
	main: {
		temp: number;
	};
	weather: [
		something: {
			description: string;
			icon: string;
		}
	];
}
