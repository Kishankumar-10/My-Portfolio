import { SectionContainer } from "./SectionContainer";

export function SectionDivider() {
  return (
    <SectionContainer>
      <div className="border-t border-border-subtle/60 hidden md:block" />
    </SectionContainer>
  );
}
