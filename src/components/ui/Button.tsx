import Link from "next/link";

type Variant = "primary" | "secondary" | "nav";

const variantClass: Record<Variant, string> = {
  primary: "hero-cta-primary",
  secondary: "hero-cta-secondary",
  nav: "nav-cta",
};

type SharedProps = {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
};

type ButtonAsButton = SharedProps & {
  href?: never;
  external?: never;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type ButtonAsLink = SharedProps & {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  href,
  external,
  children,
  className = "",
  type = "button",
  onClick,
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const cls = `${variantClass[variant]} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
