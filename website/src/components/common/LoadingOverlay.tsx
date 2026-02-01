"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingOverlayProps {
    isVisible: boolean;
}

export function LoadingOverlay({ isVisible }: LoadingOverlayProps) {
    const [shouldRender, setShouldRender] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
        } else {
            const timer = setTimeout(() => setShouldRender(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender) return null;

    return (
        <div
            className={cn(
                "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-in-out",
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-busy="true"
            aria-live="polite"
            aria-label="読み込み中"
        >
            <div className="flex flex-col items-center gap-2">
                <div className="text-4xl md:text-6xl font-serif font-bold tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-4 duration-700">
                    Nishikawa<br className="md:hidden" /> Farm.
                </div>
                <div className="flex gap-4 mt-4">
                    <span className="h-[2px] w-8 bg-foreground/20 overflow-hidden relative">
                        <span className="absolute inset-0 bg-foreground animate-loading-bar" />
                    </span>
                </div>
                <div className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30 mt-2">
                    Loading Sequence
                </div>
            </div>

            <style jsx>{`
                @keyframes loading-bar {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }
                .animate-loading-bar {
                  animation: loading-bar 1s infinite linear;
                }
            `}</style>
        </div>
    );
}
