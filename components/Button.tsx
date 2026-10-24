import Link from "next/link";

export interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold transition text-center";

  const variantStyles =
    variant === "primary"
      ? "bg-[#E31E24] text-white hover:bg-[#B3141A]"
      : "border-2 border-white text-white hover:bg-white hover:text-[#1F2937]";

  const classes = `${base} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
