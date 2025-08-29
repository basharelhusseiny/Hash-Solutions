"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./BubbleMenu.module.css"; // Use CSS module

const DEFAULT_ITEMS = [
  {
    label: "Home",
    href: "/",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "Marketing",
    href: "/marketing",
    ariaLabel: "marketing",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "Business Development",
    href: "/business",
    ariaLabel: "business development",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "Rubix Productions",
    href: "/rubix",
    ariaLabel: "rubix",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "Contact Us",
    href: "/contact",
    ariaLabel: "contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Toggle menu",
  menuBg = "transparent",
  menuContentColor = "#111",
  useFixedPosition = false,
  items = DEFAULT_ITEMS, // Use default items if none provided
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.12,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const overlayRef = useRef(null);
  const bubblesRef = useRef([]);
  const labelRefs = useRef([]);

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering
  }, []);

  const containerClassName = [
    styles.bubbleMenu,
    useFixedPosition ? "fixed" : "absolute",
    "left-0 right-0 top-8",
    "flex items-center justify-between",
    "gap-4 px-8",
    "pointer-events-none",
    "z-[1001]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);
    if (!overlay || !bubbles.length || !isClient) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: "flex" });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: "50% 50%" });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay;
        const tl = gsap.timeline({ delay });
        tl.to(bubble, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase,
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: "power3.out",
            },
            "-=" + animationDuration * 0.9
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power3.in",
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
          setShowOverlay(false);
        },
      });
    }
  }, [
    isMenuOpen,
    showOverlay,
    animationEase,
    animationDuration,
    staggerDelay,
    isClient,
  ]);

  useEffect(() => {
    if (!isClient) return;
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;
        bubbles.forEach((bubble, i) => {
          const item = items[i];
          if (bubble && item) {
            const rotation = isDesktop ? item.rotation ?? 0 : 0;
            gsap.set(bubble, { rotation });
          }
        });
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, items, isClient]);

  return (
    <nav
      className={containerClassName}
      style={style}
      aria-label="Main navigation"
    >
      <div
        className={`${styles.logoBubble} bubble logo-bubble inline-flex items-center justify-center rounded-full pointer-events-auto h-[100px] px-4 md:px-8 gap-2 will-change-transform`}
        aria-label="Logo"
        style={{
          background: menuBg,
          minHeight: "48px",
          borderRadius: "9999px",
        }}
      >
        <span
          className={`${styles.logoContent} inline-flex items-center justify-center w-[200px] h-full`}
          style={{
            ["--logo-max-height"]: "80%",
            ["--logo-max-width"]: "100%",
          }}
        >
          {typeof logo === "string" ? (
            <img
              src={logo}
              alt="Logo"
              className={`${styles.bubbleLogo} max-h-[80%] max-w-full object-contain block`}
            />
          ) : (
            logo
          )}
        </span>
      </div>

      <button
        type="button"
        className={`${styles.toggleBubble} bubble toggle-bubble menu-btn ${
          isMenuOpen ? "open" : ""
        } inline-flex flex-col items-center justify-center rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.12)] pointer-events-auto w-12 h-12 md:w-14 md:h-14 border-0 cursor-pointer p-0 will-change-transform`}
        onClick={handleToggle}
        aria-label={menuAriaLabel}
        aria-pressed={isMenuOpen}
      >
        <span
          className={`${styles.menuLine} block mx-auto rounded-[2px]`}
          style={{
            width: 26,
            height: 2,
            background: menuContentColor,
            transform: isMenuOpen ? "translateY(4px) rotate(45deg)" : "none",
          }}
        />
        <span
          className={`${styles.menuLine} short block mx-auto rounded-[2px]`}
          style={{
            marginTop: "6px",
            width: 26,
            height: 2,
            background: menuContentColor,
            transform: isMenuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {showOverlay && (
        <div
          ref={overlayRef}
          className={`${styles.bubbleMenuItems} bubble-menu-items ${
            useFixedPosition ? "fixed" : "absolute"
          } inset-0 flex items-center justify-center pointer-events-none z-[1000]`}
          aria-hidden={!isMenuOpen}
        >
          <ul
            className={`${styles.pillList} list-none m-0 px-6 w-full max-w-[1600px] mx-auto flex flex-wrap gap-x-0 gap-y-1 pointer-events-auto`}
            role="menu"
            aria-label="Menu links"
          >
            {items.map((item, idx) => (
              <li
                key={item.href} // Use href as key for uniqueness
                role="none"
                className={`${styles.pillCol} pill-col flex justify-center items-stretch [flex:0_0_calc(100%/3)] box-border`}
              >
                <a
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  className={`${styles.pillLink} pill-link w-full rounded-[999px] no-underline text-inherit flex items-center justify-center relative transition-[background,color] duration-300 ease-in-out box-border whitespace-nowrap overflow-hidden`}
                  style={{
                    ["--item-rot"]: `${item.rotation ?? 0}deg`,
                    ["--pill-color"]: menuContentColor,
                    ["--hover-bg"]: item.hoverStyles?.bgColor || "#f3e8ff",
                    ["--hover-color"]:
                      item.hoverStyles?.textColor || menuContentColor,
                    minHeight: "var(--pill-min-h, 160px)",
                    padding: "clamp(1.5rem, 3vw, 8rem) 0",
                    fontSize: "clamp(1.5rem, 4vw, 4rem)",
                    fontWeight: 400,
                    lineHeight: 0,
                    willChange: "transform",
                    height: 10,
                  }}
                  ref={(el) => {
                    bubblesRef.current[idx] = el;
                  }}
                >
                  <span
                    className={`${styles.pillLabel} inline-block`}
                    style={{
                      willChange: "transform, opacity",
                      height: "1.2em",
                      lineHeight: 1.2,
                    }}
                    ref={(el) => {
                      labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
