import Button from "../Button/Button";
import contact1 from "/img/contact-1.webp";
import contact2 from "/img/contact-2.webp";
import swordman1 from "/img/swordman-partial.webp";
import swordman2 from "/img/swordman.webp";
// import contact2 from "/img/contact-2.webp";
export default function Contact() {
  const ImageClipBox = ({ src, clipClass }) => {
    return (
      <div className={clipClass}>
        <img src={src} alt="contact" />
      </div>
    );
  };

  return (
    <div id="contact" className="min-h-96 px-10 my-20  w-screen">
      <div className="relative rounded-lg bg-black sm:overflow-hidden py-24 text-blue-50">
        <div className="absolute -left-20 top-0 hidden w-72 h-full overflow-hidden lg:left-20 lg:w-96 sm:block">
          <ImageClipBox src={contact1} clipClass="contact-clip-path-1" />
          <ImageClipBox
            src={contact2}
            clipClass="contact-clip-path-2 lg:translate-y-40  translate-y-60 "
          />
        </div>
        <div className="absolute -top-40 left-20  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox src={swordman1} clipClass="absolute md:scale-125 " />
          <ImageClipBox
            src={swordman2}
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Join Zentry </p>
          <p className="special-font mt-10 w-full font-zentry leading-[.9] md:text-[6rem] text-5xl">
            <b>
              Let's Built the <br /> new era of <br /> gaming together
            </b>
          </p>
<Button title="Contact Us" hoverText="Contact Us" containerClass={"mt-10"}/>
        </div>
      </div>
    </div>
  );
}
