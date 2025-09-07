// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function Join() {

// 	const [copied, setCopied] = useState(false);

// 	const handleCopy = async () => {
// 		try {
// 			await navigator.clipboard.writeText(
// 			"https://www.youtube.com/watch?v=hkEpaavcn3A&ab_channel=CrazyFrogKOR05"
// 			);
// 			setCopied(true);
// 			setTimeout(() => setCopied(false), 2000); 
// 		} catch (err) {
// 			console.error("Failed to copy: ", err);
// 		}
// 	};

// 	return (
// 		<section className="p-24 relative bg-[url('/raccoon-join.png')] bg-no-repeat bg-join">
// 			<div className="text-center max-w-[1100px] mx-auto">
// 				<h2 className="font-bold text-[96px] text-[var(--white-figma)] leading-[1.1] mb-12">
// 					JOIN THE <span className="text-[var(--orange-figma)]">_______</span> PARTY!
// 				</h2>
// 				<p className="font-medium text-[32px] text-[var(--white-figma)]">
// 					Pump straight to the Moon with Us!
// 				</p>
// 			</div>
// 			<div className="flex w-full items-center gap-6 pt-6">
// 						<div className="w-[885px] h-[64px] rounded-[30px] bg-[var(--black-figma)] text-[var(--white-figma)] font-light text-2xl
// 							flex items-center justify-center shrink-0">
// 							CA
// 						</div>
// 						<button
// 							onClick={handleCopy}
// 							className={`cursor-pointer flex items-center justify-center gap-2 w-[183px] h-[63px] rounded-[30px] text-2xl font-medium transition-opacity duration-200 ${
// 									copied
// 									? "bg-[var(--white-figma)] text-[var(--black-figma)]"
// 									: "bg-[var(--orange-figma)] text-[var(--white-figma)] hover:opacity-80"
// 							}`}
// 						>
// 						<Image
// 							src={copied ? "/check.svg" : "/copy.svg"}
// 							alt={copied ? "copied" : "copy"}
// 							width={36}
// 							height={36}
// 						/>
// 					<span>{copied ? "Copied" : "Copy"}</span>
// 				</button>
// 			</div>
// 		</section>
// 	);
// }

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Join() {
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "RACOON`S";
  const placeholders = "_".repeat(fullText.length);

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

  useEffect(() => {
    let i = 0;
    const typer = setInterval(() => {
      if (i <= fullText.length) {
        setStep(i);
        i++;
      } else {
        clearInterval(typer);
        setShowCursor(false); 
      }
    }, 300);
    return () => clearInterval(typer);
  }, []);

  useEffect(() => {
    if (step >= fullText.length) return;
    const blink = setInterval(() => setShowCursor((v) => !v), 300);
    return () => clearInterval(blink);
  }, [step]);


  const printed = fullText.slice(0, step);
  const remaining = placeholders.slice(step);
  const display = `${printed}${showCursor ? "|" : ""}${remaining}`;

  return (
    <section className="px-10 py-12 relative bg-[url('/raccoon-join.png')] bg-no-repeat bg-join">
      <div className="text-center max-w-[1100px] mx-auto">
        <h2 className="font-bold text-[96px] text-[var(--white-figma)] leading-[1.1] mb-12">
          JOIN THE{" "}
          <span className="text-[var(--orange-figma)]">{display}</span> PARTY!
        </h2>

        <p className="font-medium text-[32px] text-[var(--white-figma)]">
          Pump straight to the Moon with Us!
        </p>
      </div>

      <div className="flex w-full items-center gap-6 pt-6">
        <div className="w-[885px] h-[64px] rounded-[30px] bg-[var(--black-figma)] text-[var(--white-figma)] font-light text-2xl flex items-center justify-center shrink-0">
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
