"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
    name: z.string().min(1, "お名前を入力してください"),
    email: z.string().email("正しいメールアドレスを入力してください"),
    message: z.string().min(5, "お問い合わせ内容は5文字以上で入力してください"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setError(null);
        try {
            console.log("Form submitted:", data);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSuccess(true);
            reset();
        } catch (err) {
            setError("送信中にエラーが発生しました。再度お試しください。");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pb-40 pt-20 px-4 md:px-10">
            <header className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-foreground pb-10">
                <div className="md:col-span-8">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 block">Communication / Enquiry</span>
                    <h1 className="text-editorial-lg font-serif font-bold tracking-tighter leading-none">CONTACT.</h1>
                </div>
                <div className="md:col-span-4 self-end space-y-4">
                    <p className="text-sm leading-relaxed opacity-70 italic">
                        農園へのご質問、プロジェクトへの参加希望、<br />
                        作物のご注文に関するご相談など。
                    </p>
                </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-12 gap-20">
                <div className="md:col-span-4 space-y-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Office</p>
                        <p className="text-sm font-bold">
                            〒404-00xx <br />
                            山梨県甲州市塩山...
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Socials</p>
                        <ul className="text-sm font-bold space-y-1 underline decoration-2 underline-offset-4">
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Threads</a></li>
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                    {isSuccess ? (
                        <div className="bg-foreground text-background p-20 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                            <CheckCircle2 size={60} className="mb-8 text-accent" />
                            <h2 className="text-4xl font-serif font-bold tracking-tighter mb-4">Message Sent.</h2>
                            <p className="text-sm opacity-60 mb-10 italic">内容を確認次第、担当者よりご連絡させていただきます。</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="font-bold text-xs tracking-[0.3em] uppercase border border-background/20 px-10 py-4 hover:bg-background hover:text-foreground transition-all"
                            >
                                Back to Normal
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                            {error && (
                                <div className="bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary p-4 text-xs font-bold flex items-center gap-2">
                                    <AlertCircle size={16} />
                                    {error}
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-widest uppercase opacity-40">Name</label>
                                <input
                                    {...register("name")}
                                    placeholder="Your Name"
                                    className={cn(
                                        "w-full bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-foreground transition-colors font-serif text-2xl tracking-tighter",
                                        errors.name && "border-accent-secondary"
                                    )}
                                />
                                {errors.name && <p className="text-accent-secondary text-[10px] font-bold mt-1 uppercase tracking-widest">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-widest uppercase opacity-40">Email</label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    placeholder="Email Address"
                                    className={cn(
                                        "w-full bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-foreground transition-colors font-serif text-2xl tracking-tighter",
                                        errors.email && "border-accent-secondary"
                                    )}
                                />
                                {errors.email && <p className="text-accent-secondary text-[10px] font-bold mt-1 uppercase tracking-widest">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-widest uppercase opacity-40">Message</label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    placeholder="Enquiry Details"
                                    className={cn(
                                        "w-full bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-foreground transition-colors font-serif text-2xl tracking-tighter resize-none",
                                        errors.message && "border-accent-secondary"
                                    )}
                                />
                                {errors.message && <p className="text-accent-secondary text-[10px] font-bold mt-1 uppercase tracking-widest">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto h-20 px-20 bg-foreground text-background font-bold text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-4 hover:bg-accent transition-all disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <ArrowUpRight size={20} />}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}
