import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function StoryPage() {
    return (
        <div className="pb-40 pt-20 px-4 md:px-10">
            {/* Editorial Header */}
            <header className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b-2 border-foreground pb-20">
                <div className="md:col-span-8">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 block">Archive / Philosophy</span>
                    <h1 className="text-editorial-xl font-serif font-bold leading-[0.8] tracking-tighter">
                        CRAFTING <br />
                        THE NEXT <br />
                        SOIL.
                    </h1>
                </div>
                <div className="md:col-span-4 self-end">
                    <p className="text-xl leading-tight font-medium italic">
                        山梨の地で、桃と向き合い、<br />
                        人と繋がり、未来を育む。
                    </p>
                </div>
            </header>

            {/* Main Narrative */}
            <section className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-20">
                <div className="md:col-span-12">
                    <div className="relative aspect-[21/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                        <Image
                            src="/images/nishikawa/field-car-01.jpg"
                            alt="山梨県甲州市の農園、車内から見た広大な畑の景色"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="md:col-span-5 space-y-10">
                    <h2 className="text-5xl font-serif font-bold tracking-tighter leading-none">一本の木に、<br />一つの物語を。</h2>
                    <p className="text-sm opacity-70 leading-relaxed max-w-xs">
                        西川農園の history は、山梨県甲州市の豊かな土壌から始まりました。私たちが大切にしているのは、効率よりも「丁寧さ」です。
                        枝の一本、実のひとつにまで目を配り、その年、その土地にしか出せない味を追求しています。
                    </p>
                </div>

                <div className="md:col-span-5 md:col-start-8 self-end space-y-10">
                    <div className="relative aspect-square bg-stone-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                        <Image
                            src="/images/nishikawa/farm-visit-01.png"
                            alt="学生が西川農園を訪れ、現場の空気を感じている様子"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-serif font-bold tracking-tighter leading-none text-accent">農業を、もっと<br />自由に、開かれたものへ。</h2>
                        <p className="text-sm opacity-70 leading-relaxed">
                            数年前から始めた「学生参画型」の運営。最初は戸惑いもありましたが、若者たちの自由な発想と熱意は、
                            私たちの農業に新しい風を吹き込んでくれました。生産者と消費者が、そして世代が繋がる場所でありたいと考えています。
                        </p>
                    </div>
                </div>
            </section>

            {/* Message From Owner */}
            <section className="mt-60 border-t border-foreground/10 pt-20 flex flex-col items-center text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif font-bold italic tracking-tighter mb-10">「美味しい」の先にある、<br />「感動」を届けたい。</h2>
                <p className="text-sm leading-relaxed opacity-60">
                    西川農園の果実を、ただの食べ物としてではなく、<br />
                    山梨の季節や、私たちの想い、および学生たちの挑戦を感じられる<br />
                    「体験」としてお届けすること。それが私たちの願いです。
                </p>
                <div className="mt-16 text-right w-full">
                    <p className="font-serif font-bold text-2xl tracking-tighter underline underline-offset-8">西川 某 / Representative</p>
                </div>
            </section>
        </div>
    );
}
