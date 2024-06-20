import React from "react";

const Button = ({
  icon,
  name,
  padding,
  fw,
  fs,
  type,
  border,
  borderRad,
  background,
}) => {
  return (
    <button
      style={{
        background: background,
        padding: padding,
        borderRadius: borderRad,
        fontWeight: fw,
        fontSize: fs,
        border: border,
      }}
      type={type}
    >
      {icon && icon}
      {name}
    </button>
  );
};

export default Button;
