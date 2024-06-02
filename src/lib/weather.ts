import InitWeather from 'openweathermap-ts';

async function getCoords() {
    let latitude: number = 0;
    let longitude: number = 0;

    await fetch('https://get.geojs.io/v1/ip/geo.json')
        .then((res) => res.json())
        .then((data: any) => {
            latitude = data.latitude;
            longitude = data.longitude;
        });

    return { latitude, longitude };
}

export default async function getWeather() {
    let { latitude, longitude } = await getCoords();

    const Weather = new InitWeather({
        apiKey: process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY as string,
        language: 'EN',
    });
    const currentWeather: any = await Weather.getCurrentWeatherByGeoCoordinates(
        latitude,
        longitude
    );
    if (Number(currentWeather.cod) === 400) return 'Bad latitude or longitude!';
    return currentWeather;
}
