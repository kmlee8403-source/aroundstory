type PageIntroProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  tone?: "paper" | "sage" | "blue" | "dark";
};

export function PageIntro({ index, eyebrow, title, description, tone = "paper" }: PageIntroProps) {
  return (
    <section className={`page-intro page-intro-${tone}`}>
      <div className="shell page-intro-grid">
        <div>
          <p className="section-chip"><span>{index}</span>{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <p className="page-intro-copy">{description}</p>
      </div>
    </section>
  );
}
