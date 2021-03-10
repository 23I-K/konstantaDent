// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bGhfLbpuPrsnLdpUo1t3d
// Component: fwF6B-mcVA
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: Dumym2P0mPVt/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light.module.css"; // plasmic-import: bGhfLbpuPrsnLdpUo1t3d/projectcss
import * as sty from "./PlasmicSection6.module.css"; // plasmic-import: fwF6B-mcVA/css
import ShiningBlacksvgIcon from "./icons/PlasmicIcon__ShiningBlacksvg"; // plasmic-import: X7oHkErDC8/icon

export const PlasmicSection6__VariantProps = new Array();

export const PlasmicSection6__ArgProps = new Array();

function PlasmicSection6__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__mgGeE)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__nB8L
          )}
        >
          {"Философия клиники"}
        </div>

        <ShiningBlacksvgIcon
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
          sty.box__leCyB
        )}
      >
        {
          "Несмотря на то, что мы постоянно стремимся расти, меняться и развиваться, мы всегда сохраняем главный принцип семейной стоматологии — уютную атмосферу, честность и уважение по отношению к нашим пациентам. Наши врачи работают четко в соответствии с поставленным диагнозом и никогда не навязывают ненужные дополнительные услуги. Мы всегда следим за качеством нашей работы в динамике и принимаем во внимание отзыв каждого пациента. Ведь «Константа Дентал» —  это не только про красивую улыбку и здоровые зубы, но и про заботу о вас.  "
        }
      </div>

      <LinkButton
        className={classNames("__wab_instance", sty.linkButton__brHYs)}
        text={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__rjH0L
            )}
          >
            {"Смотреть наше видео"}
          </div>
        }
        type={"outlineRoundedWhite"}
      />

      <LinkButton
        className={classNames("__wab_instance", sty.linkButton__qkjdk)}
        text={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__wBjPs
            )}
          >
            {"Записаться на приём"}
          </div>
        }
        type={"smallLinkStyle"}
      />
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
      internalArgPropNames: PlasmicSection6__ArgProps,
      internalVariantPropNames: PlasmicSection6__VariantProps
    });

    return PlasmicSection6__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSection6";
  } else {
    func.displayName = `PlasmicSection6.${nodeName}`;
  }
  return func;
}

export const PlasmicSection6 = Object.assign(
  // Top-level PlasmicSection6 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicSection6
    internalVariantProps: PlasmicSection6__VariantProps,
    internalArgProps: PlasmicSection6__ArgProps
  }
);

export default PlasmicSection6;
/* prettier-ignore-end */