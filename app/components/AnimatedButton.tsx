interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}
// interface DynamicCSS extends React.CSSProperties {
//     '--color-bg-animated-base': string;
// }
export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant,
  className = "",
  ...props
}) => {
     const isPrimary = variant === "primary";
  const baseClasses =
    "px-10 py-3 font-semibold overflow-hidden relative custom-btn-animation" + "transition-shadow duration-300 shadow-xl hover:shadow-2xl transform";
  const colorClasses = "text-white"

const baseBg = isPrimary? "var(--color-accent-primary)": "var(--color-accent-secondary)";
// const dynamicBaseBg: DynamicCSS = {
//     '--color-bg-animated-base': baseBg,
//   };
  return (
    <button className={`${baseClasses} ${colorClasses} ${className}`}  style={{ backgroundColor: baseBg } as React.CSSProperties}  {...props}  >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
