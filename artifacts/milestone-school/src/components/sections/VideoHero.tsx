export default function VideoHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        src="/hero-video-main.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
    </section>
  );
}
