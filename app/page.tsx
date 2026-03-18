import Hero from "@/components/landing/Hero";
import ModuleOne from "@/components/landing/ModuleOne";
import ModuleTwo from "@/components/landing/ModuleTwo";
import ModuleThree from "@/components/landing/ModuleThree";
import ModuleThreeHalf from "@/components/landing/ModuleThreeHalf";
import BlockFour from "@/components/landing/BlockFour";
import BlockFive from "@/components/landing/BlockFive";
import BlockSix from "@/components/landing/BlockSix";
import BlockSeven from "@/components/landing/BlockSeven";
import BlockEight from "@/components/landing/BlockEight";

function Divider() {
  return (
    <div className="flex justify-center">
      <div className="h-px w-full max-w-5xl bg-[var(--accent-dim)] opacity-30" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ModuleOne />
      <Divider />
      <ModuleTwo />
      <Divider />
      <ModuleThree />
      <ModuleThreeHalf />
      <Divider />
      <BlockFour />
      <BlockFive />
      <Divider />
      <BlockSix />
      <Divider />
      <BlockSeven />
      <Divider />
      <BlockEight />
    </main>
  );
}
