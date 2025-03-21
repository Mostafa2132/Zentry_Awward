import { useGSAP } from "@gsap/react";
import aboutImg from "/img/about.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../AnamitedTitle/AnamitedTitle";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const clipAnmation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800  top",
        pinSpacing: false,
        scrub: 0.5,
        pin: true,
        pinSpacer: true,
      },
    });

    clipAnmation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
    });
  });

  return (
    <div className="min-h-screen w-screen " id="about">
      <div className="relative mb-8 mt-36 flex w-full items-center  flex-col gap-5">
        <h2 className="font-general text-sm md:text-[10px] uppercase">
          Welcome To Zentry
        </h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver The World's <br /> L<b>a</b>rgest Shared Adventure"
          containerClass="mt-5 text-black text-center"
        />

        <div className="about-subtext ">
          <p>The Game of Games Begins-Your Life , Now an Epic MMORPG </p>
          <p>Zentry Unites Every player from countless games and platforms</p>
        </div>
      </div>

      <div className="h-dvh w-screen " id="clip">
        <div className="mask-clip-path about-image">
          <img
            src={aboutImg}
            alt="about image"
            loading="lazy"
            className="absolute top-0 left-0 size-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
}
