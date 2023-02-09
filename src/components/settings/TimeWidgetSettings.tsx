import { Switch } from '@headlessui/react';
import type { FC } from 'react';

export interface TimeWidgetSettingsProps {
    timeWidget: boolean;
    setTimeWidget: (value: boolean) => void;
}

const TimeWidgetSettings: FC<TimeWidgetSettingsProps> = ({
    timeWidget,
    setTimeWidget,
}) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-2">
                    <h2 className="font-bold text-gray-900">Time Widget</h2>
                    <Switch
                        className={`${
                            timeWidget
                                ? 'bg-gray-900 hover:bg-gray-800'
                                : 'bg-black/10 hover:bg-black/20 active:bg-black/20'
                        } inline-flex h-6 w-11 items-center rounded-full transition-all`}
                        id="timeWidget"
                        checked={timeWidget}
                        onChange={setTimeWidget}
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            aria-hidden="true"
                            className={`${
                                timeWidget ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default TimeWidgetSettings;
