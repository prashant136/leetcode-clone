import React, { ReactNode, CSSProperties } from "react";

type BorderedDivProps = {
  children: ReactNode;
  style?: CSSProperties; // Use CSSProperties for styling
};

export default function BorderedDiv(props: BorderedDivProps) {
  return (
    <div
      className={`bg-[#3c3c3c] rounded-md p-3 m-4`}
      style={props.style} // Apply custom styles using the style prop
    >
      {props.children}
    </div>
  );
}
