export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-sun-400" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight ${
          light ? "text-white" : "text-brand-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-brand-100" : "text-brand-800/80"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
