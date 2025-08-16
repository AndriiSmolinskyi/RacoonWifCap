import Header from "@/components/header/header";
import About from "@/components/about/about";
import Buy from "@/components/buy/buy";
import FAQ from "@/components/faq/faq";
import Roadmap from "@/components/roadmap/roadmap";

export default function Home() {
	return (
		<div>
			<Header />
			<About />
			<Buy/>
			<FAQ />
			<Roadmap/>
		</div>	
	)
}