import { EasterButton } from '@/lib/components/button/EasterButton';
import { previewButtons } from '@/lib/constants/previewButtons';
import Link from 'next/link';
export const dynamic = 'force-dynamic';
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-white p-24 ">
            <section className="flex gap-8">
                {previewButtons.map((button, index) => (
                    <EasterButton
                        key={index}
                        text={button.text}
                        eggType={button.eggType}
                    />
                ))}
            </section>
            <div className="absolute bottom-0 w-full bg-black text-center">
                <Link href="https://github.com/gijs-ve/mindmingle-easter-challenge">
                    Source
                </Link>
            </div>
        </main>
    );
}
