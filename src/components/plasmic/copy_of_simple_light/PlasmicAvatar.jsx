// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rRiHBMbiCNZ6Mp9qsJpkyN
// Component: ARSndW9bltv7
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_simple_light.module.css"; // plasmic-import: rRiHBMbiCNZ6Mp9qsJpkyN/projectcss
import * as sty from "./PlasmicAvatar.module.css"; // plasmic-import: ARSndW9bltv7/css
import profilepicGjxug3ASVe9Ui from "./images/profilepic.png"; // plasmic-import: gjxug3aSVe9ui/picture

export const PlasmicAvatar__VariantProps = new Array();

export const PlasmicAvatar__ArgProps = new Array("pic");

function PlasmicAvatar__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicSlot
        defaultContents={
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img)}
            role={"img"}
            src={profilepicGjxug3ASVe9Ui}
          />
        }
        value={args.pic}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAvatar__ArgProps,
      internalVariantPropNames: PlasmicAvatar__VariantProps
    });

    return PlasmicAvatar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatar";
  } else {
    func.displayName = `PlasmicAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatar = Object.assign(
  // Top-level PlasmicAvatar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicAvatar
    internalVariantProps: PlasmicAvatar__VariantProps,
    internalArgProps: PlasmicAvatar__ArgProps
  }
);

export default PlasmicAvatar;
/* prettier-ignore-end */
