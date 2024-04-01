import { EasterButton } from '@/lib/components/button/EasterButton';
import { previewButtons } from '@/lib/constants/previewButtons';
import Image from 'next/image';
export const dynamic = 'force-dynamic';
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-black p-24 ">
            <section className="flex gap-8">
                {previewButtons.map((button, index) => (
                    <EasterButton
                        key={index}
                        text={button.text}
                        eggType={button.eggType}
                    />
                ))}
            </section>
        </main>
    );
}
