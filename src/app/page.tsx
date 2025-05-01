import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Instructions from "@/components/home/Instructions";
import Navbar from "@/components/home/Navbar";
import TeamWork from "@/components/home/TeamWork";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Instructions />
      <TeamWork />
    </main>
  );
}
