interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant,
  className = "",
  ...props
}) => {
     const isPrimary = variant === "primary";
  const baseClasses =
    "px-10 py-3 cursor-pointer font-semibold overflow-hidden relative custom-btn-animation " + "transition-shadow duration-300 shadow-xl hover:shadow-2xl transform";
  const colorClasses = "text-white"

const baseBg = isPrimary? "var(--color-accent-primary)": "var(--color-accent-secondary)";

  return (
    <button className={`${baseClasses} ${colorClasses} ${className}`}  style={{ backgroundColor: baseBg } as React.CSSProperties}  {...props}  >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
