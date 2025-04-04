import React, { forwardRef } from "react";
import type { ComponentProps } from "react";
import { DEFAULT_SIZE, DEFAULT_FILL } from "../../constants";
import type { IconProps, TIconWeight } from "../../types/IconProps";
// import icons from https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Sharp
// Sharp
import EditSharp500Fill from "@material-symbols/svg-500/sharp/edit-fill.svg";
import EditSharp500 from "@material-symbols/svg-500/sharp/edit.svg";

type TVariant = "sharp";
type TWeight = Extract<TIconWeight, 500>;
type EditProps = IconProps<TVariant, TWeight> &
  Omit<ComponentProps<"svg">, "width" | "height" | "fill">;
type SVGComponent = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
>;

const Edit = forwardRef<SVGSVGElement, EditProps>(
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
          500: EditSharp500Fill,
        },
        false: {
          500: EditSharp500,
        },
      },
    };

    const SVG = variantMapper[variant][`${fill}`][weight];
    return <SVG width={size} height={size} {...props} />;
  }
);

export default Edit;
