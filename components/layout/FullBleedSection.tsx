import { SectionContainer } from "./SectionContainer";

export function FullBleedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={["w-full", className].filter(Boolean).join(" ")}>
      <SectionContainer>{children}</SectionContainer>
    </div>
  );
}
