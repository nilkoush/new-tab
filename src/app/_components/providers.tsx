'use client';

import { EditModeProvider } from '@/contexts/edit-mode-context';
import type { ReactNode } from 'react';

type ProvidersProps = Readonly<{
    children?: ReactNode;
}>;

export default function Providers({ children }: ProvidersProps) {
    return (
        <>
            <EditModeProvider>{children}</EditModeProvider>
        </>
    );
}
