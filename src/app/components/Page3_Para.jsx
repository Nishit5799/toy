import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
const Page3_Para = () => {
  const para = [
    "Discover premium quality toys crafted for endless fun and ",
    "Durability. With safe, eco-friendly materials, these toys inspire",
    " imagination and stand the test of time.",
    "Perfect for curious minds and adventurous play!",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".para1",
      {
        y: 40, // Initial position offset for the letters
        opacity: 0, // Start invisible
      },
      {
        y: 0, // End position at normal
        opacity: 1, // Fully visible

        ease: "elastic.out(1,0.3)",
        // duration: 0.2,
        stagger: 0.5, // Delay between each letter's animation
        ease: "power4.out", // Smooth easing effect for entry
        scrollTrigger: {
          trigger: ".paraTop1", // Trigger based on container
          scrub: 3, // Set to false for smoother animation

          start: "top 90%", // When container hits 80% of the viewport
          end: "top 80%", // End trigger point
        },
      }
    );
  });
  return (
    <div className="paraTop1 text-[4vw] mx-auto w-3/4 mt-8 sm:text-2xl sm:w-3/4 sm:mb-[11vw]">
      {para.map((e, i) => {
        return (
          <p className="para1" key={i}>
            {e}
          </p>
        );
      })}
    </div>
  );
};

export default Page3_Para;
