export default function Container({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  const base = "mx-auto w-full max-w-6xl px-4";
  return (
    <div {...rest} className={`${base} ${className}`}>
      {children}
    </div>
  );
}
