// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bGhfLbpuPrsnLdpUo1t3d
// Component: 4rYfOxUY8n
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light.module.css"; // plasmic-import: bGhfLbpuPrsnLdpUo1t3d/projectcss
import * as sty from "./PlasmicSection2.module.css"; // plasmic-import: 4rYfOxUY8n/css
import ToothWhiteningBlacksvgIcon from "./icons/PlasmicIcon__ToothWhiteningBlacksvg"; // plasmic-import: khWLi80jHa/icon
import _2DoctorpngBn3RPoY8K from "./images/_2Doctorpng.png"; // plasmic-import: Bn3rPoY8K/picture
import _1Doctorpng2LjvaxteR from "./images/_1Doctorpng.png"; // plasmic-import: 2LjvaxteR/picture
import _3DoctorpngLAmif4Ho7 from "./images/_3Doctorpng.png"; // plasmic-import: lAMIF4HO7/picture

export const PlasmicSection2__VariantProps = new Array();

export const PlasmicSection2__ArgProps = new Array();

function PlasmicSection2__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__a3I2G)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__lPiWy)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__azCCw
            )}
          >
            {"Наша команда специалистов"}
          </div>

          <ToothWhiteningBlacksvgIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        </p.Stack>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__dawh
          )}
        >
          {
            "Наши врачи регулярно обучаются и повышают уровень своего мастерства на международных симпозиумах и конференциях в разных странах, в том числе – в США, Германии, Чехии, Австрии и других странах. В своей работе мы используем самые актуальные разработки российских и зарубежных стоматологов, доказавшие свою эффективность в ходе тысяч клинических исследований."
          }
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__b92Af)}
      >
        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__bFt7D)}
          role={"img"}
          src={_2DoctorpngBn3RPoY8K}
        />

        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__suOwy)}
          role={"img"}
          src={_1Doctorpng2LjvaxteR}
        />

        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__fIpM)}
          role={"img"}
          src={_3DoctorpngLAmif4Ho7}
        />

        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__hyhSu)}
          role={"img"}
          src={_2DoctorpngBn3RPoY8K}
        />
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box___1Ws8P)}
      >
        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__mhk4L)}
          role={"img"}
          src={_1Doctorpng2LjvaxteR}
        />

        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__tCJcD)}
          role={"img"}
          src={_3DoctorpngLAmif4Ho7}
        />

        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__mnbYo)}
          role={"img"}
          src={_2DoctorpngBn3RPoY8K}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSection2__ArgProps,
      internalVariantPropNames: PlasmicSection2__VariantProps
    });

    return PlasmicSection2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSection2";
  } else {
    func.displayName = `PlasmicSection2.${nodeName}`;
  }
  return func;
}

export const PlasmicSection2 = Object.assign(
  // Top-level PlasmicSection2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicSection2
    internalVariantProps: PlasmicSection2__VariantProps,
    internalArgProps: PlasmicSection2__ArgProps
  }
);

export default PlasmicSection2;
/* prettier-ignore-end */