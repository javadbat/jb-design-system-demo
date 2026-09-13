import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "./HomeIcon";
import "./sample-header.css";

type Props = {
  title: string;
};
export function SampleHeader(props: PropsWithChildren<Props>) {
  return (
    <div className="sample-header">
      <div className="title-row">
        <Link to="/">
          <HomeIcon />
        </Link>
        <h1>{props.title}</h1>
      </div>
      <div className="children-row">{props.children}</div>
    </div>
  );
}
