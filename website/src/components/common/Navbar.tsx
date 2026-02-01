"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "INDEX", href: "/" },
    { label: "STORY", href: "/story" },
    { label: "PROJECTS", href: "/project" },
    { label: "CROPS", href: "/crops" },
    { label: "MEMBERS", href: "/members" },
    { label: "CONTACT", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed md:sticky top-0 z-50 w-full mix-blend-difference invert md:mix-blend-normal md:invert-0 px-4 md:px-10 py-6">
            <div className="flex justify-between items-start md:items-baseline">
                <div className="flex-shrink-0">
                    <Link href="/" className="text-4xl md:text-5xl font-serif font-bold tracking-tighter leading-none block">
                        Nishikawa<br className="md:hidden" /> Farm
                    </Link>
                    <span className="text-[10px] font-bold tracking-widest mt-1 block opacity-60">KOUSHU / YAMANASHI</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-col items-end gap-1">
                    <div className="flex space-x-6">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-foreground font-bold text-xs tracking-widest hover:line-through transition-all"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="h-[1px] w-full bg-foreground/20 mt-1" />
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center pt-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground hover:text-accent focus:outline-none"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 z-40 bg-background transition-all duration-500 ease-in-out px-4 py-20",
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                )}
            >
                <div className="space-y-4">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-5xl font-serif font-bold tracking-tighter hover:line-through"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="absolute bottom-10 left-4 space-y-2">
                    <p className="text-xs font-bold opacity-40 uppercase tracking-widest">Connect</p>
                    <div className="flex gap-4 font-bold text-sm">
                        <a href="#">Instagram</a>
                        <a href="#">X (Twitter)</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
