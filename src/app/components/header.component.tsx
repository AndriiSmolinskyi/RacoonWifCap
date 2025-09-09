
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const SECTIONS = ["about", "buy", "faq", "roadmap"] as const;
type Section = (typeof SECTIONS)[number];

export default function Header() {
  const [active, setActive] = useState<Section>("about");
  const [buyChecked, setBuyChecked] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const setLinkRef = useCallback(
    (i: number) => (el: HTMLAnchorElement | null): void => {
      linkRefs.current[i] = el;
    },
    []
  );

  const [underline, setUnderline] = useState({ left: 0, width: 84 });


  const lockRef = useRef(false);
  const lockTimerRef = useRef<number | null>(null);

  const recalcIndicator = useCallback((id: Section) => {
    const idx = SECTIONS.indexOf(id);
    const el = linkRefs.current[idx];
    if (!el) return;
    setUnderline({ left: el.offsetLeft, width: el.clientWidth });
  }, []);

  useEffect(() => {
    recalcIndicator(active);
    const onResize = () => recalcIndicator(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, recalcIndicator]);


  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = (e.target as HTMLElement).id as Section;
            setActive(id);
            recalcIndicator(id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-100px 0px 0px 0px",
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [recalcIndicator]);

  const scrollToWithOffset = (id: Section) => {
    const el = document.getElementById(id);
    if (!el) return;
    const HEADER = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: Section) => {
    e.preventDefault();

    setActive(id);
    recalcIndicator(id);


    lockRef.current = true;
    if (lockTimerRef.current) window.clearTimeout(lockTimerRef.current);
    scrollToWithOffset(id);
    lockTimerRef.current = window.setTimeout(() => {
      lockRef.current = false;
    }, 800); 
  };

  const handleBuyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setBuyChecked(true);
    window.setTimeout(() => setBuyChecked(false), 2000);
  };

  return (
    <header className="w-full h-[100px] px-7 bg-[var(--black-figma)] flex justify-between items-center sticky top-0 z-50 text-[var(--white-figma)]">
      <div className="flex gap-4 items-center">
        <Image src="/avatar.svg" alt="Racoon logo" width={76} height={76} priority />
        <h1 className="font-extrabold text-2xl">
          RACCOON<span className="text-[var(--orange-figma)]">WIF</span>CAP
        </h1>
      </div>


      <nav ref={navRef} className="relative flex justify-between w-1/3 h-[100px]">
        {SECTIONS.map((id, i) => (
          <a
            key={id}
            href={`#${id}`}
            ref={setLinkRef(i)}
            onClick={(e) => handleNavClick(e, id)}
            className={[
              "font-bold text-2xl w-[84px] h-[100px]",
              "flex items-center justify-center",
              "transition-colors duration-300",
              active === id ? "text-[var(--white-figma)]" : "text-white/80 hover:text-white",
            ].join(" ")}
          >
            {id.toUpperCase()}
          </a>
        ))}

        <div
          className="pointer-events-none absolute bottom-0 h-[3px] bg-[var(--orange-figma)]"
          style={{
            left: underline.left,
            width: underline.width,
            transition: "left 550ms cubic-bezier(.22,.61,.36,1), width 300ms ease",
          }}
        />
      </nav>

      <div className="flex gap-7 items-center">
        <div className="flex gap-5 items-center">
          {/* <a href="#" className="transition-opacity hover:opacity-80">
            <Image src="/telegram.svg" alt="Telegram" width={40} height={40} priority />
          </a> */}
          <a href="#" className="transition-opacity hover:opacity-80">
            <Image src="/twitter.svg" alt="X" width={40} height={40} priority />
          </a>
        </div>

        <a
          href="#"
          onClick={handleBuyClick}
          className="transition-opacity hover:opacity-80 cursor-pointer"
          aria-label={buyChecked ? "Bought" : "Buy"}
          title={buyChecked ? "Bought" : "Buy"}
        >
          <Image
            src={buyChecked ? "/buy-check.svg" : "/buy.svg"}
            alt={buyChecked ? "buy checked" : "buy"}
            width={166}
            height={56}
            priority
          />
        </a>
      </div>
    </header>
  );
}
