// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rRiHBMbiCNZ6Mp9qsJpkyN
// Component: tDSVEoAw8RE-O
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Slider1 from "../../Slider1"; // plasmic-import: 5L7SKHMUeIETo/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ds0rkJllqclQf/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_simple_light.module.css"; // plasmic-import: rRiHBMbiCNZ6Mp9qsJpkyN/projectcss
import * as sty from "./PlasmicPhotoGallery.module.css"; // plasmic-import: tDSVEoAw8RE-O/css
import TeethBlacksvgIcon from "./icons/PlasmicIcon__TeethBlacksvg"; // plasmic-import: JyY3pwK5FCsV4/icon
import gallery2Png4Ne42Kf9K0Hpl from "./images/gallery2Png.png"; // plasmic-import: 4ne42KF9k0Hpl/picture

export const PlasmicPhotoGallery__VariantProps = new Array();

export const PlasmicPhotoGallery__ArgProps = new Array();

function PlasmicPhotoGallery__RenderFunc(props) {
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
      <div className={classNames(defaultcss.all, sty.box__mEZeQ)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__i9OKe)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___09AcX
            )}
          >
            {"Фотогалерея нашей клиники"}
          </div>

          <TeethBlacksvgIcon
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
            sty.box__ocbf2
          )}
        >
          {
            'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
          }
        </div>
      </div>

      <Slider1
        className={classNames("__wab_instance", sty.slider1__pd5Vx)}
        photo1={
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img)}
            role={"img"}
            src={gallery2Png4Ne42Kf9K0Hpl}
          />
        }
      />

      {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
        <Slider1 className={classNames("__wab_instance", sty.slider1__lQpbq)} />
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg", "img"],
  svg: ["svg"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPhotoGallery__ArgProps,
      internalVariantPropNames: PlasmicPhotoGallery__VariantProps
    });

    return PlasmicPhotoGallery__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPhotoGallery";
  } else {
    func.displayName = `PlasmicPhotoGallery.${nodeName}`;
  }
  return func;
}

export const PlasmicPhotoGallery = Object.assign(
  // Top-level PlasmicPhotoGallery renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicPhotoGallery
    internalVariantProps: PlasmicPhotoGallery__VariantProps,
    internalArgProps: PlasmicPhotoGallery__ArgProps
  }
);

export default PlasmicPhotoGallery;
/* prettier-ignore-end */
