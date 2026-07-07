// const AnimatedBackground = ({ category }) => {
//   return (
//     <div
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-200/40 via-white/10 to-orange-400/30"
//     >
//       {category ? <div className="absolute inset-0 bg-black/10" /> : null}
//     </div>
//   );
// };

// export default AnimatedBackground;

import { useEffect, useRef, useState } from "react";

import { fruitsections } from "../../index";

const DEFAULT_VIDEO = "/videos/fruits-1.mp4"; // or whichever video you want as the default

const AnimatedBackground = ({ category }) => {
  // const videoRef = useRef(null);
  //Refs
  const videoARef = useRef(null);
  const videoBRef = useRef(null);
  const previousVideo = useRef(DEFAULT_VIDEO);

  //states
  const [activeLayer, setActiveLayer] = useState(0);
  const [videoA, setVideoA] = useState(DEFAULT_VIDEO);
  const [videoB, setVideoB] = useState(DEFAULT_VIDEO);
  // const [ambientColor, setAmbientColor] = useState("#F6A55A");
  const [ambientColor, setAmbientColor] = useState(
  fruitsections[0]?.color ?? "#F6A55A"
);



  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.play().catch(() => {});
  //   }
  // }, [category]);

  // useEffect(() => {
  //   const nextVideo = category?.video ?? DEFAULT_VIDEO;

  //   if (nextVideo === previousVideo.current) return;

  //   if (activeLayer === 0) {
  //     setVideoB(nextVideo);
  //   } else {
  //     setVideoA(nextVideo);
  //   }

  //   previousVideo.current = nextVideo;

  //   setTimeout(() => {
  //     setActiveLayer((layer) => (layer === 0 ? 1 : 0));
  //   }, 100);
  // }, [category]);

  useEffect(() => {
    const nextVideo = category?.video ?? DEFAULT_VIDEO;

    if (nextVideo === previousVideo.current) return;

    if (activeLayer === 0) {
      setVideoB(nextVideo);
    } else {
      setVideoA(nextVideo);
    }

    previousVideo.current = nextVideo;

    const timer = setTimeout(() => {
      setActiveLayer((layer) => (layer === 0 ? 1 : 0));
    }, 100);

    return () => clearTimeout(timer);
  }, [category, activeLayer]);

  useEffect(() => {
    const handleVisibility = () => {
      const videos = [
        videoARef.current,
        videoBRef.current,
      ];

      if (document.hidden) {
        videos.forEach(video => video?.pause());
      } else {
        videos.forEach(video =>
          video?.play().catch(() => { })
        );
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    // If a category is selected, stop cycling
    if (category?.color) {
      setAmbientColor(category.color);
      return;
    }

    const colors = fruitsections.map(section => section.color);

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setAmbientColor(colors[index]);
    }, 8000);

    return () => clearInterval(interval);
  }, [category]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* {category?.video && (
        <video
          ref={videoRef}
          key={category.video}
          className="absolute inset-0 h-full w-full object-cover opacity-0 animate-fadeIn"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={category.video} type="video/mp4" />
        </video>
      )} */}

      <div className="animated-background">

        <video
          ref={videoARef}
          className={`bg-video animate-cinematic ${activeLayer === 0 ? "visible" : ""}`}
          src={videoA}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ animationDelay: "0s" }}
        />

        <video
          ref={videoBRef}
          className={`bg-video animate-cinematic ${activeLayer === 1 ? "visible" : ""}`}
          src={videoB}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ animationDelay: "-19s" }}
        />

      </div>

      {/* Atmosphere Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Warm Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-transparent to-orange-500/20" /> */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        //     style={{
        //       background: `linear-gradient(
        //   135deg,
        //   ${category?.color ?? "#F6A55A"}33,
        //   transparent 45%,
        //   ${category?.color ?? "#F6A55A"}22
        // )`,
        //     }}
        style={{
          background: `linear-gradient(
    135deg,
    ${ambientColor}33,
    transparent 45%,
    ${ambientColor}22
  )`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
