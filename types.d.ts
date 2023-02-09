export interface Settings {
    backgroundImage: string;
    temperatureUnit: 'C' | 'F';
    bookmarks: BookmarkType[];
}

export interface BookmarkType {
    icon: string;
    name: string;
    url: string;
}

export interface SearchEngine {
    name: string;
    queryUrl: string;
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
