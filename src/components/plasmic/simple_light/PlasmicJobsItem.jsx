// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bGhfLbpuPrsnLdpUo1t3d
// Component: 7NqkOLAQg9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light.module.css"; // plasmic-import: bGhfLbpuPrsnLdpUo1t3d/projectcss
import * as sty from "./PlasmicJobsItem.module.css"; // plasmic-import: 7NqkOLAQg9/css
import Aestetic1SvgIcon from "./icons/PlasmicIcon__Aestetic1Svg"; // plasmic-import: ELlmvJERct/icon

export const PlasmicJobsItem__VariantProps = new Array();

export const PlasmicJobsItem__ArgProps = new Array(
  "jobsItemImg",
  "mainTitle",
  "subtitle",
  "jobsItemImg2"
);

function PlasmicJobsItem__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const [isRootNotHover, triggerRootNotHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
    notHover_root: !isRootNotHover
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      data-plasmic-trigger-props={[
        triggerRootHoverProps,
        triggerRootNotHoverProps
      ]}
    >
      {(triggers.hover_root ? false : true) ? (
        <div className={classNames(defaultcss.all, sty.box__wnVd)}>
          <p.PlasmicSlot
            defaultContents={
              <Aestetic1SvgIcon
                className={classNames(defaultcss.all, sty.svg__tvazD)}
                role={"img"}
              />
            }
            value={args.jobsItemImg}
            className={classNames(sty.slotJobsItemImg)}
          />
        </div>
      ) : null}
      {(triggers.notHover_root ? false : true) ? (
        <div className={classNames(defaultcss.all, sty.box__bpjHl)}>
          <p.PlasmicSlot
            defaultContents={
              <Aestetic1SvgIcon
                className={classNames(defaultcss.all, sty.svg__rYr38)}
                role={"img"}
              />
            }
            value={args.jobsItemImg2}
            className={classNames(sty.slotJobsItemImg2)}
          />
        </div>
      ) : null}

      <div className={classNames(defaultcss.all, sty.box__ztkja)}>
        <p.PlasmicSlot
          defaultContents={"Лечение зубов"}
          value={args.mainTitle}
          className={classNames(sty.slotMainTitle)}
        />
      </div>

      <div className={classNames(defaultcss.all, sty.box__gBx3V)}>
        <p.PlasmicSlot
          defaultContents={"лечение кариеса, каналов"}
          value={args.subtitle}
          className={classNames(sty.slotSubtitle)}
        />
      </div>
    </p.Stack>
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
      internalArgPropNames: PlasmicJobsItem__ArgProps,
      internalVariantPropNames: PlasmicJobsItem__VariantProps
    });

    return PlasmicJobsItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicJobsItem";
  } else {
    func.displayName = `PlasmicJobsItem.${nodeName}`;
  }
  return func;
}

export const PlasmicJobsItem = Object.assign(
  // Top-level PlasmicJobsItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicJobsItem
    internalVariantProps: PlasmicJobsItem__VariantProps,
    internalArgProps: PlasmicJobsItem__ArgProps
  }
);

export default PlasmicJobsItem;
/* prettier-ignore-end */