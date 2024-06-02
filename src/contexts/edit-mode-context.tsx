'use client';

import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from 'react';

type EditModeContextType = {
    isEditMode: boolean;
    setEditMode: Dispatch<SetStateAction<boolean>>;
};

const EditModeContext = createContext<EditModeContextType | null>(null);

type EditModeProviderProps = Readonly<{
    children: React.ReactNode;
}>;

export function EditModeProvider({ children }: EditModeProviderProps) {
    const [isEditMode, setEditMode] = useState(false);

    return (
        <EditModeContext.Provider value={{ isEditMode, setEditMode }}>
            {children}
        </EditModeContext.Provider>
    );
}

export const useEditMode = () => {
    const context = useContext(EditModeContext);

    if (!context) {
        throw new Error('useEditMode must be used within a EditModeProvider');
    }

    const isEditMode = context.isEditMode;

    const enableEditMode = () => {
        context.setEditMode(true);
    };

    const disableEditMode = () => {
        context.setEditMode(false);
    };

    const toggleEditMode = () => {
        context.setEditMode((prev) => !prev);
    };

    return { isEditMode, enableEditMode, disableEditMode, toggleEditMode };
};
