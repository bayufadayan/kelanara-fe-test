import Caraosel from "@/components/Home/Caraosel";
import Community from "@/components/Home/Community";
import Hero from "@/components/Home/Hero";
import News from "@/components/Home/News";
import Navigation from "@/components/Navigation";
import { roboto } from '@/utils/fonts';


export default function Home() {
  return (
    <div className={`${roboto.className} min-h-screen`}>
      <Navigation />
      <Hero />
      <Caraosel />
      <div className="flex flex-col gap-4 md:flex-row">
        <News />
        <Community />
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
}
