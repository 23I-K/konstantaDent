// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BrightStarssvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 237.998 237.998"}
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

      <path
        d={
          "M200.428 58.206c7.564-.874 19.018-2.508 37.57-5.091-18.558-2.54-30.22-4.071-37.586-5-.92-7.888-2.502-19.016-5.085-37.575-2.536 18.562-3.72 29.896-5.005 37.583-7.413.92-19.019 2.508-37.578 5.098 18.568 2.537 30.369 4.009 37.586 4.995.975 7.1 2.514 19.012 5.11 37.565 2.531-18.555 4.052-30.159 4.988-37.575zm-152.745 0c7.564-.874 19.017-2.508 37.571-5.091-18.558-2.54-30.221-4.071-37.586-5-.921-7.888-2.503-19.016-5.086-37.575-2.536 18.562-3.718 29.896-5.004 37.583-7.413.92-19.019 2.508-37.578 5.098 18.568 2.537 30.369 4.009 37.586 4.995.974 7.1 2.512 19.012 5.109 37.565 2.532-18.555 4.052-30.159 4.988-37.575zm0 131.677c7.564-.874 19.017-2.508 37.571-5.092-18.558-2.539-30.221-4.07-37.586-5-.921-7.887-2.503-19.014-5.086-37.574-2.536 18.562-3.718 29.896-5.004 37.583-7.413.921-19.019 2.508-37.578 5.098 18.568 2.537 30.369 4.01 37.586 4.995.974 7.1 2.512 19.012 5.109 37.566 2.532-18.557 4.052-30.16 4.988-37.576zm152.745 0c7.564-.874 19.018-2.508 37.57-5.092-18.558-2.539-30.22-4.07-37.586-5-.92-7.887-2.502-19.014-5.085-37.574-2.536 18.562-3.72 29.896-5.005 37.583-7.413.921-19.019 2.508-37.578 5.098 18.568 2.537 30.369 4.01 37.586 4.995.975 7.1 2.514 19.012 5.11 37.566 2.531-18.557 4.052-30.16 4.988-37.576zm-71.793-61.27c14.414-1.664 36.24-4.78 71.596-9.703-35.363-4.838-57.588-7.756-71.625-9.527-1.755-15.029-4.767-36.235-9.69-71.601-4.833 35.372-7.086 56.97-9.537 71.617-14.126 1.754-36.243 4.777-71.609 9.713 35.385 4.836 57.872 7.641 71.625 9.519 1.858 13.53 4.788 36.229 9.737 71.585 4.821-35.361 7.719-57.472 9.503-71.603z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrightStarssvgIcon;
/* prettier-ignore-end */
