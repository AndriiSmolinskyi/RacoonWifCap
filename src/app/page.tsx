import About from "../../public/about.component";
import Buy from "./components/buy.component";
import Faq from "./components/faq.component";
import Roadmap from "./components/roadmap.component";

export default function Page() {
  return (
    <main className="min-h-screen">
      <About />
      <Buy />
      <Faq />
      <Roadmap />
    </main>
  );
}

