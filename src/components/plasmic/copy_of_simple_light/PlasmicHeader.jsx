// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rRiHBMbiCNZ6Mp9qsJpkyN
// Component: uS4ZVUpSFN1i
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: ARSndW9bltv7/component
import MenuItems from "../../MenuItems"; // plasmic-import: w82YywdoVWCd/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ds0rkJllqclQf/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_simple_light.module.css"; // plasmic-import: rRiHBMbiCNZ6Mp9qsJpkyN/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: uS4ZVUpSFN1i/css
import KonstantaDental1WhitesvgIcon from "./icons/PlasmicIcon__KonstantaDental1Whitesvg"; // plasmic-import: -vI2i1UQ-sYSr/icon

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={
        hasVariant(globalVariants, "screen", "smallDesktop") ? true : false
      }
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <Avatar
        data-plasmic-name={"avatar"}
        data-plasmic-override={overrides.avatar}
        className={classNames("__wab_instance", sty.avatar)}
        pic={
          <KonstantaDental1WhitesvgIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        }
      />

      {(
        hasVariant(globalVariants, "screen", "mobile")
          ? false
          : hasVariant(globalVariants, "screen", "smallDesktop")
          ? false
          : true
      ) ? (
        <MenuItems
          data-plasmic-name={"menuItems"}
          data-plasmic-override={overrides.menuItems}
          className={classNames("__wab_instance", sty.menuItems)}
        />
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobile")
          ? false
          : hasVariant(globalVariants, "screen", "smallDesktop")
          ? true
          : false
      ) ? (
        <a
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.link
          )}
          href={"tel:+79771054555"}
        >
          {"+7(977) 105 45-55"}
        </a>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "avatar", "svg", "menuItems", "link"],
  avatar: ["avatar", "svg"],
  svg: ["svg"],
  menuItems: ["menuItems"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    svg: makeNodeComponent("svg"),
    menuItems: makeNodeComponent("menuItems"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
