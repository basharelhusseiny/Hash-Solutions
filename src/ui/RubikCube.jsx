"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const RubikCube = ({ size = 400, position = { x: "50%", y: "20%" } }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const rubikCubeRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(9, 9, 9);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    sceneRef.current.background = null;

    // Rubik's Cube
    const cubeSize = 2.5;
    const pieceSize = cubeSize / 3;
    const rubikGroup = new THREE.Group();
    const colors = [0x9370db, 0x6a5acd];

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
          const geometry = new THREE.BoxGeometry(
            pieceSize - 0.02,
            pieceSize - 0.02,
            pieceSize - 0.02
          );
          const material = new THREE.MeshPhysicalMaterial({
            color: colors[Math.floor(Math.random() * colors.length)],
            metalness: 0.1,
            roughness: 0.2,
            clearcoat: 0.6,
            reflectivity: 0.5,
            transparent: true,
            opacity: 0.95,
            side: THREE.DoubleSide,
          });

          const piece = new THREE.Mesh(geometry, material);
          piece.position.set(
            x * pieceSize - cubeSize / 2 + pieceSize / 2,
            y * pieceSize - cubeSize / 2 + pieceSize / 2,
            z * pieceSize - cubeSize / 2 + pieceSize / 2
          );
          rubikGroup.add(piece);
        }
      }
    }

    sceneRef.current.add(rubikGroup);
    rubikCubeRef.current = rubikGroup;

    // Lights
    const ambientLight = new THREE.AmbientLight(0x303030, 0.6);
    sceneRef.current.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(9, 18, 12);
    sceneRef.current.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x9370db, 0.6);
    fillLight.position.set(-9, 9, -9);
    sceneRef.current.add(fillLight);

    // Animation
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.002;

      rubikCubeRef.current.rotation.x = time * 0.1;
      rubikCubeRef.current.rotation.y = time * 0.15;
      rubikCubeRef.current.rotation.z = time * 0.05;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    // Drag & Drop with mouse + touch
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const startDrag = (clientX, clientY) => {
      isDragging = true;
      offsetX = clientX - mount.offsetLeft;
      offsetY = clientY - mount.offsetTop;
      mount.style.cursor = "grabbing";
    };

    const moveDrag = (clientX, clientY) => {
      if (!isDragging) return;
      mount.style.left = clientX - offsetX + "px";
      mount.style.top = clientY - offsetY + "px";
    };

    const endDrag = () => {
      isDragging = false;
      mount.style.cursor = "grab";
    };

    // Mouse events
    mount.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
    window.addEventListener("mouseup", endDrag);

    // Touch events
    mount.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      startDrag(touch.clientX, touch.clientY);
    });
    window.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];
      moveDrag(touch.clientX, touch.clientY);
    });
    window.addEventListener("touchend", endDrag);

    // Cleanup
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      rendererRef.current.dispose();
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      style={{
        width: size,
        height: size,
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "grab",
      }}
    />
  );
};

export default RubikCube;
