import { useEffect, useRef } from "react";
import { useState } from "react";
import Button from "../Button/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [crruntIndex, setCrruntIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedved, setLoadedved] = useState(0);

  const totalVedios = 4;
  const nextVedRef = useRef(null);
  const upcomingVideoIndex = (crruntIndex % totalVedios) + 1;

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVedRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [crruntIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 100%, 0% 100%)",
      borderRadius: "0px 0px 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `/public/videos/hero-${index}.mp4`;

  const handelVideoLoaded = () => {
    setLoadedved((prev) => prev + 1);
  };

  function handerVedClick() {
    setHasClicked(true);
    setCrruntIndex(upcomingVideoIndex);
  }

  useEffect(() => {
    if (loadedved === totalVedios - 1) {
      setIsLoading(false);
    }
  }, [loadedved]);

  return (
    <section className="h-dvh relative w-screen">
      {isLoading && (
        <div className="flex flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        className="relative h-dvh w-screen  z-10 rounded-lg bg-blue-75 overflow-hidden "
        id="video-frame"
      >
        <div className="absolute mask-clip-path absolute-center z-50 size-64 cursor-pointer  rounded-lg overflow-hidden  ">
          <div
            onClick={handerVedClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              muted
              autoPlay
              id="crrent-video"
              className="size-64 orign-center scale-150  object-cover object-center"
              ref={nextVedRef}
              onLoadedData={handelVideoLoaded}
            />
          </div>
        </div>

        <video
          ref={nextVedRef}
          src={getVideoSrc(crruntIndex)}
          id="next-video"
          className="absolute-center absolute invisible z-20 size-64  object-cover object-center"
          onLoadedData={handelVideoLoaded}
          autoPlay
          loop
          muted
        />
        <video
          src={getVideoSrc(crruntIndex === totalVedios - 1 ? 1 : crruntIndex)}
          className=" absolute left-0 top-0 size-full object-cover object-center"
          autoPlay
          loop
          muted
          onLoadedData={handelVideoLoaded}
        />

        <h1 className="special-font hero-heading  absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 size-full z-40">
          <div className="mt-24 px-5  sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="font-robert-regular mb-5 max-w-64   text-blue-100 ">
              Enter The Meta Game Layer <br /> Unleash The Play Economy{" "}
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1 "
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading  absolute bottom-5 right-5  text-black">
        G<b>a</b>ming
      </h1>
    </section>
  );
}
