// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rRiHBMbiCNZ6Mp9qsJpkyN
// Component: T29IqgzAKopj
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ds0rkJllqclQf/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_simple_light.module.css"; // plasmic-import: rRiHBMbiCNZ6Mp9qsJpkyN/projectcss
import * as sty from "./PlasmicTopSection.module.css"; // plasmic-import: T29IqgzAKopj/css

export const PlasmicTopSection__VariantProps = new Array();

export const PlasmicTopSection__ArgProps = new Array();

function PlasmicTopSection__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

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
        className={classNames(defaultcss.all, sty.box__ncK69)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__wbWzr)}
        >
          <div className={classNames(defaultcss.all, sty.box___7CO9Y)}>
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__mgtzf
              )}
            >
              {
                "Константа Дентал\nсемейная стоматология нового поколения в Троицке"
              }
            </div>
          </div>
        </p.Stack>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__y1EvA
          )}
        >
          {"Передовые технологии. Опыт 3-х поколений."}
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTopSection__ArgProps,
      internalVariantPropNames: PlasmicTopSection__VariantProps
    });

    return PlasmicTopSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTopSection";
  } else {
    func.displayName = `PlasmicTopSection.${nodeName}`;
  }
  return func;
}

export const PlasmicTopSection = Object.assign(
  // Top-level PlasmicTopSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTopSection
    internalVariantProps: PlasmicTopSection__VariantProps,
    internalArgProps: PlasmicTopSection__ArgProps
  }
);

export default PlasmicTopSection;
/* prettier-ignore-end */
