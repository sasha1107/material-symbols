import React, { forwardRef } from "react";
import type { ComponentProps } from "react";
import { DEFAULT_SIZE, DEFAULT_FILL } from "../../constants";
import type { IconProps, TIconWeight } from "../../types/IconProps";
// import icons from https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Sharp
// Sharp
import TimerSharp500Fill from "@material-symbols/svg-500/sharp/timer-fill.svg";
import TimerSharp500 from "@material-symbols/svg-500/sharp/timer.svg";

type TVariant = "sharp";
type TWeight = Extract<TIconWeight, 500>;
type TimerProps = IconProps<TVariant, TWeight> &
  Omit<ComponentProps<"svg">, "width" | "height" | "fill">;
type SVGComponent = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
>;

const Timer = forwardRef<SVGSVGElement, TimerProps>(
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
          500: TimerSharp500Fill,
        },
        false: {
          500: TimerSharp500,
        },
      },
    };

    const SVG = variantMapper[variant][`${fill}`][weight];
    return <SVG width={size} height={size} {...props} />;
  }
);

export default Timer;
