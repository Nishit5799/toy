import gsap from "gsap";

const Page2_button = () => {
  const text = "Buy Now";
  const letters = text
    .split("")
    .map((letter) => (letter === " " ? "\u00A0" : letter)); // Replace space with a non-breaking space

  // GSAP effect on hover
  const handleMouseEnter = (e) => {
    const spans = e.currentTarget.querySelectorAll("span");
    spans.forEach((span, index) => {
      gsap.to(span, {
        y: 5,
        duration: 0.08,
        ease: "linear",
        delay: index * 0.05,
        yoyo: true,
        repeat: 1,
      });
    });
  };

  const handleMouseLeave = (e) => {
    const spans = e.currentTarget.querySelectorAll("span");
    gsap.to(spans, {
      y: 0,
      duration: 0.2,
      ease: "linear",
    });
  };

  return (
    <button
      className="btn mt-[20vw] text-sm sm:mt-1 text-md px-4 sm:px-8 sm:py-2 mx-auto mb-10 sm:text-xl sm:mb-10 text-black sm:w-[9vw] rounded-full bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {letters.map((letter, index) => (
        <span key={index} className="inline-block">
          {letter}
        </span>
      ))}
    </button>
  );
};

export default Page2_button;
