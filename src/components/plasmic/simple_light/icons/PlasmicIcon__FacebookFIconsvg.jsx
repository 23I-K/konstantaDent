// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FacebookFIconsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"73 0 267 266.9"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#157DC3"}
        d={
          "M321.1 262.3c7.9 0 14.2-6.4 14.2-14.2V18.8c0-7.9-6.4-14.2-14.2-14.2H91.8C84 4.6 77.6 11 77.6 18.8v229.3c0 7.9 6.4 14.2 14.2 14.2h229.3z"
        }
      ></path>

      <path
        fill={"#FFF"}
        d={
          "M255.4 262.3v-99.8h33.5l5-38.9h-38.5V98.8c0-11.3 3.1-18.9 19.3-18.9h20.6V45c-3.6-.5-15.8-1.5-30-1.5-29.7 0-50 18.1-50 51.4v28.7h-33.6v38.9h33.6v99.8h40.1z"
        }
      ></path>
    </svg>
  );
}

export default FacebookFIconsvgIcon;
/* prettier-ignore-end */
