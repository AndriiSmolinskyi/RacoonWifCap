"use client";
import Image from "next/image";

export default function Footer() {

	return (
		<section className="flex justify-between items-center w-full h-[100px] px-24 bg-[var(--black-figma)]">
			<div className="flex items-center justify-between w-[52.5%]">
				<p className="font-light text-[20px] text-[var(--white-figma)]">
					@ 2025 RacoonCoin - All Rights Reserved.
				</p>
				<Image src="/avatar.svg" alt="Racoon logo" width={76} height={76} priority />
			</div>

			<div className="flex gap-5 items-center">
				<a href="#">
					<Image src="/telegram.svg" alt="Telegram" width={40} height={40} priority />
				</a>
				<a href="#">
					<Image src="/twitter.svg" alt="X" width={40} height={40} priority />
					</a>
			</div>
		</section>
	);
}
