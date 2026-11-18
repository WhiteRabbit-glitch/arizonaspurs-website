// Entrance fade is CSS (.fade-up in globals.css) so the heading is in the first
// paint; it animates only on md+ screens with no reduced-motion preference.
const fadeUp = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

export default function NewsletterHero() {
  return (
    <section
      aria-label="Arizona Spurs newsletter"
      className="bg-spurs-navy px-6 pb-28 pt-16 text-center sm:pt-28"
    >
      <div className="mx-auto max-w-[800px]">
        <p {...fadeUp(0)} className="fade-up fade-up-sm section-label mb-6 justify-center text-white/50">
          Stay in the Loop
        </p>
        <h1
          {...fadeUp(0.1)}
          className="fade-up fade-up-sm font-limelight text-5xl uppercase leading-tight tracking-wide text-white md:text-6xl"
        >
          Club News
        </h1>
        <div
          {...fadeUp(0.2)}
          aria-hidden="true"
          className="fade-up fade-up-sm mx-auto my-8 h-px w-24 bg-gold"
        />
        <p
          {...fadeUp(0.3)}
          className="fade-up fade-up-sm font-josefin text-lg leading-relaxed tracking-wide text-white/80 [text-wrap:balance]"
        >
          Match previews, watch party announcements, club news, and the occasional COYS.
          No spam — just Spurs.
        </p>
      </div>
    </section>
  );
}
