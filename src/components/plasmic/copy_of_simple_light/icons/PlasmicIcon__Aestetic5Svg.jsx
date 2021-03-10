// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Aestetic5SvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      viewBox={"0 0 173 173"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <image
        width={"173"}
        height={"173"}
        xlinkHref={
          "data:img/png;base64,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"
        }
      ></image>
    </svg>
  );
}

export default Aestetic5SvgIcon;
/* prettier-ignore-end */
