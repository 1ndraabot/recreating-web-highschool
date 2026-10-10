export interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-[#1F2937] mb-2">{title}</h2>
      {subtitle && (
        <p className="text-[#6B7280] text-base max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
