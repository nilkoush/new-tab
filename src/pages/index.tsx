import Bookmark from '@components/bookmark';
import TimeWidget from '@components/time-widget';
import WeatherWidget from '@components/weatger-widget';
import { Parameters } from '@types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function HomePage() {
	const router = useRouter();
	const params: Parameters = router.query;

	const searchRef = useRef<HTMLInputElement>(null);

	const [background, setBackground] = useState(
		'https://source.unsplash.com/random/1920x1080?iceland'
	);
	const [temperatureUnit, setTemperatureUnit] = useState<'C' | 'F'>('C');

	useEffect(() => {
		if (params.background) setBackground(params.background);
		params.temperatureUnit == 'F'
			? setTemperatureUnit('F')
			: setTemperatureUnit('C');
	}, [params.background, params.temperatureUnit]);

	useEffect(() => {
		if (background.includes('http')) {
			setBackground(`url('${background}')`);
		}
	}, []);

	const bookmarks = [
		{
			icon: '/facebook-tile.svg',
			name: 'Facebook',
			url: 'https://www.facebook.com',
		},
		{
			icon: '/github-tile.svg',
			name: 'GitHub',
			url: 'https://www.github.com',
		},
		{
			icon: '/gmail-tile.svg',
			name: 'Gmail',
			url: 'https://www.gmail.com',
		},
		{
			icon: '/instagram-tile.svg',
			name: 'Instagram',
			url: 'https://www.instagram.com',
		},
		{
			icon: '/twitter-tile.svg',
			name: 'Twitter',
			url: 'https://www.twitter.com',
		},
		{
			icon: '/youtube-tile.svg',
			name: 'Youtube',
			url: 'https://www.youtube.com',
		},
	];

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
				className={`bg-cover bg-center bg-no-repeat`}
				style={{ background: background }}
			>
				<div className="backdrop-brightness-[15%]">
					<main className="container flex h-screen flex-col items-center justify-center gap-8">
						<section className="flex w-full flex-col justify-between gap-2 md:flex-row">
							<TimeWidget />
							<WeatherWidget temperatureUnit={temperatureUnit} />
						</section>
						<form
							className="flex w-full gap-2 rounded-md bg-[#38383d] shadow-sm"
							onSubmit={(e) => {
								e.preventDefault();
								if (
									searchRef.current?.value != null &&
									searchRef.current.value != ''
								) {
									if (
										searchRef.current.value.startsWith(
											'https://'
										)
									) {
										return router.push(
											searchRef.current.value
										);
									} else {
										return router.push(
											`https://www.google.com/search?q=${searchRef.current.value}`
										);
									}
								}
							}}
						>
							<input
								className="w-full rounded-lg bg-transparent py-4 px-4 text-[#b1b1bd] outline-none"
								type="text"
								placeholder="Search"
								ref={searchRef}
							/>
							<button className="flex items-center justify-center rounded-lg py-4 px-4 text-[#b1b1bd]">
								<BiSearchAlt2 className="h-6 w-6" />
							</button>
						</form>
						<ul className="flex flex-wrap items-center justify-center gap-4">
							{bookmarks.map((bookmark, index) => (
								<Bookmark
									key={index}
									icon={bookmark.icon}
									name={bookmark.name}
									url={bookmark.url}
								/>
							))}
						</ul>
					</main>
				</div>
			</div>
		</>
	);
}
