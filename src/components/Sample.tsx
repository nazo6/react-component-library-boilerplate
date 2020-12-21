import React from "react";

type SampleProps = {
  text: string;
};
export function Sample(props: SampleProps) {
  return <div>{props.text}</div>;
}
