"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BackgroundImage = ({ imageSrc }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // حركة مع الاسكرول (محور X + نزول)
    gsap.to(".background-image", {
      y: 500,
      rotationX: "+=360",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // دوران ثابت حول نفسها (محور Z)
    gsap.to(".background-image", {
      rotationZ: "+=360",
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(".background-image");
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .background-image {
          position: fixed;
          top: 10px;
          left: 10px;
          width: 170px;
          height: 200px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          transform-style: preserve-3d;
          z-index: 30;
        }

        /* في الموبايل */
        @media (max-width: 768px) {
          .background-image {
            width: 100px;
            height: 120px;
          }
        }
      `}</style>

      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      />
    </>
  );
};

export default BackgroundImage;
