type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
};

export function Button({ children, variant }: ButtonProps) {
  const base = "px-4 py-2 rounded text-white";
  const styles = variant === "primary" ? "bg-blue-500" : "bg-gray-500";
  return <button className={`${base} ${styles}`}>{children}</button>;
}
