"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";
import { LoadingOverlay } from "./LoadingOverlay";
import { LOADING_MS } from "@/lib/constants";

export function LoaderProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show loader on path change
        setIsLoading(true);

        // Lock scroll
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
        }, LOADING_MS);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "";
        };
    }, [pathname]);

    return (
        <>
            <LoadingOverlay isVisible={isLoading} />
            {children}
        </>
    );
}
