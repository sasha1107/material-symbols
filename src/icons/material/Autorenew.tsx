import React, { forwardRef } from "react";
import type { ComponentProps } from "react";
import { DEFAULT_SIZE, DEFAULT_FILL } from "../../constants";
import type { IconProps, TIconWeight } from "../../types/IconProps";
// import icons from https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Sharp
// Sharp
import AutorenewSharp500Fill from "@material-symbols/svg-500/sharp/autorenew-fill.svg";
import AutorenewSharp500 from "@material-symbols/svg-500/sharp/autorenew.svg";

type TVariant = "sharp";
type TWeight = Extract<TIconWeight, 500>;
type AutorenewProps = IconProps<TVariant, TWeight> &
  Omit<ComponentProps<"svg">, "width" | "height" | "fill">;
type SVGComponent = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
>;

const Autorenew = forwardRef<SVGSVGElement, AutorenewProps>(
  (
    {
      variant = "sharp",
      size = DEFAULT_SIZE,
      weight = 500,
      fill = DEFAULT_FILL,
      ...props
    },
    ref
  ) => {
    const variantMapper: Record<
      TVariant,
      Record<"true" | "false", Record<TWeight, SVGComponent>>
    > = {
      sharp: {
        true: {
          500: AutorenewSharp500Fill,
        },
        false: {
          500: AutorenewSharp500,
        },
      },
    };

    const SVG = variantMapper[variant][`${fill}`][weight];
    return <SVG width={size} height={size} {...props} />;
  }
);

export default Autorenew;
