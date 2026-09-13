import React from "react";
import "./sample-list.css";
type Props = {
  children: React.ReactNode | React.ReactNode[];
};
export function SampleList(props: Props) {
  return <div className="sample-list">{props.children}</div>;
}
