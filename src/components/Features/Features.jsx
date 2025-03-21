import { useRef } from "react";
import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    setTransformStyle(
      `perspective(800px) rotateX(${
        (e.clientY - itemRef.current.offsetTop) / 150
      }deg) rotateY(${(e.clientX - itemRef.current.offsetLeft) / 150}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bento-tilt ${className}`}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ title, desc, src }) => {
  return (
    <>
      <div className="relative size-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={src}
          className="absolute top-0 left-0 size-full object-center object-cover"
        />
        <div className="relative z-10 flex flex-col  justify-between p-5 text-blue-50 size-full">
          <div className="">
            <h1 className="bento-title special-font">{title}</h1>
            {desc && (
              <p className="mt-3 max-w-64 text-sm md:text-base">{desc}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default function Features() {
  return (
    <section className="bg-black pb-52  mt-[1000px]">
      <div className="container px-3 mx-auto md:px-10">
        <div className="pt-44 mb-16 px-1">
          <p className="text-blue-50 text-lg  font-circular-web">
            Into Mate Game Layer
          </p>

          <p className="max-w-md text-blue-50 text-lg   font-circular-web opacity-50">
            {" "}
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            desc="The game of games app transforming moments across Web2 & Web3 titles into rewards "
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-1 md:grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              desc="The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              desc="The metagame portal uniting humans & AI to play, compete and earn, "
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              desc="The agent of agents elevating agentic AI experience to be more fun and productive.  "
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 uppercase">
                <b>More Coming soon!</b>{" "}
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/videos/feature-5.mp4"
              className="  size-full object-center object-cover"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}
