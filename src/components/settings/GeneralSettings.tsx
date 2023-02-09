import type { FC } from 'react';

export interface GeneralSettingsProps {
    backgroundImage: string;
    setBackgroundImage: (backgroundImage: string) => void;
}

const GeneralSettings: FC<GeneralSettingsProps> = ({
    backgroundImage,
    setBackgroundImage,
}) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-gray-900">General</h2>
                <div className="flex flex-col gap-1">
                    <label
                        className="text-sm font-semibold text-gray-900"
                        htmlFor="backgroundImage"
                    >
                        Background Image
                    </label>
                    <input
                        className="rounded-lg bg-black/5 px-3 py-2 text-gray-700 outline-none transition-colors hover:bg-black/[0.075] hover:text-gray-900 focus:bg-black/[0.075]"
                        type="text"
                        id="backgroundImage"
                        value={backgroundImage}
                        onChange={(e: any) =>
                            setBackgroundImage(e.target.value)
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default GeneralSettings;
