import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[75px]",
  h2: "font-bold sm:text-[21px] md:text-[27px] text-[40px]",
  h3: "font-bold sm:text-[21px] md:text-[23px] text-[25px]",
  h4: "text-[20px]",
  h5: "text-[18px]",
  h6: "text-[15px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
