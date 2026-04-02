export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const descriptionAlignment = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 text-pretty text-[var(--color-muted)] sm:text-lg ${descriptionAlignment}`}
        >
          {description}
        </p>
      ) : null}
      <div
        className={`section-divider mt-6 max-w-2xl ${descriptionAlignment}`}
        aria-hidden="true"
      />
    </div>
  );
}
