// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bGhfLbpuPrsnLdpUo1t3d
// Component: K5KM4aUtvi
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light.module.css"; // plasmic-import: bGhfLbpuPrsnLdpUo1t3d/projectcss
import * as sty from "./PlasmicSection3.module.css"; // plasmic-import: K5KM4aUtvi/css
import StarsFiledBlacksvgIcon from "./icons/PlasmicIcon__StarsFiledBlacksvg"; // plasmic-import: 7-IuXx2F3T/icon
import Tooth4Greysvg2Icon from "./icons/PlasmicIcon__Tooth4Greysvg2"; // plasmic-import: vpNuNhTOSj/icon
import TeethBlacksvgIcon from "./icons/PlasmicIcon__TeethBlacksvg"; // plasmic-import: 9ovdEH2X9U/icon
import equipment1PngYjeNuR8Lh from "./images/equipment1Png.png"; // plasmic-import: YjeNuR8LH/picture

export const PlasmicSection3__VariantProps = new Array(
  "reverseView",
  "simpleView"
);

export const PlasmicSection3__ArgProps = new Array(
  "techImage",
  "mainTitle",
  "subTitle"
);

function PlasmicSection3__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__reverseView]: hasVariant(
          variants,
          "reverseView",
          "reverseView"
        ),

        [sty.root__simpleView]: hasVariant(variants, "simpleView", "simpleView")
      })}
    >
      {(
        hasVariant(variants, "simpleView", "simpleView")
          ? false
          : hasVariant(variants, "reverseView", "reverseView")
          ? false
          : true
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__w3Wo1, {
            [sty.box__reverseView__w3Wo1HHxpL]: hasVariant(
              variants,
              "reverseView",
              "reverseView"
            ),

            [sty.box__simpleView__w3Wo1CaysQ]: hasVariant(
              variants,
              "simpleView",
              "simpleView"
            )
          })}
        >
          <div className={classNames(defaultcss.all, sty.box__eueuT)}>
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__xs2Rg
              )}
            >
              {"Только новейшее и уникальное оборудование"}
            </div>

            <StarsFiledBlacksvgIcon
              className={classNames(defaultcss.all, sty.svg__uMvRr)}
              role={"img"}
            />
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__jZyF0
            )}
          >
            {
              "В нашей клинике мы используем высокотехнологичное оборудование, которое позволяет нам добиваться максимальной четкости при диагностический аппарат, благодаря которому наши врачи безболезненно проводят полное исследование челюстной зоны диагностике и эффективности во время лечения"
            }
          </div>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__uRFz7, {
          [sty.box__reverseView__uRFz7HHxpL]: hasVariant(
            variants,
            "reverseView",
            "reverseView"
          ),

          [sty.box__simpleView__uRFz7CaysQ]: hasVariant(
            variants,
            "simpleView",
            "simpleView"
          )
        })}
      >
        <p.PlasmicSlot
          defaultContents={
            <img
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(defaultcss.img, sty.img)}
              role={"img"}
              src={equipment1PngYjeNuR8Lh}
            />
          }
          value={args.techImage}
        />

        <p.Stack
          as={"div"}
          hasGap={
            hasVariant(variants, "reverseView", "reverseView") ? true : false
          }
          className={classNames(defaultcss.all, sty.box__xJg3C, {
            [sty.box__reverseView__xJg3CHHxpL]: hasVariant(
              variants,
              "reverseView",
              "reverseView"
            )
          })}
        >
          <p.PlasmicSlot
            defaultContents={"3D Ортопантомограф "}
            value={args.mainTitle}
            className={classNames(sty.slotMainTitle, {
              [sty.slotMainTitle__reverseView]: hasVariant(
                variants,
                "reverseView",
                "reverseView"
              )
            })}
          />

          <p.PlasmicSlot
            defaultContents={
              "Lиагностический аппарат, благодаря которому наши врачи безболезненно проводят полное исследование челюстной зоны"
            }
            value={args.subTitle}
            className={classNames(sty.slotSubTitle, {
              [sty.slotSubTitle__reverseView]: hasVariant(
                variants,
                "reverseView",
                "reverseView"
              )
            })}
          />
        </p.Stack>
      </p.Stack>

      {(hasVariant(variants, "reverseView", "reverseView") ? true : false) ? (
        <Tooth4Greysvg2Icon
          className={classNames(defaultcss.all, sty.svg__qUpec, {
            [sty.svg__reverseView__qUpechHxpL]: hasVariant(
              variants,
              "reverseView",
              "reverseView"
            )
          })}
          role={"img"}
        />
      ) : null}
      {(hasVariant(variants, "simpleView", "simpleView") ? true : false) ? (
        <TeethBlacksvgIcon
          className={classNames(defaultcss.all, sty.svg__dtjEd, {
            [sty.svg__simpleView__dtjEdCaysQ]: hasVariant(
              variants,
              "simpleView",
              "simpleView"
            )
          })}
          role={"img"}
        />
      ) : null}
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
      internalArgPropNames: PlasmicSection3__ArgProps,
      internalVariantPropNames: PlasmicSection3__VariantProps
    });

    return PlasmicSection3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSection3";
  } else {
    func.displayName = `PlasmicSection3.${nodeName}`;
  }
  return func;
}

export const PlasmicSection3 = Object.assign(
  // Top-level PlasmicSection3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicSection3
    internalVariantProps: PlasmicSection3__VariantProps,
    internalArgProps: PlasmicSection3__ArgProps
  }
);

export default PlasmicSection3;
/* prettier-ignore-end */
