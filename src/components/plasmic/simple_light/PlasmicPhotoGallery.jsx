// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bGhfLbpuPrsnLdpUo1t3d
// Component: gQd9sIYKcJ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Slider1 from "../../Slider1"; // plasmic-import: aSjR2lLD1O/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light.module.css"; // plasmic-import: bGhfLbpuPrsnLdpUo1t3d/projectcss
import * as sty from "./PlasmicPhotoGallery.module.css"; // plasmic-import: gQd9sIYKcJ/css
import TeethBlacksvgIcon from "./icons/PlasmicIcon__TeethBlacksvg"; // plasmic-import: 9ovdEH2X9U/icon

export const PlasmicPhotoGallery__VariantProps = new Array();

export const PlasmicPhotoGallery__ArgProps = new Array();

function PlasmicPhotoGallery__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__f1Bu)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__ibS7O)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__nAhB
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
            sty.box__vs8Il
          )}
        >
          {
            'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
          }
        </div>
      </div>

      <Slider1 className={classNames("__wab_instance", sty.slider1__pbkmq)} />

      <Slider1 className={classNames("__wab_instance", sty.slider1__iuJvt)} />
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
    // Metadata about props expected for PlasmicPhotoGallery
    internalVariantProps: PlasmicPhotoGallery__VariantProps,
    internalArgProps: PlasmicPhotoGallery__ArgProps
  }
);

export default PlasmicPhotoGallery;
/* prettier-ignore-end */
