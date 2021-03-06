// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rRiHBMbiCNZ6Mp9qsJpkyN
// Component: PxInRGDL40eG
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: uS4ZVUpSFN1i/component
import Section from "../../Section"; // plasmic-import: cr8qTWYzmiKt/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_simple_light.module.css"; // plasmic-import: rRiHBMbiCNZ6Mp9qsJpkyN/projectcss
import * as sty from "./PlasmicPricing.module.css"; // plasmic-import: PxInRGDL40eG/css

export const PlasmicPricing__VariantProps = new Array();

export const PlasmicPricing__ArgProps = new Array();

function PlasmicPricing__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"box"}
            data-plasmic-override={overrides.box}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <Section
              className={classNames("__wab_instance", sty.section__myxZx)}
              title={"Pricing"}
            />

            <Section
              className={classNames("__wab_instance", sty.section___2J20A)}
              title={"FAQ"}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "box", "header"],
  box: ["box", "header"],
  header: ["header"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricing__ArgProps,
      internalVariantPropNames: PlasmicPricing__VariantProps
    });

    return PlasmicPricing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricing";
  } else {
    func.displayName = `PlasmicPricing.${nodeName}`;
  }
  return func;
}

export const PlasmicPricing = Object.assign(
  // Top-level PlasmicPricing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    header: makeNodeComponent("header"),
    // Metadata about props expected for PlasmicPricing
    internalVariantProps: PlasmicPricing__VariantProps,
    internalArgProps: PlasmicPricing__ArgProps
  }
);

export default PlasmicPricing;
/* prettier-ignore-end */
