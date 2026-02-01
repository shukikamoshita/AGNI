import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-20 px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
                <div className="md:col-span-6 border-t md:border-t-0 border-background/20 pt-10 md:pt-0">
                    <h2 className="text-editorial-lg font-serif font-bold tracking-tighter leading-none mb-4">Nishikawa<br />Farm.</h2>
                    <p className="max-w-xs text-xs font-bold tracking-widest leading-loose opacity-60">
                        KOUSHU / YAMANASHI / JAPAN <br />
                        ESTABLISHED 20XX. SUSTAINABLE FIELD <br />
                        PROJECTS WITH STUDENTS.
                    </p>
                </div>

                <div className="md:col-span-3 space-y-8">
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Pages</p>
                        <ul className="space-y-1 font-serif font-bold text-xl tracking-tighter italic">
                            <li><Link href="/story" className="hover:line-through">Our Story</Link></li>
                            <li><Link href="/project" className="hover:line-through">Projects</Link></li>
                            <li><Link href="/crops" className="hover:line-through">Crops</Link></li>
                            <li><Link href="/members" className="hover:line-through">Members</Link></li>
                            <li><Link href="/contact" className="hover:line-through">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-3 space-y-8">
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Social</p>
                        <ul className="font-bold text-sm tracking-widest space-y-2 uppercase">
                            <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Threads</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">X (Twitter)</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-10 border-t border-background/10 flex flex-col md:flex-row justify-between items-end gap-4 md:gap-0">
                <p className="text-[10px] font-bold tracking-widest opacity-30">
                    &copy; {new Date().getFullYear()} NISHIKAWA FARM. ALL RIGHTS RESERVED.
                </p>
                <div className="text-[10px] font-bold tracking-tighter flex gap-4 opacity-30">
                    <span>DESIGNED BY REVOLUTION</span>
                    <span>DEVELOPED IN YAMANASHI</span>
                </div>
            </div>
        </footer>
    );
}
