"use client";

import { useReducedMotion } from "framer-motion";
import LightStream, { type LightStreamConfig } from "./LightStream";

const lightStreams: LightStreamConfig[] = [
  {
    id: 1,
    top: "calc(var(--grid-size) * 1)",
    width: 230,
    duration: 8.4,
    delay: 0.8,
    repeatDelay: 4.8,
    opacity: 0.68,
  },
  {
    id: 2,
    top: "calc(var(--grid-size) * 3)",
    width: 340,
    duration: 12.8,
    delay: 5.2,
    repeatDelay: 2.7,
    opacity: 0.4,
    desktopOnly: true,
  },
  {
    id: 3,
    top: "calc(var(--grid-size) * 5)",
    width: 280,
    duration: 10.6,
    delay: 8.1,
    repeatDelay: 7.1,
    opacity: 0.56,
  },
  {
    id: 4,
    top: "calc(var(--grid-size) * 7)",
    width: 200,
    duration: 14.2,
    delay: 2.9,
    repeatDelay: 5.6,
    opacity: 0.74,
    desktopOnly: true,
  },
  {
    id: 5,
    top: "calc(var(--grid-size) * 9)",
    width: 320,
    duration: 9.3,
    delay: 6.4,
    repeatDelay: 3.4,
    opacity: 0.46,
  },
  {
    id: 6,
    top: "calc(var(--grid-size) * 10)",
    width: 260,
    duration: 13.5,
    delay: 9.6,
    repeatDelay: 8.3,
    opacity: 0.64,
    desktopOnly: true,
  },
  {
    id: 7,
    top: "calc(var(--grid-size) * 12)",
    width: 300,
    duration: 11.7,
    delay: 3.7,
    repeatDelay: 6.2,
    opacity: 0.52,
  },
];

export default function LightStreams() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="light-streams" aria-hidden="true">
      {lightStreams.map((stream) => (
        <LightStream key={stream.id} stream={stream} />
      ))}
    </div>
  );
}
