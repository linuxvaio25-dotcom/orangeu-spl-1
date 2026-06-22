import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const ScrollSection = ({ title, cards, direction }) => {
    const ScrollSection = ({ title, cards, direction, titleAlign }) => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                //once: true, // only plays once when it comes into view
                toggleActions: "play reverse play reverse", // play on enter, reverse on leave
            },
        });

        // Title fades in
        tl.fromTo(
            titleRef.current,
            {
                opacity: 0,
                x: direction === "left" ? 200 : -200,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
            }
        );

        // Cards fade/slide in after title
        const startX = direction === "left" ? -800 : 800;

        cardsRef.current.forEach((card, index) => {
            tl.fromTo(
                card,
                {
                    x: startX,
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "power3.out",
                },
                index * 0.15
                //`-=0.4` // each card slightly overlaps the previous
            );
        });

        return () => {
            tl.scrollTrigger?.kill();
        };
    }, [direction]);

    return (
        <section className="section" ref={sectionRef}>
            <h1
                className="section-title"
                ref={titleRef}
                style={{ textAlign: titleAlign || "left" }}
            >
                {title}
            </h1>

            <div className="cards-container">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className="card"
                        ref={(el) => (cardsRef.current[index] = el)}
                        style={{
                            zIndex: cards.length - index,
                        }}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="card-image"
                        />
                        <h3>{card.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ScrollSection;

    // useEffect(() => {
    //     const section = sectionRef.current;

    //     gsap.fromTo(
    //         titleRef.current,
    //         {
    //             opacity: 0,
    //             y: 80,
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             duration: 1.2,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: titleRef.current,
    //                 start: "top 80%",
    //                 //markers: true,
    //             },
    //         }
    //     );

    //     const startX = direction === "left" ? -800 : 800;

        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: section,
        //         start: "top top",
        //         end: "+=2500",
        //         scrub: true,
        //         pin: true,
        //     },
        // });

        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: section,
        //         start: "top top",
        //         end: "+=2500",
        //         scrub: true,
        //         pin: true,
        //     },
        // });

        // tl.fromTo(
        //   titleRef.current,
        //   {
        //     opacity: 0,
        //     y: 80,
        //   },
        //   {
        //     opacity: 1,
        //     y: 0,
        //     duration: 0.5,
        //   }
        // );

        // tl.fromTo(
        //     titleRef.current,
        //     {
        //         opacity: 0,
        //         x: direction === "left" ? 200 : -200, // left sections fade from right, right section fades from left
        //     },
        //     {
        //         opacity: 1,
        //         x: 0,
        //         duration: 0.5,
        //     }
        // );

        // cardsRef.current.forEach((card, index) => {
        //   tl.fromTo(
        //     card,
        //     {
        //       x: startX,
        //       opacity: 0,
        //     },
        //     {
        //     //   x: index * 70,
        //     x: index * 220,
        //       opacity: 1,
        //       duration: 1,
        //       ease: "power2.out",
        //     },
        //     index * 0.15
        //   );
        // });

        // cardsRef.current.forEach((card, index) => {
        //     tl.fromTo(
        //         card,
        //         {
        //             x: startX,
        //             opacity: 0,
        //             scale: 0.8,
        //         },
        //         {
        //             x: index * 300,
        //             opacity: 1,
        //             scale: 1,
        //             duration: 1,
        //             ease: "power3.out",
        //         },
        //         index * 0.2
        //     );
        // });

        // return () => {
        //   ScrollTrigger.getAll().forEach((st) => st.kill());
        // };

    //     const trigger = tl.scrollTrigger;

    //     return () => {
    //         trigger?.kill();
    //     };
    // }, [direction]);

    // return (
    //     <section className="section" ref={sectionRef}>
            {/* <h1 className="section-title" ref={titleRef}>
                {title}
            </h1> */}
//             <h1
//                 className="section-title"
//                 ref={titleRef}
//                 style={{ textAlign: titleAlign || "left" }}
//             >
//                 {title}
//             </h1>

//             <div className="cards-container">
//                 {cards.map((card, index) => (
//                     //   <div
//                     //     key={card.id}
//                     //     className="card"
//                     //     ref={(el) => (cardsRef.current[index] = el)}
//                     //     style={{
//                     //       zIndex: cards.length - index,
//                     //     }}
//                     //   >
//                     //     <div className="image-placeholder">
//                     //       Add Image Here
//                     //     </div>

//                     //     <h3>{card.title}</h3>
//                     //   </div>
//                     <div
//                         key={card.id}
//                         className="card"
//                         ref={(el) => (cardsRef.current[index] = el)}
//                         style={{
//                             zIndex: cards.length - index,
//                         }}
//                     >
//                         <img
//                             src={card.image}
//                             //src={'/pineapple-1.jpg'}
//                             alt={card.title}
//                             className="card-image"
//                         />

//                         <h3>{card.title}</h3>
//                     </div>
//                 ))}
//             </div>
//         </section>

//     );
// };

// export default ScrollSection;