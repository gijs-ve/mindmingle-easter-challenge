import { EasterButton } from "@/lib/button/EasterButton";
import { previewButtons } from "@/lib/constants/previewButtons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black ">
      <section className="flex gap-8">
      {previewButtons.map((button) => <EasterButton text={button.text} eggType={button.eggType}/>)}
      </section>
    </main>
  );
}
