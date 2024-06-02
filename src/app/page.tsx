import Background from '@/app/_components/background';
import Dashboard from '@/app/_components/dashboard';
import FadeIn from '@/app/_components/fade-in';
import Slot from '@/app/_components/slot';
import getWeather from '@/lib/weather';

export default async function HomePage() {
    const weather = await getWeather();

    return (
        <>
            <Background>
                <div className="backdrop-brightness-[15%]">
                    <FadeIn>
                        <Dashboard />
                        <main className="container flex h-screen flex-col items-center justify-center gap-8">
                            <section className="flex w-full flex-col justify-between gap-2 md:flex-row">
                                <Slot
                                    defaultWidget="time"
                                    id="1"
                                    defaultState={weather}
                                />
                                <Slot
                                    defaultWidget="weather"
                                    id="2"
                                    defaultState={weather}
                                />
                            </section>
                            <div className="flex w-full">
                                <Slot
                                    defaultWidget="search_bar"
                                    id="3"
                                    defaultState={weather}
                                />
                            </div>
                            <div className="w-full">
                                <Slot
                                    defaultWidget="bookmarks"
                                    id="4"
                                    defaultState={weather}
                                />
                            </div>
                        </main>
                    </FadeIn>
                </div>
            </Background>
        </>
    );
}
