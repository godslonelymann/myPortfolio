"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

export type LightStreamConfig = {
  id: number;
  top: string;
  width: number;
  duration: number;
  delay: number;
  repeatDelay: number;
  opacity: number;
  desktopOnly?: boolean;
};

type LightStreamProps = {
  stream: LightStreamConfig;
};

type StreamStyle = CSSProperties & {
  "--stream-width": string;
};

export default function LightStream({ stream }: LightStreamProps) {
  const style: StreamStyle = {
    "--stream-width": `${stream.width}px`,
    top: stream.top,
    opacity: stream.opacity,
  };

  return (
    <motion.div
      className={`light-stream${stream.desktopOnly ? " light-stream--desktop-only" : ""}`}
      style={style}
      initial={{ x: "110vw" }}
      animate={{ x: "-70vw" }}
      transition={{
        duration: stream.duration,
        delay: stream.delay,
        repeat: Infinity,
        repeatDelay: stream.repeatDelay,
        ease: "linear",
      }}
      aria-hidden="true"
    />
  );
}
