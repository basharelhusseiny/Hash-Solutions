"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const DraggableHeroImage = ({
  imageUrl = "/images/hash-main.png",
  size = 100,
}) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // التعامل مع السحب
  const handleDrag = (event, info) => {
    const container = containerRef.current;
    if (!container) {
      console.error("Container ref is not set");
      return;
    }

    const rect = container.getBoundingClientRect();
    const maxX = rect.width - size;
    const maxY = rect.height - size;

    // تحديد الموقع مع التأكد من البقاء داخل حدود div.container
    const newX = Math.max(0, Math.min(position.x + info.delta.x, maxX));
    const newY = Math.max(0, Math.min(position.y + info.delta.y, maxY));

    setPosition({ x: newX, y: newY });
    console.log("Image Position:", { x: newX, y: newY }); // للتصحيح
  };

  // التحقق من تحميل الصورة
  const handleImageError = () => {
    console.error("Failed to load image at:", imageUrl);
  };

  // التحقق من نجاح تحميل الصورة
  const handleImageLoad = () => {
    console.log("Image loaded successfully:", imageUrl);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{ pointerEvents: "none" }} // منع التداخل مع العناصر الأخرى
    >
      <motion.img
        src={imageUrl}
        alt="Draggable Hero Image"
        className="absolute cursor-grab select-none border-2 border-red-500 bg-blue-500/50" // حدود وخلفية مؤقتة
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: position.x,
          top: position.y,
          zIndex: 100000, // قيمة عالية جدًا لتكون فوق Particles والنصوص
          pointerEvents: "auto", // السماح بالتفاعل مع الصورة
        }}
        onError={handleImageError}
        onLoad={handleImageLoad}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDrag={handleDrag}
        whileDrag={{ cursor: "grabbing", scale: 1.1 }}
        dragElastic={0}
        dragMomentum={false}
      />
    </div>
  );
};

export default DraggableHeroImage;
