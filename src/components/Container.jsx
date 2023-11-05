export function Container({ as: Component = "div", className, children }) {
  // Using template literals to concatenate strings
  const containerClasses = `mx-auto max-w-7xl px-6 lg:px-8 ${className || ""}`;

  return (
    <Component className={containerClasses}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  );
}
