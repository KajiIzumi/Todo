import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export default function Header(props: {
  stepNum:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <>
      <h1 className="text-center">
        <div className="text-2xl p-5">Step{props.stepNum}</div>
        <div className="text-3xl">{props.title}</div>
      </h1>
    </>
  );
}
