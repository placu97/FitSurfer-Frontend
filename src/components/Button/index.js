import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder10: "rounded-radius10",
  icbCircleBorder34: "rounded-radius34",
};
const variants = {
  icbFillRed400: "bg-red_400",
  icbOutlineRed3007c: "bg-red_300 shadow-bs1",
  icbOutlineCyan40087: "bg-cyan_400 shadow-bs2",
  icbOutlineLime80087: "bg-lime_800 shadow-bs",
  icbOutlineWhiteA700: "bg-red_400 border-bw9 border-solid border-white_A700",
};
const sizes = {
  smIcn: "p-[11px] sm:p-[5px] md:p-[7px]",
  mdIcn: "md:p-[17px] p-[26px] sm:px-[15px] sm:py-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbRoundedBorder10", "icbCircleBorder34"]),
  variant: PropTypes.oneOf([
    "icbFillRed400",
    "icbOutlineRed3007c",
    "icbOutlineCyan40087",
    "icbOutlineLime80087",
    "icbOutlineWhiteA700",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "icbFillRed400",
  size: "smIcn",
};

export { Button };
