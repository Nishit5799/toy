import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1_Heading = () => {
  const heads = ["PLAY", "IMAGINE", "EXPLORE"];
  const heads2 = ["MAKE", "MEMORIES"];

  useGSAP(() => {
    // Check if the screen size is 'sm' or smaller
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;

    if (isSmallScreen) {
      // Skip the animation for small screens
      return;
    }

    // Create a timeline but don't start it immediately
    const tl = gsap.timeline({ repeat: -1, paused: true }); // Paused initially

    // Define the bounce animation with `fromTo`
    tl.fromTo(
      ".head .letter, .head2 .letter2",
      { y: -5 }, // Start at y: -20
      {
        y: 0, // Animate to y: 0
        yoyo: true, // Enable yoyo to go back to the initial state
        repeat: -1, // Repeat the bounce infinitely

        ease: "power1.out",
        color: "rgb(55, 65, 81)",
        stagger: {
          each: 0.1, // Each letter animates one after the other
        },
      }
    );

    // Start the initial animation with gsap.from
    gsap.from(".head .letter, .head2 .letter2", {
      y: 100,

      stagger: 0.05,
      opacity: 0,
      onComplete: () => {
        // When the initial animation is complete, start the timeline
        tl.play();
      },
    });
  });

  return (
    <>
      <div className="head flex flex-col text-['Bayon'] sm:flex sm:flex-col w-full h-full absolute top-2/3 text-center sm:text-left text-white sm:top-[10vw] sm:left-[6vw]">
        {heads.map((word, index) => (
          <span key={index} className="inline-block">
            {word.split("").map((letter, i) => (
              <span
                key={i}
                className="text-[7vw] sm:text-[11vw] sm:leading-none tracking-tight inline-block letter"
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
      </div>
      <div className="head2 sm:flex hidden sm:flex-col w-fit h-full absolute top-2/3 text-center sm:text-right text-white sm:top-[20vw] sm:right-[6vw]">
        {heads2.map((word, index) => (
          <span key={index} className="inline-block">
            {word.split("").map((letter, i) => (
              <span
                key={i}
                className="text-[9vw] sm:text-[11vw] inline-block leading-none tracking-tight letter2"
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
      </div>
    </>
  );
};

export default Page1_Heading;
