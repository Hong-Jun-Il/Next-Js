"use client";

import { useRef } from "react";
import style from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const stickyRef = useRef(null);
  const handContainerRef = useRef(null);
  const handRef = useRef(null);
  const handImageRef = useRef(null);
  const introRef = useRef(null);
  const introCopyRef = useRef(null);
  const h1ElementRef = useRef<HTMLHeadingElement>(null);
  const websiteContentRef = useRef(null);

  const introHeaders = [
    "<span>time to</span> be brave",
    "<span>time to</span> be playful",
    "<span>time to</span> design the future",
    "<span>time to</span> meet harrnish",
    "<span>time to</span> see project one",
  ];

  useGSAP(
    () => {
      let currentCycle = -1;
      let imageRevealed = false;

      const updateHeaderText = () => {
        if (h1ElementRef.current) {
          h1ElementRef.current.innerHTML =
            introHeaders[Math.min(currentCycle, introHeaders.length - 1)];
        }
      };

      const pinnedHeight = window.innerHeight * 8;

      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: "top top",
        end: `+=${pinnedHeight}`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;

          const rotationProgress = Math.min((progress * 8) / 5, 1);
          const totalRotation = rotationProgress * 1800 - 90;
          const rotationInCycle = ((totalRotation + 90) % 360) - 90;
          gsap.set(handContainerRef.current, { rotationZ: rotationInCycle });

          const newCycle = Math.floor((totalRotation + 90) / 360);
          if (
            newCycle !== currentCycle &&
            newCycle >= 0 &&
            newCycle < introHeaders.length
          ) {
            currentCycle = newCycle;
            updateHeaderText();
          }
        },
      });
    },
    { scope: container }
  );

  return (
    <main className="w-dvw h-[1000vw]">
      <div className={style.container} ref={container}>
        <section className={style.sticky} ref={stickyRef}>
          <div className={style.handContainer} ref={handContainerRef}>
            <div className={style.hand} ref={handRef}>
              <img
                src="https://images.unsplash.com/photo-1495216875107-c6c043eb703f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                ref={handImageRef}
              />
            </div>
          </div>

          <div className={style.intro} ref={introRef}>
            <h1 ref={h1ElementRef}>
              <span>time to</span> be brave
            </h1>

            <div ref={introCopyRef}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ad
                aperiam repellat sapiente. Recusandae excepturi corrupti
                aspernatur rerum numquam deserunt autem aperiam, expedita
                laboriosam impedit dignissimos nam ex ut eaque!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ad
                aperiam repellat sapiente. Recusandae excepturi corrupti
                aspernatur rerum numquam deserunt autem aperiam, expedita
                laboriosam impedit dignissimos nam ex ut eaque!
              </p>
            </div>
          </div>

          <div className={style.websiteContent} ref={websiteContentRef}>
            <h1>Codegrid</h1>
          </div>
        </section>
        <section className={style.about}>
          <p>(Your next section goes here)</p>
        </section>
      </div>
    </main>
  );
}
