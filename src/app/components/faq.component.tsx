"use client";

export default function Faq() {
  return (
	  <section id="faq" className="px-10 py-12 relative bg-[url('/faq-bg.png')] bg-no-repeat bg-right-down">
		  <div className="max-w-[945px] pb-6">
			  	<h2 className="text-[96px] font-bold leading-[100px] uppercase">
				  FREQUENTLY ASKED <span className="text-[var(--orange-figma)]">QUESTIONS</span>
			  </h2>
			  <p className="text-[var(--white-figma)] font-medium text-[32px] mb-6">Thoughts about RacoonWifCap?</p>
		  </div>
		  <div>
			  	<div className="flex gap-8 mb-8">
				  	<div className="w-1/2">
					  	<div className="h-[80px] flex items-center bg-[var(--orange-figma)] px-8 rounded-t-[30px]">
							<h3 className="font-bold text-[32px] text-[var(--gray-figma)]">What is RacconWifCap (RWC)?</h3>
					  	</div>
					  	<div className="h-[186px] bg-[var(--grayest-figma)] px-8 rounded-b-[30px] py-4">

						   <p className="font-light text-[20px] leading-[32px]">
							  RacconWifCap is a Solana-based memecoin featuring a raccoon with a cap – rich, wild, witty.
							  Its a memecoin with meme energy and fast, low-cost transactions thanks to Solana.	  
						  </p>
					  	</div>
				  </div>
				  
				  <div className="w-1/2">
					  	<div className="h-[80px] flex items-center bg-[var(--orange-figma)] px-8 rounded-t-[30px]">
							<h3 className="font-bold text-[32px] text-[var(--gray-figma)]">Is RacconWifCap safe to use?</h3>
					  	</div>
					  	<div className="h-[186px] bg-[var(--grayest-figma)] px-8 rounded-b-[30px] py-4">
						 	<p className="font-light text-[20px] leading-[32px]">
								Yes – our token contract is deployed on Solana with no backdoors. We recommend using verified wallets like Phantom and DEXs with good reputations (e.g. Jupiter). Always double-check the contract address.
						  </p>
					  	</div>
				  	</div>
			  </div>
			  
			  	<div className="flex gap-8">
				  	<div className="w-1/2">
					  	<div className="h-[80px] flex items-center bg-[var(--orange-figma)] px-8 rounded-t-[30px]">
							<h3 className="font-bold text-[32px] text-[var(--gray-figma)]">How can I buy RWC?</h3>
					  	</div>
					  	<div className="h-[186px] bg-[var(--grayest-figma)] px-8 rounded-b-[30px] py-4">
						  	<p className="font-light text-[20px] leading-[32px]">
								You can buy RWC on Solana-based DEXs like Jupiter, Raydium, or via Phantom Wallet. Just connect your wallet, search for $RWC or paste CA, and swap some SOL.
						  	</p>
					  	</div>
				  </div>
				  
				  <div className="w-1/2">
					  	<div className="h-[80px] flex items-center bg-[var(--orange-figma)] px-8 rounded-t-[30px]">
							<h3 className="font-bold text-[32px] text-[var(--gray-figma)]">Whats next for RacconWifCap?</h3>
					  	</div>
					  	<div className="h-[186px] bg-[var(--grayest-figma)] px-8 rounded-b-[30px] py-4">
						  <p className="font-light text-[20px] leading-[32px]">
								Beyond memes and good vibes, we’re exploring NFT drops, community events, and even RWC-themed mini-games. The raccoon never sleeps – and neither does our roadmap. 
						  </p>
					  	</div>
				  	</div>
			  	</div>
		  </div>
    </section>
  );
}
