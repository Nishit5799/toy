import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
const Page2_Para = () => {
  const para = [
    "Unleash your child's imagination with our collection of creative",
    "toys! From building sets to arts and crafts, these toys inspire",
    "creativity, problem-solving, and endless fun. Perfect for sparking",
    "young minds and encouraging hands-on exploration",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".para",
      {
        y: 40, // Initial position offset for the letters
        opacity: 0, // Start invisible
      },
      {
        y: 0, // End position at normal
        opacity: 1, // Fully visible

        ease: "elastic.out(1,0.3)",
        duration: 0.2,
        stagger: 0.5, // Delay between each letter's animation
        ease: "power4.out", // Smooth easing effect for entry
        scrollTrigger: {
          trigger: ".paraTop", // Trigger based on container
          scrub: 3, // Set to false for smoother animation

          start: "top 90%", // When container hits 80% of the viewport
          end: "top 80%", // End trigger point
        },
      }
    );
  });
  return (
    <div className="paraTop text-[4vw] mx-auto w-3/4 mt-8 sm:text-2xl sm:w-3/4 sm:mb-[11vw]">
      {para.map((e, i) => {
        return (
          <p className="para" key={i}>
            {e}
          </p>
        );
      })}
    </div>
  );
};

export default Page2_Para;
