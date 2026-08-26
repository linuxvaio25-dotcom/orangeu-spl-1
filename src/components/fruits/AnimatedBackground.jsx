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

// const DEFAULT_VIDEO = "/videos/fruits-1.mp4";
// const DEFAULT_IMAGE = "/src/components/fruits/assets/ChatGPT Image17_14_53 oU-2.png";
const DEFAULT_IMAGE = "/src/components/fruits/assets/ChatGPT Image17_14_53 oU-2.png";

const AnimatedBackground = ({ category }) => {
  const previousImage = useRef(DEFAULT_IMAGE);

  //states
  const [activeLayer, setActiveLayer] = useState(0);
  const [imageA, setImageA] = useState(DEFAULT_IMAGE);
  const [imageB, setImageB] = useState(DEFAULT_IMAGE);
  // const [ambientColor, setAmbientColor] = useState("#F6A55A");
  const [ambientColor, setAmbientColor] = useState(
  fruitsections[0]?.color ?? "#F6A55A"
);

useEffect(() => {
  const nextImage = category?.backgroundImage ?? DEFAULT_IMAGE;

  if (nextImage === previousImage.current) return;

  previousImage.current = nextImage;

  if (activeLayer === 0) {
    setImageB(nextImage);
    setActiveLayer(1);
  } else {
    setImageA(nextImage);
    setActiveLayer(0);
  }
}, [category]);


  // useEffect(() => {
  //   const nextImage = category?.backgroundImage ?? DEFAULT_IMAGE;

  //   if (nextImage === previousImage.current) return;

  //   previousImage.current = nextImage;

  //   const imageTimer = setTimeout(() => {
  //     if (activeLayer === 0) setImageB(nextImage);
  //     else setImageA(nextImage);
  //   }, 0);

  //   const timer = setTimeout(() => {
  //     setActiveLayer((layer) => (layer === 0 ? 1 : 0));
  //   }, 100);

  //   return () => {
  //     clearTimeout(imageTimer);
  //     clearTimeout(timer);
  //   };
  // }, [category, activeLayer]);

  /*
  // Video visibility handling retained for comparison with the image version.
  useEffect(() => {
    const nextVideo = category?.video ?? DEFAULT_VIDEO;
    if (nextVideo === previousVideo.current) return;
    if (activeLayer === 0) setVideoB(nextVideo);
    else setVideoA(nextVideo);
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
  */

  useEffect(() => {
    if (category?.color) return;

    const colors = fruitsections.map(section => section.color);

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setAmbientColor(colors[index]);
    }, 8000);

    return () => clearInterval(interval);
  }, [category]);

  return (
    // <div
    //   aria-hidden="true"
    //   className="pointer-events-none absolute inset-0 overflow-hidden"
    // >
    <div
  aria-hidden="true"
  className="pointer-events-none fixed inset-0 overflow-hidden"
>
      {/* Video version retained for comparison:
      {category?.video && (
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
        {/* Original sharp background layers, retained for comparison:
        <div
          className={`bg-image animate-cinematic ${activeLayer === 0 ? "visible" : ""}`}
          style={{ backgroundImage: `url("${imageA}")`, animationDelay: "0s" }}
        />
        <div
          className={`bg-image animate-cinematic ${activeLayer === 1 ? "visible" : ""}`}
          style={{ backgroundImage: `url("${imageB}")`, animationDelay: "0s" }}
        />
        */}

        <div
          className={`${imageA === DEFAULT_IMAGE ? "bg-image" : "bg-image-blurred"} animate-cinematic ${activeLayer === 0 ? "visible" : ""}`}
          style={{ backgroundImage: `url("${imageA}")`, animationDelay: "0s" }}
        />
        <div
          className={`${imageB === DEFAULT_IMAGE ? "bg-image" : "bg-image-blurred"} animate-cinematic ${activeLayer === 1 ? "visible" : ""}`}
          style={{ backgroundImage: `url("${imageB}")`, animationDelay: "0s" }}
        />

        {/* Image equivalent of the old video layers:
        <video ref={videoARef} className="bg-video" src={videoA} />
        <video ref={videoBRef} className="bg-video" src={videoB} />
        */}

      </div>

      {/* Atmosphere Overlay */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}
      <div className="absolute inset-0 bg-black/45" />

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
          ${category?.color ?? ambientColor}33,
    transparent 45%,
    ${category?.color ?? ambientColor}22
  )`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
