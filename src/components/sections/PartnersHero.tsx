// Entrance fade is CSS (.fade-up in globals.css) so the heading is in the first
// paint; it animates only on md+ screens with no reduced-motion preference.
const fadeUp = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

export default function PartnersHero() {
  return (
    <section
      aria-labelledby="partners-hero-heading"
      className="bg-spurs-navy px-6 pb-24 pt-14 text-center sm:pt-24"
    >
      <div className="mx-auto max-w-[700px]">
        <p {...fadeUp(0)} className="fade-up fade-up-sm section-label mb-6 justify-center text-white/60">
          Our Partners
        </p>

        <h1
          id="partners-hero-heading"
          {...fadeUp(0.1)}
          className="fade-up fade-up-sm font-limelight text-4xl uppercase tracking-wide text-white md:text-5xl"
        >
          Proud to Stand With
        </h1>

        <div
          {...fadeUp(0.2)}
          aria-hidden="true"
          className="fade-up fade-up-sm mx-auto my-8 h-px w-24 bg-gold"
        />

        <p
          {...fadeUp(0.3)}
          className="fade-up fade-up-sm font-josefin text-base leading-relaxed tracking-wide text-white/70"
        >
          The venue that hosts us and the club that unites us.
        </p>
      </div>
    </section>
  );
}
