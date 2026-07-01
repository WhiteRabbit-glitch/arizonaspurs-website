type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

// Wraps the .section-label pattern — small uppercase tracking label used above section headings.
export default function Badge({ children, className = "" }: BadgeProps) {
  return <p className={`section-label ${className}`}>{children}</p>;
}
