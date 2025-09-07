"use client";
import { useState } from "react";
import Image from "next/image";

export default function Buy() {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(
			"https://www.youtube.com/watch?v=hkEpaavcn3A&ab_channel=CrazyFrogKOR05"
			);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000); 
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

  return (
	  <section id="buy" className="px-10 py-12">
		  	<h2 className="text-[96px] font-bold leading-[100px] uppercase max-w-[945px]">
				How to buy Racoon<span className="text-[var(--orange-figma)]">wif</span>cap?
		  </h2>
		  <div className="flex w-full items-center justify-center gap-6 py-8">
			  	<Image
					src='/buy1.svg'
					alt={'Create a wallet'}
					width={428} 
				  height={245}
				        className="w-full h-full object-contain"
			  	/>
			   <Image
					src='/buy2.svg'
					alt={'Fund your wallet'}
					width={428} 
				  height={245}
				        className="w-full h-full object-contain"
				/>
			   <Image
					src='/buy3.svg'
					alt={'Grab your racoon'}
					width={428} 
				  height={245}
				        className="w-full h-full object-contain"
				/>
		  </div>
		  <div className="flex w-full items-center justify-center gap-6">
			    <div className="w-[885px] h-[64px] rounded-[30px] bg-[var(--black-figma)] text-[var(--white-figma)] font-light text-2xl
                  flex items-center justify-center shrink-0">
					CA
				</div>
			   <button
					onClick={handleCopy}
					className={`cursor-pointer flex items-center justify-center gap-2 w-[183px] h-[63px] rounded-[30px] text-2xl font-medium transition-opacity duration-200 ${
						copied
						? "bg-[var(--white-figma)] text-[var(--black-figma)]"
						: "bg-[var(--orange-figma)] text-[var(--white-figma)] hover:opacity-80"
					}`}
				>
					<Image
						src={copied ? "/check.svg" : "/copy.svg"}
						alt={copied ? "copied" : "copy"}
						width={36}
						height={36}
					/>
					<span>{copied ? "Copied" : "Copy"}</span>
				</button>
		  </div>
    </section>
  );
}
