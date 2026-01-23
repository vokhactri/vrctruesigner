import React from 'react';
import { cn } from '@/lib/utils/cn';

interface OutlinedContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function OutlinedContainer({ children, className }: OutlinedContainerProps) {
    return (
        <div className={cn(
            "max-w-[1200px] mx-auto w-full",
            "border border-white/10 rounded-2xl",
            "bg-deep-dark/60 backdrop-blur-md",
            "p-8 md:p-12",
            "shadow-2xl",
            className
        )}>
            {children}
        </div>
    );
}
