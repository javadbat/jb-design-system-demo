import React from "react";
import "./sample-wrapper.css";
type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
};

export function SampleWrapper(props: Props) {
  return (
    <div
      className={"sample-wrapper " + props.className ?? ""}
      style={props.style}
    >
      {props.children}
    </div>
  );
}
