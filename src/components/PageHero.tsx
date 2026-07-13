export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-16 pb-14 sm:pt-20 sm:pb-16 text-center">
      <span className="text-xs uppercase tracking-[0.15em] text-navy">{eyebrow}</span>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl leading-tight">{title}</h1>
      {intro && (
        <p className="mt-5 text-muted leading-relaxed max-w-xl mx-auto">{intro}</p>
      )}
    </section>
  );
}
