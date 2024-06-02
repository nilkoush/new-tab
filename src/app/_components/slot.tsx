'use client';

import SlotSelect, { widgets } from '@/app/_components/slot-select';
import { useEditMode } from '@/contexts/edit-mode-context';
import { useSettings } from '@/hooks/use-settings';
import { cn } from '@/lib/utils';
import { ElementType, useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';

type SlotProps = Readonly<{
    defaultWidget: (typeof widgets)[number]['id'];
    defaultState: any;
    id: string;
}>;

export default function Slot({ defaultWidget, defaultState, id }: SlotProps) {
    const [slot, setSlot] = useSettings<string | null>(
        `slot-${id}`,
        defaultWidget
    );
    const { isEditMode } = useEditMode();
    const [select, setSelect] = useState(false);
    const Element = widgets.find((widget) => widget.id === slot)
        ?.component as ElementType;

    if (isEditMode) {
        return (
            <>
                {!slot ? (
                    <div className="w-full h-full relative">
                        <div
                            className={cn(
                                'border-gray-500 hidden border-2 backdrop-blur-3xl bg-white/5 hover:border-white transition-all cursor-pointer group border-dashed justify-center w-full h-full items-center',
                                isEditMode && 'flex'
                            )}
                            onClick={() => setSelect((prev) => !prev)}
                        >
                            <LuPlus className="w-12 h-12 group-hover:text-white transition-all text-gray-500" />
                        </div>
                        {select && (
                            <SlotSelect
                                select={select}
                                setSlot={setSlot}
                                setSelect={setSelect}
                            />
                        )}
                    </div>
                ) : (
                    <>
                        <div className="relative w-full h-full animate-jiggle">
                            <Element defaultState={defaultState} />
                            <button
                                className="absolute p-1 rounded-full bg-gray-500 -top-2 text-gray-950 -left-2"
                                onClick={() => setSlot(null)}
                            >
                                <LuMinus />
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }

    if (slot) {
        return <Element defaultState={defaultState} />;
    }
}
