// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5PB5qCyELTTB2Fu8TWkbXw
// Component: znvNxN-p8NmP4I
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_twitter_primary_copy.module.css"; // plasmic-import: 5PB5qCyELTTB2Fu8TWkbXw/projectcss
import sty from "./PlasmicAvatar.module.css"; // plasmic-import: znvNxN-p8NmP4I/css

export type PlasmicAvatar__VariantMembers = {
  options: "hasReplies";
};

export type PlasmicAvatar__VariantsArgs = {
  options?: SingleChoiceArg<"hasReplies">;
};

type VariantPropType = keyof PlasmicAvatar__VariantsArgs;
export const PlasmicAvatar__VariantProps = new Array<VariantPropType>(
  "options"
);

export type PlasmicAvatar__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAvatar__ArgsType;
export const PlasmicAvatar__ArgProps = new Array<ArgPropType>("children");

export type PlasmicAvatar__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultAvatarProps {
  children?: React.ReactNode;
  options?: SingleChoiceArg<"hasReplies">;
  className?: string;
}

function PlasmicAvatar__RenderFunc(props: {
  variants: PlasmicAvatar__VariantsArgs;
  args: PlasmicAvatar__ArgsType;
  overrides: PlasmicAvatar__OverridesType;

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
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__mVvIf)}
            displayHeight={"49px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"49px" as const}
            src={{
              src: "/plasmic/copy_of_twitter_primary_copy/images/image2.png",
              fullWidth: 225,
              fullHeight: 223,
              aspectRatio: undefined
            }}
          />
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
  PlasmicAvatar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAvatar__VariantsArgs;
    args?: PlasmicAvatar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAvatar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAvatar__ArgsType, ReservedPropsType> &
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

    // Metadata about props expected for PlasmicAvatar
    internalVariantProps: PlasmicAvatar__VariantProps,
    internalArgProps: PlasmicAvatar__ArgProps
  }
);

export default PlasmicAvatar;
/* prettier-ignore-end */
