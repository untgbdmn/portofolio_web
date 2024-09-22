"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?: number;
  color?: string;
  children: React.ReactNode;
  title: string;
  desc: string;
  src: string;
  githubLink?: string;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  title,
  desc,
  src,
  githubLink,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <div>
      <div
        className={cn(
          "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={togglePopup}
        {...props}
      >
        <motion.div
          className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100 bg-white"
          style={{
            backgroundColor: color,
            maskImage: useMotionTemplate`
              radial-gradient(
                ${radius}px circle at ${mouseX}px ${mouseY}px,
                white,
                transparent 80%
              )
            `,
          }}
        >
          {isHovering && (
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent absolute inset-0 pointer-events-none"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={3}
            />
          )}
        </motion.div>
        {children}
      </div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white h-1/2 lg:h-auto w-4/5 text-white bg-opacity-10 backdrop-blur-sm py-3 px-4 rounded-xl overflow-y-scroll lg:overflow-visible">
            <div className="flex flex-row gap-3">
              <button
                type="button"
                className="bg-red-500 text-sm font-bold text-white px-2 py-1 rounded-lg"
                onClick={togglePopup}
              >
                Close
              </button>
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white w-fit h-fit inline-flex items-center text-black text-sm px-2 py-1 rounded-lg gap-2">
                  <FaGithub className="text-black text-lg" />
                  Open Github
                </a>
              )}
            </div>
            <div className="mt-5">
              <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
              <div className="lg:flex flex-row gap-5 py-2 px-3 text-center items-center justify-center">
                <p className="text-sm">{desc}</p>
                <Image
                  src={src}
                  alt={`Picture related to ${title}`}
                  width={500}
                  height={300}
                  className="lg:w-1/2 w-full mt-5 lg:mt-0 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
