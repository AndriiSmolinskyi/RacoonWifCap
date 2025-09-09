"use client";
import RacoonCarousel from "./coverflow.component";

export default function About() {
  return (
		<section
		  id="about"
		    className="relative bg-[url('/racoon-bg.png')] bg-no-repeat bg-right-center"
		>
			<div className="max-w-[945px] box-content px-10 pt-12 pb-10 flex flex-col gap-6">
				<h2 className="text-[96px] font-bold leading-[100px] uppercase">
					WHAT`S Raccoon<span className="text-[var(--orange-figma)]">wif</span>cap?
				</h2>
				<p className="text-[32px] font-medium leading-[40px] text-justify">
					RaccoonWifCap is a memecoin inspired by the clever street genius in a cap — a raccoon
					who knows how to turn trash… or memes… into money. <span className="text-[var(--orange-figma)]">RWC</span> is more than just a token.
					It’s a movement. It’s a vibe. It’s a raccoon with a cap, here for your clout and
					your liquidity.
				</p>
			</div>
			<RacoonCarousel />

    	</section>
  );
}
