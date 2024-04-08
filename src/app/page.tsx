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
            <div className="absolute bottom-0 flex w-full justify-center gap-4 bg-black p-2 text-center">
                {linkItems.map(({ ...props }) => {
                    return <LinkItem {...props} />;
                })}
            </div>
        </main>
    );
}
const linkItems = [
    {
        href: 'https://github.com/gijs-ve/mindmingle-easter-challenge',
        text: 'Source',
    },
    {
        href: 'https://www.mindmingle.nl',
        text: 'Mind Mingle',
    },
];
const LinkItem = ({ href, text }: { href: string; text: string }) => {
    return (
        <Link
            className="rounded-full border-2 bg-gray-800 p-4 hover:bg-gray-700"
            href={href}
        >
            {text}
        </Link>
    );
};
