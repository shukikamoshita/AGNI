import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-secondary mt-auto py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-primary">西川農園</h2>
                        <p className="text-sm text-foreground/70 leading-relaxed shadow-sm">
                            山梨県甲州市を拠点に、<br />
                            果樹栽培と学生参画型農業に取り組んでいます。
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-sm uppercase tracking-wider text-primary">ページ一覧</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/story" className="hover:text-primary transition-colors">想い・歩み</Link></li>
                            <li><Link href="/project" className="hover:text-primary transition-colors">プロジェクト</Link></li>
                            <li><Link href="/crops" className="hover:text-primary transition-colors">作物紹介</Link></li>
                            <li><Link href="/members" className="hover:text-primary transition-colors">メンバー</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">お問い合わせ</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-sm uppercase tracking-wider text-primary">所在地・SNS</h3>
                        <p className="text-sm text-foreground/70">
                            〒404-00xx <br />
                            山梨県甲州市塩山...
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 pt-2">
                            <a href="#" className="hover:text-primary transition-colors text-sm">Instagram</a>
                            <a href="#" className="hover:text-primary transition-colors text-sm">Threads</a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-foreground/10 text-center">
                    <p className="text-xs text-foreground/50">
                        &copy; {new Date().getFullYear()} Nishikawa Farm. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
