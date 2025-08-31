import type React from "react";

interface ExperienceChipProps {
  children: React.ReactNode;
  className?: string;
  style: React.CSSProperties;
}

const ExperienceChip: React.FC<ExperienceChipProps> = ({
  children,
  className,
  style,
}) => {
  // The base classes are combined with any additional classes passed in.
  const baseClasses = "mt-10 shadow-md chip-appear";
  const combinedClassName = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <div className={combinedClassName} style={style}>
      {children}
    </div>
  );
};

export default ExperienceChip;

