// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5PB5qCyELTTB2Fu8TWkbXw
// Component: KavZmR2WSu_
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Tweet from "../../Tweet"; // plasmic-import: xdy9x6J9RGV7j/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_twitter_primary_copy.module.css"; // plasmic-import: 5PB5qCyELTTB2Fu8TWkbXw/projectcss
import sty from "./PlasmicLista.module.css"; // plasmic-import: KavZmR2WSu_/css

export type PlasmicLista__VariantMembers = {};

export type PlasmicLista__VariantsArgs = {};
type VariantPropType = keyof PlasmicLista__VariantsArgs;
export const PlasmicLista__VariantProps = new Array<VariantPropType>();

export type PlasmicLista__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLista__ArgsType;
export const PlasmicLista__ArgProps = new Array<ArgPropType>("children");

export type PlasmicLista__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultListaProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicLista__RenderFunc(props: {
  variants: PlasmicLista__VariantsArgs;
  args: PlasmicLista__ArgsType;
  overrides: PlasmicLista__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <Tweet className={classNames("__wab_instance", sty.tweet__fMGdD)}>
              {"hhiuuiuiuiuu"}
            </Tweet>

            <Tweet
              className={classNames("__wab_instance", sty.tweet__clRi)}
              name={"Cassidy Williams"}
              photo={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__gw7KZ)}
                  displayHeight={"49px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"49px" as const}
                  src={{
                    src: "/plasmic/copy_of_twitter_primary_copy/images/image4.png",
                    fullWidth: 400,
                    fullHeight: 400,
                    aspectRatio: undefined
                  }}
                />
              }
              username={"@cassidoo"}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zfMl0)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bbLhg
                  )}
                >
                  {"A new issue is coming your way, check your inbox!!"}
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___2Apdr)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___8CZ8F)}
                    displayHeight={"140px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"140px" as const}
                    src={{
                      src: "/plasmic/copy_of_twitter_primary_copy/images/image5.png",
                      fullWidth: 240,
                      fullHeight: 240,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox___1UR68)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__j8JKr
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{""}</React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"rendezvous with cassidoo"}
                        </span>
                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hf2Id
                      )}
                    >
                      {"probably the best newsletter you'll ever read"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ztbEn
                      )}
                    >
                      {"cassidoo.co"}
                    </div>
                  </div>
                </p.Stack>
              </p.Stack>
            </Tweet>

            <Tweet
              className={classNames("__wab_instance", sty.tweet__zAf23)}
              name={"Max Stoiber"}
              photo={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__rsKnY)}
                  displayHeight={"49px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"49px" as const}
                  src={{
                    src: "/plasmic/copy_of_twitter_primary_copy/images/image7.png",
                    fullWidth: 400,
                    fullHeight: 400,
                    aspectRatio: undefined
                  }}
                />
              }
              username={"@mxstbr"}
            >
              {
                "Tell me you're a React developer without telling me you're a React developer."
              }
            </Tweet>

            <Tweet
              className={classNames("__wab_instance", sty.tweet___2IDtI)}
            />

            <Tweet
              className={classNames("__wab_instance", sty.tweet__jTwcV)}
              name={"Cassidy Williams"}
              photo={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__kwYh1)}
                  displayHeight={"49px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"49px" as const}
                  src={{
                    src: "/plasmic/copy_of_twitter_primary_copy/images/image4.png",
                    fullWidth: 400,
                    fullHeight: 400,
                    aspectRatio: undefined
                  }}
                />
              }
              username={"@cassidoo"}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hAsRk)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__phCoK
                  )}
                >
                  {"A new issue is coming your way, check your inbox!!"}
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__gig6S)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__pibXx)}
                    displayHeight={"140px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"140px" as const}
                    src={{
                      src: "/plasmic/copy_of_twitter_primary_copy/images/image5.png",
                      fullWidth: 240,
                      fullHeight: 240,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__nvHfp)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fzkTa
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{""}</React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"rendezvous with cassidoo"}
                        </span>
                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kxOHe
                      )}
                    >
                      {"probably the best newsletter you'll ever read"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cu1Le
                      )}
                    >
                      {"cassidoo.co"}
                    </div>
                  </div>
                </p.Stack>
              </p.Stack>
            </Tweet>

            <Tweet
              className={classNames("__wab_instance", sty.tweet__dq8T)}
              name={"Max Stoiber"}
              photo={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__yQl6M)}
                  displayHeight={"49px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"49px" as const}
                  src={{
                    src: "/plasmic/copy_of_twitter_primary_copy/images/image7.png",
                    fullWidth: 400,
                    fullHeight: 400,
                    aspectRatio: undefined
                  }}
                />
              }
              username={"@mxstbr"}
            >
              {
                "Tell me you're a React developer without telling me you're a React developer."
              }
            </Tweet>
          </React.Fragment>
        ),
        value: args.children
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLista__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLista__VariantsArgs;
    args?: PlasmicLista__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLista__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLista__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLista__ArgProps,
      internalVariantPropNames: PlasmicLista__VariantProps
    });

    return PlasmicLista__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLista";
  } else {
    func.displayName = `PlasmicLista.${nodeName}`;
  }
  return func;
}

export const PlasmicLista = Object.assign(
  // Top-level PlasmicLista renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLista
    internalVariantProps: PlasmicLista__VariantProps,
    internalArgProps: PlasmicLista__ArgProps
  }
);

export default PlasmicLista;
/* prettier-ignore-end */
