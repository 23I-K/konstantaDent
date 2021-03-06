// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rRiHBMbiCNZ6Mp9qsJpkyN
// Component: 9Pt8GATgG36j
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: uS4ZVUpSFN1i/component
import TopSection from "../../TopSection"; // plasmic-import: T29IqgzAKopj/component
import Section from "../../Section"; // plasmic-import: cr8qTWYzmiKt/component
import PhotoGallery from "../../PhotoGallery"; // plasmic-import: tDSVEoAw8RE-O/component
import Section2 from "../../Section2"; // plasmic-import: U2TqGD1uPogLe/component
import Section3 from "../../Section3"; // plasmic-import: tf5M08sLxb-jZ/component
import Section4 from "../../Section4"; // plasmic-import: mMDkq_hl5tD3_/component
import Section5 from "../../Section5"; // plasmic-import: tzq71K8qtXHOj/component
import Section6 from "../../Section6"; // plasmic-import: -3OMKxRuXnwbo/component
import Section8 from "../../Section8"; // plasmic-import: qe2_ntIZdwjxj/component
import Footer from "../../Footer"; // plasmic-import: mwKnfShdBNNjS/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ds0rkJllqclQf/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_simple_light.module.css"; // plasmic-import: rRiHBMbiCNZ6Mp9qsJpkyN/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: 9Pt8GATgG36j/css
import equipment1PngJyMe45Dtw75J9 from "./images/equipment1Png.png"; // plasmic-import: jyME45dtw75J9/picture
import equipmentpngR3TlfYzFc from "./images/equipmentpng.png"; // plasmic-import: R3TLFYzFc/picture

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

function PlasmicHome__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

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
          <div className={classNames(defaultcss.all, sty.box__bskMy)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <TopSection
              data-plasmic-name={"topSection"}
              data-plasmic-override={overrides.topSection}
              className={classNames("__wab_instance", sty.topSection)}
            />

            <Section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames("__wab_instance", sty.section)}
              subtitleMain={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__y7S
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Гуманенко Татьяна Владимировна"
                    : hasVariant(globalVariants, "screen", "smallDesktop")
                    ? "Гуманенко Татьяна Владимировна"
                    : "Гуманенко Татьяна Владимировна"}
                </div>
              }
              title={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___75NLw
                  )}
                >
                  {"Меня зовут"}
                </div>
              }
            />

            <PhotoGallery
              data-plasmic-name={"photoGallery"}
              data-plasmic-override={overrides.photoGallery}
              className={classNames("__wab_instance", sty.photoGallery)}
            />

            <Section2
              data-plasmic-name={"section2"}
              data-plasmic-override={overrides.section2}
              className={classNames("__wab_instance", sty.section2)}
            />

            <Section3
              className={classNames("__wab_instance", sty.section3__eoasy)}
              mainTitle={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__nl50Y
                  )}
                >
                  {"3D Ортопантомограф "}
                </div>
              }
              subTitle={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__fbRiD
                  )}
                >
                  {
                    "Lиагностический аппарат, благодаря которому наши врачи безболезненно проводят полное исследование челюстной зоны"
                  }
                </div>
              }
              techImage={
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__ix4Az)}
                  role={"img"}
                  src={equipment1PngJyMe45Dtw75J9}
                />
              }
            />

            {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
              <Section3
                className={classNames("__wab_instance", sty.section3__bjqeG)}
                mainTitle={"CEREC"}
                reverseView={"reverseView"}
                subTitle={
                  "Новейший аппарат для быстрого и качественного восстановления и реставрации зубов, который используют в лучших клиниках по всему миру"
                }
              />
            ) : null}
            {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
              <Section3
                className={classNames("__wab_instance", sty.section3__oeLrq)}
                mainTitle={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__z2Ooh
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "smallDesktop")
                      ? "Многофункциональные и новые стоматологические установки"
                      : "Многофункциональные\nи новые стоматологические\nустановки"}
                  </div>
                }
                simpleView={"simpleView"}
                subTitle={
                  "Многофункциональные и новые стоматологические установки"
                }
                techImage={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__cpz0A)}
                    role={"img"}
                    src={
                      hasVariant(globalVariants, "screen", "smallDesktop")
                        ? equipment1PngJyMe45Dtw75J9
                        : equipmentpngR3TlfYzFc
                    }
                  />
                }
              />
            ) : null}

            <Section4
              data-plasmic-name={"section4"}
              data-plasmic-override={overrides.section4}
              className={classNames("__wab_instance", sty.section4)}
            />

            <Section5
              data-plasmic-name={"section5"}
              data-plasmic-override={overrides.section5}
              className={classNames("__wab_instance", sty.section5)}
            />

            <Section6
              data-plasmic-name={"section6"}
              data-plasmic-override={overrides.section6}
              className={classNames("__wab_instance", sty.section6)}
            />

            <Section8
              data-plasmic-name={"section8"}
              data-plasmic-override={overrides.section8}
              className={classNames("__wab_instance", sty.section8)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "topSection",
    "section",
    "photoGallery",
    "section2",
    "section4",
    "section5",
    "section6",
    "section8",
    "footer"
  ],

  header: ["header"],
  topSection: ["topSection"],
  section: ["section"],
  photoGallery: ["photoGallery"],
  section2: ["section2"],
  section4: ["section4"],
  section5: ["section5"],
  section6: ["section6"],
  section8: ["section8"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    section: makeNodeComponent("section"),
    photoGallery: makeNodeComponent("photoGallery"),
    section2: makeNodeComponent("section2"),
    section4: makeNodeComponent("section4"),
    section5: makeNodeComponent("section5"),
    section6: makeNodeComponent("section6"),
    section8: makeNodeComponent("section8"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
