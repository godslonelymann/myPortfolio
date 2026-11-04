import LightStreams from "./LightStreams";

export default function GridBackground() {
  return (
    <div className="grid-background" aria-hidden="true">
      <div className="grid-background__grid" />
      <LightStreams />
      <div className="grid-background__vignette" />
    </div>
  );
}
