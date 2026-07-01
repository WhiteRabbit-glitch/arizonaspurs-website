type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
};

export default function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag className={`bg-white p-6 shadow-sm ${className}`}>
      {children}
    </Tag>
  );
}
