"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SECTIONS = ["about", "buy", "faq", "roadmap"] as const;

export default function Header() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { threshold: 0.6 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="w-full h-[100px] px-7 bg-[var(--black-figma)] flex justify-between items-center sticky top-0 z-50 text-[var(--white-figma)]">
      <div className="flex gap-4 items-center">
        <Image src="/avatar.svg" alt="Racoon logo" width={76} height={76} priority />
        <h1 className="font-extrabold text-2xl">
          RACOON<span className="text-[var(--orange-figma)]">WIF</span>CAP
        </h1>
      </div>

      <nav className="flex justify-between w-1/3">
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={[
              "relative font-bold text-2xl pb-2",
              active === id
                ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:bg-[var(--orange-figma)]"
                : "",
            ].join(" ")}
          >
            {id.toUpperCase()}
          </a>
        ))}
      </nav>

      <div className="flex gap-7 items-center">
			<div className="flex gap-5 items-center">
				<a href="#">
					<Image src="/telegram.svg" alt="Telegram" width={40} height={40} priority />
				</a>
				<a href="#">
					<Image src="/twitter.svg" alt="X" width={40} height={40} priority />
				</a>
			</div>
			<a href="#">
				<Image src="/buy.svg" alt="buy" width={166} height={56} priority />
			</a>
      </div>
    </header>
  );
}
