import About from "./components/about.component";
import Buy from "./components/buy.component";
import Faq from "./components/faq.component";
import Roadmap from "./components/roadmap.component";
import Join from "./components/join.component";
import Footer from "./components/footer.component";

export default function Page() {
  return (
    <main className="min-h-screen">
      <About />
      <Buy />
      <Faq />
		<Roadmap />
		<Join />
		<Footer />
    </main>
  );
}

