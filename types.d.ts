export interface Parameters {
	name?: string;
	temperatureUnit?: 'C' | 'F';
	background?: string;
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
