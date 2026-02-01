import { ArrowRight } from "lucide-react";

export default function StoryPage() {
    return (
        <div className="pb-20">
            {/* Header */}
            <section className="bg-secondary/30 py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase">Our Story</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mt-4 mb-8 text-center">想いと歩み</h1>
                    <p className="text-lg text-foreground/80 leading-relaxed text-center">
                        山梨の地で、桃と向き合い、<br />
                        人と繋がり、未来を育む。
                    </p>
                </div>
            </section>

            {/* Philosophy */}
            <section className="max-w-4xl mx-auto px-4 py-20 space-y-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-primary">一本の木に、<br />一つの物語を。</h2>
                        <p className="text-foreground/80 leading-relaxed text-sm">
                            西川農園の歴史は、山梨県甲州市の豊かな土壌から始まりました。私たちが大切にしているのは、効率よりも「丁寧さ」です。
                            枝の一本、実のひとつにまで目を配り、その年、その土地にしか出せない味を追求しています。
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-xl aspect-square bg-gray-100">
                        <img src="https://images.unsplash.com/photo-1595971299091-81022247fb72?q=80&w=2000&auto=format&fit=crop" alt="Orchard" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="rounded-2xl overflow-hidden shadow-xl aspect-square bg-gray-100 md:order-2">
                        <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop" alt="Students" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-6 md:order-1">
                        <h2 className="text-3xl font-serif font-bold text-accent">農業を、<br />もっと自由に、開かれたものへ。</h2>
                        <p className="text-foreground/80 leading-relaxed text-sm">
                            数年前から始めた「学生参画型」の運営。最初は戸惑いもありましたが、若者たちの自由な発想と熱意は、
                            私たちの農業に新しい風を吹き込んでくれました。生産者と消費者が、そして世代が繋がる場所でありたいと考えています。
                        </p>
                    </div>
                </div>
            </section>

            {/* Message */}
            <section className="bg-primary text-white py-20 mt-10">
                <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold italic text-center text-white">「美味しい」の先にある、<br />「感動」を届けたい。</h2>
                    <p className="text-white/80 leading-relaxed text-sm text-center">
                        西川農園の果実を、ただの食べ物としてではなく、<br className="hidden md:block" />
                        山梨の季節や、私たちの想い、そして学生たちの挑戦を感じられる<br className="hidden md:block" />
                        「体験」としてお届けすること。それが私たちの願いです。
                    </p>
                    <div className="pt-4 text-center">
                        <p className="font-serif font-bold text-lg text-white">西川農園 代表  西川 某</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
