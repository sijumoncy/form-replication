import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: IButtonProps) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default Button;

// const customerInfoData =
// findObjectByKey(sitecoreData, "key", "value")
