
"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const SECTIONS = ["PHASE 01", "PHASE 02", "PHASE 03", "PHASE 04"];

export default function Roadmap() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>(
    new Array(SECTIONS.length).fill(null)
  );
  const [visible, setVisible] = useState<boolean[]>(
    new Array(SECTIONS.length).fill(false)
  );

  const setCardRef = useCallback(
    (index: number) => (el: HTMLDivElement | null): void => {
      cardsRef.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const idx = Number((e.target as HTMLElement).dataset.idx);
          setVisible((v) => {
            if (v[idx]) return v;
            const next = [...v];
            next[idx] = true;
            return next;
          });
          io.unobserve(e.target);
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="roadmap" className="px-10 py-12 relative bg-[url('/racoon.png')] bg-no-repeat bg-roadmap">
      <div className="flex">
        <div className="inline-block pr-1 border-r-2 border-[var(--white-figma)] py-6">
          <p className="text-[var(--white-figma)] font-bold text-[150px] [writing-mode:vertical-rl] rotate-180">
            ROADMAP
          </p>
        </div>

        <div className="flex flex-col gap-[24px]">
          {/* PHASE 01 */}
          <div
            data-idx={0}
            ref={setCardRef(0)}
            className={[
              "w-[487px] h-[196px] rounded-[30px] py-5 px-6 ml-12",
              "bg-[var(--grayest-figma)] transition-all duration-700 ease-out will-change-transform",
              visible[0] ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: visible[0] ? "0ms" : "0ms" }}
          >
            <h3 className="font-bold text-[40px] text-[var(--white-figma)]">PHASE 01</h3>
            <div className="flex items-center gap-[10px] pl-[10px] h-[44px]">
              <Image src="/eclipse.svg" alt="." width={12} height={12} />
              <p className="font-normal text-[24px] text-[var(--white-figma)]">RACCOON launch</p>
            </div>
            <div className="flex items-center gap-[10px] pl-[10px] h-[44px]">
              <Image src="/eclipse.svg" alt="." width={12} height={12} />
              <p className="font-normal text-[24px] text-[var(--white-figma)]">Website launch</p>
            </div>
          </div>

          {/* PHASE 02 */}
          <div
            data-idx={1}
            ref={setCardRef(1)}
            className={[
              "w-[487px] h-[196px] rounded-[30px] py-5 px-6 ml-[350px]",
              "bg-[var(--grayest-figma)] transition-all duration-700 ease-out will-change-transform",
              visible[1] ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: visible[1] ? "120ms" : "0ms" }}
          >
            <h3 className="font-bold text-[40px] text-[var(--white-figma)]">PHASE 02</h3>
            <div className="flex items-center gap-[10px] pl-[10px] h-[44px]">
              <Image src="/eclipse.svg" alt="." width={12} height={12} />
              <p className="font-normal text-[24px] text-[var(--white-figma)]">Community promotion</p>
            </div>
            <div className="flex items-center gap-[10px] pl-[10px] h-[44px]">
              <Image src="/eclipse.svg" alt="." width={12} height={12} />
              <p className="font-normal text-[24px] text-[var(--white-figma)]">DEXscreener listing</p>
            </div>
          </div>

          {/* PHASE 03 */}
          <div
            data-idx={2}
            ref={setCardRef(2)}
            className={[
              "w-[487px] h-[196px] rounded-[30px] py-5 px-6 ml-12",
              "bg-[var(--grayest-figma)] transition-all duration-700 ease-out will-change-transform",
              visible[2] ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: visible[2] ? "240ms" : "0ms" }}
          >
            <h3 className="font-bold text-[40px] text-[var(--white-figma)]">PHASE 03</h3>
            <div className="flex items-center gap-[10px] pl-[10px] h-[44px]">
              <Image src="/eclipse.svg" alt="." width={12} height={12} />
              <p className="font-normal text-[24px] text-[var(--white-figma)]">RACCOON EVENTS</p>
            </div>
            <div className="flex items-center gap-[10px] pl-[10px] h-[44px]">
              <Image src="/eclipse.svg" alt="." width={12} height={12} />
              <p className="font-normal text-[24px] text-[var(--white-figma)]">Eco Development</p>
            </div>
          </div>

          {/* PHASE 04 */}
          <div
            data-idx={3}
            ref={setCardRef(3)}
            className={[
              "w-[487px] h-[196px] rounded-[30px] py-5 px-6 ml-[350px]",
              "bg-[var(--grayest-figma)] transition-all duration-700 ease-out will-change-transform",
              visible[3] ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: visible[3] ? "360ms" : "0ms" }}
          >
            <h3 className="font-bold text-[40px] text-[var(--white-figma)]">PHASE 04</h3>
            <div className="flex items-center gap-[10px] pl-[10px] h-[44px]">
              <Image src="/eclipse.svg" alt="." width={12} height={12} />
              <p className="font-normal text-[24px] text-[var(--white-figma)]">Binance listing</p>
            </div>
            <div className="flex items-center gap-[10px] pl-[10px] h-[44px]">
              <Image src="/eclipse.svg" alt="." width={12} height={12} />
              <p className="font-normal text-[24px] text-[var(--white-figma)]">Bring in investors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
