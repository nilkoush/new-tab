'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type FadeInProps = Readonly<{
    children?: ReactNode;
}>;

export default function FadeIn({ children }: FadeInProps) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
            >
                {children}
            </motion.div>
        </>
    );
}
